import {
  Controller,
  Body,
  Delete,
  Ip,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthenService } from './authen.service';
import RefreshTokenDto from './dto/refresh-token.dto';
import { LoginDto } from './dto/login.dto';

@Controller('/api/v1/auth')

export class AuthenController {
  constructor(private readonly authService: AuthenService) {}

  @Post('login')
  async login(@Req() request, @Ip() ip: string, @Body() body: LoginDto) {
    return this.authService.login(body.email, body.password, {
      ipAddress: ip,
      userAgent: request.headers['user-agent'],
    });
  }

  @Post('refresh')
  async refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body.refreshToken);
  }

  @Delete('logout')
  async logout(@Body() body: RefreshTokenDto) {
    return this.authService.logout(body.refreshToken);
  }
}
