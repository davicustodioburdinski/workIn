import axios from 'axios'
import { store } from '@/Store'

const instance = axios.create()
instance.interceptors.request.use(
  async function (config) {
    const session = await store.getState()?.session
    let token = session.accessToken
    config.headers.Authorization = `bearer ${token}`
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.log('[API_SERVICE_ERR]', JSON.stringify(error))
    if (error?.response?.status === 401) {
      store.dispatch(RemoveSessionUser())
    } else if (error?.response?.status === 404) {
      toast?.show(error?.message, {
        type: 'danger',
      })
    } else if (error?.response?.status === 422) {
      toast?.show(error?.response?.data.errors[0], {
        type: 'danger',
      })
    } else if (error?.response?.status === 500) {
      toast?.show(error?.response?.data.errors[0], {
        type: 'danger',
      })
    } else if (error?.response?.status === 400) {
      toast?.show(error?.response?.data.errors[0], {
        type: 'danger',
      })
    }
    // console.log('[API_SERVICE_ERR]', JSON.stringify(error))
    // console.log('[API_SERVICE_ERR_DETAILS]', error?.response)
    return Promise.reject(error)
  },
)

export default instance

function RemoveSessionUser(): any {
  throw new Error('Function not implemented.')
}
//
// const instance = axios.create({
//   baseURL: Config.API_V1,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })
//
// instance.interceptors.request.use(
//   async function (config: AxiosRequestConfig) {
//     const session = await store.getState()?.session
//     if (session?.isAuthenticated) {
//       if (!config?.url?.endsWith('auth')) {
//         session?.accessToken
//           ? (config.headers.Authorization = `Bearer ${session?.accessToken}`)
//           : null
//         return config
//       } else {
//         return config
//       }
//     }
//     session?.accessToken
//       ? (config.headers.Authorization = `Bearer ${session?.accessToken}`)
//       : null
//     return config
//   },
//   function (error) {
//     return Promise.reject(error)
//   },
// )
//
// instance.interceptors.response.use(
//   async function (response: AxiosResponse) {
//     return response
//   },
//
//   async function (error) {
//     console.log('Erro do Axios', error)
//     if (error?.response?.status === 400) {
//       toast?.show(error?.response?.data.errors[0], {
//         type: 'danger',
//       })
//     } else if (error?.response?.status === 401) {
//       console.log('401')
//       const session = await store.getState()?.session
//       toast?.show('Sua sessão expirou, por favor refaça o login!', {
//         type: 'danger',
//       })
//
//       if (session.accessToken && error.config.url.endsWith('refresh-token')) {
//         navigateAndReset('Login')
//       }
//     } else if (error?.response?.status === 404) {
//       console.log('404')
//       toast?.show('Recurso não encontrado!', {
//         type: 'danger',
//       })
//     } else if (error?.response?.status === 422) {
//       console.log('422')
//       toast?.show('Verifique os dados informados e tente novamente (422)!', {
//         type: 'danger',
//       })
//     }
//     return Promise.reject(error)
//   },
// )
//
// export default instance
