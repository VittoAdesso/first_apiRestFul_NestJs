import { Document } from 'mongoose';
export interface Item extends Document {
  id?: string;
  title: string;
  description?: string;
  is_completed: boolean;
}