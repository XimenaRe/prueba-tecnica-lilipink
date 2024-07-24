<!-- pages/add-task.vue -->
<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Agregar Tarea</h1>
    <TaskInput @task-added="addTask" />
  </div>
</template>

<script setup>
import TaskInput from '~/components/TaskInput.vue'
import { useTaskStore } from '~/stores/taskStore'

const taskStore = useTaskStore()

const addTask = (text) => {
  taskStore.addTask(text)
}
</script>

