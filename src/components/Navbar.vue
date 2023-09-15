<script setup>
    import viewdashboard from "../assets/svgs/view-dashboard.svg"
    import viewList from "../assets/svgs/view-list.svg"
    import ProductListing from "../pages/ProductListing.vue";
</script>

<template>
  <div class="flex flex-row">
    <div class="flex flex-col p-6 bg-white w-64 space-y-4 border" style="height: calc(100vh - 4rem)">
        <button class="inline-flex items-center space-x-3">
            <img :src="viewdashboard"/>
            <p class="text-[#27C498]">Dashboard</p>
        </button>
        <button class="inline-flex items-center space-x-3">
            <img :src="viewList"/>
            <p class="text-[#ADB4D2]">Product Listings</p>
        </button>
    </div>

    <div class="bg-[#F4F4F8] w-full">
        <ProductListing/>
    </div>
  </div>
</template>



<style>

</style>