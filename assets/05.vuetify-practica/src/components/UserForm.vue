<template>
  <v-dialog v-model="isVisible" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Agregar Nuevo Usuario</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="user.name"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.username"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            label="Email"
            required
          ></v-text-field>
          <v-text-field v-model="user.phone" label="Teléfono"></v-text-field>
          <v-text-field v-model="user.website" label="Website"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary" @click="close">Cancelar</v-btn>
        <v-btn color="primary" @click="submit">Agregar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-user", "close"]);
const isVisible = ref(true);

const user = ref({
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
});

const close = () => {
  isVisible.value = false;
  emit("close");
};

const submit = () => {
  if (!user.value.name || !user.value.username || !user.value.email) {
    alert("Por favor complete los campos obligatorios");
    return;
  }
  emit("add-user", { ...user.value });
  isVisible.value = false;
};
</script>
