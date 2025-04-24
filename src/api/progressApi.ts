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

export const progressApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProgress: builder.query<Progress, void>({
      query: () => `/progress`,
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
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserProgressQuery, useUpdateProgressMutation } =
  progressApi;
