import { refreshAccessToken, signInAction } from "@/lib/actions";
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { RefreshTokenResponse } from "./types";

async function refreshTokenHandler(
  refreshToken: string,
  token: JWT
): Promise<JWT> {
  try {
    const response = await refreshAccessToken(refreshToken);
    if (response?.status === "success") {
      console.log(token);
      console.log(response.data);
      const data = response.data as RefreshTokenResponse;
      return {
        ...token,
        tokenInfo: {
          accessToken: data.newAccessToken,
          accessTokenExpiresIn: data.newAccessTokenExpiresIn,
          refreshToken: data.newRefreshToken,
          refreshTokenExpiresIn: data.newRefreshTokenExpiresIn,
        },
      };
    }
    throw new Error("Failed to refresh token");
  } catch (error) {
    console.error("Error refreshing token:", error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) return null;
        const response = await signInAction({ email, password });
        console.log(response?.data);
        const user = response?.data as User;
        return user as User;
      },
    }),
  ],
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      const expiresIn = new Date(
        token.tokenInfo.accessTokenExpiresIn
      ).getTime();
      // console.log(new Date(token.tokenInfo.accessTokenExpiresIn));
      // console.log(new Date());
      const currentTime = new Date().getTime();
      if (currentTime < expiresIn) return token;
      return await refreshTokenHandler(
        token.tokenInfo.refreshToken as string,
        token
      );
    },

    async session({ token, session }) {
      session.user = token.user;
      session.tokenInfo = token.tokenInfo;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
