import { Item } from './todo.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from './dto/create-todo';

@InjectModel()

export class ItemsService {
    constructor(@InjectModel('Todo') readonly todoModel: Model<any>) {}
    async findAll(): Promise<Item[]> {
      return await this.todoModel.find();
    }
    // async findOne(id: string): Promise<any> {
    //   return await this.todoModel.findOne({ _id: id });
    // }
    async create(item: CreateItemDto): Promise<void> {
      const newTodo = new this.todoModel(item);
      return await newTodo.save();
    }
    async delete(id: string): Promise<void> {
      return await this.todoModel.findByIdAndRemove(id);
    }
    async update(id: string, todo: CreateItemDto): Promise<void> {
      return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
    }
  }
