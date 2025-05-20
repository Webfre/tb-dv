import { baseApi } from "./baseApi";

export interface RegisterDto {
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  phone: string;
  telegram?: string;
  password: string;
}

export interface EnrollCourseDto {
  title: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface EnrollCourseResponse {
  message: string;
}

export interface RegisterResponse {
  token: string;
  lastName: string;
  firstName: string;
  middleName: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  lastName: string;
  firstName: string;
  middleName: string;
  isAccessKey: boolean;
}

export interface ResetPasswordDto {
  email: string;
  newPassword: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, RegisterDto>({
      query: (body) => ({
        url: "/users/register",
        method: "POST",
        body,
      }),
    }),

    login: builder.mutation<LoginResponse, LoginDto>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),

    resetPassword: builder.mutation<void, ResetPasswordDto>({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "POST",
        body,
      }),
    }),

    enrollCourse: builder.mutation<EnrollCourseResponse, EnrollCourseDto>({
      query: (body) => ({
        url: "/telegram/enroll-course",
        method: "POST",
        body,
      }),
    }),
  }),

  overrideExisting: false,
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useResetPasswordMutation,
  useEnrollCourseMutation,
} = authApi;
