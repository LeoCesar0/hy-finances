import { zCommonFields } from "@/schemas/commonFields";
import { z } from "zod";

export const zUser = z
  .object({
    id: z.string().min(1),
    email: z.string().email(),
    name: z.string().optional(),
  })
  .merge(zCommonFields);

export type IUser = z.infer<typeof zUser>;

// =============== CREATE ===============
// For create use-cases, we may allow an optional ID if Firestore auto-generates it
export const zCreateUser = zUser.omit({
  updatedAt: true,
  createdAt: true,
  id: true,
});
export type ICreateUser = z.infer<typeof zCreateUser>;

// ============================================

// =============== UPDATE ===============
export const zUpdateUser = zUser
  .omit({
    updatedAt: true,
    createdAt: true,
    id: true,
  })
  .partial();

export type IUpdateUser = z.infer<typeof zUpdateUser>;

// ============================================
