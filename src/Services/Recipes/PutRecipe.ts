import { Config } from '@/Config'
import api from '@/Services'

export interface PropsPutRecipeRequest {
  name?: string | undefined
  description: string | undefined
  benefits: string | undefined
  recipeUrl?: string | undefined
}

export interface PropsPutRecipeResponse {
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
  data: PropsPutRecipeRequest,
): Promise<PropsPutRecipeResponse> => {
  return await api.post(Config.API_V1 + 'receipts', +id, data)
}
