import { Router } from "express";


import { getData } from "../controllers/blog.js";

const router = Router();

const blogContent1 = 'mi-primer-blog';

export const blog1Route = router.get(
    `/${blogContent1}`,
    getData
);