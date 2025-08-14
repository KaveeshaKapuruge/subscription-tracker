import { config } from "dotenv";

// Set the correct path depending on NODE_ENV or default to 'development'
const env = process.env.NODE_ENV || "development";
config({ path: `.env.${env}.local` });

export const { PORT, NODE_ENV , DB_URI} = process.env;
