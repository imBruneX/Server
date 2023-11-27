import { Router } from "express";
import { Login } from "../controllers/login.controller.js";

const route = Router()

route.post('/auth/login', Login)


export default route;