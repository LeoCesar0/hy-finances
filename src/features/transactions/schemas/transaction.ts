import { zTimestamp } from "@/schemas/firebase/timestamp";
import { z } from "zod";

/**
 * A single transaction item:
 * - date: ISO string or Date object
 * - amount: number
 * - description: string
 * - transactionId: unique transaction identifier from CSV or user input
 * - bankAccountId: references which bank account this belongs to
 */
export const zTransaction = z.object({
  date: zTimestamp, // or parse string -> date in your logic
  amount: z.number(),
  description: z.string().min(1),
  transactionId: z.string().min(1),
  bankAccountId: z.string().min(1),
  createdAt: zTimestamp,
  updatedAt: zTimestamp,
});

// For create use-cases, we may allow an optional ID if Firestore auto-generates it
export const zCreateTransaction = zTransaction.omit({
  /* if necessary */
});
export const zUpdateTransaction = zTransaction.partial();
