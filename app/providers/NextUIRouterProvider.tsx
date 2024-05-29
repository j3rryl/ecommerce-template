// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";

export function NextUIRouterProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
