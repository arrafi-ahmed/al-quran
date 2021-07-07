import axios from 'axios'

const apiUri = 'https://api.quran.com/api/v4/juzs'

const JuzService = {
  getJuzList() {
    return axios.get(`${apiUri}`)
  },
}

export default JuzService
