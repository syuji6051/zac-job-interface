export type WorkType = 'clockIn' | 'clockOut' | 'goOut' | 'returned'

export interface PunchWorkInput {
  userId: string
  obcTenantId: string
  obcUserId: string
  obcPassword: string
  token?: string | null
  channel?: string | null
  workType: WorkType
}
