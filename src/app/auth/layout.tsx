import type * as React from "react";
import type { Metadata } from "next";

import { ThemeToggle } from "@/components/theme-toggle";
import { createTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: createTitle("Auth"),
};

export default async function AuthLayout({
  children,
}: React.PropsWithChildren): Promise<React.JSX.Element> {
  return (
    <div className="py-8">
      <main className="flex flex-col items-center justify-center p-2">
        {children}
      </main>
      <ThemeToggle className="fixed right-2 bottom-2 rounded-full" />
    </div>
  );
}
