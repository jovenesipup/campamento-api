import { Router } from "express";

import * as personControl from "../controllers/person.controller";
import * as userControl from "../controllers/user.controller";

const router = Router();

router.get("/personas", personControl.getPersons);

router.post("/", personControl.createPerson);

router.get("/personas/:id", personControl.findOnePerson);

router.get("/personas/dni/:dni", personControl.findOnePersonByDni);

router.get("/personas/cabana/:limit&:skip", personControl.findOnePersonByCabana);

router.get("/personas/pan/:limit&:skip", personControl.findOnePersonByPan);

router.get("/personas/santa/:limit&:skip", personControl.findOnePersonBySanta);

router.get("/personas/motupe/:limit&:skip", personControl.findOnePersonByMotupe);

router.get("/personas/carpa/:limit&:skip", personControl.findOnePersonByCarpa);

router.get("/personas/nombre/:nombre", personControl.findPersonByName);

router.get("/personas/estado/:estado&:limit&:skip", personControl.findPersonByStatus);

router.get("/personas/filtrar", personControl.filtersPerson);

router.delete("/personas/:id", personControl.deletePerson);

router.put("/personas/:id", personControl.updatePerson);

router.post("/user", userControl.createUser)

router.get("/user/:user&:password", userControl.validateUser)

export default router;
