import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const isvalidEmail = [
  body("email").isEmail().withMessage("Invalid Email format"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];


export const validateEmptyParams = (fields: string[]) => {
  return [
    body(fields).custom((value, { req }) => {
      if (Array.isArray(value)) {
        return value.every((val) => val.trim().toUpperCase() !== "" && !["NULL", "NONE"].includes(val.trim().toUpperCase()));
      } else {
        return value.trim().toUpperCase() !== "" && !["NULL", "NONE"].includes(value.trim().toUpperCase());
      }
    }).withMessage("Field cannot be empty or contain only spaces, null, or none"),
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
};