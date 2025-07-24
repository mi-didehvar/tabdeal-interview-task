<script setup lang="ts">
import Button from '~/components/partials/Button.vue';
import type { Character, MarvelApiResponse } from '~/models';
const route = useRoute();
const characterId = route.params.id;

const { data, pending, error } = await useFetch<MarvelApiResponse<Character>>(
    `/api/character/${characterId}`
);

</script>
<template>
    <NuxtLayout>
        <template #header>
            <div class="flex flex-col sm:flex-row  mt-10 sm:items-center gap-12">
                <NuxtImg
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1l5fR_5J_LRooC8aw-PkMF8XJWK18bdikQQ&s"
                    class="size-[180px] aspect-square mb-4 rounded-lg" />
                <div class="flex flex-col">
                    <h1 class="text-2xl">Thor</h1>
                    <p class="my-4 text-xs">
                        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made,
                        the
                        enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile,
                        he's
                        quite smart and compassionate. He's self-assured, and he would never, ever stop fighting for a
                        worthwhile cause.
                    </p>
                    <div class="flex items-center gap-4 mb-8">
                        <Button class="bg-transparent border-1 border-white flex gap-2 items-center text-xs">
                            <UIcon name="i-lucide-circle-arrow-out-up-right" class="size-4" />
                            Details
                        </Button>
                        <Button class="bg-transparent border-1 border-white flex gap-2 items-center text-xs">
                            <UIcon name="i-lucide-circle-arrow-out-up-right" class="size-4" />
                            Wiki
                        </Button>
                        <Button class="bg-transparent border-1 border-white flex gap-2 items-center text-xs">
                            <UIcon name="i-lucide-circle-arrow-out-up-right" class="size-4" />
                            Comiclink
                        </Button>
                    </div>
                </div>
            </div>
        </template>
        <p>{{ $route.params.id }}</p>
    </NuxtLayout>
</template>

<style lang="scss"></style>