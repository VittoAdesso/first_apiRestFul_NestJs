import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { CreateItemDto } from './dto/create-todo';
  import { ItemsService } from './todos.service';
  import { Item } from './todo.interface';
  
  @Controller('items')
  
  export class ItemsController {
    constructor(private readonly todosService: TodosService) {}
  
    @Get()
    findAll(): Promise<Todo[]> {
      return this.todosService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id): Promise {
      return this.itemsService.findOne(id);
    }
    
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise {
      return this.itemsService.create(CreateItemDto);
    }
    
    @Delete(':id')
    delete(@Param('id') id): Promise {
      return this.itemsService.delete(id);
    }
    
    @Put(':id')
    update(@Body() updateTodoDto: CreateItemDto, @Param('id') id): Promise {
      return this.itemsService.update(id, updateTodoDto);
    }
  }