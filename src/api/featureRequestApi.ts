import { baseApi } from "./baseApi";

export interface FeatureRequest {
  id: number;
  category: string;
  message: string;
  createdAt: string;
}

export interface SendFeatureRequestDto {
  category: string;
  message: string;
}

export interface Review {
  id: string;
  text: string;
  emoji: string;
  color: string;
  positionX: number;
  positionY: number;
  rotation: number;
  userFirstName: string;
  userId: number;
}

export interface CreateReviewDto {
  text: string;
  emoji: string;
  color: string;
  positionX: number;
  positionY: number;
  rotation: number;
}

export const featureRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendFeatureRequest: builder.mutation<void, SendFeatureRequestDto>({
      query: (body) => ({
        url: "/feature-requests",
        method: "POST",
        body,
      }),
    }),

    getFeatureRequests: builder.query<FeatureRequest[], void>({
      query: () => "/feature-requests",
    }),

    getReviews: builder.query<Review[], void>({
      query: () => "/reviews",
    }),

    updateReviewPosition: builder.mutation<
      void,
      { id: string; positionX: number; positionY: number }
    >({
      query: ({ id, positionX, positionY }) => ({
        url: `/reviews/${id}`,
        method: "PATCH",
        body: { positionX, positionY },
      }),
    }),

    createReview: builder.mutation<Review, CreateReviewDto>({
      query: (body) => ({
        url: "/reviews",
        method: "POST",
        body,
      }),
    }),

    deleteReview: builder.mutation<void, string>({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSendFeatureRequestMutation,
  useGetFeatureRequestsQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewPositionMutation,
  useDeleteReviewMutation,
} = featureRequestApi;
