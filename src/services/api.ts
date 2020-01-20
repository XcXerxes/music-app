/*
 * @Description: 
 * @Author: leo
 * @Date: 2020-01-19 16:36:56
 * @LastEditors: leo
 * @LastEditTime: 2020-01-20 16:20:38
 */
import { ApisauceInstance, create } from 'apisauce'
// import { getGeneralApiProblem } from './api-problem'
import { DEFAULT_API_CONFIG } from './api-config'

const api:ApisauceInstance = create({
  baseURL: DEFAULT_API_CONFIG.url,
  timeout: DEFAULT_API_CONFIG.timeout,
  headers: {
    Accept: 'application/json'
  }
})

// api.addAsyncResponseTransform((response: ApiResponse<any>): any => {
//   if (response.problem) {
//     response.data = getGeneralApiProblem(response)
//     return response.data
//   }
//   return response.data
// })

export default {
  get (url: string, params: any = {}) {
    return api.get(url, params)
  },
  post (url: string, data: any = {}) {
    console.log(api.post(url, data))
    return api.post(url, data)
  },
  put (url: string, data: any = {}) {
    return api.put(url, data)
  },
  delete (url: string, params: any = {}) {
    return api.delete(url, params)
  }
}
