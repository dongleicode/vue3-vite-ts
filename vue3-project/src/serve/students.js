import request from './index.js'
let basePath = "/students";


//学生列表
export function studentsList() {
    return request({
        url: basePath+'/list',
        method: 'get',
        data: {}
    })
}
//展示学生详情
export function studentDetail(id) {
    return request({
        url: basePath+'/detail/'+id,
        method: 'get',
        data: {}
    })
}

//新增学生
export function studentCreate(params) {
    return request({
        url: basePath+'/create',
        method: 'post',
        data: params
    })
}

//修改学生
export function studentUpdate(params) {
    return request({
        url: basePath+'/update',
        method: 'put',
        data: params
    })
}

//删除学生
export function studentDelete(id) {
    return request({
        url: basePath+'/delete/'+id,
        method: 'delete',
        data: {}
    })
}