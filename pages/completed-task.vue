<template>
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Tareas Completadas</h1>
      <TaskList :showDelete="true" :tasks="completedTasks" @task-deleted="handleTaskDeleted" />
    </div>
  </template>
  
  <script setup>
  import TaskList from '~/components/TaskList.vue'
  import { computed } from 'vue'
  import { useTaskStore } from '~/stores/taskStore'
  
  const taskStore = useTaskStore()
  const completedTasks = computed(() => taskStore.tasks.filter(task => task.completed))
  
  const handleTaskDeleted = (taskId) => {
    taskStore.deleteTask(taskId)
  }
  </script>