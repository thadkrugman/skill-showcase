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
              <h1 className="font-semibold tracking-tight text-2xl">
                Skill Showcase
              </h1>
              <p className="text-sm text-muted-foreground">
                Login or signup with your Google account
              </p>
            </div>
            <Clerk.Connection
              name="google"
              className="w-full flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-4"
            >
              <Clerk.Icon className="size-5" />
              Login with Google
            </Clerk.Connection>
          </div>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}
