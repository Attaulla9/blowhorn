import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        apikey: "5c11c2232353c07fcfa4d3a0c7a8c58a",
        movies_list: [],
    },
    getters: {
        movies: (getters) => {
            return getters.movies_list
        },
        filteredList(getters) {
            return getters.movies_list.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    mutations: {
        GET_MOVIES(state, payload) {
            state.movies_list.push(...payload)
        },
        SORT_MOVIES(state, payload) {
            state.movies_list = payload
        },
        SEARCHED_MOVIES(state,payload){
            state.movies_list = payload
        }
    },
    actions: {
        get_moviews({ commit }, payload) {
            axios
                .get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apikey}&page=${payload}`)
                .then((response) => {
                    // console.log(response.data.results)
                    commit('GET_MOVIES', response.data.results);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        sortbyTitle({ commit }, payload) {
            axios
                .get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apikey}&page=${payload}&sort_by=title.desc`)
                .then((response) => {
                    // console.log(response.data.results)
                    commit('SORT_MOVIES', response.data.results);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        searchMoview({ commit }, payload) {
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apikey}&query=${payload}`)
                .then((response) => {
                    console.log(response.data.results)
                    commit('SEARCHED_MOVIES', response.data.results);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

    }
})