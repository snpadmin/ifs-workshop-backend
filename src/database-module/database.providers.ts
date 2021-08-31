import { Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/config/db.config';
import { createConnection } from 'typeorm';
import { DatabaseModule } from './database.module';

export const databaseProviders = [
  {
    import: [ConfigModule],
    inject: [ConfigService],
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService) => {
      const dbConfig = configService.get<DatabaseConfig>('database')
      createConnection({
        type: 'postgres',
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }
    )
    }
  },
];
