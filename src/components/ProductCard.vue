<script setup>
import successStar from "../assets/svgs/success-star.svg"
import unSuccessStar from "../assets/svgs/unsuccess-star.svg"
import chevronDown from "../assets/svgs/chevron-down.svg"

</script>
<template>
  <div class="w-[252px] h-[446px] bg-white m-3">
    <div class="flex flex-col space-y-4 p-4">
        <div id="cardPoster" class="w-[220px] h-[125px]">
            <div class="flex">
                <input type="checkbox" class="form-checkbox accent-[#27C498] text-[#27C498] border-[#27C498] h-6 w-6 rounded-md focus:ring-[#27C498]">
                <img src="../assets/images/cardImg.png"/>
            </div>
        </div>
            <hr/>
        <div class="flex flex-col space-y-2">
          <p id="cardIntro" class="text-sm font-poppins">
                  Amazon Essentials Men's Short Sleeve Crew neck T-Shirt
          </p>

            <div id="priceSection" class="flex flex-col space-y-0.5">
                    <p class="text-[#979797] text-xs">
                        Price
                    </p>
                    <p class=" text-2xl">
                        $20.00
                    </p>
            </div>

            <div id="reviewsSection" class="text-sm flex flex-col space-y-0.5">

                <p class="text-[#979797]">
                    Reviews
                </p>
                <div class="inline-flex items-center">
                    <img :src="successStar"/>
                    <img :src="successStar"/>
                    <img :src="successStar"/>
                    <img :src="successStar"/>
                    <img :src="unSuccessStar"/>
                    <img :src="chevronDown" class="px-3"/>
                    <p class="text-[#27C498]">25,280</p>
                </div>
                
            </div>

            <div id="BSRSection" class="text-sm flex flex-col space-y-0.5">
                <p class="text-[#979797]">
                    BSR
                </p>
                
                <p>
                    <span class="bg-[#0FB600] text-white">
                        #3
                    </span>
                    <span class="pl-1">
                        in Men's T-Shirts
                    </span>
                    <span class=" text-[#27C498]">
                        (Top 100)
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