<script setup>

import chevronDown from "../assets/svgs/chevron-down.svg"

import CheckboxComponent from "./CheckboxComponent.vue";
import RatingComponent from "./RatingComponent.vue"
import { ref } from "vue";

const showExport = ref(0);

const props = defineProps({
        data: Object,
  });

const handleExportClick = (e)=>{
//    console.log(e.target.value)
    if(e.target.checked) showExport.value++;
    else showExport.value--;
      
    emit('export-button', showExport.value)
}

const emit = defineEmits(['export-button']);
</script>
<template>
   
  <div class="w-[252px] h-[446px] bg-white">
    <div class="flex flex-col space-y-4 p-4">
        <div id="cardPoster" class="w-[220px] h-[125px]">
            <div class="flex">
               
                <CheckboxComponent @change="handleExportClick"/>
                <img src="../assets/images/cardImg.png"/>
            </div>
        </div>
            <hr/>
            <!-- overflow-ellipsis overflow-hidden   -->
        <div class="flex flex-col space-y-2">
          <p id="cardIntro" class="w-[13.75rem] h-[2.5rem] text-sm font-poppins line-clamp-2 overflow-hidden text-overflow-ellipsis" :title="props.data.title">
                 {{ props.data.title }}
          </p>

            <div id="priceSection" class="flex flex-col space-y-0.5">
                    <p class="text-[#979797] text-xs">
                        Price
                    </p>
                    <p class=" text-2xl">
                         ${{ props.data.price}}
                    </p>
            </div>

            <div id="reviewsSection" class="text-sm flex flex-col space-y-0.5">

                <p class="text-[#979797]">
                    Reviews
                </p>
                <button class="inline-flex items-center">
                    
                    <RatingComponent :filledStars="props.data.reviews"/>
                    <img :src="chevronDown" class="px-3"/>
                    <p class="text-[#27C498]">{{ props.data.reviews_count }}</p>
                </button>
                
            </div>

            <div id="BSRSection" class="text-sm flex flex-col space-y-0.5">
                <p class="text-[#979797]">
                    BSR
                </p>
                
                <p class="inline-flex items-center">
                    <span class="bg-[#0FB600] text-white">
                        #{{ props.data.category_bsr }}
                    </span>
                    <span class="px-1 truncate">
                       in {{props.data.main_category_name}}
                       <span class=" text-[#27C498]" v-if="props.data.category_bsr <=100">
                        (Top 100)
                    </span>
                    </span>
                    
                    
                </p>
                
            </div>

        <div id="detailsButton" class="pt-3">
            <button class="text-[#27C498] border w-full text-md h-10 border-[#27C498] rounded-md hover:bg-[#27C498] hover:text-white">
                View More Details
            </button>
        </div>
           
        </div>
    </div>
  </div>
</template>


<style>

</style>