"use client";

import { Provider } from "jotai";
import { type ReactNode } from "react";

export default function JotaiProviders({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
