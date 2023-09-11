import { Module } from '@nestjs/common';
import { QuestionTypeController } from './controllers/question-type.controller';
import { QuestionTypeRepositoryModule } from './repository/question-type.repository.module';
import { QuestionTypeService } from './services/question-type.service';


@Module({
    controllers: [QuestionTypeController],
    providers: [QuestionTypeService],
    exports: [QuestionTypeService],
    imports: [QuestionTypeRepositoryModule],
})
export class QuestionTypeModule {}
