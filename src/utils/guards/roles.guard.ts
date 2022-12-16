import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Headers,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { env } from 'process';
import { verify } from 'jsonwebtoken';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
       if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token: string = request.headers['authorization'];
    if (token.length > 0) {
      const alltokens = token.split(' ')[1];
      const accessToken = process.env.ACCESS_SECRET;
      const refreshToken = process.env.REFRESH_SECRET;
      let decodedvalue = verify(alltokens, accessToken);
      if (!decodedvalue) {
        decodedvalue = verify(alltokens, refreshToken);
      }
      const prole: string = decodedvalue['role'];
      return roles.some((role) => prole.toLowerCase()?.includes(role));

    }
  }
}
