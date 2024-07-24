<!-- pages/list-tasks.vue -->
<template>
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Lista de Tareas</h1>
      <TaskList />
    </div>
  </template>
  
  <script setup>
  import TaskList from '~/components/TaskList.vue'
  import { onMounted } from 'vue'
  import { useTaskStore } from '~/stores/taskStore'
  
  const taskStore = useTaskStore()
  
  onMounted(() => {
    taskStore.loadTasks()
  })
  </script>
  