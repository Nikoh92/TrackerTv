<template>
  <v-app>
    <v-toolbar app>
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
import HelloWorld from "./components/HelloWorld";
import Home from "./views/Home";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>
