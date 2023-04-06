import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    loginUserDTO: null,
    otherUserDTO: null
  },
  getters: {
    loginUserDTO: state => state.loginUserDTO,
    otherUserDTO: state => state.otherUserDTO
  },
  mutations: {
    addLoginUser: (state, userDTO) => {
      state.loginUserDTO = userDTO
    },
    logoutUser: (state, userDTO) => {
      state.loginUserDTO = null
    },
    addOtherUser: (state, otherUserDTO) => {
      state.otherUserDTO = otherUserDTO;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['loginUserDTO', 'otherUserDTO']
  })]
})
