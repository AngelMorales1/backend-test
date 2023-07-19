import { Router } from "express";
import { check } from "express-validator";
import login from "../controllers/login";
import validarCampos from "../middlewares/validar-campos";

const router = Router();

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  login
);

export default router;
