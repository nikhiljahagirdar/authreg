import { Injectable, UnauthorizedException,NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma-services/prisma-services.service';
import { Users } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private async getHashedpassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  public async getAllUsers(): Promise<any[]> {
    const selUser = this.prisma.users.findMany({select: { id:true, firstname:true , lastname:true,email:true, password: false },});
    return selUser;
  }

  public async getUserbyId(id: number): Promise<any> {
    const selUser = this.prisma.users.findUnique({
      where: { id: Number(id) },
      select: { id:true, firstname:true , lastname:true,email:true, password: false, role:true },
    });
    return selUser;
  }
  public async createUser(data: Users) {
    data.password = await this.getHashedpassword(data.password);
    return this.prisma.users.create({
      data,
    });
  }

  public async validateUser(email: string, passWord: string) {
    const user = await this.prisma.users.findFirst({
      where: { OR: [{ email: email }, { username: email }] },
    });
    if (user) {
      const password = await this.getHashedpassword(passWord);
      if (bcrypt.compare(passWord, (await user).password)) {
        return user;
      } else {
        return new NotFoundException("Invalid username or password");
      }
    }
  }
  public async UpdateUser(data: Users) {
    const hpassword = await this.getHashedpassword(data.password);
    return this.prisma.users.update({
      where: { id: data.id },
      data: { firstname:data.firstname,lastname:data.lastname,password: hpassword },
    });
  }
}
