<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 shadow-md rounded-md w-96">
        <h2 class="text-2xl font-semibold mb-6">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              autocomplete="username"
              v-model="email"
              class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password"  class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              autocomplete="current-password"
              v-model="password"
              class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../store';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  
    const email = ref('');
    const password = ref('');
  
    const login = async () => {
       const isValid = await useAuthStore.login(email.value, password.value, router)
    };
  
    

  </script>
  
  <style>
  /* You can add custom styles here if needed */
  </style>
  