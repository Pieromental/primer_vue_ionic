<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Games</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <ion-list >
        <ion-item v-for="item, of games" :key="item.id">
          <ion-label>{{item.name}}</ion-label>
        </ion-item>
      </ion-list>
      <ion-list>
        <ion-list ref="ionListGames">
          <ion-item-sliding v-for="game of games" :key="game.id">
            <ion-item>
              <ion-label>{{game.name}}</ion-label>
            </ion-item>
            <ion-item-options side="start" >
              <ion-item-option>
                <ion-icon slot="start" @click="onToggleFavoriteGame(game)" :icon="game.isFavorite?heartCircle:heartOutline"></ion-icon>
            </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import {heartOutline ,heartCircle} from 'ionicons/icons'
import {useGames} from '../composables/useGames'
import { Game } from "@/interfaces/interfaces";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonList,
  IonItemOptions,
  IonItemSliding,
  IonItemOption,
  IonIcon
} from "@ionic/vue";

export default defineComponent({
  name: "Tab1Page",
  // data(){
  //   return{
  //     arrayList : ['Pokémon Yellow','MegaMan X','The Legend of Zelda','Pac-ManSuper','Mario World']
  //   }
  // },
  setup(){
    const {games ,saveFavorite}= useGames()
    const ionListGames = ref<any>(null)
    return{
      games,
      heartOutline,
      heartCircle,
      ionListGames,
      onToggleFavoriteGame:(game:Game)=>{
        ionListGames.value.$el.closeSlidingItems(),
        saveFavorite(game)
      }
  
    }
  },
  components: { 
    IonIcon,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage, 
    IonLabel,
    IonItem,
    IonList,
    IonItemOptions,
    IonItemSliding,
    IonItemOption},
  
});
</script>
