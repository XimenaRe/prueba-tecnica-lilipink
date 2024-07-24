<!-- pages/index.vue -->
<template>
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Bienvenido a la aplicación To-Do List</h1>
      
      <!-- Componente para agregar una nueva tarea -->
      <div class="bg-gray-100 p-4 rounded shadow-md mb-4">
        <h2 class="text-lg font-semibold mb-2">Agregar Nueva Tarea</h2>
        <TaskInput @task-added="handleTaskAdded" />
      </div>
  
      <!-- Componente para listar las tareas -->
      <div class="bg-gray-100 p-4 rounded shadow-md">
        <h2 class="text-lg font-semibold mb-2">Lista de Tareas</h2>
        <TaskList />
      </div>
    </div>
  </template>
  
  <script setup>
  import TaskInput from '~/components/TaskInput.vue'
  import TaskList from '~/components/TaskList.vue'
  import { useTaskStore } from '~/stores/taskStore'
  
  const taskStore = useTaskStore()
  
  const handleTaskAdded = (text) => {
    taskStore.addTask(text)
  }
  </script>
  
  <style scoped>
  /* Agrega cualquier estilo adicional aquí si es necesario */
  </style>
  
  
  <style scoped>
  /* Agrega cualquier estilo adicional aquí si es necesario */
  </style>
  
  