<template>
    <div  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded-md shadow-md text-center">
        <p class="text-lg font-semibold mb-4">Confirm Logout</p>
        <p class="mb-4">Are you sure you want to log out?</p>
        <div class="flex justify-center">
          <button
            class="px-4 py-2 bg-red-500 text-white rounded-md mr-4 hover:bg-red-600"
            @click="logout"
          >
            Logout
          </button>
          <button
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            @click="cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  const props = defineProps({
    logout : Function,
    cancel: Function,
  })

  

      
  
  </script>
  
  <style scoped>
  /* Add custom styles for the confirmation dialog if needed */
  </style>
  