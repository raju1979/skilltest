import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { QuestionTypeDoc, QuestionTypeEntity } from '../entities/question-type.entity';

@Injectable()
export class QuestionTypeRepository extends DatabaseMongoUUIDRepositoryAbstract<
    QuestionTypeEntity,
    QuestionTypeDoc
> {
    constructor(
        @DatabaseModel(QuestionTypeEntity.name)
        private readonly questionTypeModel: Model<QuestionTypeEntity>
    ) {
        super(questionTypeModel);
    }
}
