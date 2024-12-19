import NextImage from 'next/image';

export const AboutComponent = () => {
    return (
        <div className="container py-20 h-screen">
            <div className='grid grid-cols-5 gap-10'>
                <div className='col-span-3'>
                    <div className='text-xl text-black text-left font-normal mb-5'>About me</div>
                    <div className="text-5xl text-accent">TOMOMI INOUE</div>

                    <div className='pt-[40px]'>
                        <div className="relative w-[680px] h-[400px]">
                            <NextImage
                                src="/images/barrel-pigdog.jpg"
                                alt="Tomomi Inoue"
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-2 mt-[100px]'>
                    <div className='text-lg text-neutral-800 text-left font-normal mb-5'>
                        I’m a passionate Frontend Web Developer with over 3 years of experience creating intuitive and visually appealing web applications.
                        <div className='mt-3'>My expertise lies in crafting seamless user experiences through clean and efficient code, always keeping up with the latest technologies and design trends.</div>
                        <div className='mt-3'>
                            When I’m not coding, you’ll likely find me catching waves or exploring new destinations. Surfing and traveling fuel my creativity, giving me fresh perspectives and inspiration that I bring back to my work.
                        </div>
                        <div className='mt-3'>
                            I’m deeply dedicated to both my craft and my passions, always striving to push boundaries and deliver excellence. Whether it’s solving complex problems or riding the perfect wave, I approach everything with focus and enthusiasm. Let’s connect and create something amazing together!
                        </div>
                    </div>
                    {/* <div className='relative w-[400px] h-[400px]'>
                        <NextImage
                            src="/images/bio.png"
                            alt="Tomomi Inoue"
                            fill
                            className="rounded-md object-cover"
                        />
                    </div> */}
                </div>
            </div>
        </div >
    )
}