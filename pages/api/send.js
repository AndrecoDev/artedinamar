import { Resend } from "resend";

import MailTemplate from "../../components/templates/emailTemplate";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const requestBody =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const data = await resend.emails.send({
      from: "Pagina Web Dinamar <onboarding@resend.dev>",
      to: [process.env.NEXT_PUBLIC_MAIL_RECEIVER],
      subject: requestBody?.isNewLetter
        ? "Solicitud de suscripción"
        : "Solicitud de compra",
      react: MailTemplate({ data: requestBody }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
