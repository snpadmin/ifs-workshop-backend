import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { connectionsProviders } from './connections.providers';
import { ConnectionsService } from './connections.service';

@Module({
  imports: [DatabaseModule],
  providers: [...connectionsProviders,
    ConnectionsService
  ],
})
export class ConnectionsModule {}