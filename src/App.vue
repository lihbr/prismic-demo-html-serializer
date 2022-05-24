<template>
  <div
    v-html="html"
    class="container mx-auto max-w-2xl py-16 space-y-2"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSinglePrismicDocument } from '@prismicio/vue';
import { asHTML } from '@prismicio/helpers';

import { htmlSerializer } from "./htmlSerializer";

const { data: home } = useSinglePrismicDocument('home');

const html = computed(() => {
  if (!home.value) {
    return '';
  }
  
  return asHTML(home.value.data.body, null, htmlSerializer);
})
</script>