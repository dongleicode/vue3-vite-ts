import { createStore } from 'vuex'
import app from './modules/app'
import order from './modules/order'

export default createStore({
  namespaced: true,
  modules: {
    app,
    order
  }
})
