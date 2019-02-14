<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex v-for="cardTvShow in tvShowList" xs4>
          <CardTvShow :cardTvShow="cardTvShow"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CardTvShow from "@/components/CardTvShow.vue";
import { ICardTvShow } from "@/api/models/ICardTvShow";
import searchapi from "@/api/searchapi";

@Component({
  components: {
    CardTvShow
  }
})
export default class Home extends Vue {
  private tvShowList: Array<Partial<ICardTvShow>> = [];
  created() {
    this.tvShowList = searchapi.getPopular();
  }
  cardTvShow: Partial<ICardTvShow> = {
    name: "toto",
    id: 6561,
    backdrop_path: "/rQGBjWNveVeF8f2PGRtS85w9o9r.jpg"
  };
}
</script>
