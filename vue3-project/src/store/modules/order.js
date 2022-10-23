import { saveLocalData, getLocalData } from '../../utils/cache'
import obj from '../../api/orderList'

let { orderList, orderDetail } = obj

let state = {
    orderList,
    orderDetail
}

let getters = {
    orderList: state => state.orderList,
    orderDetail: state => state.orderDetail
}

//开发
let mutations = {
  ORDERLIST(state){
    saveLocalData('orderList', state.orderList)
  },
  ORDERDETAIL(state){
    saveLocalData('orderDetail', state.orderDetail)
  }
}

//产品
let actions = {
  orderList({commit}){
    commit('ORDERLIST')
  },
  orderDetail({commit}){
    commit('ORDERDETAIL')
  }
}

const order = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default order

