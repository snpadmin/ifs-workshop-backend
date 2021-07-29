import { Connection, Repository } from 'typeorm';
import { Systems } from './systems.entity';

export const systemsProviders = [
  {
    provide: 'SYSTEMS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Systems),
    inject: ['DATABASE_CONNECTION'],
  },
];