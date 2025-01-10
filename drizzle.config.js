require('dotenv').config();


export default {
    dialect: "postgresql",
    schema: "./src/utils/schema.jsx",
    out: "./drizzle",
    dbCredentials: {
      url: process.env.VITE_APP_DB_CONNECTION,
      connectionString:process.env.VITE_APP_DB_CONNECTION,
    },
  };