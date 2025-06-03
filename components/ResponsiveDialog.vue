<script lang="ts" setup>
import { useSidebar } from './ui/sidebar'

defineProps<{
  title: string
  description: string
}>()
const open = defineModel<boolean>()
const { isMobile } = useSidebar()
</script>

<template>
  <template v-if="isMobile">
    <Drawer v-model:open="open">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {{ title }}
          </DrawerTitle>
          <DrawerDescription>
            {{ description }}
          </DrawerDescription>
        </DrawerHeader>
        <div class="p-4">
          <slot />
        </div>
      </DrawerContent>
    </Drawer>
  </template>
  <template v-else>
    <Dialog v-model:open="open" @update:open="open = $event">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {{ title }}
          </DialogTitle>
          <DialogDescription>
            {{ description }}
          </DialogDescription>
        </DialogHeader>
        <div>
          <slot />
        </div>
      </DialogContent>
    </Dialog>
  </template>
</template>
