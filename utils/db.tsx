import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import * as schema from './schema';

config({ path: '.env' }); // or .env.local

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_URL!);
export const db = drizzle(sql, { schema });
