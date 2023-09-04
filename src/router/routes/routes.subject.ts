import { Module } from '@nestjs/common';
import { SubjectController } from 'src/modules/subjects/controllers/subject.controller';
import { SubjectModule } from 'src/modules/subjects/subject.module';

@Module({
    controllers: [
        SubjectController,
    ],
    providers: [],
    exports: [],
    imports: [SubjectModule],
})
export class RoutesSubjectModule {}