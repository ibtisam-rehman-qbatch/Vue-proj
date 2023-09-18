<script setup>

import packageVariantClosed from "../assets/svgs/package-variant-closed.svg"
import chevronDown from "../assets/svgs/chevron-down.svg"
import searchSm from "../assets/svgs/search-sm.svg"
import bell from "../assets/svgs/bell-01.svg"
import AllFilters from "./AllFilters.vue"
import { ref } from "vue"
import { vOnClickOutside } from '@vueuse/components'


const showModal = ref(false);
const hideFilters = ()=>{
  console.log("inside hide")
  showModal.value=false;
}

</script>

<template>
  <header class="bg-[#161924] p-4">
    <div class=" flex items-center mx-3  justify-between">
      <div class="flex">
        <div class="text-white text-xl mr-8 inline-flex items-center">
          <img :src="packageVariantClosed" class="p-1"/>
          <p>Amazon Project</p>
        </div>
        <div class="flex">
          <div class="relative inline-block">

            <button @click="showModal=!showModal" class="inline-flex items-center  h-10 rounded-l-full px-3 bg-white text-[#5B5F7D] ">
              <span class="inline-flex items-center"> All 
              <img :src="chevronDown" class="border-r-[1px] border-[#B6BCD3] px-3"/></span>
            </button>
            <div class="absolute top-full left-0 mt-2 ml-[-8px] w-[200px] bg-white border border-gray-300 rounded-lg shadow-lg"
            v-if="showModal"  v-on-click-outside="hideFilters">
            <AllFilters :hideFilters="hideFilters"/>
          </div>
        </div>
          <input
            
            @input="handleSearch"
            class=" w-96 h-10 focus:outline-none  focus:border-blue-300 text-sm"
            type="text"
            placeholder="Search Products, Keywords, or ASINs"
          />
          <div class="bg-white p-1 rounded-r-full inline-flex items-center">
            <button>

              <img :src="searchSm" class="px-3"/>
            </button>

          </div>
        </div>
     </div>

      <div class="inline-flex items-center space-x-6 ml-auto">
        <img :src="bell"/>
        <img src="../assets/images/user.png" class="h-9 w-9 rounded-full bg-[#5A6A67]">
      </div>

    </div>
  </header>
</template>



<style>

</style>