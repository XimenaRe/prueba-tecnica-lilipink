<!-- components/TaskList.vue -->
<template>
  <ul>
    <li v-for="task in tasks" :key="task.id" class="border p-2 mb-2 flex items-center">
      <input type="checkbox" v-model="task.completed" />
      <span class="ml-2">{{ task.text }}</span>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useTaskStore } from '~/stores/taskStore'

const taskStore = useTaskStore()
const tasks = computed(() => taskStore.tasks)
</script>

  