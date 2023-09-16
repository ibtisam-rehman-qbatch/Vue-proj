<script setup>
    import viewdashboard from "../assets/svgs/view-dashboard.vue"
    import viewList from "../assets/svgs/view-list.vue"
    import ProductListing from "../pages/ProductListing.vue";
</script>

<template>
  <div class="flex flex-row">
    <div class="flex flex-col p-6 mx-2 bg-white w-64 space-y-4 " style="height: calc(100vh - 4rem)">
        <button class="inline-flex items-center space-x-3 text-[#ADB4D2] hover:text-[#27C498]">
         
            <viewdashboard/>
            <p >Dashboard</p>
        </button>
        <button class="inline-flex items-center space-x-3 text-[#ADB4D2] hover:text-[#27C498]">
            <viewList/>
            <p >Product Listings</p>
        </button>
    </div>

    <div class="bg-[#F4F4F8] w-full">
        <ProductListing/>
    </div>
  </div>
</template>



<style>

</style>