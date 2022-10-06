import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const personSchema = new Schema(
  {
    nombre: String,
    apellidos: String,
    telefono: Number,
    correo: String,
    iglesia: String,
    pastor: String,
    origen: String,
    estado: String,
    dni: String,
    ninos: Number,
    civil: String,
    talla: String,
    genero: String,
    pago: String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

personSchema.plugin(mongoosePaginate);
export default model("person", personSchema);
