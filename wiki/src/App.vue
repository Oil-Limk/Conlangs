<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppNav from './views/components/AppNav.vue'
</script>

<template>
  <header>
    <AppNav />
  </header>

  <RouterView />
</template>
