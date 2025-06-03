import { eq, getTableColumns, sql } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '~/db'
import { agents } from '~/db/schema'
import { agentsInsertSchema } from '~/utils/schemas'
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init'

export const agentsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const data = await db.select().from(agents)
    return data
  }),
  getOne: baseProcedure.input(
    z.object({
      id: z.string(),
    }),
  ).query(async ({ input }) => {
    const [data] = await db.select({
      ...getTableColumns(agents),
      meetingCount: sql<number>`5`,
    }).from(agents).where(eq(agents.id, input.id))
    return data
  }),
  create: protectedProcedure.input(agentsInsertSchema).mutation(
    async ({ input, ctx }) => {
      const [createdAgent] = await db.insert(agents).values({
        ...input,
        userId: ctx.auth.user.id,
      }).returning()

      return createdAgent
    },
  ),
})
