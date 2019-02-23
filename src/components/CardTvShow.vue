<template>
  <v-card class="card">
    <v-img :src="baseUrlImage + cardTvShow.backdrop_path" aspect-ratio="2.75"></v-img>
    <v-card-title primary-title class="card-title">
      <div>
        <h3 class="headline mb-0">{{cardTvShow.name}}</h3>
        <div class="overview-tv">{{cardTvShow.overview}}</div>
      </div>
    </v-card-title>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ICardTvShow } from "@/api/models/ICardTvShow";
@Component
export default class CardTvShow extends Vue {
  @Prop() cardTvShow!: ICardTvShow;
  private baseUrlImage: string = "http://image.tmdb.org/t/p/w185";
}
</script>
<style lang="scss">
.card {
  margin-top: 5px;
  height: "400px";
}
.card-title {
  background-color: rgb(230, 230, 230);
}
.overview-tv {
  overflow-x: scroll;
  white-space: normal;
  height: 200px;
}
</style>
