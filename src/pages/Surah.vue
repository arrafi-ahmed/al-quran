<template>
  <q-page class="q-pa-xl">
    <div class="row justify-center">
      <div class="col-11">

        <div class="q-pa-md">
          <div class="text-h4">
            {{"Surah " + props.title}}
          </div>
          <q-separator color="black" class=" q-my-lg" />

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
        <div class="q-pa-lg flex flex-center">
          <q-pagination
            v-model="currentPage"
            :max="maxPage"
            input
          />
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import {ref, watch, onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

export default {
  name:'PageSurah',
  props:['title'],
  setup(props){
    const route = useRoute()
    const store = useStore()
    const currentPage = ref(1)
    const maxPage = ref(1)

    onMounted(async ()=>{
      await store.dispatch('surah/getSurah', {surahId:route.params.id, page:currentPage.value})
      maxPage.value = surah.value.pagination.total_pages
    })
    watch(currentPage, (newVal, oldVal)=>{
      store.dispatch('surah/getSurah', {surahId:route.params.id, page:currentPage.value})
    })
    const surah = computed(()=>{
      return store.state.surah.surah
    })
    console.log(currentPage.value)
    return {props, surah, currentPage, maxPage}
  }
}
</script>

<style>

</style>