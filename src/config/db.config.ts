import { registerAs } from "@nestjs/config";
import { IsPort, IsString, validateSync } from "class-validator";
import { plainToClass } from "class-transformer";

export class DatabaseConfig {
  @IsString()
  host: string;

  @IsPort()
  port: number;

  @IsString()
  user: string;

  @IsString()
  password: string;

  @IsString()
  database: string;
}

function validateDbConfig() {
  const validatedConfig = plainToClass(
    DatabaseConfig,
    mapToDatabaseConfig(process.env)
  );
  const errors = validateSync(validatedConfig);
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

const mapToDatabaseConfig = (config) => {
  return {
    host: config.DB_HOST,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE
  };
};

export default registerAs("database", (): DatabaseConfig => (validateDbConfig()));
