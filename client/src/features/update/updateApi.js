import apiSlice from "../api/apiSlice";

const updateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserAvatar: builder.mutation({
      query: ({ public_id, data }) => ({
        url: `api/user/avatar?public_id=${public_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Photo"],
    }),
  }),
});

export const { useUpdateUserAvatarMutation } = updateApi;
