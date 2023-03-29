import { model, Schema } from 'mongoose';
import { CategorySchemaName } from './Category';
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
    createAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      required: true,
      type: [
        {
          procut: {
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
