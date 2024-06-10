import Image from "next/image";
import { RiRocket2Line, RiP2pLine, RiCopyrightLine } from "react-icons/ri";

export default function Home() {
  return (
    <main class='m-4'>
      <section className="grid grid-cols-1 grow bg-white rounded shadow-sm px-3 py-12">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-center text-neutral-900 order-1 mt-3 mb-5">Convenience and licensing that empowers</h1>
          <p className="text-base font-semibold text-center text-indigo-700 order-0">Best-in-class support</p>
          <p className="text-lg font-normal text-neutral-600 text-center order-3">In a world where storytelling constantly evolves, don&apos;t let licensing and poor support hold you down.</p>
          <figure className="relative order-3 my-12">
            <Image className="rounded-lg shadow-lg max-h-[180px]" src='/featured-left.jpg' alt='Abstract features image' width={592} height={394} layout="responsive" priority />
            <figcaption className="sr-only">Abstracted features section image</figcaption>
          </figure>
        </div>
        <div>
          <ul className="flex flex-col gap-10">
            <li>
              <span className="h-12 w-12 bg-white shadow rounded-full flex items-center justify-center">
                <RiRocket2Line className="text-indigo-700 h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Faster downloads</h3>
                <p className="text-base font-normal text-neutral-600">Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience</p>
              </div>
            </li>
            <li>
              <span className="h-12 w-12 bg-white shadow rounded-full flex items-center justify-center">
                <RiP2pLine className="text-indigo-700 h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Convenience for teams</h3>
                <p className="text-base font-normal text-neutral-600">Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.</p>
              </div>
            </li>
            <li>
              <span className="h-12 w-12 bg-white shadow rounded-full flex items-center justify-center">
                <RiCopyrightLine className="text-indigo-700 h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Faster downloads</h3>
                <p className="text-base font-normal text-neutral-600">Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.</p>
              </div>
            </li>
          </ul>
        </div>
        
      </section>
    </main>
  );
}