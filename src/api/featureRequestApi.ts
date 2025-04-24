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
  }),
  overrideExisting: false,
});

export const { useSendFeatureRequestMutation, useGetFeatureRequestsQuery } =
  featureRequestApi;
