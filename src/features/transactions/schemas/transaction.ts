import { zCommonFields } from "@/schemas/commonFields";
import { zTimestamp } from "@/schemas/firebase/timestamp";
import { z } from "zod";
import { zTransactionType } from "./transactionType";

export const zTransaction = z
  .object({
    date: zTimestamp,
    amount: z.number(),
    description: z.string().min(1),
    transactionId: z.string().min(1),
    bankAccountId: z.string().min(1),
    id: z.string().min(1),
    type: zTransactionType,
  })
  .merge(zCommonFields);

export type ITransaction = z.infer<typeof zTransaction>;

// =============== CREATE ===============
// For create use-cases, we may allow an optional ID if Firestore auto-generates it
export const zCreateTransaction = zTransaction.omit({
  updatedAt: true,
  createdAt: true,
  id: true,
});
export type ICreateTransaction = z.infer<typeof zCreateTransaction>;

// ============================================

// =============== UPDATE ===============
export const zUpdateTransaction = zTransaction
  .omit({
    updatedAt: true,
    createdAt: true,
    id: true,
  })
  .partial();

export type IUpdateTransaction = z.infer<typeof zUpdateTransaction>;

// ============================================
