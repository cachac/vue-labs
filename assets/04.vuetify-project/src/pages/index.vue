<!-- eslint-disable -->
<template>
  <h1>Usuarios</h1>

  <UserTable :users="users" @show-details="openModal" />
  <UserModal v-if="showModal" :user="selectedUser" @close="closeModal" />
</template>

<script setup>
// eslint-disable
import { ref, onMounted } from "vue";

const users = ref([]);
const showModal = ref(false);
const selectedUser = ref({});

const openModal = (user) => {
  selectedUser.value = user;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedUser.value = {};
};

// Fetch API pública
onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    users.value = await res.json();
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
});
</script>
