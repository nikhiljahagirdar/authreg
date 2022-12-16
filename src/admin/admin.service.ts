import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  public getHello(): string {
    return 'Hello admin';
  }
}
