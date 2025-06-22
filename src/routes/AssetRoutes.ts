import { AssetController } from "controller/AssetController";
import { Router } from "express";
import multer from "multer";

const router = Router();

const assetController = new AssetController();

const upload = multer({dest: 'data/files/'})

router.delete('/:assetId', assetController.delete.bind(assetController));

router.get('/', assetController.getAll.bind(assetController));

router.post('/', upload.single('file'), assetController.create.bind(assetController));

export { router as assetRoutes }