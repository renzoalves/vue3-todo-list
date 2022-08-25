import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
  },

  mutations: {
    storeTodos( state, payload){
      state.todos = payload

    }
  },

  getters: {
  },
  actions: {
  },
  modules: {
  }
})
