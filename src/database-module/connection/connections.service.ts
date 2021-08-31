import { Injectable, Inject } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Connections } from './connections.entity';

@Injectable()
export class ConnectionsService {
  constructor(
    @Inject('CONNECTIONS_REPOSITORY')
    private photoRepository: Repository<Connections>,
  ) {}

  async findAll(): Promise<Connections[]> {
    return this.photoRepository.find();
  }
}