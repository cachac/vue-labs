<template>
  <div>
    <h1>Contador</h1>
    <p>Contador: {{ counter }}</p>

    <!-- v-on -->
    <button @click="incrementar">Incrementar</button>

    <!-- v-if -->
    <p v-if="counter > 0">Contador es mayor a 0</p>
    <p v-else>Contador es menor a 0</p>

    <!-- v-for -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>

    <!-- v-bind -->
    <img :src="image" alt="" />

    <!-- v-model -->
    <input v-model="name" type="text" />
    <p>{{ name }}</p>

    <!-- computed -->
    <p>{{ nombreContador }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from "vue";
const props = defineProps({
  name: String,
});
const emits = defineEmits(["incrementar"]);
const counter = ref(0);
const items = ref([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]);
const image = ref("https://blog.evanyou.me/images/logo.png");
const name = ref(props.name);
const incrementar = () => {
  counter.value++;
	emits("incrementar", counter.value);
};
const nombreContador = computed(() => {
  return `Nombre y Contador: ${name.value} - ${counter.value}`;
});
</script>
