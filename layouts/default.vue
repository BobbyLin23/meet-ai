<script lang="ts" setup>

</script>

<template>
  <SidebarProvider>
    <DashboardSidebar />
    <main class="size-screen flex flex-col bg-muted">
      <slot />
    </main>
  </SidebarProvider>
</template>
