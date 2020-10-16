import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "32BITS",
    subtitle: "Juegos de PC",
    menu: "",
    games: [
      {
        id: "0001",
        name: "Sekiro",
        stock: 100,
        price: 30000,
        color:"red",
        outstanding:true
      },
      {
        id: "0002",
        name: "Fifa 21",
        stock: 100,
        price: 25000,
        color:"blue",
        outstanding:false
      },
      {
        id: "0003",
        name: "Gears of War 4",
        stock: 100,
        price: 15000,
        color:"green",
        outstanding:true
      },
      {
        id: "0004",
        name: "Mario tennis Aces",
        stock: 100,
        price: 35000,
        color:"yellow",
        outstanding:false
      },
      {
        id: "0005",
        name: "Bloodborne",
        stock: 100,
        price: 10000,
        color:"blue",
        outstanding:false
      },
      {
        id: "0006",
        name: "Forza Horizon 4",
        stock: 100,
        price: 20000,
        color:"red",
        outstanding:true
      }
    ],
    productosVendidos: []
  },
  getters: {
    searchById: (_state, getters) => id => {
      return 
    }
  },
  mutations: {},
  actions: {}
});

export default store;
