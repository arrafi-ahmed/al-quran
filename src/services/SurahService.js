import axios from 'axios'

const apiUri = 'https://api.quran.com/api/v4'

const SurahService = {
  getSurahList() {
    return axios.get(`${apiUri}/chapters`)
  },
  getSurah(payload) {
    return axios.get(
      `${apiUri}/verses/by_chapter/${payload.surahId}?language=en&words=true&page=${payload.page}&per_page=10&word_fields=text_imlaei`
    )
  },
}

export default SurahService
