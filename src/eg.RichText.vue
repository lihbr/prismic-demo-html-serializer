<template>
  <PrismicRichText
    v-if="home"
    :field="home.data.body"
  />
</template>

<script setup lang="ts">
import { useSinglePrismicDocument, PrismicRichText } from '@prismicio/vue';

const { data: home } = useSinglePrismicDocument('home')
</script>
