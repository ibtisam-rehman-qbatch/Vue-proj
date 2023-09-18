<script setup>
    import viewdashboard from "../assets/svgs/view-dashboard.vue"
    import viewList from "../assets/svgs/view-list.vue"
    import logoutIcon from "../assets/svgs/logout-icon.vue"

    import { ref } from "vue";
    import { useRouter } from 'vue-router';
    import LogoutConfirmation from "./LogoutConfirmation.vue";
    import { useAuthStore } from '../store';


    const showConfirmation = ref(false);
    const router = useRouter()

    const logout = () => {
        useAuthStore.logout(router); 
        showConfirmation.value = false; 
      };
  
      const cancel = () => {
        showConfirmation.value = false; 
      };
</script>

<template>
  <div class="flex flex-row">
    <div class="flex flex-col p-6 mx-2 bg-white w-64 space-y-4 " style="height: calc(100vh - 4rem)">
        <router-link to="/" class="inline-flex items-center space-x-3 text-[#ADB4D2] hover:text-[#27C498]">
         
            <viewdashboard/>
            <p >Dashboard</p>
        </router-link>
        <router-link to="/products"  class="inline-flex items-center space-x-3 text-[#ADB4D2] hover:text-[#27C498]">
            <viewList/>
            <p >Product Listings</p>
        </router-link>
        
        <button class="inline-flex items-center space-x-3 text-[#ADB4D2] hover:text-[#27C498]" @click="showConfirmation=true">
            <logoutIcon/>
            <p >Logout</p>
        </button>
    </div>

    <div class="bg-[#F4F4F8] w-full">
        <router-view />
        <div v-if="showConfirmation">
            <LogoutConfirmation :logout="logout" :cancel="cancel"/>
        </div>
    </div>
  </div>
</template>



<style>

</style>