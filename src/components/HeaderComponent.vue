<script setup>

import packageVariantClosed from "../assets/svgs/package-variant-closed.svg"
import chevronDown from "../assets/svgs/chevron-down.svg"
import searchSm from "../assets/svgs/search-sm.svg"
import bell from "../assets/svgs/bell-01.svg"

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
          <button @click="filterResults" class="inline-flex items-center rounded-l-full px-3 bg-white text-[#5B5F7D] ">
            <span > All </span>
            <img :src="chevronDown" class="border-r-[1px] border-[#B6BCD3] px-3"/>
          </button>
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