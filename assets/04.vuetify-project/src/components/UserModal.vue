<template>
  <v-dialog v-model="isVisible" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Detalles de {{ user.name }}</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Username</v-list-item-title>
                <v-list-item-subtitle>{{ user.username }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="6">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="6">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Teléfono</v-list-item-title>
                <v-list-item-subtitle>{{ user.phone }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="6">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Website</v-list-item-title>
                <v-list-item-subtitle>{{ user.website }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="close" color="secondary">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  user: Object,
});

const emit = defineEmits(["close"]);

const isVisible = ref(true);

const close = () => {
  isVisible.value = false;
  emit("close");
};
</script>
