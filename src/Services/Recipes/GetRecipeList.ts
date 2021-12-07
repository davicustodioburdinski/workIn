import { Config } from '@/Config'
import api from '@/Services'

export interface PropsGetRecipesRequest {
  name: string
  description: string
  id: string
}

export interface PropsGetRecipesResponse {
  id: string
  itens: Recipes[]
  totalPages: number
  totalRecords: number
  pageSize: number
  success: boolean
  message: string
  error: string
}

export interface Recipes {
  name: string
  description: string
  id: string
}

export default async (): Promise<PropsGetRecipesResponse> => {
  const response = await api.get(Config.API_V1 + 'recipes')
  return response.data
}
