<!-- eslint-disable -->
<template>
  <h1>Usuarios</h1>

  <v-col cols="12" sm="6">
    <v-btn @click="showForm = true" color="success">Agregar Usuario</v-btn>
  </v-col>

  <UserTable :users="users" @show-details="openModal" />
  <UserModal v-if="showModal" :user="selectedUser" @close="closeModal" />
  <user-form v-if="showForm" @close="showForm = false" @add-user="addUser" />
</template>

<script setup>
// eslint-disable
import { ref, onMounted } from "vue";

const users = ref([]);
const showModal = ref(false);
const selectedUser = ref({});
const showForm = ref(false);

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

const addUser = (user) => {
  const newId = users.value.length + 1

  users.value.push({ id: newId, ...user });
  showForm.value = false;
};
</script>
