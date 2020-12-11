import { Controller, Get } from '@nestjs/common';
import { SubProjectService } from './sub-project.service';

@Controller()
export class SubProjectController {
  constructor(private readonly subProjectService: SubProjectService) {}

  @Get()
  getHello(): string {
    return this.subProjectService.getHello();
  }
}
