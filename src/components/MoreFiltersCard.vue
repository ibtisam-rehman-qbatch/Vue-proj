<script setup>
  import close from "../assets/svgs/close.svg"
  import chevronDown from "../assets/svgs/chevron-down.svg"
  import CheckboxComponent from "./CheckboxComponent.vue"
  import { Slider } from "ant-design-vue";
  const props = defineProps({
    hideFilters: Function,
    });
    
</script>

<template>
    <form class="flex items-center justify-center min-h-screen shrink-0">
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
                            <input type="Number" name="Min" id="Min" placeholder="Min" min="0" class="w-36 h-9 px-4 border rounded-md">
                            <input type="Number" name="Max" id="Max" placeholder="Max" min="0" class="w-36 h-9 px-4 border rounded-md">

                        </div>
                    </div>

                    <div id="avgReviewRatings" class=" text-sm">
                        <div class="py-1">
                            <p class="text-[#979797]">Average Review Rating</p>
                        </div>
                        <Slider
                        :max="5"
                        :min="1"
                        :defaultValue="3"
                        class="m-0"
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
                            <input type="Number" name="Length" id="Length" min="0" placeholder="Length" class="w-24 h-9 px-4 border rounded-md">
                            <input type="Number" name="Width" id="Width" min="0" placeholder="Width" class="w-24 h-9 px-4 border rounded-md">
                            <input type="Number" name="Height" id="Height" min="0" placeholder="Height" class="w-24 h-9 px-4 border rounded-md">
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

                            <CheckboxComponent label="Listing has a video" :isBorder="false"/>
                            <CheckboxComponent label="The product has variations" :isBorder="false"/>
                            <CheckboxComponent label="Description has 4+ bullet points" :isBorder="false"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col space-y-4 p-4">
                    <div id="priceRange" class=" text-sm">
                        <div class="py-1">
                            <p class="text-[#979797]">Price Range</p>
                        </div>
                        <div class="flex justify-between">
                            <input type="Number" name="Min" id="Min" placeholder="Min" min="0" class="w-36 h-9 px-4 border rounded-md">
                            <input type="Number" name="Max" id="Max" placeholder="Max" min="0" class="w-36 h-9 px-4 border rounded-md">

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
                            <input type="Number" name="Min" id="Min" placeholder="Min" min="0" class="w-36 h-9 px-4 border rounded-md">
                            <input type="Number" name="Max" id="Max" placeholder="Max" min="0" class="w-36 h-9 px-4 border rounded-md">

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
                    <button type="submit" class="w-20 h-9 text-white m-2 mr-6 bg-[#27C498] border rounded-md text-sm">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>


<style  scoped>


</style>