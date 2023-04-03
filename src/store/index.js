import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    loginUserDTO: null
  },
  getters: {
    loginUserDTO: state => state.loginUserDTO
  },
  mutations: {
    addLoginUser: (state, userDTO) => {
      state.loginUserDTO = userDTO
    },
    logoutUser: (state, userDTO) => {
      state.loginUserDTO = null
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['loginUserDTO']
  })]
})
