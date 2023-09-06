import { defineStore } from 'pinia'

export const settingsStore = defineStore('settings-store', {
  state: () => {
    return {
      settings: null
    }
  },
  getters: {
    darkTheme: (state) => state.settings?.darkTheme
  },
  actions: {
    load () {
      const settings = localStorage.getItem('settings')
      this.settings = settings 
        ? JSON.parse(settings)
        : {
          darkTheme: false  
        } 
    },
    saveSettings (key, value) {
      this.settings[key] = value
      localStorage.setItem('settings', JSON.stringify(this.settings))
    }
  }
})
