import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface RegisterDto {
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  phone: string;
  telegram?: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  lastName: string;
  firstName: string;
  middleName: string;
}

export interface User {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  phone: string;
  telegram?: string;
  accessKey?: string;
  isAccessKey: boolean;
  isAdmin: boolean;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => "/users",
    }),

    revokeAccessKey: builder.mutation<any, number>({
      query: (id) => ({
        url: `/users/${id}/revoke-access-key`,
        method: "PATCH",
      }),
    }),

    makeAdmin: builder.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `/users/${id}/make-admin`,
        method: "PATCH",
      }),
    }),

    registerUser: builder.mutation<RegisterResponse, RegisterDto>({
      query: (body) => ({
        url: "/users/register",
        method: "POST",
        body,
      }),
    }),

    login: builder.mutation<
      {
        token: string;
        lastName: string;
        firstName: string;
        middleName: string;
        isAccessKey: boolean;
      },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),

    revokeAdmin: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}/revoke-admin`,
        method: "PATCH",
      }),
    }),

    updateProgress: builder.mutation<
      void,
      {
        testKey: string;
        attempts: number;
        result: {
          attempts: number;
          correctAnswers: number;
          percentage: number;
          grade: number;
          selectedAnswers: Record<number, number[]>;
        };
      }
    >({
      query: (body) => {
        const { testKey, attempts, result } = body;

        return {
          url: `/progress`,
          method: "POST",
          body: {
            attempts: {
              [testKey]: attempts,
            },
            history: {
              [testKey]: [result],
            },
          },
        };
      },
    }),

    assignAccessKey: builder.mutation<
      { message: string; userId: number; accessKey: string },
      number
    >({
      query: (id) => ({
        url: `/users/${id}/assign-access-key`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useGetAllUsersQuery,
  useAssignAccessKeyMutation,
  useRevokeAccessKeyMutation,
  useMakeAdminMutation,
  useRevokeAdminMutation,
  useUpdateProgressMutation,
} = api;
