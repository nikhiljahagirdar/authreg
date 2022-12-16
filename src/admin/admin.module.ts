import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
