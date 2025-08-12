// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hip633253@gmail.com",
    pass: "gbcb ymna gsns njok"
  }
});
