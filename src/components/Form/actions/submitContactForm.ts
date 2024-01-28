"use server";

import sgMail from "@sendgrid/mail";

interface State {
  error: string | null;
  success: boolean;
}

type SubmitContactFormFunction = {
  name: string;
  email: string;
  phone: string;
  body: string;
};

export const submitContactForm = async ({
  name,
  email,
  phone,
  body,
}: SubmitContactFormFunction) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");

    const msg = {
      to: "gwen@gwnplus.be",
      from: "no-reply@mail.gwnplus.be",
      subject: "Contactformulier",
      html: `
    <p><strong>Naam</strong>: ${name}</p>
    <p><strong>Email</strong>: ${email}</p>
    <p><strong>Telefoon</strong>: ${phone}</p>
    <p><strong>Vraag</strong>:</p>
    <p>${body.replace(/\n/g, "<br />")}</p>`,
    };

    await sgMail.send(msg);

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
