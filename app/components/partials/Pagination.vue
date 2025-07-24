<script setup lang="ts">
const props = defineProps<{
  currentPage: number;
  totalPages: number;
  'class': String
}>();
const emit = defineEmits(['update:page']);

function goTo(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:page', page);
  }
}
</script>

<template>
  <div class="flex gap-2 items-center justify-center mt-6" :class="props.class">
    <UButton icon="i-heroicons-arrow-left" @click="goTo(currentPage - 1)" :disabled="currentPage <= 1" />
    <span class="text-sm font-medium">Page {{ currentPage }} of {{ totalPages }}</span>
    <UButton icon="i-heroicons-arrow-right" @click="goTo(currentPage + 1)" :disabled="currentPage >= totalPages" />
  </div>
</template>
