import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
// import { UsersModule } from './users/users.module';
// import { UsersModule } from './graphql/users/users.module';
import { ModuleModule } from './module/module.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      debug: true,
    }),
    ModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
