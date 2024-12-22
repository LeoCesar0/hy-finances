import { z } from "zod";

export const zTransactionType = z.enum(["credit", "deposit"]);
