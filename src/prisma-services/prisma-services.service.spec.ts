import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from './prisma-services.service';

describe('PrismaServicesService', () => {
  let service: PrismaService;
  let app: INestApplication;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('onModuleInit should be called', () => {
    let result: any;
    jest.spyOn(service, 'onModuleInit').mockImplementation(() => result);
    expect(service.onModuleInit()).toBeCalled();
  });

  it('enableShutdownHooks should be called', () => {
    let result: any;
    jest.spyOn(service, 'enableShutdownHooks').mockImplementation(() => result);
    expect(service.enableShutdownHooks(app)).toBeCalled();
  });
});
