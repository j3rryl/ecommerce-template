import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce",
  },
  out: "./drizzle",
  //   verbose: true,
  strict: true,
});
