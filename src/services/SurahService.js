import axios from 'axios'

const apiUri = 'https://api.quran.com/api/v4'

const SurahService = {
  getSurahList() {
    return axios.get(`${apiUri}/chapters`)
  },
  getSurah(surahId) {
    return axios.get(
      `${apiUri}/verses/by_chapter/${surahId}?language=en&words=true&word_fields=text_imlaei`
    )
  },
}

export default SurahService
