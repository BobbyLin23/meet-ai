<script lang="ts" setup>

</script>

<template>
  <SidebarProvider>
    <DashboardSidebar />
    <main class="w-full flex-1 flex flex-col bg-muted">
      <DashboardNavbar />
      <slot />
    </main>
  </SidebarProvider>
</template>
