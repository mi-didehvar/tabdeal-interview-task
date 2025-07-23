<script setup lang="ts">
const props = defineProps<{
    'class': String
}>()
</script>
<template>
    <button :class="props.class" class="bg-red-primary rounded-sm py-[7px] px-[9.5px] text-white cursor-pointer">
        <slot/>
    </button>
</template>