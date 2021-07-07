import SurahService from '../../services/SurahService'

export const namespaced = true
export const state = {
  surahList: [],
  surah: {},
}
export const mutations = {
  GET_SURAH_LIST(state, surahList) {
    state.surahList = surahList
  },
  GET_SURAH(state, surah) {
    state.surah = surah
  },
}
export const actions = {
  getSurahList({ commit }) {
    return SurahService.getSurahList()
      .then((res) => {
        commit('GET_SURAH_LIST', res.data.chapters)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getSurah({ commit }, payload) {
    return SurahService.getSurah(payload)
      .then((res) => {
        commit('GET_SURAH', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
