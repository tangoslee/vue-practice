<template>
  <div class="container" v-if="showModal">
    <div class="modal fade show" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="close()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="close">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="save">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: [
    'showModal',
  ],
  data() {
    return {
    }
  },
  methods: {
    close() {
      this.$emit('on-close', true);
    },

    save() {
      this.$emit('on-save', true);
    }
  }
}
</script>


<style scoped>
.modal {
  display: block;
  padding-right: 15px;
}
</style>


