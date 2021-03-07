import { request } from '@/plugins/axios'

export function getLoginMessage (data) {
  return request({
    method: 'post',
    url: '/login',
    data: data
  })
}
