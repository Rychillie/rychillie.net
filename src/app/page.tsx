import { CustomLink, Footer, HeaderImage, HomeLinks, Icon } from '@/app/_components';
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
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-center lg:text-left flex-col justify-start items-start gap-1 flex">
              <h2 className="text-neutral-950 font-medium dark:text-neutral-50 w-full">
                I'm sharing content with over 20k others.
              </h2>

              <p className="text-sm leading-tight text-neutral-600 dark:text-neutral-400">
                Subscribe below, and join me on{' '}
                <CustomLink href="#" hideUnderline className="text-blue-700 dark:text-blue-300">
                  Youtube
                </CustomLink>
                ,{' '}
                <CustomLink href="#" hideUnderline className="text-blue-700 dark:text-blue-300">
                  LinkedIn
                </CustomLink>
                ,{' '}
                <CustomLink href="#" hideUnderline className="text-blue-700 dark:text-blue-300">
                  Github
                </CustomLink>
                ,{' '}
                <CustomLink href="#" hideUnderline className="text-blue-700 dark:text-blue-300">
                  Threads
                </CustomLink>{' '}
                and{' '}
                <CustomLink href="#" hideUnderline className="text-blue-700 dark:text-blue-300">
                  Instagram
                </CustomLink>{' '}
                to follow along!
              </p>
            </div>

            <div className="w-full flex-col justify-center items-center gap-1 flex">
              <div className="w-full justify-start items-start gap-3 flex">
                <input
                  className="w-full grow shrink basis-0 h-10 px-4 py-2 bg-white rounded-3xl border border-neutral-200 justify-start items-center gap-2.5 flex placeholder:text-neutral-600 dark:bg-neutral-900/40 dark:border-neutral-800 dark:placeholder:text-neutral-400"
                  placeholder="Enter your email"
                />

                <button className="size-10 bg-neutral-200 rounded-3xl border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-800 justify-center items-center gap-2.5 flex">
                  <Icon
                    name="arrow-right"
                    className="size-6 relative text-neutral-600 dark:text-neutral-400"
                  />
                </button>
              </div>

              <div className="w-full justify-center lg:justify-start items-center gap-3 inline-flex">
                <div className="flex">
                  {[...Array(3)].map((_, index) => (
                    <img
                      key={index}
                      className="size-[22px] -ml-2 first:m-0 rounded-full border-2 border-neutral-50 dark:border-neutral-950 hover:z-10 hover:scale-125 transition-all cursor-pointer"
                      src="https://via.placeholder.com/22x22"
                    />
                  ))}
                </div>

                <span className="text-neutral-600 dark:text-neutral-400 text-xs font-medium">
                  20k+ people subscribed
                </span>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}
