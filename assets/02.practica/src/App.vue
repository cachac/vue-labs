<template>
  <div>
    <h1>Lista de Tareas</h1>
    <p>Tareas completadas: {{ completedCount }}</p>

    <!-- v-for para renderizar la lista -->
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @completed="markAsCompleted"
    />
  </div>
</template>

<script>
import TaskItem from "./components/TaskItem.vue";

export default {
  name: "App",
  components: { TaskItem },
  data() {
    return {
      tasks: [
        { id: 1, name: "Estudiar Vue.js", done: false },
        { id: 2, name: "Practicar props", done: false },
        { id: 3, name: "Hacer el ejercicio", done: false },
      ],
      completedCount: 0,
    };
  },
  methods: {
    markAsCompleted(taskId) {
      const task = this.tasks.find((t) => t.id === taskId);
      if (task && !task.done) {
        task.done = true;
        this.completedCount++;
      }
    },
  },
};
</script>
