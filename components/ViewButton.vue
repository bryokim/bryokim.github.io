<script setup lang="ts">
defineProps<{
  to: string;
  label?: string;
}>();
</script>

<template>
  <UButton
    :to="to"
    target="_blank"
    :label="label ? label : 'View project'"
    color="sky"
    variant="soft"
    block
  />
</template>
