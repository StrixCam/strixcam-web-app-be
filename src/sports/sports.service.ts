import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Sport } from './entities';

@Injectable()
export class SportsService {
  constructor(
    @InjectRepository(Sport) private readonly sportRepo: Repository<Sport>,
  ) {}

  async create(data: Partial<Sport>): Promise<Sport> {
    const sport = this.sportRepo.create(data);
    return this.sportRepo.save(sport);
  }

  async findAll(): Promise<Sport[]> {
    return await this.sportRepo.find();
  }

  async findOne(id: string): Promise<Sport | null> {
    return await this.sportRepo.findOneBy({ id });
  }

  async update(id: string, updates: Partial<Sport>): Promise<Sport | null> {
    await this.sportRepo.update(id, updates);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.sportRepo.delete(id);
  }
}
