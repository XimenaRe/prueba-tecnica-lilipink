<template>
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Eliminar Tarea</h1>
      <TaskList :showDelete="true" @task-deleted="handleTaskDeleted" />
    </div>
  </template>
  
  <script setup>
  import TaskList from '~/components/TaskList.vue'
  import { useTaskStore } from '~/stores/taskStore'
  
  const taskStore = useTaskStore()
  
  const handleTaskDeleted = (taskId) => {
    taskStore.deleteTask(taskId)
  }
  </script>
  