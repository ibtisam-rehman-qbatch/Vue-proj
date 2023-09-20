<template>
    <div class="w-[45.125rem] h-[49.9rem] bg-white">
        <div class="p-4">
            <p class="font-bold text-xl text-[#272B41] p-3">
                Additional Details
            </p>
            <div class="inline-flex items-center py-2">
                <button class="flex justify-center w-[14.0625rem] text-[#27C498] border-b-2 border-[#27C498] text-xs p-2 font-semibold">
                    Price History
                </button>
                <button class="flex justify-center w-[14.0625rem] text-[#979797] border-b-2 border-[#E1E1E1B2] text-xs p-2 font-semibold">
                    Sales History
                </button>
                <button class="flex justify-center w-[14.0625rem] text-[#979797] border-b-2 border-[#E1E1E1B2] text-xs p-2 font-semibold">
                    Out of Stock History
                </button>
            </div>

            <div class="flex flex-row pt-4">
                <div>
                    <p class="text-[#979797] font-semibold text-xs py-2">
                        From
                    </p>
                    <input type="date" class="border text-sm w-[16.375rem] h-[2.25rem] rounded-md px-3 text-[#031625]">
                </div>

                <div class="px-6">
                    <p class="text-[#979797] font-semibold text-xs py-2">
                        To
                    </p>
                    <input type="date" class="border text-sm w-[16.375rem] h-[2.25rem] rounded-md px-3 text-[#031625]">
                </div>
              
                    <button class="w-[6.375rem] h-[2.25rem] bg-[#27C498] text-white rounded-md mt-8">
                        Filter Now
                    </button>
          

            </div>

            <div class="mt-4">
                <DetailsChart/>
            </div>

            <div class="mt-3">
                <p class="text-[#979797] font-semibold text-xs py-2">
                    Variations:
                </p>
                <p class="text-[#031625] text-sm border-b pb-3">
                    B0BSXS7NDG, C0VSXS7NDG, L0ACVK7NDG, P0BSXS7NDG, G1VSXS7NDG, J0BSXS7NDG
                </p>
            </div>
            <div class="mt-2">
                <p class="text-[#979797] font-semibold text-xs py-2">
                    Attributes Variations
                </p>
                <div class="text-sm border-b pb-3 ">
                    <div class="inline-flex items-center">
                        <div>
                        <span class="text-[#5A5F7D]">Color:</span> <span class="text-[#031625]">Red</span>,
                        <span class="text-[#5A5F7D]">Size:</span> <span class="text-[#031625]">Small</span>
                    </div>
                    <div class="mx-3 px-3 border-x">
                        <span class="text-[#5A5F7D]">Color:</span> <span class="text-[#031625]">Black</span>,
                        <span class="text-[#5A5F7D]">Size:</span> <span class="text-[#031625]">Medium</span>
                    </div>
                    <div>
                        <span class="text-[#5A5F7D]">Color:</span> <span class="text-[#031625]">Grey</span>,
                        <span class="text-[#5A5F7D]">Size:</span> <span class="text-[#031625]">Large</span>
                    </div>
                    </div>
                    
                </div>
            </div>


            <div class="mt-2 flex flex-row justify-between">
                <div>
                    <p class="text-[#979797] font-semibold text-xs py-2">
                        Dimensions
                    </p>
                    <div class="text-sm ">
                        <div class="inline-flex items-center">
                            <div>
                                <span class="text-[#5A5F7D]">Length:</span> <span class="text-[#031625]">23 in</span>   
                            </div>
                            <div class="mx-3 px-3 border-x">
                                <span class="text-[#5A5F7D]">Width:</span> <span class="text-[#031625]">23 in</span>
                            </div>
                            <div>
                                <span class="text-[#5A5F7D]">Height:</span> <span class="text-[#031625]">23 in</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="text-[#979797] font-semibold text-xs py-2">
                        Weight
                    </p>
                    <div class="text-sm ">
                        <span class="text-[#031625]">0.60 lbs</span>   
                    </div>
                </div>
                <div>
                    <p class="text-[#979797] font-semibold text-xs py-2">
                        Opportunity Score
                    </p>
                    <div class="text-xs bg-[#0FB6001A] rounded-md p-1 flex justify-center font-semibold">
                        <span class="text-[#0FB600]">4 High demand</span>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import DetailsChart from "./DetailsChart.vue"
</script>

<style>

</style>