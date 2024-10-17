import { getContacts } from '@/app/_actions/resend';
import Form from './form';
import Members from './members';

const subscribers = [
  { name: 'Igor', image: '/assets/kinark.jpg' },
  { name: 'Biro Biro Biro', image: '/assets/birobirobiro.jpg' },
  { name: 'Daniel Lima', image: '/assets/daniellima.jpg' }
];

export default async function Letter() {
  const contacts = await getContacts();

  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <Form />
      <Members quantity={contacts.data?.data?.length} subscribers={subscribers} />
    </div>
  );
}
