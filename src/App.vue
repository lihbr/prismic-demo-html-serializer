<template>
  <PrismicRichText
    v-if="home"
    :field="home.data.body"
    class="container mx-auto max-w-2xl py-16 space-y-2"
  />
</template>

<script setup lang="ts">
import { useSinglePrismicDocument } from '@prismicio/vue';

const { data: home } = useSinglePrismicDocument("home")
</script>