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

export interface Progress {
  attempts: Record<string, number>;
  history: Record<string, any[]>;
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

    getUserProgress: builder.query<Progress, void>({
      query: () => `/progress`,
    }),

    revokeAccessKey: builder.mutation<any, number>({
      query: (id) => ({
        url: `/users/${id}/revoke-access-key`,
        method: "PATCH",
      }),
    }),

    sendFeatureRequest: builder.mutation<
      void,
      { category: string; message: string }
    >({
      query: (body) => ({
        url: "/feature-requests",
        method: "POST",
        body,
      }),
    }),

    getFeatureRequests: builder.query<
      { id: number; category: string; message: string; createdAt: string }[],
      void
    >({
      query: () => "/feature-requests",
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
        fullHistory: any[];
      }
    >({
      query: ({ testKey, attempts, fullHistory }) => ({
        url: `/progress`,
        method: "POST",
        body: {
          attempts: {
            [testKey]: attempts,
          },
          history: {
            [testKey]: fullHistory,
          },
        },
      }),
    }),

    resetPassword: builder.mutation<
      void,
      { email: string; newPassword: string }
    >({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "POST",
        body,
      }),
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
  useGetUserProgressQuery,
  useSendFeatureRequestMutation,
  useGetFeatureRequestsQuery,
  useResetPasswordMutation,
} = api;
