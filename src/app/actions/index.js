"use server";

import { signIn, signOut } from "@/auth";

export const handleGoogleLogin = async (fromData) => {
  const action = fromData.get("action");

  await signIn(action, {
    redirectTo: "/",
    errorRedirectTo: "/login",
  });

  console.log(action);
};

export async function handleSignOut() {
  await signOut({ redirectTo: "/" });
}
