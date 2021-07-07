<template>
  <q-page class="q-pa-xl">
    <div class="row justify-center">
      <div class="col-11">

        <q-list>
          <div class="row">
            <q-item :to="{name:'surah', params:{ id : surah.id, title:surah.name_simple }}"  exact v-for="surah in surahList" :key="surah.id" class="col-3 q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  {{ surah.id }}
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ surah.name_simple}}</q-item-label>
                <q-item-label caption lines="1">{{ surah.translated_name.name }}</q-item-label>
              </q-item-section>          
            </q-item>
          </div>
        </q-list>

      </div>
    </div>
  </q-page>
  
</template>

<script>
import { onMounted, computed } from "vue"
import { useQuasar } from "quasar"
import {useStore} from 'vuex'

export default {
  name: 'PageIndex',
  setup(){
    const store = useStore()
    const $q = useQuasar()
    onMounted(async () => {
      await store.dispatch('surah/getSurahList')

      if(!$q.localStorage.has('surahList')){
        $q.localStorage.set('surahList', surahList.value )
      }
    })
    const surahList = computed(()=>{
      return store.state.surah.surahList      
    })
      
    return{surahList}
  }
}
</script>

<style>

</style>