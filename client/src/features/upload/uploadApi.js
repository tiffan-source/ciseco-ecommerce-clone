import apiSlice from "../api/apiSlice";
import { setUpload } from "./uploadSlice";

const uploadApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadUserAvatar: builder.mutation({
      query: (data) => ({
        url: `api/user/avatar`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Photo"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const avatarData = await queryFulfilled;
          avatarData.data.acknowledgement
            ? dispatch(
                setUpload({
                  url: avatarData.data.data.path,
                  public_id: avatarData.data.data.filename,
                })
              )
            : console.log(avatarData);
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useUploadUserAvatarMutation } = uploadApi;
