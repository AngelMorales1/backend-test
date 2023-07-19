import { Schema, model } from "mongoose";

const UsuariosSchema = Schema(
  {
    email: {
      type: String,
      require: true,
      trim:true
    },
    password: {
      type: String,
      require: true,
      trim:true
    },
  },
  { collection: "Usuario" }
);

export default model("Usuario", UsuariosSchema);
