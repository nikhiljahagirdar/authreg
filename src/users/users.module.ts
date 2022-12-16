import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './service/users.service';
import { PrismaService } from '../prisma-services/prisma-services.service';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
