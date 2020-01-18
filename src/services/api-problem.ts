import { ApiResponse } from 'apisauce'

export type GeneralApiProblem = null
/**
 * 超时
 */
| { kind: 'timeout'; temporary: true }
/**
 * 不能连接
 */
| { kind: 'cannot-connect'; temporary: true }
/**
 * 服务端错误 5xx
 */
| { kind: 'server' }
/**
 * token 失效
 */
| { kind: 'unauthorized' }
/**
 * 403
 */
| { kind: 'forbidden' }
/**
 * 404
 */
| { kind: 'not-found' }
/**
 * 4xx 错误
 */
| { kind: 'rejected' }
| { kind: 'unknown'; temporary: true }
| { kind: 'bad-data' }

export function getGeneralApiProblem(response: ApiResponse<any>): GeneralApiProblem {
  switch (response.problem) {
    case 'CONNECTION_ERROR':
      return { kind: 'cannot-connect', temporary: true }
    case 'NETWORK_ERROR':
      return { kind: 'cannot-connect', temporary: true }
    case 'TIMEOUT_ERROR':
      return { kind: 'timeout', temporary: true }
    case 'SERVER_ERROR':
      return { kind: 'server' }
    case 'CLIENT_ERROR':
      switch (response.status) {
        case 401:
          return { kind: 'unauthorized' }
        case 403:
          return { kind: 'forbidden' }
        case 404:
          return { kind: 'not-found' }
        default:
          return { kind: 'rejected' }
      }
    case 'CANCEL_ERROR':
      return null
  }
  return null
}
