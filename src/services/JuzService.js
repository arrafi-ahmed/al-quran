import axios from 'axios'

const apiUri = 'https://api.quran.com/api/v4'

const JuzService = {
  getJuzList() {
    return axios.get(`${apiUri}/juzs`)
  },
}

export default JuzService
