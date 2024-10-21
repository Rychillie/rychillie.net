import '@/styles/prose.css';
import DiaryFooter from '../_components/diary-footer';
import DiaryForm from '../_components/diary-form';
import DiaryListing from '../_components/diary-listing';

export default function DailyPage() {
  return (
    <div className="relative lg:max-w-5xl lg:mx-auto w-full h-screen flex flex-col px-4 lg:px-0 lg:pl-96">
      <DiaryForm />

      <div className="py-16 lg:py-32 lg:pl-24 lg:ml-14">
        <div className="z-[99999] left-0 lg:left-[calc(50vw-6px)] pointer-events-none fixed lg:fixed inset-y-0 overflow-hidden lg:overflow-visible">
          <svg className="fixed lg:absolute top-0 h-full w-1.5" aria-hidden="true">
            <defs>
              <pattern id=":S4:" width="6" height="8" patternUnits="userSpaceOnUse">
                <path
                  d="M0 0H6M0 8H6"
                  className="stroke-neutral-200 dark:stroke-neutral-800"
                  fill="none"
                ></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#:S4:)"></rect>
          </svg>
        </div>

        <div>
          <DiaryListing />
        </div>
      </div>

      <DiaryFooter />
    </div>
  );
}
