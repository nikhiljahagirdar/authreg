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
import { Users } from '@prisma/client';
import { UsersService } from './service/users.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../utils/decorators/roles.decorator';
import { JwtAuthGuard } from '../authen/guards/jwt-auth.guard';

@Controller('/api/v1/users')
@ApiBearerAuth()
@ApiTags('Users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  @ApiOperation({ summary: 'get All Users' })
  async allUsers(): Promise<any> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get User by id' })
  async allUsersById(@Param('id') id: number): Promise<Users> {
    return this.userService.getUserbyId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create Users' })
  async create(@Body() data: Users): Promise<Users> {
    console.log(data);
    return this.userService.createUser(data);
  }
}
