import { saveLocalData, getLocalData } from '../../utils/cache'

let state = {
  isShowNav: true
}

let getters = {
  isShowNav: state => state.isShowNav
}

//开发
let mutations = {
  SHOWNAV(state){
    state.isShowNav = true
  },
  HIDENAV(state){
    state.isShowNav = false
  }
}

//产品
let actions = {
  showNav({commit}){
    commit('SHOWNAV')
  },
  hideNav({commit}){
    commit('HIDENAV')
  }
}


const app = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default app
