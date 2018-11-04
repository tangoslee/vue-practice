import todoService from "@/services/todo.service.js";

// initial state
const state = {
  todos: []
};

// getters
const getters = {
  // closeTodoCount: ({ todos }, gettters) => {
  closeTodoCount: ({ todos }) => {
    return todos.filter(todo => todo.done === true).length;
  },

  openTodoCount: ({ todos }) => {
    return todos.filter(todo => todo.done !== true).length;
  },

  getAllTodos: state => () => {
    const { todos } = state;
    return todos;
  }
};

// actions
const actions = {
  getAllTodos({ commit }) {
    todoService
      .getTodos()
      .then(todos => {
        commit("GET_ALL_TODOS", todos);
      })
      .catch(error => {
        console.error({
          error
        });
      });
  },

  addTodo({ commit }, payload) {
    commit("ADD_TODO", payload);
  },

  updateTodo({ commit }, payload) {
    commit("UPDATE_TODO", payload);
  },

  deleteTodo({ commit }, payload) {
    commit("DELETE_TODO", payload);
  }
};

// mutations
const mutations = {
  GET_ALL_TODOS(state, payload) {
    state.todos = [...state.todos, ...payload].reduce((distinct, todo) => {
      const found = distinct.filter(item => item.id === todo.id);
      return found && found.length > 0 ? distinct : [...distinct, todo];
    }, []);
  },

  ADD_TODO(state, payload) {
    state.todos = [...state.todos, payload];
  },

  UPDATE_TODO(state, payload) {
    state.todos = [...state.todos].map(todo => {
      if (todo.id === payload.id) {
        return payload;
      }
      return todo;
    });
  },

  DELETE_TODO(state, payload) {
    state.todos = [...state.todos].filter(todo => todo.id !== payload.id);
  }
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
};
