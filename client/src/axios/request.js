import axios from 'axios'
import router from '@/router'
import { setToken, setRefreshToken, getToken } from './storageToken'
import { isRefreshToken, refreshToken } from './refreshToken'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

// Automatically attach the access token for protected requests.
instance.interceptors.request.use((config) => {
  if (
    config.url.includes('/login') ||
    config.url.includes('/register') ||
    config.url.includes('/home')
  ) {
    return config
  }

  const token = getToken()
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  } else {
    router.push('/login')
  }

  return config
})

// Refresh the access token after a 401 and retry the original request once.
instance.interceptors.response.use(
  async (res) => {
    if (res.data.data?.access_token) {
      const token = res.data.data.access_token.replace('Bearer ', '')
      if (!setToken(token)) {
        console.log('token设置失败')
      }
    }

    if (res.data.data?.refresh_token) {
      const refreshTokenValue = res.data.data.refresh_token.replace('Bearer ', '')
      if (!setRefreshToken(refreshTokenValue)) {
        console.log('refreshToken设置失败')
      }
    }

    if (res.data.code === 401 && !isRefreshToken(res.config)) {
      const isSuccess = await refreshToken()
      if (isSuccess) {
        res.config.headers.authorization = `Bearer ${getToken()}`
        const newRes = await instance.request(res.config)
        return newRes
      }

      router.push('/login')
    }

    return res.data
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)

export default instance
