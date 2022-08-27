import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  title: String,
  is_completed: Boolean,
  description: String,
});