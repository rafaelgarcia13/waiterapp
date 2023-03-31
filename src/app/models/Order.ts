import { model, Schema } from 'mongoose';
import { ProductSchemaName } from './Product';

export const OrderSchemaName = 'Order';

export const Order = model(
  OrderSchemaName,
  new Schema({
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
      default: 'WAITING',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      required: true,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: ProductSchemaName,
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  })
);

//docker run --name mongo -p 27017:27017 -d mongo
