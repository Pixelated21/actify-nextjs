import { cn } from "@/lib/utils";
import type * as React from "react";

interface InputMessageProps extends React.ComponentProps<"p"> {
  message?: string[] | unknown;
}

function InputMessage({ className, message, ...props }: InputMessageProps) {
  const consolidatedErrors = message
    ? Array.isArray(message)
      ? message.join(", ")
      : message
    : props.children;
  const body = consolidatedErrors ? String(consolidatedErrors) : props.children;

  if (!body) {
    return null;
  }

  return (
    <p className={cn("text-destructive text-sm", className)} {...props}>
      {body}
    </p>
  );
}

export { InputMessage };
