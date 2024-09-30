import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

/** Las variables de entorno privadas que se pueden
 *  usar solo en el servidor
 */
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DATABASE_URL: z.string().url(),
  },
  onValidationError: (error) => {
    console.log(
      "❌ Invalid server environment variables:",
      error.flatten().fieldErrors,
    );
    throw new Error("Invalid server environment variables");
  },
  // eslint-disable-next-line n/no-process-env
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
