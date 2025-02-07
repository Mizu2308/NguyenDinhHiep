import { Router } from "express";
import { ResourceController } from "../controllers/resource.controller";

const router = Router();

router.post("/", ResourceController.create);
router.get("/", ResourceController.list);
router.get("/:id", ResourceController.get);
router.put("/:id", ResourceController.update);
router.delete("/:id", ResourceController.delete);

export default router;
