<template>
  <div class="container">
    <h1>Todo</h1>
    <p>Complate Todo is {{closeTodoCount}}</p>
    <p>Progress Todo is {{openTodoCount}}</p>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from '@/components/Todo/List.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Todo',
  components: {
    TodoList,
  },
  data() {
    return {
      }
  },
  created() {
    this.$store.dispatch('getAllTodos');
  },
  computed: {
    ...mapGetters({
      closeTodoCount: 'closeTodoCount',
      openTodoCount: 'openTodoCount',
    })
  }
}
</script>

<style scoped>
</style>


