export default function Projects() {
    return (
        <div className='snap-end w-full bg-red-50 py-16'>
            <div className="flex flex-col items-center justify-center w-full gap-3">

                <h1 className="text-4xl font-bold">PROJECTS</h1>
                <hr style={{
                    height: 2,
                    border: 'black solid 2px',
                    width: 120
                }} />
                {/* <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] w-[80%]">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div> */}
                <div className="flex max-w-[1200px] w-[80%] gap-5">
                    <div className="w-[50%] flex flex-col gap-5">
                        <ProjectCard />
                        <ProjectCard h={200}/>
                        <ProjectCard h={500}/>
                    </div>
                    <div className="w-[50%] flex flex-col gap-5">
                        <ProjectCard />
                        <ProjectCard h={300} />
                        <ProjectCard h={400}/>

                    </div>

                </div>
            </div>
        </div>
    )
}

function ProjectCard({h} : {h ?: number}) {
    return (
        <div 
            className="w-full bg-[#E2D2D2] rounded-lg"
            style={{
                border: 'white solid 1px',
                height: h || 200
            }}
            
            >


        </div>
    )
}