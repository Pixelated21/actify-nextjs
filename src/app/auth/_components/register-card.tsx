"use client";

import { useAppForm } from "@/components/form";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { safeToast } from "@/lib/utils";
import { APP_ROUTES } from "@/constants/routes";
import { registerAction } from "@/actions/auth/register";
import { registerSchema } from "@/schema/auth/register-schema";

export default function RegisterCard() {
  const router = useRouter();

  const registerMutation = useAction(registerAction, {
    onSuccess: () => {
      safeToast(() => toast.success("Registered successfully"));
      router.push(APP_ROUTES.Dashboard.Index);
    },
    onError: () => {
      safeToast(() => toast.error("Couldn't register"));
    },
  });

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onChange: registerSchema,
    },
    onSubmit: ({ value }) => {
      registerMutation.execute(value);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="grid grid-cols-1 gap-4">
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
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <field.InputMessage message={field.state.meta.errors} />
            </>
          )}
        </form.AppField>

        <form.AppField
          name="confirmPassword"
          validators={{
            onChangeListenTo: ["password"],
            onChange: ({ value, fieldApi }) => {
              if (value !== fieldApi.form.getFieldValue("password")) {
                return "Passwords do not match";
              }
              return undefined;
            },
          }}
        >
          {(field) => (
            <>
              <field.PasswordInput
                label="Confirm Password"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <field.InputMessage message={field.state.meta.errors} />
            </>
          )}
        </form.AppField>
      </div>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <div className="mt-5 flex justify-end ">
            <form.SubmitButton disabled={!canSubmit || isSubmitting} />
          </div>
        )}
      </form.Subscribe>
    </form>
  );
}
