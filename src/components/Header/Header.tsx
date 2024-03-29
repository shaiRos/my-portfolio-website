export default function Header() {
    return (
        <>
            <div className="sticky top-0 w-full h-[70px] bg-red-50 flex flex-row justify-between px-10 text-2xl z-50">
                <button className="text-4xl" style={{fontWeight: 500}}><span className="font-bold">Shaina</span> Rosell</button>
                <div className="flex flex-row gap-20">
                    <button>Portfolio</button>
                    <button>About</button>
                    <button>Resume</button>
                    <button>Contact</button>
                </div>

            </div>
        
        </>
    )
}