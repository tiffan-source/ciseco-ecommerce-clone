import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // signup an user
    signup: builder.mutation({
      query: (data) => ({
        url: "api/user/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useSignupMutation } = authApi;
