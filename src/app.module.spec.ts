import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
describe('appModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    expect(module).toBeDefined();
  });
});
