import { Module } from '@nestjs/common';
import { SubProjectController } from './sub-project.controller';
import { SubProjectService } from './sub-project.service';

@Module({
  imports: [],
  controllers: [SubProjectController],
  providers: [SubProjectService],
})
export class SubProjectModule {}
