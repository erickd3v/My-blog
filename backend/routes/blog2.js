import { Router } from "express";


import { getData } from "../controllers/blog.js";

const router = Router();

const blogContent2 = 'vanilla-js-beneficios-y-pasar-a-framework';

export const blog2Route = router.get(
    `/${blogContent2}`,
    getData
);