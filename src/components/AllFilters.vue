<template>
  
   
        <div class="w-[56.6875rem] h-[25.75rem] border rounded-lg bg-white">
          <div class="inline-flex items-center w-full justify-between py-3 px-4">
                <span class="font-semibold text-lg">Filters</span>
                <button  @click.prevent="cancel" @click="hideFilters">
                    <img :src="close" alt="" >
                </button>
           </div>

           <div class="w-full h-[65%] border-y px-3 py-2">

              <div class="flex flex-col h-full flex-wrap ">
                
                <div v-for="(value, index) in filters" :key="index">
                  <div class="inline-flex items-center text-[#5A5F7D] py-1 text-sm">
                    <input
                    class="appearance-none checked:bg-[#27C498] border-[1px] border-[#C6D0DC] checked:border-transparent h-4 w-4 rounded-full mx-2"
                    type="radio"
                    :checked="false"
                   
                    /> 
                    <span>{{value}}</span>
                  </div>
                </div>
              </div>

           </div>

           <footer class="w-full  p-5">
            <div class="flex items-center justify-end">
                    <button class="w-20 h-9 text-[#9299B8] mx-2 border rounded-md"  @click.prevent="cancel"  @click="hideFilters">
                        Cancel
                    </button>
                    <button type="submit" class="w-20 h-9 text-white m-2 mr-3 bg-[#27C498] border rounded-md text-sm"  @click="hideFilters">
                        Apply
                    </button>
                </div>

           </footer>

          
  
  
      
  </div>
  
</template>

<script setup>
 import close from "../assets/svgs/close.svg"

 const props = defineProps({
  hideFilters: Function,
 })

const filters = [
  'All Departments',
  'Arts & Crafts',
  'Automotive',
  'Baby',
  'Beauty & Personal Care',
  'Books',
  `Boys' Fashion`,
  'Computers',
  'Deals',
  'Digital Music',
  'Electronics',
  `Girls' Fashion`,
  'Health & Household',
  'Home & Kitchen',
  'Industrial & Scientific',
  'Kindle Store',
  'Luggage',
  `Men's Fashion`,
  'Movies & TV',
  'Music, CDs, & Vinyl',
  'Pet Supplies',
  'Prime Video',
  'Software',
  'Sports & Outdoors',
  'Tools & Home Improvement',
  'Toys & Games',
  'Video Games',
  "Women's Fashion"
]
</script>

<style>

</style>