import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './schema.ts',
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema.ts',
});
