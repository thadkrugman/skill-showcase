"use client";

import Container from "@/components/shared/Container";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

export default function SignInPage() {
  return (
    <Container flex1={true}>
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="flex h-full flex-1 items-center justify-center"
        >
          <div className="flex w-full max-w-sm flex-col items-center justify-center gap-6">
            <div className="flex flex-col gap-1.5 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Skill Showcase
              </h1>
              <p className="text-muted-foreground text-sm">
                Login or signup with your Google account
              </p>
            </div>
            <Clerk.Connection
              name="google"
              className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-center gap-2 rounded-md border px-4 py-4 text-base font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            >
              <Clerk.Icon className="size-5" />
              Login with Google
            </Clerk.Connection>
          </div>
        </SignIn.Step>
      </SignIn.Root>
    </Container>
  );
}
