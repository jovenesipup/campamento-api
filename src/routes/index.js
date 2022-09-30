import {Router} from "express";

import * as personControl from "../controllers/person.controller";

const router = Router()

router.get('/personas', personControl.getPersons)

router.post('/', personControl.createPerson)

router.get('/personas/:id', personControl.findOnePerson)

router.get('/personas/:dni', personControl.findOnePersonByDni)

router.delete('/personas/:id', personControl.deletePerson)

router.put('/personas/:id', personControl.updatePerson)

export default router