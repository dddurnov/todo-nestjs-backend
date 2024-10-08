import { Injectable } from '@nestjs/common';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async createRole(name: string) {
    const role = await this.rolesRepository.create({ name });
    return await this.rolesRepository.save(role);
  }

  async findRoleByName(name: string) {
    return await this.rolesRepository.findOne({ where: { name: name } });
  }
}
