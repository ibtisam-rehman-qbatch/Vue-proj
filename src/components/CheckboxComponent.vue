<script setup>
    const props = defineProps({
    label: String,
    isBorder: {
        type: Boolean,
        default: true 
    },
    defaultValue : Boolean
    });
    const emit = defineEmits(["toggleCheck"])
</script>
<template lang="">
    <label class="flex h-[20px] cursor-pointer items-center">
      <input type="checkbox" @click="emit('toggleCheck')" class="w-[0px] h-[0px]"  :checked="defaultValue" />
      <span
        :class="{
            'checkmark input-checked:bg-[#27C498] flex items-center justify-center h-full w-[20px] border rounded-md' : true,
            'border-[#27C498]': props.isBorder
            }"
      >
        <img
          src="../assets/svgs/check.svg"
          alt=""
          class="h-[15px] w-[15px]"
        />
      </span>
      <span class="text-[#031625] text-[14px] ml-[6px]">{{ props.label }}</span>
    </label>
  </template>
  
  <style scoped>
  input:checked ~ .checkmark {
    @apply bg-[#27C498];
  }
  </style>