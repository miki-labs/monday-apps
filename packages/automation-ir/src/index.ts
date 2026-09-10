/** Version of the shared, read-only automation intermediate representation. */
export const AUTOMATION_IR_VERSION = "1" as const;

export type AutomationInteractionKind = "read" | "write";

export interface AutomationInteraction {
  readonly kind: AutomationInteractionKind;
  readonly source: string;
  readonly target: string;
}

export interface AutomationDocument {
  readonly id: string;
  readonly name: string;
  readonly interactions: readonly AutomationInteraction[];
}
