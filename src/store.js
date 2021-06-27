import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        apikey: "5c11c2232353c07fcfa4d3a0c7a8c58a",
        movies: '',
    },
    mutations: {
        GET_MOVIES(state, payload) {
            state.movies = payload
        }       
    },
    actions: {
        get_moviews({ commit },payload) {
            axios
                .get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apikey}&page=${payload}`)
                .then((response) => {
                    console.log(response.data)
                    commit('GET_MOVIES', response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }
})