import { z } from "zod";
import { zTimestamp } from "./firebase/timestamp";

export const zCommonFields = z.object({
  createdAt: zTimestamp,
  updatedAt: zTimestamp,
});
