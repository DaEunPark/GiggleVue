import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    loginUserDTO: null,
    otherUserDTO: null,
    rememberUserEmail: null,
    rememberUserPwd: null,
    deleteUserEmail: null,
    deleteUserPwd: null,
    checked: null,
    updateProfileImage: null,
    recentSearchList: []
  },
  getters: {
    loginUserDTO: state => state.loginUserDTO,
    otherUserDTO: state => state.otherUserDTO,
    rememberUserEmail: state => state.rememberUserEmail,
    rememberUserPwd: state => state.rememberUserPwd,
    deleteUserEmail: state => state.deleteUserEmail,
    deleteUserPwd: state => state.deleteUserPwd,
    checked: state => state.checked,
    updateProfileImage: state => state.updateProfileImage,
    recentSearchList: state => state.recentSearchList

  },
  mutations: {
    addLoginUser: (state, userDTO) => {
      state.loginUserDTO = userDTO
    },
    logoutUser: (state) => {
      state.loginUserDTO = null
    },
    addOtherUser: (state, otherUserDTO) => {
      state.otherUserDTO = otherUserDTO
    },
    rememberUserEmail: (state, rememberUserEmail) => {
      state.rememberUserEmail = rememberUserEmail
    },
    rememberUserPwd: (state, rememberUserPwd) => {
      state.rememberUserPwd = rememberUserPwd
    },
    deleteUserEmail: (state) => {
      state.deleteUserEmail = null
    },
    deleteUserPwd: (state) => {
      state.deleteUserPwd = null
    },
    checked: (state, checked) => {
      state.checked = checked
    },
    updateProfileImage: (state, updateProfileImage) => {
      state.updateProfileImage = updateProfileImage
    },
    updatePwd: (state, pwd) => {
      state.loginUserDTO.user_pwd = pwd
    },
    recentSearchList (state, recentSearchList) {
      state.recentSearchList = recentSearchList
    },
    deleteRecentSearchList: (state, recentSearchList) => {
      state.recentSearchList = null
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['loginUserDTO', 'otherUserDTO', 'rememberUserEmail', 'rememberUserPwd',
      'deleteUserEmail', 'deleteUserPwd', 'checked', 'updateProfileImage', 'recentSearchList']
  })]
})
