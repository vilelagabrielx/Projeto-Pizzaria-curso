import { NextFunction, Request, Response } from "express";

export default function validateEmail(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const email = req.body.email;
    
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    if (!emailRegex.test(email)) {
        res.status(400).json({ error: "Invalid Email." });
    } else {
        next();
    }
}