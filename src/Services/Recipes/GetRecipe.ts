import { Config } from '@/Config'
import api from '@/Services'

export interface Recipes {
  id?: string
  name?: string
  description?: string
  benefits?: string
}

export default async (): Promise<Recipes> => {
  const response = await api.get(Config.API_V1 + 'receipts')
  return response.data
}
