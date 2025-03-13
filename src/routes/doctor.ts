import express from 'express';
import Doctor  from '../models/doctor.js';

const router = express.Router();

router.get('/getAllDoctor', (request, response) => {
    response.send("all doctor");
});

router.get('/getDoctorByID/:id', (request, response) => {
    response.send(`getDoctorByID ${request.params.id}`);
});

router.post('/createDoctor', async (request, response) => {
    try {
        response.send(`createDoctor ${request.body}`);
    } catch (error) {
        response.status(500).send("internal server error");
    }
});

router.put('/updateDoctor/:id', (request, response) => {
    response.send(`updateDoctor ${request.params.id} and data ${request}`);
});

router.patch('/updateTimeDoctor/:id', (request, response) => {
    response.send(`updateTimeDoctor ${request.params.id} and data ${request}`);
});

router.delete('/deleteDoctor/:id', (request, response) => {
    response.send(`deleteDoctor ${request.params.id} and data ${request}`);
});

export default router;