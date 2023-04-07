import apiSlice from "../api/apiSlice";
import { setUser } from "./authSlice";

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

    // signin an user
    signin: builder.mutation({
      query: (data) => ({
        url: "api/user/sign-in",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const userData = await queryFulfilled;

          if (Object.keys(userData.data).length > 0) {
            localStorage.setItem("accessToken", userData.data.accessToken);
            dispatch(setUser(userData.data));
          } else {
            console.log(userData);
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // forgot password
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "api/user/forgot-password",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useForgotPasswordMutation,
} = authApi;
