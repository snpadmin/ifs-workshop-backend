import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ConnectionContextData } from './connection-context-data.entity';

@Injectable()
export class ConnectionContextDataService {
  constructor(
    @Inject('CONNECTION_CONTEXT_DATA_REPOSITORY')
    private connectionContextDataRepository: Repository<ConnectionContextData>,
  ) {}

  async findAll(): Promise<ConnectionContextData[]> {
    return this.connectionContextDataRepository.find();
  }
}