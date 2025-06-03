<script lang="ts" setup>
import { PlusIcon } from 'lucide-vue-next'

const isDialogOpen = ref(false)
</script>

<template>
  <div class="p-4 md:px-8 flex flex-col gap-y-4">
    <div class="flex items-center justify-between">
      <h5 class="font-medium text-lg">
        My Agents
      </h5>
      <Button @click="() => isDialogOpen = true">
        <PlusIcon />
        New Agents
      </Button>
    </div>
  </div>
  <AgentsNewAgentDialog :open="isDialogOpen" @update:open="isDialogOpen = $event" />
</template>
