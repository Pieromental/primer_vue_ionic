import { Game } from "@/interfaces/interfaces";
import { ref } from "vue";
export const useGames=()=>{
    const games=ref<Game[]>([
        {id:1,  isFavorite:false,name: 'Pokémon Yellow'},
        {id:2 , isFavorite:false,name: 'MegaMan X'},
        {id:3 , isFavorite:false,name: 'The Legend of Zelda'},
        {id:4,  isFavorite:false,name: 'Pac-ManSuper'},
        {id:5 , isFavorite:false,name: 'Mario World'}])
    const favoriteGames = ref<any>({})
    return{
        games,
        saveFavorite(game:Game){
            if(game.id in favoriteGames.value){
                game.isFavorite=false,
                delete favoriteGames.value[game.id]
                
            }else{
                game.isFavorite=true,
                favoriteGames.value[game.id]=game
            }
            localStorage.setItem('favorites',JSON.stringify(favoriteGames.value))
        }
    }
}