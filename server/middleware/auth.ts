import { auth } from '~/utils/auth'

export default defineEventHandler(async (event) => {
  if (!event.node.req.url?.startsWith('/api/')) {
    return
  }

  try {
    const session = await auth.api.getSession({
      headers: event.headers,
    })

    event.context.auth = session
  }
  catch {
    event.context.auth = null
  }
})
