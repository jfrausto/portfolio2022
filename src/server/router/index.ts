import * as trpc from '@trpc/server';
import { z } from 'zod';

export const appRouter = trpc.router().query('send-me-a-dm', {
  input: z
    .object({
      from: z.string().nullish(),
      text: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return {
      testingThis: `from ${input?.from}: ${input?.text}`,
    };
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;

