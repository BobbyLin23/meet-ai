<script lang="ts" setup>
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from 'lucide-vue-next'

const router = useRouter()

const session = authClient.useSession()

async function handleLogout() {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push('/sign-in')
      },
    },
  })
}
</script>

<template>
  <template v-if="!session.isPending && session.data?.user">
    <DropdownMenu>
      <DropdownMenuTrigger class="rounded-lg border border-border/10 p-3 w-full flex gap-1 items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
        <Avatar v-if="session.data.user.image">
          <AvatarImage :src="session.data.user.image" :alt="session.data.user.name || 'User Avatar'" />
        </Avatar>
        <GenerateAvatar
          v-else
          :seed="session.data.user.name"
          variant="initials"
          class="size-9 mr-3"
        />
        <div class="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
          <p class="text-sm truncate w-full">
            {{ session.data.user.name }}
          </p>
          <p class="text-xs truncate w-full">
            {{ session.data.user.email }}
          </p>
        </div>
        <ChevronDownIcon class="size-4 shrink-0" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" class="w-72">
        <DropdownMenuLabel>
          <div class="flex flex-col gap-1">
            <span class="font-medium truncate">
              {{ session.data.user.name }}
            </span>
            <span class="text-sm font-normal text-muted-foreground truncate">
              {{ session.data.user.email }}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem class="cursor-pointer flex items-center justify-between">
          Billing
          <CreditCardIcon class="size-4" />
        </DropdownMenuItem>
        <DropdownMenuItem class="cursor-pointer flex items-center justify-between" @click="handleLogout">
          Logout
          <LogOutIcon class="size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </template>
</template>
