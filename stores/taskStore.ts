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
    deleteTask(taskId: number) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
      this.saveTasks()
    },
    saveTasks() {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },
    loadTasks() {
      if (typeof localStorage !== 'undefined') {
        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks) {
          this.tasks = JSON.parse(savedTasks)
        }
      }
    },
  },
})

export function useTaskStoreWithLoad() {
  const store = useTaskStore()
  if (typeof window !== 'undefined') {
    store.loadTasks()
  }
  return store
}
