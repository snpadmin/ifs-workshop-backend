import { Connection, Repository } from 'typeorm';
import { StatisticData } from './statistic-data.entity';

export const statisticDataProviders = [
  {
    provide: 'STATISTIC_DATA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(StatisticData),
    inject: ['DATABASE_CONNECTION'],
  },
];