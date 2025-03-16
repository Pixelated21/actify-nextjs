import type * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export interface SubmitButtonProps extends React.ComponentProps<"button"> {
  label?: string;
}

function SubmitButton({
  className,
  type,
  label = "Submit",
  ...props
}: SubmitButtonProps) {
  return (
    <Button type={type} className={cn(className)} {...props}>
      <span>{label}</span>
    </Button>
  );
}

export { SubmitButton };
