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

//产品
let actions = {
  ORDERLIST({commit}){
    commit('ORDERLIST')
  },
  ORDERDETAIL({commit}){
    commit('ORDERDETAIL')
  }
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

const order = {
    state,
    getters,
    mutations,
    actions
}

export default order

