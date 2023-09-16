<script setup>
import starFilled from "../assets/svgs/success-star.svg"
import starUnfilled from "../assets/svgs/unsuccess-star.svg"

import { ref } from 'vue'

const props = defineProps({
  filledStars: Number
})

const filledStars = ref(props.filledStars)
</script>

<template>
  <div class="inline-flex items-center">
    <template v-for="star in Math.min(filledStars, 5)" :key="star">
      <img :src="starFilled" alt="">
    </template>
    <template v-for="star in Math.max(0, 5 - filledStars)" :key="'unfilled' + star">
      <img :src="starUnfilled" alt="">
    </template>
  </div>
</template>