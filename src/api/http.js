import axios from 'axios'


export function get () {
  return axios({
    method: 'get',
    url: '/apis/v1/classic/latest?appkey=UQ2OrhuKYFDWSsFa'
  }) 
}