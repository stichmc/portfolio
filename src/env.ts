import { z } from "zod";

const envSchema = z.object({
  // Vite environment variables
  BASE_URL: z.string().min(1),
  DEV: z.boolean(),
  MODE: z.enum(["development", "production", "test"]),
  PROD: z.boolean(),
  SSR: z.boolean(),
});
const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  throw new Error(
    "Invalid environment variables:\n" +
      parsedEnv.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("\n")
  );
}

export default parsedEnv.data;
