<template>
    <div class="flex flex-col flex-wrap ">
        <div v-for="(value, index) in filters" :key="index">
            {{ value }}
        </div>
    </div>
  <!-- <input
                    class="appearance-none checked:bg-[#27C498] border-[1px] border-[#C6D0DC] checked:border-transparent h-4 w-4 rounded-full"
                    type="radio"
                    :checked="false"
                    v-model="selectedFilter"
                    /> -->
</template>

<script setup>
const filters = [
  'All Departments',
  'Arts & Crafts',
  'Automotive',
  'Baby',
  'Beauty & Personal Care',
  'Books',
  `Boys' Fashion`,
  'Computers',
  'Deals',
  'Digital Music',
  'Electronics',
  `Girls' Fashion`,
  'Health & Household',
  'Home & Kitchen',
  'Industrial & Scientific',
  'Kindle Store',
  'Luggage',
  `Men's Fashion`,
  'Movies & TV',
  'Music, CDs, & Vinyl',
  'Pet Supplies',
  'Prime Video',
  'Software',
  'Sports & Outdoors',
  'Tools & Home Improvement',
  'Toys & Games',
  'Video Games',
  "Women's Fashion"
]
</script>

<style>

</style>