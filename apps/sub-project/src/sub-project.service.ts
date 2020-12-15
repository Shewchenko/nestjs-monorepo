import { Injectable, Logger } from '@nestjs/common';

import { IData } from '../../../libs/nifty-libs/src/contracts/iData';
import { TasksService } from '@app/nifty-libs/tasks/tasks.service';

@Injectable()
export class SubProjectService {

  logger = new Logger(SubProjectService.name)

  constructor(
    private readonly tasksService: TasksService
  ) {
    this.logger.debug(tasksService.getName())
  }

  getHello(): string {
    return 'Hello World!';
  }

  async run(data: IData) {
    let t = 1;
    for (let i = 1; i < 1000000; i++) {
      t = i*t
    }
    this.logger.debug(data)
  }
}
