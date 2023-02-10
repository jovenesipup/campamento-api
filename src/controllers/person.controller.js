import Person from "../models/Personas";
import { getPagination } from "../libs/getPagination";
import { getFilter } from "../libs/filterPerson";

export const getPersons = async (req, res) => {
  const { size, page } = req.query;
  const { limit, offset } = getPagination(page, size);
  const persons = await Person.paginate({}, { offset, limit });
  res.json(persons);
};

export const createPerson = async (req, res) => {
  const newPerson = new Person({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    telefono: req.body.telefono,
    correo: req.body.correo,
    iglesia: req.body.iglesia,
    pastor: req.body.pastor,
    origen: req.body.origen,
    estado: req.body.estado,
    dni: req.body.dni,
    ninos: req.body.ninos,
    civil: req.body.civil,
    talla: req.body.talla,
    genero: req.body.genero,
    pago: req.body.pago,
    comentario: req.body.comentario,
    infante: req.body.infante,
    edad: req.body.edad,
    weiPoint: req.body.weiPoint,
    hospeda: req.body.hospeda
  });
  const personSaved = await newPerson.save();
  res.json(personSaved);
};

export const findOnePerson = async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.json(person);
};

export const findOnePersonByDni = async (req, res) => {
  const person = await Person.find({ dni: req.params.dni });
  res.json(person);
};

export const findOnePersonByCabana = async (req, res) => {
  const person = await Person.find({ hospeda: {$ne: 'carpa'} });
  res.json(person);
};

export const findPersonByName = async (req, res) => {
  const person = await Person.find({ nombre: {$regex:req.params.nombre, $options: "i"}});
  res.json(person);
};

export const findPersonByStatus = async (req, res) => {
  const limit = req.params.limit
  const skip = req.params.skip
  const person = await Person.find({ estado: req.params.estado}).skip(skip).limit(limit)
  res.json(person);
};

export const filtersPerson = async (req, res) => {
  const persons = await Person.find({
    $or: [
      { dni: req.body.dni },
      { nombre: req.body.nombre },
      { apellidos: req.body.apellidos },
    ],
  });
  res.json(persons);
};

export const deletePerson = async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.json({
    messafe: `La persona a sido eliminada`,
  });
};

export const updatePerson = async (req, res) => {
  const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "ok" });
};
