import profile from './_assets/images/profile.jpg'

export default function About(props: { about: { header: string, body: string, footer: string}}){
    return(
        <section id='about' className="flex flex-col items-center sm:py-7 gap-7">
            <div className="text-xl font-bold border-4 border-black px-4 py-2 rounded">
                About Me
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-10">
                <div>
                    <img src={profile.src} className=' h-[300px] shadow-black' alt="profile" />
                </div>
                <div className=' border-black sm:w-1/3 flex flex-col gap-3 text-xs sm:text-sm p-5 sm:p-2 text-justify '>
                    <div>
                        {props.about.header}
                    </div>
                    <div className='border-t-2 border-black'></div>
                    <div>
                        {props.about.body}
                    </div>
                    <div className='border-t-2 border-black'></div>
                    <div>
                        {props.about.footer}
                    </div>
                </div>
            </div>
        </section>
    )
}