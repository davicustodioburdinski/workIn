import { DefaultApiResponse } from "@/Services/Recipes/PutRecipe";
import { Config } from "@/Config";
import api from '@/Services'

export interface PropsDeleteRecipesRequest {
  id: string
}

export interface PropsDeleteRecipesResponse {
  data: DefaultApiResponse
  success: boolean
  error: string
}

export default async (id: string): Promise<PropsDeleteRecipesResponse> => {
  return await api.delete(Config.API_V1 + `receipts/${id}`)
}
