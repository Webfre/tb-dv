import { baseApi } from "./baseApi";

export interface Progress {
  attempts: Record<string, number>;
  history: Record<string, any[]>;
}

export interface UpdateProgressDto {
  testKey: string;
  attempts: number;
  fullHistory: any[];
  result: {
    attempts: number;
    correctAnswers: number;
    percentage: number;
    grade: number;
    selectedAnswers: Record<number, number[]>;
  };
}

export interface ToggleSolvedTaskDto {
  id: string;
  module: string;
  solved: boolean;
}

export const progressApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProgress: builder.query<Progress, void>({
      query: () => `/progress`,
      providesTags: ["Progress"],
    }),

    getSolvedTasks: builder.query<ToggleSolvedTaskDto[], void>({
      query: () => `/progress/solved`,
      providesTags: ["SolvedTasks"],
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
} = progressApi;
