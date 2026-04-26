'use server';

import { Resend } from 'resend';
import { SendEmailProps } from '@/backend/modules/Email/types';
import { ContactOtherFormData } from '@/schemas/contactOther';
import { ContactPressFormData } from '@/schemas/contactPress';
import { ContactRestaurantFormData } from '@/schemas/contactRestaurant';

const sendEmail = async ({ subject, html }: SendEmailProps) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'domaine-simone@resend.dev',
    html,
    subject,
    to: process.env.CONTACT_EMAIL_ADDRESS as string,
  });

  if (error) {
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

const sendEmailFromRestaurant = async ({
  fullName,
  email,
  restaurantName,
  message,
}: ContactRestaurantFormData) => {
  const subject = `🍽️ Nouveau message d'un restaurant ${restaurantName ? `(${restaurantName})` : ''}`;
  const html = `
    <p><strong>Nom:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Restaurant:</strong> ${restaurantName || '/'}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  return sendEmail({ html, subject });
};

const sendEmailFromPress = async ({
  fullName,
  email,
  newspaperName,
  message,
}: ContactPressFormData) => {
  const subject = `📰  Nouveau message de la presse ${newspaperName ? `(${newspaperName})` : ''}`;
  const html = `
    <p><strong>Nom:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Journal:</strong> ${newspaperName || '/'}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  return sendEmail({ html, subject });
};

const sendEmailFromOtherContact = async ({
  fullName,
  email,
  message,
}: ContactOtherFormData) => {
  const subject = `📨  Nouveau message d'un autre contact`;
  const html = `
    <p><strong>Nom:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  return sendEmail({ html, subject });
};

export {
  sendEmail,
  sendEmailFromOtherContact,
  sendEmailFromPress,
  sendEmailFromRestaurant,
};
