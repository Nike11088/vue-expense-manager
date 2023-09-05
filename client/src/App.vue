<script>
import MoneyIcon from './components/icons/MoneyIcon.vue'
import AccountIcon from './components/icons/AccountIcon.vue'
import SunIcon from './components/icons/SunIcon.vue'
import MoonIcon from './components/icons/MoonIcon.vue'

export default {
  name: 'App',
  components: {
    MoneyIcon,
    AccountIcon,
    SunIcon,
    MoonIcon
  },
  data () {
    return {
      light: true
    }
  },
  methods: {
    toggleLight () {      
      this.light = !this.light
      document.body.parentNode.classList.toggle('dark')
    }
  }
}
</script>

<template>
  <header class="border-b border-[#e6e7e9] dark:border-slate-400 bg-white dark:bg-slate-700">
    <div class="container m-auto flex justify-between items-center h-16 p-2 ">
      <div class="flex items-center">
        <MoneyIcon class="text-emerald-600 mr-2" />
        <span class="text-emerald-600 font-bold text-base">Expense Manager</span>
      </div>
      <div>

      </div>
      <div class="flex items-center">
        <div class="cursor-pointer mr-3 text-slate-700 dark:text-slate-300">
          <SunIcon v-if="light" @click="toggleLight" />
          <MoonIcon v-if="!light" @click="toggleLight" />
        </div>        
        <AccountIcon class="cursor-pointer text-slate-700 dark:text-slate-300" />
      </div> 
    </div>      
  </header>
</template>

<style scoped lang="scss">
</style>
