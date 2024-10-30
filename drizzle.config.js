import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: './config/schema.js',
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:yskxD13FpKCH@ep-purple-unit-a5v5z6gq.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
