import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { ItemsService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [ItemsService]
})
export class TodosModule {}
