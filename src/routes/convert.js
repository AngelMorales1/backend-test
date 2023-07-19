import { Router } from "express";
import { check } from "express-validator";
import convert from "../controllers/convert";
import validarJWT from "../middlewares/validar-jwt";
import validarCampos from "../middlewares/validar-campos";
const router = Router();

router.post(
  "/",
  [
    check("from", "divisa-origen es obligatorio").not().isEmpty(),
    check("to", "divisa-destino es obligatorio").not().isEmpty(),
    check("amount", "monto es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  convert
);

export default router;
