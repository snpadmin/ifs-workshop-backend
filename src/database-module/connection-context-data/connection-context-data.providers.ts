import { Connection, Repository } from 'typeorm';
import { ConnectionContextData } from './connection-context-data.entity';

export const connectionContextDataProviders = [
  {
    provide: 'CONNECTION_CONTEXT_DATA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ConnectionContextData),
    inject: ['DATABASE_CONNECTION'],
  },
];