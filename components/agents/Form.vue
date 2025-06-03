<script lang="ts" setup>
import type { AgentGetOne } from '~/types'
import { toTypedSchema } from '@vee-validate/zod'
import { getQueryKey } from 'trpc-nuxt/client'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'

const props = defineProps<{
  initialValues?: AgentGetOne
}>()

const emit = defineEmits<{
  cancel: []
}>()

const { $trpc } = useNuxtApp()

const { mutate, pending } = $trpc.agents.create.useMutation()

const formSchema = toTypedSchema(agentsInsertSchema)

const form = useForm({
  validationSchema: formSchema,
})

const isEdit = ref(!!props.initialValues?.id)

const queryKey = getQueryKey($trpc.agents.getMany, undefined)

const onSubmit = form.handleSubmit(async (values) => {
  try {
    await mutate(values)
    await refreshNuxtData(queryKey)
    toast.success('Agent created successfully')
    emit('cancel')
  }
  catch (error) {
    console.error(error)
    toast.error('Failed to create agent')
  }
})
</script>

<template>
  <form class="space-y-4" @submit="onSubmit">
    <GenerateAvatar
      :seed="form.controlledValues.value.name || ''"
      variant="botttsNeutral"
      class="border size-16"
    />
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Please input agent name..." v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="instructions">
      <FormItem>
        <FormLabel>Instructions</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Please input agent instructions..."
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <div class="flex justify-between gap-x-2">
      <Button type="button" variant="ghost" :disabled="!pending" @click="$emit('cancel')">
        Cancel
      </Button>
      <Button type="submit" :disabled="!pending">
        {{ isEdit ? 'Update' : 'Create' }}
      </Button>
    </div>
  </form>
</template>
