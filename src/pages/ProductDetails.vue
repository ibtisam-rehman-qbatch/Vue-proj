<template>
    <div class="m-6">
        <DetailsHeader/>
      <div class="flex flex-row justify-between">
            <ProductCard :data="product" :isDetail="true"/>

            <AdditionalDetails/>
            
      </div>
    </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';
import DetailsHeader from '../components/DetailsHeader.vue';
import AdditionalDetails from '../components/AdditionalDetails.vue';
const product = {
            "id": "82114",
            "title": "MIULEE Pack of 4 Decorative Outdoor Pillow Covers Square Cushion Cases PU Coating Waterproof Throw Pillowcase Shell for Living Room Couch Sofa Garden Tent Park 16x16 Inch Light Green",
            "price": 17.99,
            "asin": "B086KZX338",
            "reviews": null,
            "reviews_count": null,
            "bsr": "2972638011",
            "category_bsr": "3",
            "main_category_id": 1055,
            "main_category_name": "in Men's T-Shirts",
            "category_id": null,
            "brand_id": "1478"
        }

</script>

<style>

</style>