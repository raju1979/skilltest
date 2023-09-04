import {
    Body,
    ConflictException,
    Controller,
    Delete,
    Get,
    Patch,
    Post,
    Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthJwtAdminAccessProtected } from 'src/common/auth/decorators/auth.jwt.decorator';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { SubjectService } from '../services/subject.service';
import { SubjectEntity } from '../repository/entities/subject.entity';
import { SubjectCreateDto } from '../dtos/subject.dto';

@Controller({
    version: '1',
    path: '/subject',
})
export class SubjectController {
    constructor(
        private readonly subjectService: SubjectService
    ) {}

    @Get('/list')
    async list(): Promise<any> {
        

        const subjects: SubjectEntity[] = await this.subjectService.findAll({}, {
        });

        return {
            data: subjects,
        };
    }

    @AuthJwtAdminAccessProtected()
    @Post('/create')
    async create(
        @Body()
    { key, title }: SubjectCreateDto
    ): Promise<IResponse> {
        // const exist: boolean = await this.questionTypeService.existByName(name);
        // if (exist) {
        //     throw new ConflictException({
        //         statusCode: ENUM_ROLE_STATUS_CODE_ERROR.ROLE_EXIST_ERROR,
        //         message: 'role.error.exist',
        //     });
        // }

        const create = await this.subjectService.create({
            key,
            title
        });

        return {
            data: create,
        };
    }

    

}
