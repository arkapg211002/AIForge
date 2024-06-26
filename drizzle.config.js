/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:G0oSDfv2mVTB@ep-dark-firefly-a1q3jw5f.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  }
};

