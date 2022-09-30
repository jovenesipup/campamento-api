import Person from "../models/Personas";
import { getPagination } from "../libs/getPagination";

export const getPersons = async (req, res) => {
    const {size,page} = req.query
    const {limit, offset} = getPagination(page, size)
  const persons = await Person.paginate({}, {offset, limit});
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
  });
  const personSaved = await newPerson.save();
  res.json(personSaved);
};

export const findOnePerson = async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.json(person);
};

export const findOnePersonByDni = async (req, res) => {
  const person = await Person.find({dni: req.params.dni});
  res.json(person);
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
