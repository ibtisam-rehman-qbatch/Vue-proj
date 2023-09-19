  <script setup>
     import ProductCard from '../components/ProductCard.vue';
     import FilterSection from '../components/FilterSection.vue';
     import MoreFiltersCard from '../components/MoreFiltersCard.vue';
      import { ref, watchEffect,onMounted } from 'vue';
      import { useAuthStore } from '../store';
      import { useRoute } from 'vue-router';


      const showMoreFilters = ref(false);
      const showExport = ref(0);
      const allProducts= ref([]);
      const route = useRoute();

      const queryParams = route.query;



      watchEffect(async()=>{
        console.log("inside watcheffect")
      await useAuthStore.fetchProducts(queryParams);
      allProducts.value = useAuthStore.allProducts;

    })
    
      // watchEffect(() => {
      //    useAuthStore.fetchProducts();
      //   });
      //   allProducts= useAuthStore.allProducts;

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