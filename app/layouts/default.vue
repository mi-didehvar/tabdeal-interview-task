<script setup lang="ts">
import Button from '~/components/partials/Button.vue';
</script>

<template>
    <div class="h-screen flex flex-col bg-gray-primary text-white">
        <header class="bg-black">
            <UContainer>
                <Button class="my-4">Logo</Button>
                <slot name="header"></slot>
            </UContainer>
        </header>
        <UContainer class="py-8 h-full overflow-y-auto">
            <slot />
        </UContainer>
    </div>
</template>