<script setup lang="ts">
const session = authClient.useSession()
</script>

<template>
  <div>
    <div v-if="!session?.data">
      loading...
    </div>
    <div>
      <pre>{{ session.data }}</pre>
      <Button
        v-if="session.data" @click="authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              $router.push('/sign-in')
            },
          },
        })"
      >
        Sign out
      </Button>
    </div>
  </div>
</template>
