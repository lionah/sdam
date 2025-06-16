import { z } from 'zod';
import { Schema, model } from 'mongoose';

export const AssetSchema = z.object({
  filename: z.string().required(),
  mimeType: z.string().required()
});

export type Asset = z.infer<typeof AssetSchema>;

const mongoSchema = new Schema<Asset>({
  filename: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  }
});

export const AssetModel = model<Asset>('Asset', mongoSchema);