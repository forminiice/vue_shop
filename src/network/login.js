import { request } from './request'

export function getLoginMessage (data) {
  return request({
    method: 'post',
    url: '/login',
    data: data
  })
}
