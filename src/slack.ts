import { z } from 'zod';

export const zPublishSnsToSlackMessage = z.object({
  token: z.string(),
  chanel: z.string(),
  message: z.string()
});

export type PublishSnsToSlackMessage = z.infer<typeof zPublishSnsToSlackMessage>;
