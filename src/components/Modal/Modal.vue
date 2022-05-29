<template>
  <div id="modal">
    <div class="modal-container">
      <slot></slot>
      <div class="buttons-container">
        <button @click="onSave">Salvar</button>
        <button @click="onCancel">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    onSave() {
      this.$emit('onSave');
    },
    onCancel() {
      this.$emit('onCancel');
    },
  },
};
</script>

<style src="./style.css" scoped></style>
