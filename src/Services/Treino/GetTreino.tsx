import { Config } from '@/Config'
import api from '@/Services'

export interface Treino {
  id?: string
  name?: string
  description?: string
  benefits?: string
}

export default async (id: string): Promise<Treino> => {
  const response = await api.get(Config.API_V1 + `treino/${id}`)
  return response.data
}
