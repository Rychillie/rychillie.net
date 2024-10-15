import Image from 'next/image';

export default function HeaderImage() {
  return (
    <header className="aspect-video lg:aspect-auto lg:max-w-[calc(448px-32px)] lg:h-[calc(100%-32px)] lg:m-4 lg:rounded-2xl overflow-hidden w-screen relative after:content-[''] before:content-[''] before:z-10 after:absolute before:absolute after:bottom-0 before:top-0 after:inset-x-0 before:inset-x-0 after:h-1/6 before:h-1/6 after:bg-gradient-to-b before:bg-gradient-to-t after:from-neutral-50/0 before:from-neutral-50/0 after:dark:from-neutral-950/0 before:dark:from-neutral-950/0 after:to-neutral-50 before:to-neutral-50 after:dark:to-neutral-950 before:dark:to-neutral-950 lg:after:bg-none lg:before:bg-none">
      <Image src="/assets/braziljs.png" className="object-cover" alt="Brazil JS" priority fill />
    </header>
  );
}
