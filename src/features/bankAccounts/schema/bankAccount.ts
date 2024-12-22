import { z } from "zod";

export const zBankAccount = z.object({
  name: z.string().min(1, "Account name is required"),
  userId: z.string().min(1),
});
