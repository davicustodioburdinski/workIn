import { Config } from '@/Config'
import api from '@/Services'
import { PropsPostTreinoRequest } from '@/Services/Treino/PostTreino'

export interface PropsPutTreinosRequest {
  name?: string | undefined
  description: string | undefined
  benefits: string | undefined
  recipeUrl?: string | undefined
}

export interface PropsPutTreinosResponse {
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
  id: string,
  data: PropsPostTreinoRequest,
): Promise<PropsPutTreinosResponse> => {
  return await api.post(Config.API_V1 + 'treinos', +id, data)
}
