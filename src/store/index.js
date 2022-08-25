import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    todos: [],
  },

  mutations: {
    /**
     * 
     * @param {string} state A fonte de dados.
     * @param {data} payload Os dados recebidos para update.
     */
    storeTodos(state, payload) {
      state.todos = payload

    }
  },

  getters: {},
  actions: {},
  modules: {}
})