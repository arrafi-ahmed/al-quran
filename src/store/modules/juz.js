import JuzService from '../../services/JuzService'
import { LocalStorage } from 'quasar'

export const namespaced = true
export const state = {
  juzList: [],
}
export const mutations = {
  GET_JUZ_LIST(state, juzList) {
    state.juzList = juzList
  },
}
export const actions = {
  getJuzList({ commit }) {
    return JuzService.getJuzList()
      .then((res) => {
        commit('GET_JUZ_LIST', res.data.juzs)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
export const getters = {
  optimizedJuzList(state) {
    return LocalStorage.has('juzList')
      ? LocalStorage.getItem('juzList')
      : state.juzList
  },
}
