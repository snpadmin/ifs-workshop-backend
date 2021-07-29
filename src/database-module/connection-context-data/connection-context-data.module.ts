import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { connectionContextDataProviders } from './connection-context-data.providers';
import { ConnectionContextDataService } from './connection-context-data.service';

@Module({
  imports: [DatabaseModule],
  providers: [...connectionContextDataProviders,
    ConnectionContextDataService
  ],
})
export class ConnectionContextDataModule {}