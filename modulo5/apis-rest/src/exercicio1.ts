import { Request, Response } from "express";
import { users } from "./data";

export const allUser = (req:Request, res: Response) => {
    try {
        res.status(200).send(users)
    } catch (error) {
        
    }
}

// A. Qual método HTTP você deve utilizar para isso?
    // Get


// B. Como você indicaria a entidade que está sendo manipulada?
