// pages/api/send-email.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";
import { NextApiResponse } from "next";
import { log } from "console";

export async function POST(req, res) {
  try {
  
    const secRes = await req.json()
    console.log(secRes);
    const {name,number,email} = secRes
    console.log(email);
     const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host:'smtp.gmail.com',
      port:465,
      logger:true,
      debug:true,
      secure: true,
      auth: {
        user:process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized:true
      }
    });
    console.log(process.env.EMAIL_USER);
    const mailOptions = {
      from:`${email}`,
      to: process.env.EMAIL_USER,
      subject:` Message from ${name}`,
      text: `Data:${name},${number},${email}`,
    };
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: `name`, data: true }),{status:200,headers:{'Content-Type':'application/json'}});
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "error", data: false }),{status:404,headers:{'Content-Type':'application/json'}}); 
  }
}
