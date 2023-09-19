<template>
  <div>
    <ul class="flex space-x-2">
      <li v-if="currentPage > 1" @click="goToPage(currentPage - 1)">
        <button class="px-3 py-2 bg-gray-200 hover:bg-gray-300">Previous</button>
      </li>
      <li v-for="page in totalPages" :key="page" @click="goToPage(page)">
        <button
          class="px-3 py-2 bg-gray-200 hover:bg-gray-300"
          :class="{ 'bg-indigo-500 text-white': currentPage === page }"
        >
          {{ page }}
        </button>
      </li>
      <li v-if="currentPage < totalPages" @click="goToPage(currentPage + 1)">
        <button class="px-3 py-2 bg-gray-200 hover:bg-gray-300">Next</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props= defineProps({
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    updatePageNum : Function
})
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../store';

const router = useRouter();
const route = useRoute();
const goToPage=(page)=>{
    
    if(page!=props.currentPage){
        router.push({ query: { ...route.query, pageNo: page } , name: "Products" });

        const query = new URLSearchParams({ ...route.query, pageNo: page }).toString();
        useAuthStore.fetchProducts(query)
        props.updatePageNum(page)
        window.scrollTo({
        top: 0});
    }
}

</script>

<style>

</style>