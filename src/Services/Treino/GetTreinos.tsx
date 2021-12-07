import { Config } from '@/Config'
import api from '@/Services'

export interface PropsGetTreinosRequest {
  name: string
  description: string
  benefits: string
  id: string
}

export interface PropsGetTreinosResponse {
  id: string
  itens: Treinos[]
  totalPages: number
  totalRecords: number
  pageSize: number
  success: boolean
  message: string
  error: string
}

export interface Treinos {
  name: string
  description: string
  id: string
  benefits: string
}

export default async (): Promise<PropsGetTreinosResponse> => {
  const response = await api.get(Config.API_V1 + 'treinos')
  return response.data
}
