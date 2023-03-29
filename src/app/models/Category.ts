import { model, Schema } from 'mongoose';

export const CategorySchemaName = 'Category';

export const Category = model(
  CategorySchemaName,
  new Schema({
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  })
);
