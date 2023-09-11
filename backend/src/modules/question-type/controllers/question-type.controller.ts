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
import { QuestionTypeCreateDto } from '../dtos/question-type.dto';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { QuestionTypeEntity } from '../repository/entities/question-type.entity';
import { QuestionTypeService } from '../services/question-type.service';

@Controller({
    version: '1',
    path: '/question-type',
})
export class QuestionTypeController {
    constructor(
        private readonly questionTypeService: QuestionTypeService
    ) {}

    @Get('/list')
    async list(): Promise<any> {
        const questionTypes: QuestionTypeEntity[] = await this.questionTypeService.findAll({}, {
        });

        return {
            data: questionTypes,
        };
    }


    @AuthJwtAdminAccessProtected()
    @Post('/create')
    async create(
        @Body()
    { key, title }: QuestionTypeCreateDto
    ): Promise<IResponse> {
        // const exist: boolean = await this.questionTypeService.existByName(name);
        // if (exist) {
        //     throw new ConflictException({
        //         statusCode: ENUM_ROLE_STATUS_CODE_ERROR.ROLE_EXIST_ERROR,
        //         message: 'role.error.exist',
        //     });
        // }

        const create = await this.questionTypeService.create({
            key,
            title
        });

        return {
            data: { _id: create._id },
        };
    }

}
