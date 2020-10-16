<template>
  <div>
      <h2>Busca tu juego</h2>
      <input type="text" v-model="searchId">

      <ul>
          <li v-for="game in searchByIdGames" :key="game.id">
              {{game.id}} | {{gama.name}} | {{gama.stock}} | {{gama.price}}
          </li>
      </ul>

      <ul>
          <li v-for="game in games" :key="game.id">
              {{game.name}}
          </li>
      </ul>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
export default {

    data(){
        return{
            searchId: ""
        }
    },
    computed: {
        ...mapGetters([]),
        ...mapState(["games"]),
        searchByIdGames(){
            
        }   
    }

}
</script>

<style>

</style>