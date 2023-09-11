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
import { QuestionTypeRepository } from '../repository/repositories/question-type.repository';
import { QuestionTypeDoc, QuestionTypeEntity } from '../repository/entities/question-type.entity';
import { QuestionTypeCreateDto } from '../dtos/question-type.dto';

@Injectable()
export class QuestionTypeService  {
    constructor(private readonly questionTypeRepository: QuestionTypeRepository) {}

    async findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<QuestionTypeEntity[]> {
        return this.questionTypeRepository.findAll<QuestionTypeEntity>(find, options);
    }

    async create(
        { key, title }: QuestionTypeCreateDto,
        options?: IDatabaseCreateOptions
    ): Promise<QuestionTypeDoc> {
        const create: QuestionTypeEntity = new QuestionTypeEntity();
        create.key = key;
        create.title = title;

        return this.questionTypeRepository.create<QuestionTypeEntity>(create, options);
    }


}
