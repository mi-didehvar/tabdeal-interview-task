<script setup lang="ts">
import Button from '~/components/partials/Button.vue';
import type { Character, MarvelApiResponse } from '~/models';
import type { Comic } from '~/models/comic';
const route = useRoute();
const characterId = route.params.id;

const { data, pending, error } = await useFetch<MarvelApiResponse<Character>>(
    `/api/character/${characterId}`
);

const { data: comics } = await useFetch<MarvelApiResponse<Comic>>(
    `/api/character/${characterId}/comics`
);

const heroItem = computed(() => {
    return data.value?.data.results[0]
})
</script>
<template>
    <NuxtLayout>
        <template #header>
            <div class="flex flex-col sm:flex-row  mt-10 sm:items-center gap-12">
                <NuxtImg :src="`${heroItem?.thumbnail.path}.${heroItem?.thumbnail.extension}`"
                    class="size-[180px] aspect-square mb-4 rounded-lg" />
                <div class="flex flex-col">
                    <h1 class="text-2xl">{{ heroItem?.name }}</h1>
                    <p class="my-4 text-xs">
                        {{ heroItem?.description }}
                    </p>
                    <div class="flex items-center gap-4 mb-8">
                        <NuxtLink v-if="heroItem?.urls.find(x => x.type === 'detail')" external
                            :to="heroItem?.urls.find(x => x.type === 'detail')?.url"><Button
                                class="bg-transparent border-1 border-white flex gap-2 items-center text-xs">
                                <UIcon name="i-lucide-circle-arrow-out-up-right" class="size-4" />
                                Details
                            </Button>
                        </NuxtLink>

                        <NuxtLink v-if="heroItem?.urls.find(x => x.type === 'wiki')" external
                            :to="heroItem?.urls.find(x => x.type === 'wiki')?.url">
                            <Button class="bg-transparent border-1 border-white flex gap-2 items-center text-xs">
                                <UIcon name="i-lucide-circle-arrow-out-up-right" class="size-4" />
                                Wiki
                            </Button>
                        </NuxtLink>

                        <NuxtLink v-if="heroItem?.urls.find(x => x.type === 'comiclink')" external
                            :to="heroItem?.urls.find(x => x.type === 'comiclink')?.url">
                            <Button class="bg-transparent border-1 border-white flex gap-2 items-center text-xs">
                                <UIcon name="i-lucide-circle-arrow-out-up-right" class="size-4" />
                                Comiclink
                            </Button>
                        </NuxtLink>

                    </div>
                </div>
            </div>
        </template>
        <div>
            <span>Comics</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <span v-for="comic in heroItem?.comics.items" :key="comic.name" class="p-2 border-1">{{ comic.name
                    }}</span>
            </div>
        </div>
        <div class="mt-4">
            <span>Stories</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <span v-for="story in heroItem?.stories.items" :key="story.name" class="p-2 border-1">{{ story.name
                    }}</span>
            </div>
        </div>
    </NuxtLayout>
</template>

<style lang="scss"></style>