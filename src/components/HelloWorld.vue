<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex xs12>Todo: afficher liste des series</v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchApi from "@/api/searchapi";

@Component
export default class HelloWorld extends Vue {
  get listShow(): any {
    return SearchApi.getPopular().then(
      response => {
        return response;
      },
      error => {
        console.log("Omagad : An error occurred.", error);
      }
    );
  }
}
</script>

<style>
</style>
