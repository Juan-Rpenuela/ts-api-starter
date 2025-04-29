import { Router } from "express";
import UserController from "../controllers/user";

const router = Router();

router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.post("/login", UserController.login);

export default router;