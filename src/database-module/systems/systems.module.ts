import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { systemsProviders } from './systems.providers';
import { SystemsService } from './systems.service';

@Module({
  imports: [DatabaseModule],
  providers: [...systemsProviders,
    SystemsService
  ],
})
export class SystemsModule {}