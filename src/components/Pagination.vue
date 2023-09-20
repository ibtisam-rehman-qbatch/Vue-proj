<template>
  <div>

    <div class="mr-0 mt-5 flex flex-col items-center justify-center pb-10 sm:items-end">
      <nav aria-label="Page navigation example bg-white dark:bg-gray-700">
        <ul class="inline-flex -space-x-px text-sm">
          <li key="first">
            <button
              type="button"
              @click=" currentPage > 1 && handlePageNoClick(1)"
              class="hidden h-8 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-1 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300 sm:px-3 md:flex"
             >
              First
            </button>
            
            <button
              type="button"
              @click=" currentPage > 1 && handlePageNoClick(1)"
              class="flex h-8 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-1 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300 sm:px-3 md:hidden"
            >
            &lt;&lt;
            </button>
          </li>
          <!-- <button @click="changePage(pageNumbers[0] - 1)" class="flex h-8 items-center justify-center px-3 border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            &lt;&lt;
          </button> -->
          <div v-for="i in pageNumbers" :key="i">
            <button
            @click="handlePageNoClick(i)"
            :class="{
              'flex h-8 items-center justify-center px-3' : true,
              'border border-gray-300 bg-blue-50 text-blue-custom hover:bg-blue-100 hover:text-blue-custom dark:border-gray-700 dark:bg-blue-900 dark:hover:bg-blue-950 dark:hover:text-blue-700' : currentPage===i,
              'border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300': currentPage!==i
             }"
            >
            {{ i }}
            </button>
          </div>
          <!-- <button class="flex h-8 items-center justify-center px-3 border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            &gt;&gt;
          </button> -->
          <li key="last">
            <button
              type="button"
              @click="currentPage < totalPages && handlePageNoClick(totalPages)"
              
              class="md:flex hidden h-8 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-1 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300 sm:px-3"
            >
              Last
            </button>
            <button
              type="button"
              @click="currentPage < totalPages && handlePageNoClick(totalPages)"
              class="md:hidden flex h-8 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-1 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300 sm:px-3"
            >
              {{">>"}}
            </button>
          </li>
        </ul>
      </nav>
      <span class="mt-3 text-sm text-gray-700 dark:text-gray-200">
        Page Number :
        <span class="font-semibold text-blue-custom ">{{currentPage}}</span>
        out of
        <span class="font-semibold text-blue-custom ">{{totalPages}}</span>
      </span>
    </div>
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
import { watchEffect, ref,computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../store';



const router = useRouter();
const route = useRoute();



    const pageNumbers = computed(() => {
    const pages = [];
    const visiblePageCount = 5; // Number of visible page buttons
    const halfVisibleCount = Math.floor(visiblePageCount / 2);

    let startPage = props.currentPage - halfVisibleCount;
    let endPage = props.currentPage + halfVisibleCount;

    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(props.totalPages, visiblePageCount);
    }

    if (endPage > props.totalPages) {
        endPage = props.totalPages;
        startPage = Math.max(1, props.totalPages - visiblePageCount + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return pages;
});



const handlePageNoClick=(page)=>{
    
    if(page!=props.currentPage){
        router.push({ query: { ...route.query, pageNo: page } , name: "Products" });

        const query = new URLSearchParams({ ...route.query, pageNo: page }).toString();
        useAuthStore.fetchProducts(query)
        window.scrollTo({
        top: 0});

        // emit("page-changed", page)
    }
}


</script>

<style>

</style>