import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    loginUserDTO: null
  },
  getters: {
  },
  mutations: {
    addLoginUser: (state, userDTO) => {
      state.loginUserDTO = userDTO
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
