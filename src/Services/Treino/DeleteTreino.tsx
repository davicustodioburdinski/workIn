import { DefaultApiResponse } from '@/Services/Recipes/PutRecipe'
import { Config } from '@/Config'
import api from '@/Services'

export interface PropsDeleteTreinosRequest {
  id: string
}

export interface PropsDeleteTreinosResponse {
  data: DefaultApiResponse
  success: boolean
  error: string
}

export default async (id: string): Promise<PropsDeleteTreinosResponse> => {
  return await api.delete(Config.API_V1 + `treino/${id}`)
}
