import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './utils/schema.tsx',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_6bqCZwaWonG9@ep-wispy-mouse-a1hglfh8-pooler.ap-southeast-1.aws.neon.tech/Ai-content-generator?sslmode=require',
  },
});
