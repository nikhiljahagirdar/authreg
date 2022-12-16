import { IsNotEmpty } from '@nestjs/class-validator';

class RefreshTokenDto {
  @IsNotEmpty()
  refreshToken: string;
}

export default RefreshTokenDto;
