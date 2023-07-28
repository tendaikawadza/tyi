export interface Permission {
  actionName: string;
  actionStatus: "ENABLED" | "DISABLED";
  canDo: boolean;
}

export type Permissions = Permission[];
