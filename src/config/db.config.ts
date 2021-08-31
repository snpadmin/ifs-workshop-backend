import { registerAs } from "@nestjs/config";

export interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export default registerAs('database', (): DatabaseConfig => ({
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}));