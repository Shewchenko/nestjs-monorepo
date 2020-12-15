import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';

import { SubProjectService } from './sub-project.service';
import { MC_PATTERN_SUB_PROJECT } from '../../monorepo-test/src/constants';
import { IData } from '../../../libs/nifty-libs/src/contracts/iData';

@Controller()
export class SubProjectController {
  constructor(private readonly subProjectService: SubProjectService) {}

  @Get()
  getHello(): string {
    return this.subProjectService.getHello();
  }

  @MessagePattern(MC_PATTERN_SUB_PROJECT)
  async run(@Payload() data: IData, @Ctx() context: RedisContext) {
    console.log(data, context.getChannel());
    this.subProjectService.run(data)
  }
}
