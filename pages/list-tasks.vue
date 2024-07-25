<template>
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Lista de Tareas</h1>
    <div class="mb-8">
      <h2 class="text-lg font-semibold mb-2">Tareas Activas</h2>
      <TaskList :showDelete="false" :tasks="activeTasks" />
    </div>
    <div>
      <h2 class="text-lg font-semibold mb-2">Tareas Completadas</h2>
      <TaskList :showDelete="true" :tasks="completedTasks" @task-deleted="handleTaskDeleted" />
    </div>
    </div>
  </template>
  
  <script setup>
  import TaskList from '~/components/TaskList.vue'
  import { computed } from 'vue'
  import { useTaskStore } from '~/stores/taskStore'
  
  const taskStore = useTaskStore()
  
  const activeTasks = computed(() => taskStore.tasks.filter(task => !task.completed))
  const completedTasks = computed(() => taskStore.tasks.filter(task => task.completed))

const handleTaskDeleted = (taskId) => {
  taskStore.deleteTask(taskId)
}
  </script>
  