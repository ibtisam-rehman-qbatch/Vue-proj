  <script setup>
     import ProductCard from '../components/ProductCard.vue';
     import FilterSection from '../components/FilterSection.vue';
  </script>

<template>
 
  <div class="mx-6">
    <FilterSection/>
    <div class="grid grid-cols-4">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  </div>
    
</template>


<style>

</style>