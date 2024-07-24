<!-- components/TaskInput.vue -->
<template>
  <div>
    <input v-model="taskText" type="text" class="border p-2 mb-2 w-full" placeholder="Ingrese la tarea" />
    <button @click="addTask" class="bg-blue-500 text-white p-2 rounded">Agregar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['task-added'])
const taskText = ref('')

const addTask = () => {
  if (taskText.value.trim()) {
    emit('task-added', taskText.value.trim())
    taskText.value = ''
  }
}
</script>

  