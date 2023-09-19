<script setup>
  import close from "../assets/svgs/close.svg"
  import chevronDown from "../assets/svgs/chevron-down.svg"
  import CheckboxComponent from "./CheckboxComponent.vue"
  import { Slider } from "ant-design-vue";
  import { useAuthStore } from '../store';
  import {useRouter, useRoute} from 'vue-router';
    import { ref } from "vue";
  const props = defineProps({
    hideFilters: Function,
    });

    const router = useRouter()
    const route = useRoute()
    const queryParams = route.query;
    const queryPriceRange=queryParams?.priceRange?.split(",")
    const queryNumberOfReviews = queryParams?.numberOfReviews?.split(",");
    const queryWeightRange= queryParams?.weightRange?.split(",")
    const queryDimensions = queryParams?.dimensions?.split(",");


    const minReview = ref(queryNumberOfReviews?.[0] || "");
    const maxReview = ref(queryNumberOfReviews?.[1] || "");
    const minPrice = ref(queryPriceRange?.[0] || "");
    const maxPrice = ref(queryPriceRange?.[1] || "");
    const minWeight = ref(queryWeightRange?.[0] || "");
    const maxWeight = ref(queryWeightRange?.[1] || "");
    const length = ref(queryDimensions?.[0] || "");
    const width = ref(queryDimensions?.[1] || "");
    const height = ref(queryDimensions?.[2] || "");
    const averageReviewRating = ref(parseInt(queryParams.averageReviewRating) || 0);


    const hasVideo = ref(queryParams.hasVideo==="true");
    const bulletsThreshold = ref(queryParams.bulletsThreshold ==="true");
    const hasVariations = ref(queryParams.hasVariations==="true");

    const handleSubmit= ()=>{
        let query = {}
        // priceRange
        if(minPrice.value || maxPrice.value) query.priceRange=`${minPrice.value},${maxPrice.value}`;
        if(minReview.value || maxReview.value) query.numberOfReviews=`${minReview.value},${maxReview.value}`;
        if(minWeight.value || maxWeight.value) query.weightRange=`${minWeight.value},${maxWeight.value}`;
        if(length.value || width.value || height.value) query.dimensions=`${length.value},${width.value},${height.value}`;
        if(averageReviewRating.value) query.averageReviewRating = `${averageReviewRating.value}`
        if(hasVideo.value) query.hasVideo = `${hasVideo.value}`
        if(bulletsThreshold.value) query.bulletsThreshold = `${bulletsThreshold.value}`
        if(hasVariations.value) query.hasVariations = `${hasVariations.value}`

        router.push({ query: { ...query } , name: "Products" });
        const queryString = new URLSearchParams({ ...query }).toString();
        useAuthStore.fetchProducts(queryString)
        props.hideFilters()
       
    }

   
</script>

<template>
    <div class="flex items-center justify-center min-h-screen shrink-0">
        <div class="w-[722px] h-[620px] border rounded-lg bg-white">
            <div class="inline-flex items-center w-full justify-between">
                <span class="font-semibold text-lg p-3">All Filters</span>
                <button  @click.prevent="cancel" @click="hideFilters">
                    <img :src="close" alt="" class="p-3">
                </button>
            </div>

            <div class="grid grid-cols-2 border-y">
                <div class="flex flex-col space-y-4 p-4">
                    <div id="noOfReviews" class=" text-sm">
                        <div class="py-1">
                            <p class="text-[#979797]">Number of Reviews</p>
                        </div>
                        <div class="flex justify-between">
                            <input type="Number" v-model="minReview" name="MinReview" id="MinReview" placeholder="Min" min="0" class="w-36 h-9 px-4 border rounded-md">
                            <input type="Number" v-model="maxReview" name="MaxReview" id="MaxReview" placeholder="Max" min="0" class="w-36 h-9 px-4 border rounded-md">

                        </div>
                    </div>

                    <div id="avgReviewRatings" class=" text-sm">
                        <div class="py-1">
                            <p class="text-[#979797]">Average Review Rating</p>
                        </div>
                        <Slider
                        name="averageReviewRating"
                        :max="5"
                        :min="0"
                        :defaultValue="3"
                        class="m-0"
                        v-model:value="averageReviewRating"
                        :track-style="{ 'background-color': '#27C498' }"
                        />
                        <!-- <input type="range" name="reviewRange" id="reviewRange" min="0" max="5" class="w-full bg-[#27C498]  h-1 appearance-none rounded-full mt-2"> -->
                        <div class="flex justify-between">
                            <p class="text-[#333] text-sm " id="rangeValue">0</p>
                            <p class="text-[#333] text-sm " id="rangeValue">5</p>
                        </div>
                    </div>
                    <div id="productDimensions" class=" text-sm">
                        <div class="py-1">
                            <p class="text-[#979797]">Product Dimensions (in)</p>
                        </div>
                        <div class="flex justify-between">
                            <input type="Number" v-model="length" name="Length" id="Length" min="0" placeholder="Length" class="w-24 h-9 px-4 border rounded-md">
                            <input type="Number" v-model="width" name="Width" id="Width" min="0" placeholder="Width" class="w-24 h-9 px-4 border rounded-md">
                            <input type="Number" v-model="height" name="Height" id="Height" min="0" placeholder="Height" class="w-24 h-9 px-4 border rounded-md">
                        </div>
                    </div>
                    <div id="businessCertification" class="text-sm">
                        <div class="py-1">
                            <p class="text-[#979797]">Small Business Certification</p>
                        </div>
                        <div class="inline-flex items-center ">

                            <select name="selectBusiness" id="selectBusiness" class="focus:outline-none w-72 text-[14px] py-[9px] h-[40px] pl-[16px] pr-[16px] rounded-l-md  border-y border-l appearance-none "
                            >
                            <option value="0">Select Small Business Certification</option>
                            </select>
                            <button for="selectBusiness">
                                <img :src="chevronDown" alt="" class="focus:outline-none text-[14px] py-[9px] px-3 h-[40px] rounded-r-md border-r border-y  bg-white">
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-lg p-3">Other Filters</p>
                        <div class="flex flex-col space-y-2">

                            <CheckboxComponent label="Listing has a video" @toggle-check="hasVideo=!hasVideo" :isBorder="false" name="hasVideo" :defaultValue="hasVideo"/>
                            <CheckboxComponent label="The product has variations" @toggle-check="hasVariations=!hasVariations"  :isBorder="false" name="hasVariations" :defaultValue="hasVariations"/>
                            <CheckboxComponent label="Description has 4+ bullet points"  @toggle-check="bulletsThreshold=!bulletsThreshold" :isBorder="false" name="bulletsThreshold" :defaultValue="bulletsThreshold"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col space-y-4 p-4">
                    <div id="priceRange" class=" text-sm">
                        <div class="py-1">
                            <p class="text-[#979797]">Price Range</p>
                        </div>
                        <div class="flex justify-between">
                            <input type="Number" name="MinPrice" v-model="minPrice" id="MinPrice" placeholder="Min" min="0" class="w-36 h-9 px-4 border rounded-md">
                            <input type="Number" name="MaxPrice" id="MaxPrice" v-model="maxPrice" placeholder="Max" min="0" class="w-36 h-9 px-4 border rounded-md">

                        </div>
                    </div>

                    <div id="activeSeller" class="text-sm w-full">
                        <div class="py-1">
                            <p class="text-[#979797]">Last Active Seller</p>
                        </div>
                        <div class="inline-flex items-center">

                            <select name="selectSeller" id="selectSeller" class="focus:outline-none w-72 text-[14px] py-[9px] h-[40px] pl-[16px] pr-[16px] rounded-l-md  border-y border-l appearance-none "
                            >
                            <option value="0">Last Active Seller</option>
                            </select>
                            <button for="selectSeller">
                                <img :src="chevronDown" alt="" class="focus:outline-none text-[14px] py-[9px] px-3 h-[40px] rounded-r-md border-r border-y  bg-white">
                            </button>
                        </div>
                    </div>

                    <div id="productWeight" class=" text-sm">
                        <div class="py-1">
                            <p class="text-[#979797]">Product Weight (lbs)</p>
                        </div>
                        <div class="flex justify-between">
                            <input type="Number" name="MinWeight" v-model="minWeight" id="MinWeight" placeholder="Min" min="0" class="w-36 h-9 px-4 border rounded-md">
                            <input type="Number" name="MaxWeight" v-model="maxWeight" id="MaxWeight" placeholder="Max" min="0" class="w-36 h-9 px-4 border rounded-md">

                        </div>
                    </div>

                    <div id="ipStatus" class="text-sm w-full">
                        <div class="py-1">
                            <p class="text-[#979797]">Intellectual Property (IP) Status</p>
                        </div>
                        <div class="inline-flex items-center">

                            <select name="selectIpStatus" id="selectIpStatus" class="focus:outline-none w-72 text-[14px] py-[9px] h-[40px] pl-[16px] pr-[16px] rounded-l-md  border-y border-l appearance-none "
                            >
                            <option value="0">Intellectual Property (IP) Status</option>
                            </select>
                            <button for="selectIpStatus">
                                <img :src="chevronDown" alt="" class="focus:outline-none text-[14px] py-[9px] px-3 h-[40px] rounded-r-md border-r border-y  bg-white">
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-end  mt-3">
                <div class="flex">
                    <button class="w-20 h-9 text-[#9299B8] m-2 border rounded-md"  @click.prevent="cancel"  @click="hideFilters">
                        Cancel
                    </button>
                    <button type="submit" @click="handleSubmit"  class="w-20 h-9 text-white m-2 mr-6 bg-[#27C498] border rounded-md text-sm">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<style  scoped>


</style>