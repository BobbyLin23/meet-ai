<script lang="ts" setup>
const { $trpc } = useNuxtApp()

const { data, pending, error } = await $trpc.agents.getMany.useQuery()
</script>

<template>
  <template v-if="pending">
    <LoadingState title="Loading Agents" description="This may take a few seconds..." />
  </template>
  <template v-else-if="error">
    <ErrorState title="Failed to load agents" description="Please try again later..." />
  </template>
  <div v-else>
    {{ JSON.stringify(data, null, 2) }}
  </div>
</template>
