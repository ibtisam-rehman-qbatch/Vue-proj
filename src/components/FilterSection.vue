<script setup>
    import chevronDown from "../assets/svgs/chevron-down.svg"
    import filterFunnel from "../assets/svgs/filter-funnel.svg"
    import share from "../assets/svgs/share.svg"

    const props = defineProps({
        displayFilters: Function,
        showExport: Number,
    });

    
</script>


<template>
    <div class="flex items-center justify-between my-6  " >
        <p class="font-bold text-2xl text-[#272B41]  ">
            Results
        </p>
      
       
        <div class="inline-flex items-center space-x-4">
            <div class="inline-flex items-center ">

                <select name="selectCategory" id="selectCategory" class="focus:outline-none text-[14px] py-[9px] h-[40px] pl-[16px] pr-[16px] rounded-l-md text-[#27C498] border-y border-l border-[#27C498] appearance-none "
                >
                <option value="0">Select Categories</option>
                 </select>
                <img :src="chevronDown" alt="" class="focus:outline-none text-[14px] py-[9px] px-3 h-[40px] rounded-r-md border-r border-y border-[#27C498] bg-white">
             </div>
            <div class="inline-flex items-center ">

                <select name="selectBrand" id="selectBrand" class="focus:outline-none text-[14px] py-[9px] h-[40px] pl-[16px] pr-[16px] rounded-l-md text-[#27C498] border-y border-l border-[#27C498] appearance-none "
                >
                <option value="0">Select Brands</option>
                 </select>
                <img :src="chevronDown" alt="" class="focus:outline-none text-[14px] py-[9px] px-3 h-[40px] rounded-r-md border-r border-y border-[#27C498] bg-white">
             </div>
             
             <button @click="displayFilters" class="inline-flex items-center justify-center border w-[178px] text-md h-10  rounded-md bg-[#27C498] text-white text-sm">
               <img :src="filterFunnel" alt="" class="pr-2"> View More Filters
            </button>

             <button @click="displayFilters" class="inline-flex items-center justify-center border w-24 text-md h-10  rounded-md bg-[#27C498] text-white text-sm" v-if="showExport">
               <img :src="share" alt="" class="pr-2"> Export
            </button>
        </div>
    </div>
  
</template>


<style>

</style>