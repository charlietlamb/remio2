import env from '@/src/env'
import { logger } from 'hono-pino'
import pino from 'pino'
import pretty from 'pino-pretty'

export function pinoLogger() {
  return logger({
    pino: pino(
      { level: env.LOG_LEVEL || 'info' },
      env.NODE_ENV === 'production' ? undefined : pretty()
    ),
    http: {
      reqId: () => {
        return crypto.randomUUID()
      },
    },
  })
}
