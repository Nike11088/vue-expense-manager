<template>
  <div class="border-b border-[#e6e7e9] dark:border-slate-400 bg-white dark:bg-slate-700">

    <div class="container m-auto flex justify-between items-center h-16 p-2 ">
      <div class="flex items-center">
        <MoneyIcon class="text-emerald-600 mr-2" />
        <span class="text-emerald-600 font-bold text-base">Expense Manager</span>
      </div>

      <div></div>

      <div class="flex items-center">
        <div class="cursor-pointer mr-3 text-slate-700 dark:text-slate-300">
          <SunIcon v-if="!darkTheme" @click="toggleTheme" />
          <MoonIcon v-if="darkTheme" @click="toggleTheme" />
        </div>        
        <AccountIcon class="cursor-pointer text-slate-700 dark:text-slate-300" />
      </div> 
    </div>   

  </div>
</template>

<script>
import MoneyIcon from './icons/MoneyIcon.vue'
import AccountIcon from './icons/AccountIcon.vue'
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import { settingsStore } from '@/stores/settings-store'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'MainHeader',
  components: {
    MoneyIcon,
    AccountIcon,
    SunIcon,
    MoonIcon
  },
  methods: {
    toggleTheme () {    
      this.saveSettings('darkTheme', !this.darkTheme)
    },
    ...mapActions(settingsStore, ['saveSettings']),
  },
  computed: {
    ...mapState(settingsStore, ['darkTheme']),
  }
}
</script>

<style scoped>
</style>
