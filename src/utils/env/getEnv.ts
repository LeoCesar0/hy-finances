import { ENV } from "@/static/env";

export const getEnv = () => {
  // @ts-expect-error no problem
  return ENV[process.env.NODE_ENV] || ENV.development;
};
