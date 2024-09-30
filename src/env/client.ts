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
  // eslint-disable-next-line n/no-process-env
  runtimeEnv: process.env,
});
