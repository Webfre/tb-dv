import { baseApi } from "./baseApi";

export interface TestAttempt {
  attempts: number;
  correctAnswers: number;
  percentage: number;
  grade: number;
  selectedAnswers: Record<string, number[]>;
}

export interface TaskTopic {
  id: string;
  resolved: boolean;
  moduleId: string;
  title: string;
}

export interface CourseProgress {
  attempts: Record<string, number>;
  history: Record<string, TestAttempt[]>;
}

export interface PracticalProgress {
  taskTopics: TaskTopic[];
}

export interface Progress {
  id: number;
  courses: Record<string, CourseProgress>;
  practical: Record<string, PracticalProgress>;
  solvedTasks: {
    id: string;
    module: string;
    solved: boolean;
  }[];
}

export interface AccessCourseUser {
  id: number; // id курса
  isAccess: boolean; // доступ к курсу
}

export interface User {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  phone: string;
  telegram?: string;
  isAdmin: boolean;
  accessCourse: AccessCourseUser[];
}

export interface UserAdmin {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  phone: string;
  telegram?: string;
  accessCourse: AccessCourseUser[]; // какие курсы куплены и доступны
  isAdmin: boolean;
  progress?: Progress;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => "/users",
    }),

    checkCourseAccess: builder.query<
      {
        accessCourse: AccessCourseUser[];
      },
      void
    >({
      query: () => "/users/check-access",
    }),

    getMyProfile: builder.query<User, void>({
      query: () => "/users/me",
    }),

    assignAccessKey: builder.mutation<
      any,
      { userId: number; idCourse: number }
    >({
      query: ({ userId, idCourse }) => ({
        url: `/users/${userId}/assign-access-key`,
        method: "PATCH",
        body: { idCourse },
      }),
    }),

    revokeAccessKey: builder.mutation<
      any,
      { userId: number; idCourse: number }
    >({
      query: ({ userId, idCourse }) => ({
        url: `/users/${userId}/revoke-access-key`,
        method: "PATCH",
        body: { idCourse },
      }),
    }),

    makeAdmin: builder.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `/users/${id}/make-admin`,
        method: "PATCH",
      }),
    }),

    getUserTaskTopics: builder.query<
      TaskTopic[],
      { userId: number; courseId: string }
    >({
      query: ({ userId, courseId }) =>
        `/progress/admin/task-topics/${userId}/${courseId}`,
    }),

    updateUserTaskTopic: builder.mutation<
      TaskTopic[],
      { userId: number; taskId: string; resolved: boolean }
    >({
      query: ({ userId, taskId, resolved }) => ({
        url: `/progress/admin/task-topics/${userId}`,
        method: "POST",
        body: { taskId, resolved },
      }),
    }),

    checkToken: builder.query<{ valid: boolean }, void>({
      query: () => "/users/check-token",
    }),

    getUserInfoForAdmin: builder.query<UserAdmin, number>({
      query: (userId) => `/users/admin/${userId}`,
    }),

    revokeAdmin: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}/revoke-admin`,
        method: "PATCH",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllUsersQuery,
  useCheckCourseAccessQuery,
  useAssignAccessKeyMutation,
  useRevokeAccessKeyMutation,
  useMakeAdminMutation,
  useRevokeAdminMutation,
  useGetMyProfileQuery,
  useGetUserTaskTopicsQuery,
  useUpdateUserTaskTopicMutation,
  useCheckTokenQuery,
  useGetUserInfoForAdminQuery,
} = userApi;
