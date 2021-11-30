import { Config } from '@/Config'
import api from '@/Services'

export interface PropsPostTreinoRequest {
  name?: string
  description: string
  benefits: string
  recipeUrl?: string
}

export interface PropsPostTreinoResponse {
  data: DefaultApiResponse
  success: boolean
  error: string
}

export interface DefaultApiResponse {
  message: string
  error: string
  success: boolean
}

export default async (
  data: PropsPostTreinoRequest,
): Promise<PropsPostTreinoResponse> => {
  return await api.post(Config.API_V1 + 'treinos', data)
}
