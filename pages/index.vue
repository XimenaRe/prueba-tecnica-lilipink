<template>
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Bienvenido a To-Do List</h1>

      <div class="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 class="text-lg font-semibold mb-2">Agregar Nueva Tarea</h2>
      <TaskInput @task-added="handleTaskAdded" />
    </div>

    <div class="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 class="text-lg font-semibold mb-2">Lista de Tareas Activas</h2>
      <TaskList :showDelete="true" :tasks="activeTasks" @task-deleted="handleTaskDeleted" />
    </div>
  
    <div class="bg-gray-100 p-4 rounded shadow-md">
      <h2 class="text-lg font-semibold mb-2">Tareas Completadas</h2>
      <TaskList :showDelete="true" :tasks="completedTasks" @task-deleted="handleTaskDeleted" />
    </div>


    </div>
  </template>
  
  <script setup>
  import TaskInput from '~/components/TaskInput.vue'
  import TaskList from '~/components/TaskList.vue'
 import { computed } from 'vue'
  
  const taskStore = useTaskStore()

  const activeTasks = computed(() => taskStore.tasks.filter(task => !task.completed))
  const completedTasks = computed(() => taskStore.tasks.filter(task => task.completed))

  const handleTaskAdded = (text) => {
    taskStore.addTask(text)
  }

  const handleTaskDeleted = (taskId) => {
  taskStore.deleteTask(taskId)
  }

  
  </script>
  
  <style scoped>
  
  </style>

  
  