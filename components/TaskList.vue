<template>
  <ul>
    <li v-for="task in tasks" :key="task.id" class="border p-2 mb-2 flex items-center">
      <input type="checkbox" v-model="task.completed" />
      <span class="ml-2">{{ task.text }}</span>
      <button v-if="showDelete" @click="deleteTask(task.id)" class="ml-2 bg-red-500 text-white p-1 rounded">Eliminar</button>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useTaskStoreWithLoad } from '~/stores/taskStore'

const props = defineProps({
  tasks: {
    type: Array,
    default: () => [],
  },
  showDelete: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['task-deleted'])
const store = useTaskStoreWithLoad()

const updateTask = (task) => {
  store.saveTasks()
}
const deleteTask = (taskId) => {
  store.deleteTask(taskId)
  emit('task-deleted', taskId)
}
</script>

  