import { baseApi } from "./baseApi";

export interface Progress {
  attempts: Record<string, number>;
  history: Record<string, any[]>;
  taskTopics: Array<{
    id: string;
    resolved: boolean;
    moduleId: string;
    title: string;
  }>;
}

export interface UpdateProgressDto {
  courseId: string;
  attempts: Record<string, number>;
  history: Record<string, any[]>;
}

export interface ToggleSolvedTaskDto {
  id: string;
  module: string;
  solved: boolean;
}

export interface UpdateTaskTopicDto {
  taskId: string;
  resolved: boolean;
  moduleId: string;
  title: string;
}

export const progressApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProgress: builder.query<Progress, { courseId: string }>({
      query: ({ courseId }) => `/progress?courseId=${courseId}`,
      providesTags: ["Progress"],
    }),

    getSolvedTasks: builder.query<ToggleSolvedTaskDto[], void>({
      query: () => `/progress/solved`,
      providesTags: ["SolvedTasks"],
    }),

    updateTaskTopic: builder.mutation<
      {
        taskTopics: Array<{
          id: string;
          resolved: boolean;
          moduleId: string;
          title: string;
        }>;
      },
      { userId: number; courseId: number; data: UpdateTaskTopicDto }
    >({
      query: ({ userId, courseId, data }) => ({
        url: `/progress/admin/task-topics/${userId}/${courseId}`,
        method: "POST",
        body: data,
      }),
    }),

    toggleSolvedTask: builder.mutation<
      { solvedTasks: ToggleSolvedTaskDto[] },
      ToggleSolvedTaskDto
    >({
      query: (body) => ({
        url: `/progress/solved`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["SolvedTasks"],
    }),

    updateProgress: builder.mutation<void, UpdateProgressDto>({
      query: ({ courseId, attempts, history }) => ({
        url: `/progress`,
        method: "POST",
        body: {
          courseId,
          attempts,
          history,
        },
      }),
      invalidatesTags: ["Progress"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserProgressQuery,
  useUpdateProgressMutation,
  useToggleSolvedTaskMutation,
  useGetSolvedTasksQuery,
  useUpdateTaskTopicMutation,
} = progressApi;
