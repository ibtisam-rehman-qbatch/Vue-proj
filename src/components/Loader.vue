<script setup>
import { useAuthStore } from '../store';


</script>

<template>
  <div
    v-if="useAuthStore.loading"
    class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center"
  >
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <vue-loaders-ball-clip-rotate-pulse color="#27C498" scale="2" />
  </div>
</template>