export default function Contact() {
    return (
        <div className='snap-end w-full py-16 bg-white'>
            <div className="flex flex-col items-center justify-center w-full gap-3">


                <h1 className="text-4xl font-bold">Get in touch with me!</h1>
                <hr style={{
                    height: 2,
                    border: 'black solid 2px',
                    width: 120
                }} />
                <p className="text-xl max-w-[800px] text-center mt-4">
                I am open to any job opportunities where I can learn, grow and hone my skills as a developer. Feel free to reach out to me! 
                </p>

                <span className="text-lg">
                    <a className="underline" href="mailto:shaina.mrosell@gmail.com">shaina.mrosell@gmail.com</a> / <a className="underline" href="https://www.linkedin.com/in/shainamrosell/" target="_blank">LinkedIn</a> / <a className="underline" href="https://github.com/shaiRos" target="_blank">Github </a>
                       
                </span>
            </div>
        </div>
    )
}