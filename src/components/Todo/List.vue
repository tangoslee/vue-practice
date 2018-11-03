<template>
  <div class="container">
    <div class="card-deck">

      <div class="card" v-for="todo of todos" v-bind:key="todo.id">
        <div class="card-body">
          <h5 class="card-title alert alert-success" v-if="todo.done">Complete</h5>
          <h5 class="card-title alert alert-primary" v-if="!todo.done">Progress</h5>
          <p class="card-text">{{todo.text}}</p>
          <div class="card-text">
            <button class="btn btn-link" v-on:click="deleteTodo(todo)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            <button class="btn btn-link" v-on:click="updateTodo(todo)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button class="btn btn-link" v-on:click="setDone(todo)">
              <i class="fa fa-check-square-o" aria-hidden="true" v-if="todo.done"></i>
              <i class="fa fa-square-o" aria-hidden="true" v-if="!todo.done"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- <todo-form v-if="isNewForm"></todo-form> -->
      <modal v-bind:showModal="showModal"
        v-on:on-close="close()"
        v-on:on-save="save(todo)">
        <todo-form
          v-bind:todo="todo"
          v-on:input-text="inputText">
        </todo-form>
      </modal>

      <div class="mt-auto mb-auto ml-4">
        <button class="btn btn-link" v-on:click="showNewTodoForm()">
          <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import TodoForm from '@/components/Todo/Form.vue';
import Modal from '@/components/common/Modal.vue';


export default {
  name: 'TodoList',
  components: {
    TodoForm,
    Modal,
  },
  data() {
    return {
      showModal: false,
      todo: null,
      isEdit: false,
    }
  },
  computed: {
    todos() {
      return this.$store.getters.getAllTodos();
    },
  },
  // watch: {
  //   todo: function(todo) {
  //     console.log('watch:', todo);
  //     this.todo = todo;
  //   }
  // },
  methods: {
    showNewTodoForm() {
      this.todo = null;
      this.showModal = true;
      this.isEdit = false;
    },

    close() {
      this.showModal = false;
    },

    save(todo) {
      if (this.isEdit) {
        this.close();
        return this.$store.dispatch('updateTodo', todo);
      }

      const { text } = todo;
      const item = {
        text,
        id: new Date().getTime(),
        done: false,
      };
      this.$store.dispatch('addTodo', item);
      this.close();
    },

    inputText(text) {
      this.todo = { ...this.todo, text };
    },

    // check, uncheck done flag
    setDone(todo) {
      this.$store.dispatch('updateTodo', {
        ...todo,
        done: !todo.done,
      });
    },

    // delete Todo
    deleteTodo(todo) {
      this.$store.dispatch('deleteTodo', todo);
    },

    updateTodo(todo) {
      this.todo = todo;
      this.showModal = true;
      this.isEdit = true;
    },

  }
}
</script>

<style scoped>
.card {
  min-width: 11rem;
  max-width: 11rem;
  margin: 0.5rem;
}
</style>


