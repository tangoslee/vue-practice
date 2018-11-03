<template>
  <div class="card">
    <div class="card-body">
      <div class="card-text">
        <div class="form-group">
          <label for="text">Todo Description</label>
          <input type="text" id="text" class="form-control"
          v-model="text"
          @input="$emit('input-text', $event.target.value)"
          placeholder="Write a thing to do">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  props: [
    'todo',
  ],

  data() {
      return {
        text: '',
      }
    },

  mounted() {
    if (this.todo) {
      const { text } = this.todo;
      this.text = text;
    }
  }

}
</script>

<style scoped>
.card {
  max-width: 100% !important;
}
</style>
