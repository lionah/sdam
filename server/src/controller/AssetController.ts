import { Request, Response } from 'express';
import { AssetModel, AssetSchema } from '../model/Asset';

export class AssetController {

  async create(req: Request, res: Response): Promise<void> {
    console.log(req.body, req.query, req.headers)

    const filename = req.file?.originalname;
    const mimeType = req.file?.mimetype;

    const asset = new AssetModel(AssetSchema.parse({
        filename: filename,
        mimeType: mimeType
      }));

    const assetDocument = asset.save();

    res.status(201).json(assetDocument);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const assetDocuments = await AssetModel.find();

    res.json(assetDocuments);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const assetId = req.params.assetId;

    const assetDocument = await AssetModel.findByIdAndDelete(assetId);

    if (!assetDocument) {
      res.status(404).json({ error: "Asset not found" });
    }
    else {
      res.status(204).send();
    }
  }

}