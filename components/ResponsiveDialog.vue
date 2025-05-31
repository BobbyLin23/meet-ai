<script lang="ts" setup>
import { useSidebar } from './ui/sidebar'

defineProps<{
  title: string
  description: string
  open: boolean
}>()

const { isMobile } = useSidebar()
</script>

<template>
  <template v-if="isMobile">
    <Drawer :open="open">
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
    <Dialog :open="open">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {{ title }}
          </DialogTitle>
          <DialogDescription>
            {{ description }}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
      <div class="p-4">
        <slot />
      </div>
    </Dialog>
  </template>
</template>
