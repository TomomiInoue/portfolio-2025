import NextImage from 'next/image';
import { AboutComponent } from './components/Section/About/About';
import { LandingComponent } from './components/Section/Landing/Landing';
import { WorkComponent } from './components/Section/Work/Work';


export default function Home() {
  return (
    <div className="bg-primary">
      <LandingComponent />
      <AboutComponent />
      <WorkComponent />
      {/* <div className="container py-20 h-full">
        <div className="text-5xl text-secondary">Hello, I&apos;m Tomomi</div>
        <h1 className="text-display02 text-accent leading-loose">Web Developer & Web Designer</h1>
        <div className='flex gap-6 pt-10'>
          <div className='relative w-[780px] h-[480px]'>
            <NextImage
              src="/images/DSC00239.jpg"
              alt="Tomomi Inoue"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className='flex flex-col gap-4 w-full max-w-[350px] align-middle items-start self-center'>
            <div className='flex gap-4'>
              <h4 className='text-4xl text-accent text-left font-bold'>Tomomi Inoue</h4>
            </div>
            <div className='text-base'>
              Free lance Web Developer & Web designer, based in Byron Bay NSW Australia. I have over 3 years of experience of web development.
            </div>
            <div className="text-base">
              Most of my career, I was focusing on front end web development work.
              I have worked with a variety of clients from small businesses to large corporations.
            </div>
            <div className='text-base'>
              My specialty is creating custom websites for clients that are easy to manage and update.
              Using Typescript, React, Next.js, Tailwind CSS, and Shopify.
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
