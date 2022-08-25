import {
  createStore
} from 'vuex'
import axios from "axios";

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
    },

    /**
     * 
     * @param {string} state A fonte de dados.
     * @param {data} payload Os dados recebidos para update.
     */
    storeTodo(state, payload) {
      // state.todos.unshift(payload);  // Adiciona no início
      state.todos.push(payload);  // Adiciona no final
    },

  },

  //----------------------------------------------------------------------
  // Maneiras pelas quais o ESTADO(state) pode mudar em relação às 
  // entradas do usuário.
  //----------------------------------------------------------------------
  // Sempre vão retornar um Promessa. São funções assíncronas.
  //----------------------------------------------------------------------
  actions: {

    /**
     * Retorna a lista de tarefas.
     * @param {*} param0 
     * @returns Array com a lista de tarefas.
     */
    getTodos({commit}) {
      return new Promise((resolve) => {

        setTimeout(() => {

          return axios.get("http://127.0.0.1:3000/todos").then((response) => {
            commit("storeTodos", response.data);
            resolve();
          })

        }, 1000)

      })
    },

    addTodo({commit}, data) {
      return axios.post("http://127.0.0.1:3000/todos", data)
        .then((response) => {
          commit('storeTodo', response.data)
        });
    }


  },

  getters: {},
  modules: {}
})