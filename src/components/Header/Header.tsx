export default function Header({ scrollRefs }) {

    const scrollToRef = (myRef) => window.scrollTo(0, myRef.current.offsetTop - 5);

    return (
        <>
            <div className="sticky top-0 w-full h-[70px] bg-red-50 flex flex-row justify-between px-10 text-2xl z-50">
                <button className="text-4xl" style={{ fontWeight: 500 }} onClick={() => window.scrollTo(0, 0)}><span className="font-bold">Shaina</span> Rosell</button>
                <div className="hidden md:flex flex-row gap-20">
                    <button onClick={() => scrollToRef(scrollRefs.aboutRef)}>About</button>
                    <button onClick={() => scrollToRef(scrollRefs.projectsRef)}>Portfolio</button>
                    <a className="flex items-center" href="/Resume.pdf" target="_blank">
                        <button>Resume</button>
                    </a>
                    <button onClick={() => scrollToRef(scrollRefs.contactRef)}>Contact</button>
                </div>

            </div>

        </>
    )
}