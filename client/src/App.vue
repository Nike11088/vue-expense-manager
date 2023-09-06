<script>
import MainHeader from './components/MainHeader.vue'
import { settingsStore } from '@/stores/settings-store'
import { mapState } from 'pinia'

export default {
  name: 'App', 
  components: {
    MainHeader
  }, 
  mounted () {
    settingsStore().load()  
    this.setTheme(this.darkTheme)     
  },
  methods: {
    setTheme (darkTheme) {
      const darkThemeName = 'dark'
      document.body.parentNode.classList.remove(darkThemeName)
      if (darkTheme) {
        document.body.parentNode.classList.add(darkThemeName)
      }      
    }
  },
  computed: {
    ...mapState(settingsStore, ['darkTheme']),
  },
  watch: {
    darkTheme () {
      this.setTheme(this.darkTheme)   
    }
  }
}
</script>

<template>
  <div>
    <MainHeader />
  </div>
</template>

<style scoped lang="scss">
</style>
