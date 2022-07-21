import { NextApiRequest, NextApiResponse } from "next";

import sanitizeHtml from "sanitize-html";

import { validateInput } from "../../scripts/validator";

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  const hasErrors = validateInput({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });

  if (hasErrors) {
    res.status(400).json(hasErrors);
    res.end();
    return;
  }

  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.zoho.com.au",
    auth: {
      user: process.env.smtpemail,
      pass: process.env.password,
    },
    secure: true,
  });

  const cleanMessage = sanitizeHtml(req.body.message);
  const mailData = {
    from: process.env.smtpemail,
    to: process.env.toemail,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${cleanMessage}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).end();
}
