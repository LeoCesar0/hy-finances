import { z } from "zod";

export const zUser = z.object({
  id: z.string().min(1),
  email: z.string().email(),
  name: z.string().optional(),
});
