import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
