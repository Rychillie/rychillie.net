'use server';

import { Resend } from 'resend';

type AddContact = {
  email: string;
  firstName?: string;
  lastName?: string;
};

type UpdateContact = {
  id: string;
  firstName?: string;
  lastName?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY as string);
const audienceId = process.env.RESEND_AUDIENCE_ID as string;

export async function getContacts() {
  return await resend.contacts.list({ audienceId });
}

export async function addContact({ email, firstName, lastName }: AddContact) {
  return await resend.contacts.create({
    email,
    firstName,
    lastName,
    unsubscribed: false,
    audienceId
  });
}

export async function updateContact({ id, firstName, lastName }: UpdateContact) {
  return await resend.contacts.update({ id, audienceId, firstName, lastName });
}
