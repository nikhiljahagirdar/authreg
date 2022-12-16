import {
Controller,
Get,
Param,
Post,
Body,
Put,
Delete,
UseGuards
} from '@nestjs/common';
import { AdminService } from './admin.service'
import { Roles } from '../utils/decorators/roles.decorator';
import { ROLES } from '../utils/enums/roles.enum';
import { JwtAuthGuard } from '../authen/guards/jwt-auth.guard';

@Controller('/api/v1/admin')
@UseGuards(JwtAuthGuard)

export class AdminController {
  constructor(private adservice: AdminService) {}

  @Get()
  @Roles(ROLES.ADMIN)
  async getadminData() {
    return this.adservice.getHello();
}
}
