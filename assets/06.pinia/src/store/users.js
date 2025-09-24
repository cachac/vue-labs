import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const users = ref([]);
  const selectedUser = ref(null);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      users.value = await res.json();
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  const addUser = (user) => {
    const newId = users.value.length + 1
    users.value.push({ id: newId, ...user })
  };

  const selectUser = (user) => {
    selectedUser.value = user
  }

  const clearSelectedUser = () => {
    selectedUser.value = null
  }

  return {
    users,
    selectedUser,
    fetchUsers,
    addUser,
    selectUser,
    clearSelectedUser,
  }
})
