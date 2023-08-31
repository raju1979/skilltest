import { Module } from '@nestjs/common';
import { QuestionController } from './controllers/question.controller';


@Module({
    controllers: [QuestionController],
    providers: [],
    exports: [],
    imports: [],
})
export class QuestionModule {}
