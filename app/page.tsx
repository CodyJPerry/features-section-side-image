import Image from 'next/image';
import { RiRocket2Line, RiP2pLine, RiCopyrightLine } from 'react-icons/ri';

export default function Home() {
  return (
    <main className='m-4' role='main'>
      <section className='grid grid-cols-1 grow bg-white rounded shadow-sm px-3 py-12 md:py-16 lg:py-24 lg:px-24'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-5xl font-semibold text-center text-neutral-900 order-1 mt-3 mb-5'>
            Convenience and licensing that empowers
          </h1>
          <p className='text-base font-semibold text-center text-indigo-700 order-0'>
            Best-in-class support
          </p>
          <p className='text-lg md:text-xl font-normal text-neutral-600 text-center order-3'>
            In a world where storytelling constantly evolves, don&apos;t let
            licensing and poor support hold you down.
          </p>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-16'>
          <figure className='relative order-3 lg:order-1 my-12 lg:my-0'>
            <Image
              className='rounded-lg shadow-lg object-cover w-full max-h-[180px] sm:max-h-[300px] md:max-h-[394px] lgmd:max-h-[460px]'
              src='/featured-left.jpg'
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
          <ul className='flex flex-col gap-10 lg:order-2' role='list'>
            <li className='flex gap-x-5'>
              <span className='h-12 w-12 bg-white shadow rounded-full flex items-center justify-center p-3'>
                <RiRocket2Line
                  className='text-indigo-700 h-6 w-6'
                  aria-hidden='true'
                />
                <span className='sr-only'>Rocket Icon</span>
              </span>
              <div>
                <h3 className='text-lg font-semibold text-neutral-900 mt-3 mb-2'>
                  Faster downloads
                </h3>
                <p className='text-base font-normal text-neutral-600'>
                  Our robust servers are primed to deliver the highest
                  resolution images swiftly, ensuring a smooth download
                  experience
                </p>
              </div>
            </li>
            <li className='flex gap-5'>
              <span className='h-12 w-12 bg-white shadow rounded-full flex items-center justify-center p-3'>
                <RiP2pLine
                  className='text-indigo-700 h-6 w-6'
                  aria-hidden='true'
                />
                <span className='sr-only'>P2p icon</span>
              </span>
              <div>
                <h3 className='text-lg font-semibold text-neutral-900 mt-3 mb-2'>
                  Convenience for teams
                </h3>
                <p className='text-base font-normal text-neutral-600'>
                  Your single account can accommodate multiple users
                  simultaneously downloading without any disruptions,
                  streamlining teamwork and productivity.
                </p>
              </div>
            </li>
            <li className='flex gap-5'>
              <span className='h-12 w-12 bg-white shadow rounded-full flex items-center justify-center p-3'>
                <RiCopyrightLine
                  className='text-indigo-700 h-6 w-6'
                  aria-hidden='true'
                />
                <span className='sr-only'>Copyright icon</span>
              </span>
              <div>
                <h3 className='text-lg font-semibold text-neutral-900 mt-3 mb-2'>
                  Faster downloads
                </h3>
                <p className='text-base font-normal text-neutral-600'>
                  Our straightforward, royalty-free licensing means your chosen
                  images are yours to innovate with, without the hassle of
                  negotiating usage rights for every new project.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
