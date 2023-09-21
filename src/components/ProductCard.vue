<script setup>

import chevronDown from "../assets/svgs/chevron-down.svg"

import CheckboxComponent from "./CheckboxComponent.vue";
import RatingComponent from "./RatingComponent.vue"
import { ref } from "vue";
import { useRouter } from "vue-router";
import detailProdPic from "../assets/images/prodDetailPic.png"
import { useAuthStore } from "../store";

const router = useRouter()
const showExport = ref(0);

const props = defineProps({
        data: Object,
        isDetail: {
            type: Boolean,
            default: false 
        },
  });


const handleExportClick = (e)=>{

    if(e.target.checked) showExport.value++;
    else showExport.value--;
      
    emit('export-button', showExport.value)
}   

const showDetailPage = ()=>{
    router.push({ name: 'Product-details', params: { id: props.data.id }, query: {userId: useAuthStore?.user?.id} })
}

const emit = defineEmits(['export-button']);
</script>
<template>
   
  <div :class="{
    'w-[252px] h-[446px]': !isDetail ,
    'w-[21.625rem] h-[30.25rem]': isDetail ,
    'bg-white': true
    }">
    <div class="flex flex-col space-y-5 p-4">
        <div id="cardPoster" :class="{
            'w-[220px] h-[125px]': !isDetail,
            'w-[18.625rem] h-[12.1875rem]': isDetail,
            }">
            <div :class="{
                'flex': true,
                'justify-center': isDetail
            }">
    
                <CheckboxComponent @change="handleExportClick" v-if="!isDetail"/>
                <img :src="detailProdPic" :class="isDetail ? 'w-[15.625rem] h-[12.1875rem] shrink-0' : 'w-[9.75rem] h-[7.812rem] shrink-0'"/>
            </div>
        </div>
            <hr/>
           
        <div class="flex flex-col space-y-2">
          <p id="cardIntro" :title="props.data.title" :class="{
            ' font-poppins line-clamp-2 overflow-hidden text-overflow-ellipsis':true,
            'w-[13.75rem] h-[2.5rem] text-sm': !isDetail,
            'w-[18.625rem] text-md': isDetail
            }">
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
                    
                    <RatingComponent :filledStars="props.data.reviews || 0"/>
                    <img :src="chevronDown" class="px-3"/>
                    <p class="text-[#27C498]">{{ props.data.reviews_count }}</p>
                </button>
                
            </div>

            <div id="BSRSection" class="text-sm flex flex-col space-y-0.5">
                <p class="text-[#979797]">
                    BSR
                </p>
                
                <p class="inline-flex items-center">
                    <span class="bg-[#0FB600] text-white px-[0.2rem]">
                        #{{ props.data.category_bsr }}
                    </span>
                    <span class="px-1 truncate">
                       in {{props.data.main_category_name}}
                       <span class=" text-[#27C498]" v-if="props.data.category_bsr <=100" title="This product ranks in Top 100">
                        (Top 100)
                        </span>
                    </span>
                    
                    
                </p>
                
            </div>

        <div id="detailsButton" class="pt-3" v-if="!isDetail">
            <button @click="showDetailPage" class="text-[#27C498] border w-full text-md h-10 border-[#27C498] rounded-md hover:bg-[#27C498] hover:text-white">
                View More Details
            </button>
        </div>
           
        </div>
    </div>
  </div>
</template>


<style>

</style>