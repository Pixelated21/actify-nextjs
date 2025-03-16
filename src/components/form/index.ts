"use client";

import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { NumberInput } from "./number-input";
import { PasswordInput } from "./password-input";
import { SubmitButton } from "./submit-button";
import { TextInput } from "./text-input";
import { InputMessage } from "./input-message";
const { fieldContext, formContext } = createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextInput,
    NumberInput,
    PasswordInput,
    InputMessage,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
