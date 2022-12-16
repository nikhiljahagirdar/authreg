import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../../prisma-services/prisma-services.service';
import { Users } from '@prisma/client';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).overrideProvider(prisma: PrismaService).useValue().compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return all users', () => {
    expect(typeof service.getAllUsers()).toEqual('object');
  });

  it('should return single user', () => {
    expect(typeof service.getUserbyId(1)).toEqual('object');
  });

  it('should create user', () => {
    const user: Users = {
      id: 56,
      name: 'My Name',
      email: 'a@a.com',
      password: 'pass200',
    };
    expect(typeof service.createUser(user)).toEqual('object');
  });

  it('should update user', () => {
    expect(typeof service.UpdateUser(1, 'pass123')).toEqual('object');
  });
});
