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
    constructor(private readonly itemsService: ItemsService) {}
  
    @Get()
    findAll(): Promise<Item[]> {
      return this.itemsService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id): Promise<void> {
      return this.itemsService.findOne(id);
    }
    
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<void> {
    return this.itemsService.create(CreateItemDto);
    }
    
    @Delete(':id')
    delete(@Param('id') id): Promise<void> {
      return this.itemsService.delete(id);
    }
    
    @Put(':id')
    update(@Body() updateTodoDto: CreateItemDto, @Param('id') id): Promise<void> {
      return this.itemsService.update(id, updateTodoDto);
    }
  }