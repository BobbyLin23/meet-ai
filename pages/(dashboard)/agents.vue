<script lang="ts" setup>
import { columns } from '~/components/agents/columns'

const { $trpc } = useNuxtApp()

const { data, pending, error } = await $trpc.agents.getMany.useQuery()
</script>

<template>
  <AgentsListHeader />
  <template v-if="pending">
    <LoadingState title="Loading Agents" description="This may take a few seconds..." />
  </template>
  <template v-else-if="error">
    <ErrorState title="Failed to load agents" description="Please try again later..." />
  </template>
  <div v-else class="flex-1 gap-y-4 flex flex-col pb-4 px-4 md:px-8">
    <AgentsDataTable :data="(data || []).map(agent => ({ ...agent, meetingCount: 5 }))" :columns="columns" />
    <EmptyState v-if="!data?.length" title="No agents found" description="Create an agent to get started" />
  </div>
</template>
