import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        day1: 'challenges/day-001/index.html',
        // 當你新增更多天的挑戰時，可以在這裡添加
      }
    }
  }
})