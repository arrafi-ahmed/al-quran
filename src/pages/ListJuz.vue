<template>
  <q-page class="q-pa-xl">
    <div class="row justify-center">
      <div class="col-11">
        <div v-for="juz in juzList" :key="juz.id" class="q-my-sm" clickable>
          <q-list padding bordered>
            <q-chip square class="q-ml-md">{{ juz.juz_number }}</q-chip>
            <div class="row">
              <q-item
                v-for="surah in juz.verse_mapping"
                :key="surah.surahId"
                :to="{
                  name: 'surah',
                  params: { id: surah.surahId, title: surah.name_simple },
                }"
                class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-my-sm"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white">
                    {{ surah.surahId }}
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label caption lines="1">{{
                    surah.verse
                  }}</q-item-label>
                  <q-item-label lines="2">{{ surah.name_simple }}</q-item-label>
                  <q-item-label caption lines="3">{{
                    surah.translated_name
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'

export default {
  name: 'PageJuz',
  setup() {
    const store = useStore()
    const $q = useQuasar()
    onMounted(() => {
      store
        .dispatch('juz/getJuzList')
        .then(() => {
          if (!$q.localStorage.has('surahList')) {
            ;(async () => {
              await store.dispatch('surah/getSurahList')
              getSurahName()
              $q.localStorage.set('surahList', surahList.value)
            })()
          }
        })
        .then(() => {
          getSurahName()
        })
        .catch((err) => {
          console.log(err)
        })
    })

    const juzList = computed(() => {
      return store.state.juz.juzList
    })
    const surahList = computed(() => {
      return $q.localStorage.has('surahList')
        ? $q.localStorage.getItem('surahList')
        : store.state.surah.surahList
    })

    const getSurahName = () => {
      juzList.value.forEach((juz) => {
        Object.entries(juz.verse_mapping).forEach(([surahId, verse]) => {
          const surah = surahList.value.find((surah) => surah.id == surahId)
          return (juz.verse_mapping[surahId] = {
            surahId,
            verse,
            name_simple: surah.name_simple,
            translated_name: surah.translated_name.name,
          })
        })
      })
    }

    return { juzList }
  },
}
</script>

<style></style>
