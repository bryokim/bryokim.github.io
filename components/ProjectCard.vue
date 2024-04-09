<script setup lang="ts">
defineProps<{
  title?: string;
  src?: string;
}>();
</script>

<template>
  <UCard
    :ui="{
      base:'backdrop-blur-sm rounded-lg shadow drop-shadow-md shadow-md',
      divide: 'divide-y-0',
      background: 'bg-gray-900/10 dark:bg-white/10',
      shadow: 'shadow',
      body: {
        background: '',
        base: '',
        padding: 'px-2 py-2 sm:p-2'
      },
    }"
  >
    <template #header v-if="title"> {{ title }} </template>

    <div><img v-if="src" :src="src" class="rounded-lg" /></div>

    <template #footer> <slot name="footer"></slot> </template>
  </UCard>
</template>
