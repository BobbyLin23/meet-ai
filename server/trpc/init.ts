import type { H3Event } from 'h3'
import { initTRPC } from '@trpc/server'

export async function createTRPCContext(event: H3Event) {
  return { auth: event.context.auth }
}

const t = initTRPC.create({

})

export const createTRPCRouter = t.router
export const createCallerFactory = t.createCallerFactory
export const baseProcedure = t.procedure
