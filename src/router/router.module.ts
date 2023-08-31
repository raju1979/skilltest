import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';
import { RoutesAdminModule } from './routes/routes.admin.module';
import { RoutesUserModule } from 'src/router/routes/routes.user.module';
import { RoutesPublicModule } from 'src/router/routes/routes.public.module';
import { AppController } from 'src/app/controllers/app.controller';
import { RoutesAuthModule } from 'src/router/routes/routes.auth.module';
import { RoutesQuestionModule } from './routes/routes.question.module';

@Module({})
export class RouterModule {
    static forRoot(): DynamicModule {
        const imports: (
            | DynamicModule
            | Type<any>
            | Promise<DynamicModule>
            | ForwardReference<any>
        )[] = [];

        if (process.env.HTTP_ENABLE === 'true') {
            imports.push(
                RoutesPublicModule,
                RoutesUserModule,
                RoutesAdminModule,
                RoutesAuthModule,
                RoutesQuestionModule,
                NestJsRouterModule.register([
                    {
                        path: '/public',
                        module: RoutesPublicModule,
                    },
                    {
                        path: '/admin',
                        module: RoutesAdminModule,
                    },
                    {
                        path: '/user',
                        module: RoutesUserModule,
                    },
                    {
                        path: '/auth',
                        module: RoutesAuthModule,
                    },
                    {
                        path: '/question',
                        module: RoutesQuestionModule
                    }
                ])
            );
        }

        return {
            module: RouterModule,
            providers: [],
            exports: [],
            controllers: [AppController],
            imports,
        };
    }
}
