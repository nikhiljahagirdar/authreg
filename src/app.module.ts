import { AdminModule } from './admin/admin.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma-services/prisma-services.service';
import { UsersModule } from './users/users.module';
import { AuthenModule } from './authen/authen.module';
import { RolesGuard } from './utils/guards/roles.guard'
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [AdminModule, UsersModule, AuthenModule ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
  }],
})
export class AppModule {}
