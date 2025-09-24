<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Detalles de {{ user.name }}</h2>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Teléfono:</strong> {{ user.phone }}</p>
      <p><strong>Website:</strong> {{ user.website }}</p>
      <button @click="$emit('close')">Cerrar</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
// eslint-disable-next-line 
const props = defineProps({
  user: Object
});
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}
</style>
