"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  AlertCircleIcon,
  ArrowRightIcon,
  LockIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { toast } from "sonner";

import { logInAction } from "@/actions/auth/log-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputPassword } from "@/components/input-password";
import { InputWithAdornments } from "@/components/input-with-adornments";
import { APP_ROUTES } from "@/constants/routes";
import { cn, safeToast } from "@/lib/utils";
import {
  type PassThroughLogInSchema,
  passThroughLogInSchema,
} from "@/schema/auth/log-in-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { z } from "zod";

export function LoginCard(
  props: React.HTMLAttributes<HTMLDivElement>,
): React.JSX.Element {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = React.useState<string>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [unverifiedEmail, setUnverifiedEmail] = React.useState<
    string | undefined
  >();

  const form = useForm<z.infer<typeof passThroughLogInSchema>>({
    resolver: zodResolver(passThroughLogInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const canSubmit = !form.formState.isSubmitting;

  const login = useAction(logInAction, {
    onSuccess: () => {
      safeToast(() => toast.success("Logged in successfully"));
      router.push(APP_ROUTES.Dashboard.Index);
    },
    onError: () => {
      safeToast(() => toast.error("Couldn't log in"));
    },
  });

  const onSubmit = async (values: PassThroughLogInSchema): Promise<void> => {
    login.execute(values);
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>
          Enter your details below to sign into your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <InputWithAdornments
                      {...field}
                      type="email"
                      maxLength={255}
                      autoCapitalize="none"
                      autoComplete="username"
                      startAdornment={<MailIcon className="size-4 shrink-0" />}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <div className="flex flex-row items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href={APP_ROUTES.Auth.ForgotPassword}
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <FormControl>
                    <InputPassword
                      {...field}
                      maxLength={72}
                      autoCapitalize="none"
                      autoComplete="current-password"
                      startAdornment={<LockIcon className="size-4 shrink-0" />}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {errorMessage && (
              <Alert variant="destructive">
                <div className="flex flex-row items-center gap-2">
                  <AlertCircleIcon className="size-[18px] shrink-0" />
                  <AlertDescription>
                    {errorMessage}
                    {unverifiedEmail && (
                      <Link
                        className={cn(
                          buttonVariants({ variant: "link" }),
                          "ml-0.5 h-fit gap-0.5 px-0.5 py-0 text-foreground underline",
                        )}
                        href={`${APP_ROUTES.Auth.VerifyEmail}?email=${encodeURIComponent(
                          unverifiedEmail,
                        )}`}
                      >
                        Verify email
                        <ArrowRightIcon className="size-3 shrink-0" />
                      </Link>
                    )}
                  </AlertDescription>
                </div>
              </Alert>
            )}
            <Button
              type="submit"
              variant="default"
              className="w-full"
              disabled={!canSubmit}
              onClick={form.handleSubmit(onSubmit)}
            >
              Log in
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
