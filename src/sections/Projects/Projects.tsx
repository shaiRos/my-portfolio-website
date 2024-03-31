import { TextPill, TextPillsContainer } from "../../components/TextPills"
import { ProjectsConfig } from "../../projects/Projects"
import { Project_Entry } from "../../utils/types"

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
                        <ProjectCard project_entry={ProjectsConfig[0]} />  
                        <ProjectCard/>
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

function ProjectCard({h, children, project_entry} : {h ?: number, children ?: HTMLElement, project_entry ?: Project_Entry}) {
    return (
        <div 
            className="w-full bg-[#E2D2D2] rounded-lg flex gap-3 p-4 hover:shadow-xl duration-300 group"
            style={{
                border: 'white solid 1px',
                minHeight: 200,
                height: h
            }}
            >

            {/* {children} */}
            <div className="min-w-[200px] h-full bg-slate-400">
                {/* picture here */}
            </div>

            <div>
                <h2 className="font-bold text-xl mb-2 group-hover:text-main">{project_entry?.Project_Name}</h2>
                <p>{project_entry?.card_description}</p>
                <TextPillsContainer>
                    {
                        project_entry?.card_tags.map((tag) => 
                            <TextPill key={tag}>{tag}</TextPill> 
                         )
                    }
                </TextPillsContainer>
            </div>


        </div>
    )
}