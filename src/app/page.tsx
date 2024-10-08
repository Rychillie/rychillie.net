import { CustomLink, Footer, HeaderImage, HomeLinks, NewsHome } from '@/app/_components';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="lg:max-w-4xl lg:mx-auto w-full flex flex-col lg:grid lg:grid-cols-2">
      <HeaderImage />

      <main className="max-w-md mx-auto w-full p-4 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Image
              src="/assets/rychillie.png"
              alt="Rychillie"
              width={40}
              height={40}
              className="hidden lg:flex size-10 rounded-full mix-blend-luminosity"
            />
            <h1 className="text-center lg:text-left font-medium text-neutral-600 dark:text-neutral-400">
              <em className="text-black dark:text-white font-bold">
                Hello — I'm Rychillie, a Software Engineer based in the Brazil.
              </em>{' '}
              Design and tech lover, creating content and sharing knowledge over the internet. Find
              out a little more{' '}
              <CustomLink href="#" className="text-neutral-800 dark:text-neutral-200">
                about me.
              </CustomLink>
            </h1>
          </div>

          <HomeLinks />
        </div>

        <div className="flex-col justify-start items-start gap-6 flex">
          <NewsHome />

          <Footer />
        </div>
      </main>
    </div>
  );
}
