<template lang="">
    <section class="flex items-center h-screen">
      <div className="flex flex-col items-center max-w-sm mx-auto text-center">
        <img src="../assets/svgs/notFoundIcon.svg" alt="warininig Icon" />
  
        <h1
          className=" text-2xl font-semibold  md:text-3xl text-gray-800 dark:text-gray-200 mt-6"
        >
          Data not Found
        </h1>
  
        <p className="mt-4 text-gray-800 dark:text-gray-200 w-[500px]">
          Either you typed a wrong URL, or you followed a bad link
        </p>
        <button @click="router.push({name: 'Products' })" class="text-white bg-[#27C498] p-2 px-3 m-4 rounded-md" >Back to Home</button>
      </div>
    </section>
  </template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

</script>