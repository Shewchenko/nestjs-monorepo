import { Test, TestingModule } from '@nestjs/testing';
import { NiftyLibsService } from './nifty-libs.service';

describe('NiftyLibsService', () => {
  let service: NiftyLibsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NiftyLibsService],
    }).compile();

    service = module.get<NiftyLibsService>(NiftyLibsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
