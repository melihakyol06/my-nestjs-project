import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [UsersModule, GraphQLModule.forRoot({ autoSchemaFile: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
