import type { ReactNode } from "react";
import { Heading, Text } from "@vibe/core";

export interface AppShellProps {
  readonly title: string;
  readonly description: string;
  readonly detail?: ReactNode;
}

export function AppShell({ title, description, detail }: AppShellProps) {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 48 }}>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      {detail ? <Text>{detail}</Text> : null}
    </main>
  );
}
