import express from 'express';

const router = express.Router();

router.get('/getAllDoctor', (request, response) => {
    console.log("allDoctor");
});

router.get('/getDoctorByID/:id', (request, response) => {
    console.log(`getDoctorByID ${request.params.id}`);
});

router.post('/createDoctor', (request, response) => {
    console.log(`createDoctor ${request}`);
});

router.put('/updateDoctor/:id', (request, response) => {
    console.log(`updateDoctor ${request.params.id} and data ${request}`);
});

router.delete('/deleteDoctor/:id', (request, response) => {
    console.log(`deleteDoctor ${request.params.id} and data ${request}`);
});

export default router;