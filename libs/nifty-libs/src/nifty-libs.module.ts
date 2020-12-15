import { Module } from '@nestjs/common';
import { NiftyLibsService } from './nifty-libs.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  providers: [NiftyLibsService],
  exports: [NiftyLibsService],
  imports: [TasksModule],
})
export class NiftyLibsModule {}
