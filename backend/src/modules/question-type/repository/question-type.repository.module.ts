import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import {
    QuestionTypeEntity,
    QuestionTypeSchema,
} from 'src/modules/question-type/repository/entities/question-type.entity';
import {QuestionTypeRepository} from './repositories/question-type.repository';

@Module({
    providers: [QuestionTypeRepository],
    exports: [QuestionTypeRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: QuestionTypeEntity.name,
                    schema: QuestionTypeSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class QuestionTypeRepositoryModule {}
