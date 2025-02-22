import { defineConfig } from 'drizzle-kit'
import env from '@/src/env'

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema/*',
  out: './src/db/migrations',
  dbCredentials: {
    url: env.DATABASE_URL ?? 'invalid-db-url',
  },
})
