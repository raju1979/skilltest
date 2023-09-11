import { Module } from '@nestjs/common';
import { QuestionTypeController } from 'src/modules/question-type/controllers/question-type.controller';
import { QuestionTypeModule } from 'src/modules/question-type/question-type.module';

@Module({
    controllers: [
        QuestionTypeController,
    ],
    providers: [],
    exports: [],
    imports: [QuestionTypeModule],
})
export class RoutesQuestionTypeModule {}