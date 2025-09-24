<template>
  <v-data-table :headers="headers" item-key="id" item-value="id" :items="users">
    <template #[`item.actions`]="{ item }">
      <v-btn icon @click="$emit('show-details', item)">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script setup>
  const props = defineProps({
    users: Array,
  })

  const emit = defineEmits(['show-details'])

  const headers = [
    { text: 'ID', align: 'start', key: 'id' },
    { text: 'Nombre', key: 'name' },
    { text: 'Email', key: 'email' },
    { text: 'Acciones', key: 'actions', sortable: false },
  ]
</script>
