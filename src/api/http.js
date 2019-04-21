import axios from 'axios'

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log(error.response)
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
export function getHostBook () {
  return axios({
    method: 'get',
    url: `/apis/v1/book/hot_list?appkey=UQ2OrhuKYFDWSsFa`
  })
}

export function getHotWord (){
  return axios({
    method: 'get',
    url: `/apis/v1/book/hot_keyword?appkey=UQ2OrhuKYFDWSsFa`
  })
}
export function getSearchWord (str){
  return axios({
    method: 'get',
    url: `/apis/v1/book/search?appkey=UQ2OrhuKYFDWSsFa&q=${str}`
  })
}
export function getBookDetail (id){
  return axios({
    method: 'get',
    url: `/apis/v1/book/${id}/detail?appkey=UQ2OrhuKYFDWSsFa`
  })
}
export function getBookComment (id){
  return axios({
    method: 'get',
    url: `/apis/v1/book/${id}/short_comment?appkey=UQ2OrhuKYFDWSsFa`
  })
}
export function getLikeClassic (){
  return axios({
    method: 'get',
    url: `/apis/v1/classic/favor?appkey=UQ2OrhuKYFDWSsFa`
  })
}