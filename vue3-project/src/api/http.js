 import axios from 'axios'

 export function getList(){
    return axios.get('/home/page/1/10')
 }

export function getDetail(id){
    return axios({
        url: '/detail',
        method: 'get',
        params: id
    })
}

export function getLocation(){   //地图数据
    return axios.get('/student_location')
}