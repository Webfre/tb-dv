import { baseApi } from "./baseApi";

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

export interface TaskTopic {
  id: string;
  resolved: boolean;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => "/users",
    }),

    checkCourseAccess: builder.query<{ hasAccess: boolean }, void>({
      query: () => "/users/check-access",
    }),

    getMyProfile: builder.query<User, void>({
      query: () => "/users/me",
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

    getUserTaskTopics: builder.query<TaskTopic[], number>({
      query: (userId) => `/progress/admin/task-topics/${userId}`,
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
} = userApi;
