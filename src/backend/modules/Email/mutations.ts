'use server';

import { getTranslations } from 'next-intl/server';
import { Resend } from 'resend';
import { SendEmailProps } from '@/backend/modules/Email/types';
import { ContactFormData } from '@/schemas/contact';

const sendEmail = async ({ subject, html }: SendEmailProps) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'contact@email.domaine-simone.ch',
    html,
    subject,
    to: process.env.CONTACT_EMAIL_ADDRESS as string,
  });

  if (error) {
    console.log(error);

    return {
      data: null,
      error,
    };
  }

  return {
    data: true,
    error: null,
  };
};

const sendEmailFromContact = async ({
  fullName,
  email,
  message,
  type,
}: ContactFormData) => {
  const t = await getTranslations('forms.common');

  const subject = `📨  Nouveau message d'un contact`;
  const html = `
    <p><strong>Raison du contact :</strong> ${type ? t(`fields.type.options.${type}`) : 'Sans raison particulière'}</p>
    <p><strong>Nom :</strong> ${fullName}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Message :</strong> ${message.replace(/\r\n|\r|\n/g, '<br />')}</p>
  `;

  return sendEmail({ html, subject });
};

export { sendEmail, sendEmailFromContact };
