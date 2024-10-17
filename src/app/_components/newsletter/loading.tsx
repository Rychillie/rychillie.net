import Form from './form';
import Members from './members';

export default function Loading() {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <Form />
      <Members />
    </div>
  );
}
