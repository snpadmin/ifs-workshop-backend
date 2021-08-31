import { registerAs } from "@nestjs/config";

export interface AppConfig {
  port: number
}

export default registerAs('app', (): AppConfig => ({
  port: parseInt(process.env.PORT, 10) || 3000
}));