import { createRoot } from "react-dom/client";
import { AUTOMATION_IR_VERSION } from "@miki-labs/automation-ir";
import { MONDAY_API_VERSION } from "@miki-labs/monday-client";
import { AppShell } from "@miki-labs/ui";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <AppShell
    title="Automation Policy"
    description="A read-only foundation shell for automation governance and drift detection."
    detail={`IR ${AUTOMATION_IR_VERSION} · monday GraphQL API ${MONDAY_API_VERSION}`}
  />,
);
