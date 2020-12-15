import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getName() {
    return TasksService.name
  }
}
