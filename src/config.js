import { config } from "dotenv";
config();

export default {
  mongodbURL: process.env.MONGODB_URI || "mongodb://0.0.0.0/personasapi",
};
