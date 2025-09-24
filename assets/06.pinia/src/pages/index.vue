<!-- eslint-disable -->
<template>
  <h1>Usuarios</h1>

  <v-col cols="12" sm="6">
    <v-btn @click="showForm = true" color="success">Agregar Usuario</v-btn>
  </v-col>

  <UserTable @show-details="openModal" />
  <UserModal v-if="showModal" :user="selectedUser" @close="closeModal" />
  <user-form v-if="showForm" @close="showForm = false" @add-user="addUser" />
</template>

<script setup>
// eslint-disable
import { ref, onMounted } from "vue";
import { useUserStore } from '@/store/users';
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { users, selectedUser } = storeToRefs(userStore);


const showModal = ref(false);
const showForm = ref(false);

const openModal = (user) => {
  selectedUser.value = user;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  userStore.clearSelectedUser();
};

// Fetch API pública
onMounted(async () => {
  try {
    userStore.fetchUsers();
  } catch (error) {
    console.error("Error al cargar usuarios:", error)
  }
});

const addUser = user => {
	userStore.addUser(user)
	showForm.value = false
}
</script>
