import Image from 'next/image';
import { RiHdLine, RiWaterPercentLine, RiRainbowLine } from 'react-icons/ri';

export default function Home() {
  return (
    <main className='m-4' role='main'>
      <section className='grid grid-cols-1 grow bg-white rounded shadow-sm px-3 py-12 md:py-16 lg:py-24 lg:px-24'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-5xl font-semibold text-center text-neutral-900 order-1 mt-3 mb-5'>
            For designers, by designers
          </h1>
          <p className='text-base font-semibold text-center text-indigo-700 order-0'>
            High quality images
          </p>
          <p className='text-lg md:text-xl font-normal text-neutral-600 text-center order-3 mb-12 md:mb-16 lg:mb-0'>
            Unleash boundless creativity with a large repository of images
            optimized for designers
          </p>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-16'>
          <ul className='flex flex-col gap-10 order-2 lg:order-2' role='list'>
            <li className='flex gap-x-5'>
              <span className='h-12 w-12 bg-white shadow rounded-full flex items-center justify-center p-3'>
                <RiHdLine
                  className='text-indigo-700 h-6 w-6'
                  aria-hidden='true'
                />
                <span className='sr-only'>HD Icon</span>
              </span>
              <div>
                <h3 className='text-lg font-semibold text-neutral-900 mt-3 mb-2'>
                  5K resolution support
                </h3>
                <p className='text-base font-normal text-neutral-600'>
                  All images boast a minimum resolution of 5K, ensuring crisp,
                  crystal-clear quality.
                </p>
              </div>
            </li>
            <li className='flex gap-5'>
              <span className='h-12 w-12 bg-white shadow rounded-full flex items-center justify-center p-3'>
                <RiWaterPercentLine
                  className='text-indigo-700 h-6 w-6'
                  aria-hidden='true'
                />
                <span className='sr-only'>Water Icon</span>
              </span>
              <div>
                <h3 className='text-lg font-semibold text-neutral-900 mt-3 mb-2'>
                  From water to glass
                </h3>
                <p className='text-base font-normal text-neutral-600'>
                  We offer a wide array of abstractions, ranging from water to
                  glass, and encompassing various styles including 3D and
                  vector.
                </p>
              </div>
            </li>
            <li className='flex gap-5'>
              <span className='h-12 w-12 bg-white shadow rounded-full flex items-center justify-center p-3'>
                <RiRainbowLine
                  className='text-indigo-700 h-6 w-6'
                  aria-hidden='true'
                />
                <span className='sr-only'>Rainbow Icon</span>
              </span>
              <div>
                <h3 className='text-lg font-semibold text-neutral-900 mt-3 mb-2'>
                  Portrait or landscape
                </h3>
                <p className='text-base font-normal text-neutral-600'>
                  Effortlessly adapt your images for any platform - whether
                  it&apos;s a stunning wallpaper or captivating Instagram reels
                  and stories.
                </p>
              </div>
            </li>
          </ul>
          <figure className='relative lg:order-4 mt-12 lg:my-0'>
            <Image
              className='rounded-lg shadow-lg object-cover w-full max-h-[180px] sm:max-h-[300px] md:max-h-[394px] lgmd:max-h-[460px]'
              src='/featured-right.jpg'
              alt='Abstract features image'
              width={319}
              height={180}
              layout='responsive'
              priority
            />
            <figcaption className='sr-only'>
              Abstracted features section image
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
