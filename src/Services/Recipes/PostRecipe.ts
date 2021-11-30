import { Config } from '@/Config'
import api from '@/Services'

export interface PropsPostRecipeRequest {
  name?: string
  description: string
  benefits: string
  recipeUrl?: string
}

export interface PropsPostRecipeResponse {
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
  data: PropsPostRecipeRequest,
): Promise<PropsPostRecipeResponse> => {
  return await api.post(Config.API_V1 + 'recipes', data)
}
