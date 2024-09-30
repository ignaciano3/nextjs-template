/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

/** Las variables de entorno públicas que se pueden
 *  usar tanto en el cliente como en el servidor
 */
export const env = createEnv({
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  onValidationError: (error) => {
    console.log(
      "❌ Invalid client environment variables:",
      error.flatten().fieldErrors,
    );
    throw new Error("Invalid client environment variables");
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
});
