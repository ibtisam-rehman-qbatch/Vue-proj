<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
// import DashboardVue from "./pages/Dashboard.vue";
import Navbar from "./components/Navbar.vue";
import Login from "./pages/Login.vue";

import AllFilters from "./components/AllFilters.vue";

import MainLayout from "./components/MainLayout.vue";
import Loader from "./components/Loader.vue";
</script>

<template>
  <div >
    <Loader/>
    <MainLayout/>
  </div>
</template>

<style scoped>
</style>
