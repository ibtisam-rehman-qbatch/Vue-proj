  <script setup>
     import ProductCard from '../components/ProductCard.vue';
     import FilterSection from '../components/FilterSection.vue';
     import MoreFiltersCard from '../components/MoreFiltersCard.vue';
      import { ref, watchEffect,onMounted, watch } from 'vue';
      import { useAuthStore } from '../store';
      import { useRoute, useRouter } from 'vue-router';
      import Pagination from '../components/Pagination.vue';
      import NotFound from '../components/NotFound.vue';


      const showMoreFilters = ref(false);
      const showExport = ref(0);

      // const allProducts= ref([]);
      const route = useRoute();
      const router = useRouter()

      let queryParams = route.query;
      const currentPage = ref(parseInt(queryParams["pageNo"]) || 1);
      let queryString = new URLSearchParams(queryParams).toString();

     
      watch(route,  async (updatedRoute, prevRoute)=>{
      queryParams = updatedRoute.query;
      if (Number(queryParams.pageNo) < 0 || Number(queryParams.pageNo) > useAuthStore.totalPages ) {currentPage.value= -1;return;}
      currentPage.value = Number(queryParams.pageNo) || 1;
      queryString = new URLSearchParams(queryParams).toString();
      await useAuthStore.fetchProducts(queryString);
      // allProducts.value = useAuthStore.allProducts;
      })

      onMounted(async()=>{
        await useAuthStore.fetchProducts(queryString);
      })


      const displayFilters = ()=>{
        showMoreFilters.value=true
     }

      const hideFilters = ()=>{
          showMoreFilters.value=false
      }

      const handleExport = (newVal)=>{
        newVal>0 ? showExport.value++ : showExport.value--;
       
      }

    const updatePageNum = (page)=>{
      currentPage.value = page;
    }

  </script>

<template>
                    
  <div class="mx-8" v-if="currentPage>0 && currentPage<=useAuthStore.totalPages">

    
    <FilterSection :displayFilters="displayFilters" :showExport="showExport"/>

   
    <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4" >
      <div v-for="(product, index) in useAuthStore.allProducts" :key="index">
    
        <ProductCard :data="product" @export-button = "handleExport"/>
      </div>
     
    </div>

    <div class="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center  bg-black bg-opacity-50"  v-if="showMoreFilters">
      <MoreFiltersCard :hideFilters="hideFilters"/>
    </div>

    <Pagination :currentPage="currentPage" :totalPages="useAuthStore.totalPages" :updatePageNum="updatePageNum" />

  </div>
  <div v-else>
    <NotFound/>
  </div>
    
</template>


<style>

</style>