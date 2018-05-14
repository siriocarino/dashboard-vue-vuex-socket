import axios from 'axios'


const sleep  = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const actions = {
  checkLoggedIn({ commit }) {
  },
  async login({ dispatch, commit }, data) {

    var getAuth = {
        username: "sirio.carino",
        password: "test",
        extension:''
    }
    commit('LOGGED_IN', { agent: getAuth.username, sessionID: new Date().valueOf()  })

  },
  async logout({ commit }) {
    commit('LOGGED_OUT')
  },
  async loginFailed({ commit }, message) {
    commit('LOGIN_ERROR', message)
    await sleep(3000)
    commit('LOGIN_ERROR', null)
  },
  async onUserConnect({ commit }, data) {
    console.log(data)
    await commit('SOCKET_ON_USER_LOGGED')
  },
  async getAllSatus({ dispatch }, data) {
    await dispatch('GET_ALL_STATUS')
  },
  async setCurrentStatus({ commit }, data) {
    commit('CURRENT_STATUS', data)
  },
  async addMessage({ commit }, data) {
    commit('ADD_MESSAGE', data)
  },
  async setThreadsByID ({ commit, dispatch }, data) {
  //  await dispatch('SET_THREAD_BY_ID', data)
    commit('SET_THREAD_BY_ID', data)
  },
  async toggleStatus({ commit }) {
    await commit('TOOGLE_STATUS')
  },
  async joinRoom ({ commit, dispatch }, data) {
      await commit('JOIN_ROOM',data)
  },
  async socket_increment ({ commit, state }) {
    await commit('SOCKET_COUNTER_INCREMENT',state)
  },

}
