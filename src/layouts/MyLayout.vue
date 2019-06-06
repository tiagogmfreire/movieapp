<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Movie App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <!--<q-item-label header>Features</q-item-label>-->
        <q-item clickable to="/search" exact>
          <q-item-section avatar>
            <q-icon name="search" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Search</q-item-label>
            <q-item-label caption>Search for movie titles</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="hourglass_empty" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Upcoming movies</q-item-label>
            <q-item-label caption>Check it out the upcoming movies</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
