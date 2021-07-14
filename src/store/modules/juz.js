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
    if (state.juzList.length > 0) {
      LocalStorage.set('juzList', state.juzList)
      return state.juzList
    }
    if (LocalStorage.has('juzList')) {
      return LocalStorage.getItem('juzList')
    }
  },
}
