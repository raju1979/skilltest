import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError, Document } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { ENUM_POLICY_SUBJECT } from 'src/common/policy/constants/policy.enum.constant';
import { IPolicyRule } from 'src/common/policy/interfaces/policy.interface';
import { ENUM_ROLE_TYPE } from 'src/modules/role/constants/role.enum.constant';

export const SubjectDatabaseName = 'subject';

@DatabaseEntity({ collection: SubjectDatabaseName })
export class SubjectEntity extends DatabaseMongoUUIDEntityAbstract {
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

export const SubjectSchema = SchemaFactory.createForClass(SubjectEntity);

export type SubjectDoc = SubjectEntity & Document;

SubjectSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
    next();
});
