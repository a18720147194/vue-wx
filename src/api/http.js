import axios from 'axios'


export function getNewest () {
  return axios({
    method: 'get',
    url: '/apis/v1/classic/latest?appkey=UQ2OrhuKYFDWSsFa'
  }) 
}

export function getPrevious (index) {
  return axios({
    method: 'get',
    url: `/apis/v1/classic/${index}/previous`
  })
}