<template>
  <q-page class="q-pa-xl">
    <div class="row justify-center">
      <div class="col-11">
        <q-list>
          <div class="row">
            <q-item
              :to="{
                name: 'surah',
                params: { id: surah.id, title: surah.name_simple },
              }"
              exact
              v-for="surah in surahList"
              :key="surah.id"
              class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-my-sm"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  {{ surah.id }}
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ surah.name_simple }}</q-item-label>
                <q-item-label caption lines="1">{{
                  surah.translated_name.name
                }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'

export default {
  name: 'PageIndex',
  setup() {
    const store = useStore()
    const $q = useQuasar()

    if (!$q.localStorage.has('surahList')) {
      store.dispatch('surah/getSurahList')
    }

    const surahList = computed(() => {
      return store.getters['surah/optimizedSurahList']
    })

    return { surahList }
  },
}
</script>

<style></style>
