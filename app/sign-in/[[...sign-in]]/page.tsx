"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

export default function SignInPage() {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="flex-1 items-center justify-center h-full flex"
        >
          <div className="flex flex-col w-full max-w-sm items-center justify-center gap-6">
            <div className="flex flex-col gap-1.5 text-center">
              <h1 className="font-semibold tracking-tight text-xl">
                Skill Showcase
              </h1>
              <p className="text-sm text-muted-foreground">
                Login or signup with your Google account
              </p>
            </div>
            <Clerk.Connection
              name="google"
              className="flex items-center gap-x-3 justify-center font-medium border ring-1 py-3 w-full rounded-md text-foreground cursor-pointer"
            >
              <Clerk.Icon className="size-6" />
              Login with Google
            </Clerk.Connection>
          </div>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}
