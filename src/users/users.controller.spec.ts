import { Test, TestingModule,TestingModuleBuilder,MockFactory } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './service/users.service';
import { PrismaService } from '../prisma-services/prisma-services.service';
import { Users } from '@prisma/client';

describe('UsersController', () => {
  let userController: UsersController;
  let userServices: UsersService={getAllUsers:()=>[]};
  
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).overrideProvider(UsersService)
    .useValue()
    .compile();

    userController = app.get<UsersController>(UsersController);
    userServices = app.get<UsersService>(UsersService);
  });

  describe('Users Root', () => {
    it('should return Array of Users"', () => {
      const spy = jest.spyOn(userServices, 'getAllUsers');
      userController.allUsers();
      expect(userServices.getAllUsers()).toHaveBeenCalled();
    });

    it('should return individual Users"', () => {
      const spy = jest.spyOn(userServices, 'getUserbyId');
      userController.allUsersById(1);
      expect(spy).toHaveBeenCalled();
    });

    it('should return create Users"', () => {
      const result =new Promise<Users>(()=>{return });
      const ;
      const spy = jest
        .spyOn(userServices, 'createUser')
        .mockResolvedValue();
      userController.create(user);
      expect(spy).toHaveBeenCalled();
    });
  });
});
