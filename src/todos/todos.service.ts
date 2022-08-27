import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from './dto/create-todo';

@Injectable()

export class ItemsService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model) {}
    async findAll(): Promise<Todo[]> {
      return await this.todoModel.find();
    }
    async findOne(id: string): Promise {
      return await this.todoModel.findOne({ _id: id });
    }
    async create(item: CreateItemDto): Promise {
      const newTodo = new this.todoModel(item);
      return await newTodo.save();
    }
    async delete(id: string): Promise {
      return await this.todoModel.findByIdAndRemove(id);
    }
    async update(id: string, todo: CreateTodoDto): Promise {
      return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
    }
  }
