<script setup>
    import chevronDown from "../assets/svgs/chevron-down.svg"
</script>


<template>
    <div class="flex justify-between my-6" >
        <p class="font-bold text-2xl text-[#272B41]">
            Results
        </p>
        <div class="inline-flex items-center space-x-4">
            <select name="selectCategory" id="selectCategory" class="focus:outline-none text-[14px] py-[9px] h-[40px] pl-[16px] pr-[48px] rounded-md text-[#27C498] border border-[#27C498] appearance-none bg-[url('../assets/svgs/chevron-down.svg')] bg-[right_16px_top_50%] bg-no-repeat"
                 >
              <option value="0">Select a Category</option>
            </select>
            <select name="selectBrands" id="selectBrands" class="focus:outline-none text-[14px] py-[9px] h-[40px] pl-[16px] pr-[48px] rounded-md text-[#27C498] border border-[#27C498] appearance-none bg-[url('../assets/svgs/chevron-down.svg')] bg-[right_16px_top_50%] bg-no-repeat"
                 >
              <option value="0">Select a Brand</option>
            </select>
        </div>
    </div>
  
</template>


<style>

</style>