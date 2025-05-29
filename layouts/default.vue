<script lang="ts" setup>

</script>

<template>
  <SidebarProvider>
    <DashboardSidebar />
    <main class="size-screen flex flex-col bg-muted">
      <DashboardNavbar />
      <slot />
    </main>
  </SidebarProvider>
</template>
