import { saveLocalData, getLocalData } from '../../utils/cache'

let state = {
  isShowNav: false
}

let getters = {
  showNav: state => state.isShowNav
}

//产品
let actions = {
  SHOWNAV({commit}){
    commit('SHOWNAV')
  },
  HIDENAV({commit}){
    commit('HIDENAV')
  }
}

//开发
let mutations = {
  SHOWNAV(state){
    state.isShowNav = true
  },
  HIDENAV(state){
    state.isShowNav = true
  }
}


const app = {
    state,
    getters,
    mutations,
    actions
}

export default app
