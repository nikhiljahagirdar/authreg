import { IsEmail, IsNotEmpty, minLength, maxLength,Matches, MinLength, MaxLength } from '@nestjs/class-validator';

export class LoginDto {
 
  @IsNotEmpty()
  email: string;

  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
