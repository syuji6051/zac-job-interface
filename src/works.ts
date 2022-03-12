import { z } from 'zod';

export const zWorkType = z.enum(['clockIn', 'clockOut', 'goOut', 'returned']);

export const zPunchWorkInput = z.object({
  userId: z.string(),
  obcTenantId: z.string(),
  obcUserId: z.string(),
  obcPassword: z.string(),
  token: z.string().optional(),
  channel: z.string().optional(),
  workType: zWorkType,
});

export type WorkType = z.infer<typeof zWorkType>
export type PunchWorkInput = z.infer<typeof zPunchWorkInput>
