import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

type Data = {
  company: string;
  email: string;
  name: string;
  phone: string;
  size: string;
  needs: string;
  message: string;
};

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async function sendMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data: Data = req.body;
    const { company, email, name, phone, size, needs, message } = data;

    try {
      await sendgrid.send({
        to: "qi@qualidadeinteligente.com",
        from: "qi@qualidadeinteligente.com",
        subject: `${company} - ${name} - Solicitou uma consulta.`,
        html: `<!DOCTYPE html>
        <html>
        <head>
        <style>
        body {
        font-family: sans-serif;}
        table, th, td {
          border: 1px solid #ddd;
          border-collapse: collapse;
        }
        
        th {
          padding-top: 12px;
          padding-bottom: 12px;
          padding-left: 12px;
          text-align: left;
          background-color: #04AA6D;
          color: white;
        }
        
        td {
          padding-top: 12px;
          padding-bottom: 12px;
          padding-left: 12px;
          text-align: left;
        }
        </style>
        </head>
        <body>
        
        <h2>Mensagem Recebida - Site Qi</h2>
        
        <table style="width:100%">
          <tr>
            <th>Nome da Empresa</th>
            <td>${company}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>${email}</td>
          </tr>
          <tr>
            <th>Nome Completo</th>  
            <td>${name}</td>
          </tr>
          <tr>
            <th>Celular / Telefone</th>  
            <td>${phone}</td>
          </tr>
          <tr>
            <th>Tamanho da Empresa</th>  
            <td>${size}</td>
          </tr>
          <tr>
            <th>Necessidade</th>  
            <td>${needs}</td>
          </tr>
          <tr>
            <th>Mensagem</th>  
            <td>${message}</td>
          </tr>
        </table>
        
        </body>
        </html>
        `,
      });
    } catch (error: any) {
      console.log(error.message);
      return res.status(error.statusCode || 500).json({ message: "error" });
    }

    return res.status(200).json({ message: "success" });
  } else {
    res
      .status(200)
      .send(
        "why are you here? Well, since you're here, follow me on github @adomaitisc"
      );
  }
}
