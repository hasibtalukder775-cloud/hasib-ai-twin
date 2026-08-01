export type PermissionLevel = "PUBLIC" | "AUTHENTICATED" | "OWNER" | "SYSTEM";

export const PERMISSION_LEVELS = {
  PUBLIC: "PUBLIC",
  AUTHENTICATED: "AUTHENTICATED",
  OWNER: "OWNER",
  SYSTEM: "SYSTEM",
} as const;

export function canAccessPublic(level: PermissionLevel): boolean {
  return ["PUBLIC", "AUTHENTICATED", "OWNER", "SYSTEM"].includes(level);
}

export function canAccessPrivate(level: PermissionLevel): boolean {
  return ["OWNER", "SYSTEM"].includes(level);
}

export function canAccessMemory(level: PermissionLevel): boolean {
  return ["AUTHENTICATED", "OWNER", "SYSTEM"].includes(level);
}

export function canAccessKnowledge(level: PermissionLevel): boolean {
  return ["AUTHENTICATED", "OWNER", "SYSTEM"].includes(level);
}
