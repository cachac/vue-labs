<template>
  <div>
    <!-- v-bind para estilo dinámico -->
    <p :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
      {{ task.name }}
    </p>

    <!-- v-if para mostrar botón solo si no está completada -->
    <button v-if="!task.done" @click="completeTask">
      Completar
    </button>
    <span v-else>✅ Completada</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  task: Object,
});

const emit = defineEmits(["completed"]);

function completeTask() {
  emit("completed", props.task.id); // enviamos el id al padre
}
</script>
