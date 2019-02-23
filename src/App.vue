<template>
  <v-app>
    <v-toolbar app class="header-style">
      <v-toolbar-title class="headline text-uppercase">
        <span>Show Tracker</span>
        <span class="font-weight-light">Vuejs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Soat - Coaching Technique</span>
      </v-btn>
    </v-toolbar>

    <div>
      <Home/>
    </div>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
.header-style {
  background-color: #bbd230 !important;
}
</style>
