import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { MC_NAME_SUB_PROJECT, MC_PATTERN_SUB_PROJECT } from './constants';
import { IData } from '../../../libs/nifty-libs/src/contracts/iData';

@Injectable()
export class AppService {

  constructor(
    @Inject(MC_NAME_SUB_PROJECT)
    private readonly microservice: ClientProxy
  ) {
  }

  async addToQueue(data: IData) {
    console.log(data)
    this.microservice.emit(MC_PATTERN_SUB_PROJECT, data)
  }

  getHello(): string {
    return 'Hello World!';
  }
}
