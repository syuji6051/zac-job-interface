import { z } from 'zod'; 

export const zWorkMinute = z.enum(['0', '15', '30', '45']);

export type WorkMinute = z.infer<typeof zWorkMinute>

export const zWork = z.object({
  hour: z.number(),
  minute: zWorkMinute,
  code: z.string(),
  text: z.string().optional(),
});

export type Work = z.infer<typeof zWork>

export const zZacSignedInput = z.object({
  zacTenantId: z.string(),
  zacLoginId: z.string(),
  zacPassword: z.string(),
});

export type ZacSignedInput = z.infer<typeof zZacSignedInput>

export const zZacRegisterInput = z.object({
  workDate: z.date(),
  workStartHour: z.number(),
  workStartMinute: zWorkMinute,
  workEndHour: z.number(),
  workEndMinute: zWorkMinute,
  workBreakHour: z.number(),
  workBreakMinute: zWorkMinute,
  works: zWork.array(),
});

export type ZacRegisterInput = z.infer<typeof zZacRegisterInput>
