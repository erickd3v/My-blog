import { Router } from "express";


import { getData } from "../controllers/home.js";

const router = Router();


export const homeRoute = router.get(
    `/`,
    getData
);