import { Test, TestingModule } from '@nestjs/testing';
import { SubProjectController } from './sub-project.controller';
import { SubProjectService } from './sub-project.service';

describe('SubProjectController', () => {
  let subProjectController: SubProjectController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SubProjectController],
      providers: [SubProjectService],
    }).compile();

    subProjectController = app.get<SubProjectController>(SubProjectController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(subProjectController.getHello()).toBe('Hello World!');
    });
  });
});
