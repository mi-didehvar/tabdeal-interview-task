<script setup lang="ts">
import Button from '~/components/partials/Button.vue';
</script>

<template>
    <div class="flex">
        <header>
            <UContainer>
                <Button class="my-4">Logo</Button>
                <slot name="header"></slot>
            </UContainer>
        </header>
        <main>

        </main>
    </div>
</template>