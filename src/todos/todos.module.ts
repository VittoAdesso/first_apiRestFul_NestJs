import { Module } from '@nestjs/common';
import { ItemsController } from './todo.controller';
import { ItemsService } from './todos.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class TodosModule {}
