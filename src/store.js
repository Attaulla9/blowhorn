import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        apikey: "16ee9d2",
        movies: ''
    },
    mutations: {
        GET_MOVIES(state, payload) {
            state.movies = payload
        }

    },
    actions: {
        get_moviews({ commit }) {
            axios
                .get(`https://www.omdbapi.com/?apikey=${this.state.apikey}&s=No entry&typ=movie`)
                .then((response) => {
                    commit('GET_MOVIES', response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }
})