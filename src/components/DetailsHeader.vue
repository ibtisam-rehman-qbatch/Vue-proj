<script setup>
   
    import pinLocation from "../assets/svgs/pin-location.svg"
    import amazon from "../assets/svgs/amazon.svg"
    import heart from "../assets/svgs/heart.svg"
  
    import arrowBack from "../assets/svgs/arrow-back.svg"
    import Button from "../assets/svgs/Button.vue"

    import { useRouter } from "vue-router"

    const props = defineProps({
        displayFilters: Function,
        showExport: Number,
    });

    const router = useRouter();

    
</script>


<template>
    <div class="flex items-center justify-between my-6  " >
        <div class="inline-flex items-center space-x-2">
            <button @click="router.go(-1)" title="Go Back">
                <img :src="arrowBack" alt="" >
            </button>
            <span class="font-bold text-2xl text-[#272B41]  ">
                Product Details
            </span>
        </div>
      
       
        <div class="inline-flex items-center space-x-4">

            <Button label="Add to Favorites" :isFilled="false">
                <img :src="heart" alt="" class="pr-2">
            </Button>
            <Button label="View on Amazon" :isFilled="false">
                <img :src="amazon" alt="" class="pr-2">
            </Button>
            <Button label="Track this Product" :isFilled="true">
                <img :src="pinLocation" alt="" class="pr-2">
            </Button>

             
        </div>
    </div>
  
</template>


<style>

</style>