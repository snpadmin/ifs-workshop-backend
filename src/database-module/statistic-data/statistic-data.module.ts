import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { statisticDataProviders } from './statistic-data.providers';
import { StatisticDataService } from './statistic-data.service';

@Module({
  imports: [DatabaseModule],
  providers: [...statisticDataProviders,
    StatisticDataService
  ],
  exports: [StatisticDataService]
})
export class StatisticDataModule {}