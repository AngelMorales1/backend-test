import jsonwebtoken from "jsonwebtoken";

const validarJWT = (req, res, next) => {
  //leer el token
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "Usuario no loggeado",
    });
  }

  try {
    const { uid } = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    req.uid = uid;

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }
};

export default validarJWT;
