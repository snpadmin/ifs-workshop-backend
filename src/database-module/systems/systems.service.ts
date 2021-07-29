import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Systems } from './systems.entity';

@Injectable()
export class SystemsService {
  constructor(
    @Inject('SYSTEMS_REPOSITORY')
    private systemsRepository: Repository<Systems>,
  ) {}

  async findAll(): Promise<Systems[]> {
    return this.systemsRepository.find();
  }
}