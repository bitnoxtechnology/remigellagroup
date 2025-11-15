import express from "express";
import { emailController } from "./email.controller";

const emailRouter = express.Router();

emailRouter.post("/contact-us", emailController.sendContactUsEmail);
emailRouter.post(
  "/contact-us/ohamadike-fc",
  emailController.sendContactUsEmailOhamadikeFC
);
emailRouter.post(
  "/contact-us/ohamadike-foundation",
  emailController.sendContactUsEmailOhamadikeFoundation
);

export { emailRouter };
