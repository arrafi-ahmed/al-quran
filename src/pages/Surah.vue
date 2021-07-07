<template>
  <q-page class="q-pa-xl">
    <div class="row justify-center">
      <div class="col-11">

        <div class="q-pa-md">
          <q-list>
            <template v-for="verse in surah.verses" :key="verse.number">
              <q-item>
                <q-item-section side top>
                  <q-badge color="teal" :label="verse.verse_key" />
                </q-item-section>

                <q-item-section>                
                    <q-item-label class="text-h4 text-right">
                      <span v-for="word in verse.words" :key="word.id">
                        {{word.text_imlaei}}
                      </span>
                    </q-item-label>
                    <q-item-label class="text-body1">
                      <span v-for="word in verse.words" :key="word.id">
                        <span v-if="word.char_type_name.includes('word')">
                          {{word.translation.text+' '}}
                        </span>
                      </span>
                    </q-item-label>  
                </q-item-section>   
              </q-item>
              <q-separator spaced inset />
            </template>
          </q-list>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import {onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

export default {
  name:'PageSurah',
  setup(){
    const route = useRoute()
    const store = useStore()

    onMounted(async ()=>{
      await store.dispatch('surah/getSurah', route.params.id)
      console.log(surah.value.verses[0].words)
    })
    const surah = computed(()=>{
      return store.state.surah.surah
    })
    return {surah}
  }
}
</script>

<style>

</style>