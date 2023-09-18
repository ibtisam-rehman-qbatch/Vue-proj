

<template>
<div v-if="route.name === 'Login'">
    <router-view/>
</div>
<div v-else>
    <HeaderComponent/>
    <Navbar/>
</div>

</template>

<script setup>
    import HeaderComponent from './HeaderComponent.vue';
    import Navbar from './Navbar.vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
   
</script>

<style>

</style>