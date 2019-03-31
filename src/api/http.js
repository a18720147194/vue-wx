import axios from 'axios'

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log(error.response.status)
  return Promise.reject(error);
});

export function getNewest () {
  return axios({
    method: 'get',
    url: '/apis/v1/classic/latest?appkey=UQ2OrhuKYFDWSsFa'
  })
}

export function getPrevious (index) {
  return axios({
    method: 'get',
    url: `/apis/v1/classic/${index}/previous?appkey=UQ2OrhuKYFDWSsFa`
  })
}

export function getNext (index) {
  return axios({
    method: 'get',
    url: `/apis/v1/classic/${index}/next?appkey=UQ2OrhuKYFDWSsFa`
  })
}