import { Module } from '@nestjs/common';
import { SubProjectController } from './sub-project.controller';
import { SubProjectService } from './sub-project.service';
import { TasksModule } from "@app/nifty-libs/tasks/tasks.module";

@Module({
  imports: [
    TasksModule
  ],
  controllers: [SubProjectController],
  providers: [SubProjectService],
})
export class SubProjectModule {}
