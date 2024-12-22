import { zCommonFields } from "@/schemas/commonFields";
import { z } from "zod";

export const zBankAccount = z
  .object({
    name: z.string().min(1, "Account name is required"),
    userId: z.string().min(1),
    id: z.string().min(1),
  })
  .merge(zCommonFields);

export type IBankAccount = z.infer<typeof zBankAccount>;

// =============== CREATE ===============

export const zCreateBankAccount = zBankAccount.omit({
  userId: true,
  createdAt: true,
  updatedAt: true,
  id: true,
});

export type ICreateBankAccount = z.infer<typeof zBankAccount>;
// ============================================

// =============== UPDATE ===============

export const zUpdateBankAccount = zBankAccount.omit({
  userId: true,
  createdAt: true,
  updatedAt: true,
  id: true,
});

export type IUpdateBankAccount = z.infer<typeof zBankAccount>;
// ============================================
