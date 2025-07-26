<script setup lang="ts">
import Button from '~/components/partials/Button.vue';
</script>

<template>
    <div class="h-screen overflow-y-auto flex flex-col bg-gray-primary text-white pb-4">
        <header class="bg-header-gradient">
            <UContainer>
                <Button class="my-4">Logo</Button>
                <slot name="header"></slot>
            </UContainer>
        </header>
        <UContainer class="py-8 h-full">
            <slot />
        </UContainer>
    </div>
</template>