import { Injectable, Logger } from '@nestjs/common';

import { IData } from '../../monorepo-test/src/contracts/iData';

@Injectable()
export class SubProjectService {

  logger = new Logger(SubProjectService.name)

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
