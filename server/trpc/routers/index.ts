import { createTRPCRouter } from '~/server/trpc/init'
import { agentsRouter } from './agents'

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
})

export type AppRouter = typeof appRouter
