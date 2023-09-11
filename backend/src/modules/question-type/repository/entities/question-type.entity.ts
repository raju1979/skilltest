import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError, Document } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { ENUM_POLICY_SUBJECT } from 'src/common/policy/constants/policy.enum.constant';
import { IPolicyRule } from 'src/common/policy/interfaces/policy.interface';
import { ENUM_ROLE_TYPE } from 'src/modules/role/constants/role.enum.constant';

export const QuestionTypeDatabaseName = 'question-type';

@DatabaseEntity({ collection: QuestionTypeDatabaseName })
export class QuestionTypeEntity extends DatabaseMongoUUIDEntityAbstract {
    @Prop({
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        trim: true,
        maxlength: 30,
        type: String,
    })
    key: string;

    @Prop({
        required: false,
        trim: true,
        type: String,
    })
    title: string;
}

export const QuestionTypeSchema = SchemaFactory.createForClass(QuestionTypeEntity);

export type QuestionTypeDoc = QuestionTypeEntity & Document;

QuestionTypeSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
    next();
});
