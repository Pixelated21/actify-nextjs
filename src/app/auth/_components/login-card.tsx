"use client";

import { Button } from "@/components/ui/button";
import type * as React from "react";
import { toast } from "sonner";

import { logInAction } from "@/actions/auth/log-in";
import { useAppForm } from "@/components/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_ROUTES } from "@/constants/routes";
import { safeToast } from "@/lib/utils";
import { type LogInSchema, logInSchema } from "@/schema/auth/log-in-schema";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";

export function LoginCard(
  props: React.HTMLAttributes<HTMLDivElement>,
): React.JSX.Element {
  const router = useRouter();

  const loginMutation = useAction(logInAction, {
    onSuccess: () => {
      safeToast(() => toast.success("Logged in successfully"));
      router.push(APP_ROUTES.Dashboard.Index);
    },
    onError: () => {
      safeToast(() => toast.error("Couldn't log in"));
    },
  });

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: logInSchema,
    },
    onSubmit: ({ value }) => {
      loginMutation.execute(value);
    },
  });

  const onSubmit = async (values: LogInSchema): Promise<void> => {
    loginMutation.execute(values);
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
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit(onSubmit);
          }}
        >
          <form.AppField name="email">
            {(field) => (
              <>
                <field.TextInput
                  label="Email"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <field.InputMessage message={field.state.meta.errors} />
              </>
            )}
          </form.AppField>

          <form.AppField name="password">
            {(field) => (
              <>
                <field.PasswordInput
                  label="Password"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <field.InputMessage message={field.state.meta.errors} />
              </>
            )}
          </form.AppField>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                variant="default"
                className="w-full"
                disabled={!canSubmit || isSubmitting}
              >
                Log in
              </Button>
            )}
          </form.Subscribe>
        </form>
      </CardContent>
    </Card>
  );
}
