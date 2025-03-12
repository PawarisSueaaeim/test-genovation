import express from 'express';

const router = express.Router();

router.get('/login', (request, response) => {
    console.log("login");
})

router.get("/register", (request, response) => {
    console.log("register");
});

export default router;