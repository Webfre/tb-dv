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

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
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
  }),
});

export const { useRegisterUserMutation, useLoginMutation } = api;
