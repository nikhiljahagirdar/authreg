import { Module } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { UsersService } from '../users/service/users.service';
import { AuthenController } from './authen.controller';
import { PrismaService } from '../prisma-services/prisma-services.service';
import { PrismaClient } from '@prisma/client';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [
    AuthenService,
    PrismaService,
    PrismaClient,
    JwtStrategy,
    UsersService,
  ],
  controllers: [AuthenController],
})
export class AuthenModule {}
