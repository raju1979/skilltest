import { Module } from '@nestjs/common';
import { QuestionController } from 'src/modules/question/controllers/question.controller';
import { QuestionModule } from 'src/modules/question/question.module';

@Module({
    controllers: [
        QuestionController,
    ],
    providers: [],
    exports: [],
    imports: [QuestionModule],
})
export class RoutesQuestionModule {}