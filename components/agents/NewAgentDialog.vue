<script lang="ts" setup>
defineProps<{
  open: boolean
}>()
const emit = defineEmits<{
  'update:open': [value: boolean]
}>()
</script>

<template>
  <ResponsiveDialog
    :open="open"
    title="New Agent"
    description="Create a new agent"
    @update:open="emit('update:open', $event)"
  >
    <AgentsForm @cancel="emit('update:open', false)" />
  </ResponsiveDialog>
</template>
