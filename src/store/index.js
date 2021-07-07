import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import * as surah from './modules/surah'
import * as juz from './modules/juz'

export default store(function () {
  const Store = createStore({
    modules: {
      surah,
      juz,
    },
  })

  return Store
})
