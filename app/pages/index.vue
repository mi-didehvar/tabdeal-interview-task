<script setup lang="ts">
import Button from '~/components/partials/Button.vue';
import type { Character, MarvelApiDataContainer } from '~/models';
const route = useRoute()
const name = ref('');
const limit = 12;
const page = ref(Number(route.query.page) || 1);

const { data, pending, refresh, error } = useAsyncData(
    'characters',
    async () => {
        const res = await $fetch('/api/characters', {
            query: {
                name: name.value,
                page: page.value,
                limit
            },
        });

        return res.data as MarvelApiDataContainer<Character>;
    }
);
</script>

<template>
    <NuxtLayout>
        <template #header>
            <form class="bg-gray-primary p-4 rounded-lg flex mb-6 gap-4">
                <input type="search" placeholder="Search for characters..." v-model="name"
                    class="flex-1 rounded-sm bg-gray-light px-4 py-3 outline-none placeholder:text-white" />
                <Button type="submit" class="w-12 flex items-center justify-center" @click.prevent="refresh">
                    <UIcon name="i-lucide-search" class="size-4" />
                </Button>
            </form>
        </template>
        <template v-if="pending">
            Loading...
        </template>
        <template v-else-if="error">
            Error...
        </template>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink v-for="hero in data?.results" :key="hero.id"
                :to="{ name: 'character-id', params: { id: hero.id } }">
                <LazyCard class="flex flex-col hover:shadow-xl hover:cursor-pointer">
                    <NuxtImg :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
                        class="flex-1 mb-4 rounded-lg" />
                    {{ hero.name }}
                </LazyCard>
            </NuxtLink>
        </div>

        <Pagination v-if="data" :current-page="page" :total-pages="Math.ceil(data.total / limit)"
            @update:page="page = $event" />
    </NuxtLayout>
</template>