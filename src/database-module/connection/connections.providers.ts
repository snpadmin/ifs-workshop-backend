import { Connection, Repository } from 'typeorm';
import { Connections } from './connections.entity';

export const connectionsProviders = [
  {
    provide: 'CONNECTIONS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Connections),
    inject: ['DATABASE_CONNECTION'],
  },
];