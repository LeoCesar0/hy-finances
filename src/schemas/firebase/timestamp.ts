import { z } from "zod";
import { Timestamp } from "firebase/firestore";

export const zTimestamp = z.custom<Timestamp>((value) => {
  return value instanceof Timestamp;
});
