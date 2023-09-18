  <script setup>
     import ProductCard from '../components/ProductCard.vue';
     import FilterSection from '../components/FilterSection.vue';
     import MoreFiltersCard from '../components/MoreFiltersCard.vue';
      import { ref } from 'vue';

      // import { useAuthStore } from '../store';

      // const data = useAuthStore()
      // console.log(data.accessToken)
      // data.setAccessToken("ABBBCDD")
      // console.log(data.accessToken)

     const allProducts = ref([
          {
            image: "../assets/images/cardImg.png",
            description: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
            price: '20.00',
            rating: 4,
            reviewCount: '25,980',
            topN: 3,
            isChecked: false
          },
          {
            image: "../assets/images/cardImg.png",
            description: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
            price: '20.00',
            rating: 2,
            reviewCount: '25,280',
            topN: 3,
            isChecked: false
          },
          {
            image: "../assets/images/cardImg.png",
            description: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
            price: '20.00',
            rating: 4,
            reviewCount: '25,280',
            topN: 3,
            isChecked: false
          },
          {
            image: "../assets/images/cardImg.png",
            description: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
            price: '20.00',
            rating: 4,
            reviewCount: '25,280',
            topN: 3,
            isChecked: false
          },
          {
            image: "../assets/images/cardImg.png",
            description: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
            price: '20.00',
            rating: 4,
            reviewCount: '25,280',
            topN: 3,
            isChecked: false
          },
          {
            image: "../assets/images/cardImg.png",
            description: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
            price: '20.00',
            rating: 4,
            reviewCount: '25,280',
            topN: 3,
            isChecked: false
          },
          {
            image: "../assets/images/cardImg.png",
            description: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
            price: '20.00',
            rating: 4,
            reviewCount: '25,280',
            topN: 3,
            isChecked: false
          },
          {
            image: "../assets/images/cardImg.png",
            description: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
            price: '20.00',
            rating: 4,
            reviewCount: '25,280',
            topN: 3,
            isChecked: false
          }
        ])

      const showMoreFilters = ref(false);
      const showExport = ref(0);

      const displayFilters = ()=>{
        showMoreFilters.value=true
     }

      const hideFilters = ()=>{
          showMoreFilters.value=false
      }

      const handleExport = (newVal)=>{
        newVal>0 ? showExport.value++ : showExport.value--;
       
      }
     

  </script>

<template>
                    
  <div class="mx-8">

    
    <FilterSection :displayFilters="displayFilters" :showExport="showExport"/>

   
    <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4" >
      <div v-for="(product, index) in allProducts" :key="index">
    
        <ProductCard :data="product" @export-button = "handleExport"/>
      </div>
     
    </div>

    <div class="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center  bg-black bg-opacity-50"  v-if="showMoreFilters">
      <MoreFiltersCard :hideFilters="hideFilters"/>
    </div>

  </div>
    
</template>


<style>

</style>