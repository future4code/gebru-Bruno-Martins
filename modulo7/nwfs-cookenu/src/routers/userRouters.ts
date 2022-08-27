import { UserController } from './../controller/UserController';
import { HashManager } from './../services/HashManager';
import { UserBusiness } from './../business/UserBusiness';
import { UserDatabase } from './../data/UserDatabase';
import express from "express";
import { Authenticator } from '../services/Authentication';

export const userRouters = express.Router()

const userDatabase = new UserDatabase()
const hashManager = new HashManager()
const authenticator = new Authenticator()

const userBusiness = new UserBusiness(userDatabase, hashManager, authenticator)

const userController = new UserController(userBusiness)

userRouters.post("/signup", (res, req) => userController.userSinup(res, req))

