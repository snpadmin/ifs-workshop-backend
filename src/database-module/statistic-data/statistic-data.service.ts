import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StatisticData } from './statistic-data.entity';

@Injectable()
export class StatisticDataService {
  constructor(
    @Inject('STATISTIC_DATA_REPOSITORY')
    private statisticDataRepository: Repository<StatisticData>,
  ) {}

  async findAll(): Promise<StatisticData[]> {
    return this.statisticDataRepository.find();
  }
}