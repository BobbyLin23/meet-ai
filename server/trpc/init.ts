import type { H3Event } from 'h3'
import { initTRPC, TRPCError } from '@trpc/server'
import { auth } from '~/utils/auth'

export async function createTRPCContext(event: H3Event) {
  try {
    const session = await auth.api.getSession({
      headers: event.headers,
    })
    return {
      auth: session,
      event,
    }
  }
  catch {
    return {
      auth: null,
      event,
    }
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create({})

export const createTRPCRouter = t.router
export const createCallerFactory = t.createCallerFactory
export const baseProcedure = t.procedure

export const protectedProcedure = baseProcedure.use(async ({ ctx, next }) => {
  if (!ctx.auth) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Unauthorized',
    })
  }

  return next({
    ctx: {
      ...ctx,
      auth: ctx.auth,
    },
  })
})
