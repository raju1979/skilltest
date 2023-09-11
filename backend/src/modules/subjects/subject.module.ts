import { Module } from '@nestjs/common';
import { SubjectController } from './controllers/subject.controller';
import { SubjectService } from './services/subject.service';
import { SubjectRepositoryModule } from './repository/subject.repository.module';



@Module({
    controllers: [SubjectController],
    providers: [SubjectService],
    exports: [SubjectService],
    imports: [SubjectRepositoryModule],
})
export class SubjectModule {}
