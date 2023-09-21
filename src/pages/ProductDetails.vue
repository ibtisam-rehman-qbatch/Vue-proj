<template>
    <div class="m-6">
        <DetailsHeader/>
      <div class="flex flex-row justify-between">
            <ProductCard :data="useAuthStore.productDetails" :isDetail="true"  />

            <AdditionalDetails :data="useAuthStore.productDetails" v-if="Object.keys(useAuthStore.productDetails).length!==0"/>
            
      </div>
    </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';
import DetailsHeader from '../components/DetailsHeader.vue';
import AdditionalDetails from '../components/AdditionalDetails.vue';
import { onMounted } from 'vue';
import { useAuthStore } from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const queryParams = route.query;

const props = defineProps({
  id: String,
  data: Object,
})
  const productCardItems = [ "id","title","price","asin","reviews","reviews_count","bsr","category_bsr","main_category_id","main_category_name","category_id","brand_id"]
  const productCardData = {}
  
  onMounted(async ()=>{
    await useAuthStore.fetchProductDetails(props.id, queryParams.userId)

  //   productCardItems.forEach((itemName)=>{
  //   if(useAuthStore.productDetails.hasOwnProperty(itemName)){
  //     productCardData[itemName] = useAuthStore.productDetails[itemName];
  //    }
  //  })
    
  })
</script>

<style>

</style>