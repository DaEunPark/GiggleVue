import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    loginUserDTO: null,
    userProfileDTO: null

  },
  getters: {
    loginUserDTO: state => state.loginUserDTO,
    userProfileDTO: state => state.userProfileDTO
  },
  mutations: {
    addLoginUser: (state, userDTO) => {
      state.loginUserDTO = userDTO
    },
    logoutUser: (state, userDTO) => {
      state.loginUserDTO = null
    },
    addUserProfile: (state, profileDTO) => {
      state.userProfileDTO = profileDTO
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['loginUserDTO', 'userProfileDTO']
  })]
})
