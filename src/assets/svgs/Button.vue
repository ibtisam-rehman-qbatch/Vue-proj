<template>
        <button  :class="{'inline-flex items-center justify-center border h-[2.5rem] w-[11rem] text-md rounded-md  text-sm': true,
        'bg-[#27C498] text-white': isFilled,
        'text-[#27C498] border-[#27C498] bg-white': !isFilled
    }">
            <slot/> {{label}}
            </button>
</template>

<script setup>
const props = defineProps({
    isFilled : {
       type: Boolean,
       default: false,
    },
    label: String
})
</script>

<style>

</style>