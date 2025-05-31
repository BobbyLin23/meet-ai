<script lang="ts" setup>
import { AlertCircleIcon } from 'lucide-vue-next'

defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="py-4 px-8 flex flex-1 items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
      <AlertCircleIcon class="size-6 text-red-500" />
      <div class="flex flex-col gap-y-2 text-center">
        <h6 class="text-lg font-medium">
          {{ title }}
        </h6>
        <p class="text-sm">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
