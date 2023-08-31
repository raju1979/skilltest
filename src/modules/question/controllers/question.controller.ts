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

@Controller({
    version: '1',
    path: '/question',
})
export class QuestionController {
    constructor(
    ) {}

    @Get('/list')
    async list(): Promise<any> {
        return {            
            data: 'roles',
        };
    }
}
