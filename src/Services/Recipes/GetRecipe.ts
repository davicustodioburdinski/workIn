import { Config } from '@/Config'
import api from '@/Services'

export interface Recipe {
  id?: string
  name?: string
  description?: string
  benefits?: string
}

export default async (id: string): Promise<Recipe> => {
  const response = await api.get(Config.API_V1 + `recipes/${id}`)
  return response.data
}
