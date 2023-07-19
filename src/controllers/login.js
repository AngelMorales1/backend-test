import generarJWT from "../helpers/jwt";
import { default as Usuarios } from "../models/usuarios";
import bcrypt from "bcryptjs";

const login = async (req, res = response) => {
  try {
    const { email, password } = req.body;
    const existeEmail = await Usuarios.findOne({ email });

    if (existeEmail) {
       // generar token
      const token = await generarJWT(existeEmail.id);

      return res.status(200).json({
        ok: true,
        token,
        msg: "Sesion Iniciada",
      });
    }
    const usuario = new Usuarios(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    // guardar usuario
    await usuario.save();

    // generar token
    const token = await generarJWT(usuario.id);

    res.json({
      ok: true,
      usuario,
      token,
      msg: "El Usuario fue registrado y loggeado",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
    });
  }
};

export default login;
