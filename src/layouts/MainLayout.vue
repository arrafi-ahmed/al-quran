<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-primary text-white q-px-lg" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <router-link :to="{ name: 'home' }" class="text-white">
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
            Al Quran
          </router-link>
        </q-toolbar-title>

        <q-space></q-space>
        <q-btn flat round dense icon="search" class="q-mr-xs" />

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs v-model="tab">
        <q-route-tab
          :to="{ name: 'home' }"
          name="surah"
          label="Show Surah"
        ></q-route-tab>
        <q-route-tab
          :to="{ name: 'list-juz' }"
          name="juz"
          label="Show Juz"
        ></q-route-tab>
      </q-tabs>
    </q-header>

    <q-drawer
      behavior="mobile"
      v-model="rightDrawerOpen"
      side="right"
      :breakpoint="500"
      bordered
      overlay
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item :to="{ name: 'home' }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <a href="http://rafi.gq/" target="_blank">
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="code" />
              </q-item-section>

              <q-item-section> Developer </q-item-section>
            </q-item>
          </a>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white text-center">
      <q-toolbar>
        <q-toolbar-title>
          <div>Al Quran</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const rightDrawerOpen = ref(false)

    return {
      tab: ref('surah'),
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
    }
  },
}
</script>
