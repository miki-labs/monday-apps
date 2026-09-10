import { createRoot } from "react-dom/client";
import { MONDAY_API_VERSION } from "@miki-labs/monday-client";
import { AppShell } from "@miki-labs/ui";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <AppShell
    title="Contextual Columns"
    description="A foundation shell for a level-aware board tree view."
    detail={`monday GraphQL API ${MONDAY_API_VERSION}`}
  />,
);
