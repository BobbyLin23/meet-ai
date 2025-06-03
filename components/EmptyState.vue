<script lang="ts" setup>
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <NuxtImg src="/empty.svg" alt="Empty" height="240" width="240" />
    <div class="flex flex-col gap-y-6 text-center max-w-md mx-auto">
      <h6 class="text-lg font-medium">
        {{ title }}
      </h6>
      <p class="text-sm text-muted-foreground">
        {{ description }}
      </p>
    </div>
  </div>
</template>
