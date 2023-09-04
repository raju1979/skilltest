import { Injectable } from '@nestjs/common';
import {
    IDatabaseCreateOptions,
    IDatabaseExistOptions,
    IDatabaseFindAllOptions,
    IDatabaseFindOneOptions,
    IDatabaseGetTotalOptions,
    IDatabaseManyOptions,
    IDatabaseCreateManyOptions,
    IDatabaseSaveOptions,
} from 'src/common/database/interfaces/database.interface';
import { RoleCreateDto } from 'src/modules/role/dtos/role.create.dto';
import { RoleUpdatePermissionDto } from 'src/modules/role/dtos/role.update-permission.dto';
import { RoleUpdateDto } from 'src/modules/role/dtos/role.update.dto';
import { IRoleService } from 'src/modules/role/interfaces/role.service.interface';
import {
    RoleDoc,
    RoleEntity,
} from 'src/modules/role/repository/entities/role.entity';
import { RoleRepository } from 'src/modules/role/repository/repositories/role.repository';
import { SubjectRepository } from '../repository/repositories/subject.repository';
import { SubjectDoc, SubjectEntity } from '../repository/entities/subject.entity';
import { SubjectCreateDto } from '../dtos/subject.dto';

@Injectable()
export class SubjectService  {
    constructor(private readonly subjectRepository: SubjectRepository) {}

    async findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<SubjectEntity[]> {
        return this.subjectRepository.findAll<SubjectEntity>(find, options);
    }

    async create(
        { key, title }: SubjectCreateDto,
        options?: IDatabaseCreateOptions
    ): Promise<SubjectCreateDto> {
        const create: SubjectEntity = new SubjectEntity();
        create.key = key;
        create.title = title;

        return this.subjectRepository.create<SubjectEntity>(create, options);
    }


}
