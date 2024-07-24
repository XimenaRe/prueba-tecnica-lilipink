import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as { id: number; text: string; completed: boolean }[],
  }),
  actions: {
    addTask(text: string) {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
      }
      this.tasks.push(newTask)
      this.saveTasks()
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadTasks() {
      const savedTasks = localStorage.getItem('tasks')
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks)
      }
    },
  },
})
