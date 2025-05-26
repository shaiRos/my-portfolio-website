import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TextPill, TextPillsContainer } from "../../components/TextPills"
import { ProjectsConfig } from "../../projects/Projects"
import { Project_Entry } from "../../utils/types"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Projects({ setDisplayModal, setModalContent }: { setDisplayModal: () => void, setModalContent: any }) {


    return (
        <div className='w-full bg-red-50 py-16'>
            <div className="flex flex-col items-center justify-center w-full gap-3">

                <h1 className="text-4xl font-bold">PROJECTS</h1>
                <hr style={{
                    height: 2,
                    border: 'black solid 2px',
                    width: 120
                }} />
                <p className="text-xl max-w-[1000px] text-center my-3">
                    A blend of client projects within the job industry and academic endeavors
                </p>
                <div className="flex flex-col xl:flex-row max-w-[1200px] w-[95%] md:w-[80%] gap-5">
                    <div className="min-w-[50%] flex flex-col gap-5">
                        {
                            ProjectsConfig.map((p, index) => {
                                if (index % 2) return null
                                return <ProjectCard key={p.Project_Name+index} project_entry={p} setDisplayModal={setDisplayModal} setModalContent={setModalContent} />
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-5">
                        {
                            ProjectsConfig.map((p, index) => {
                                if (!(index % 2)) return null
                                return <ProjectCard key={p.Project_Name+index} project_entry={p} setDisplayModal={setDisplayModal} setModalContent={setModalContent} />
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

function ProjectCard({ h, children, project_entry, setDisplayModal, setModalContent }: { h?: number, children?: HTMLElement, project_entry?: Project_Entry, setDisplayModal?: () => void, setModalContent: any }) {

    const toggleModal = () => {
        if (!project_entry?.modal_content) return
        setDisplayModal(modalOpen => {
            let newState = !modalOpen
            if (newState) {
                setModalContent(project_entry.modal_content)
            }

            return newState
        })
    }

    return (
        <div
            className="w-full bg-[#E2D2D2] rounded-lg flex flex-col sm:flex-row gap-3 p-4 hover:shadow-xl duration-300 group"
            style={{
                border: 'white solid 1px',
                minHeight: 200,
                height: h
            }}
        >

            {/* {children} */}
            {
                project_entry.card_image ?
            <div className="md:max-w-[200px] md:min-w-[200px] h-full p-4 rounded-sm" style={{backgroundColor:'rgb(255,255,255,0.1)'}}>
                {/* picture here */}
                {
                    project_entry?.card_image && 
                    <div className="overflow-hidden h-full flex flex-col justify-center gap-2 max-h-[400px]">
                        {
                            Array.isArray(project_entry.card_image) ?
                            project_entry.card_image.map((img,i) => {
                                return <img className="object-fit" key={project_entry.Project_Name + "img-"+i} src={img}/>
                            })
                            :
                            <img className="object-contain" src={project_entry.card_image}/>
                        }
                    </div>
                }
            </div> : <> </>
            }

            <div>
                <h2 className="font-bold text-xl mb-2 group-hover:text-main">{project_entry?.Project_Name}</h2>
                <div>{project_entry?.card_description}</div>
                {/* {project_entry?.modal_content && <button onClick={toggleModal} className="text-main_dark">More Info +</button>} */}

                {
                    project_entry?.links?.length &&
                    <div className="mt-3">
                        {
                            project_entry?.links?.map((link: link) => {

                                return <a key={link.label} href={link.url} target="_blank" className="hover:text-main_dark whitespace-nowrap mr-2">
                                    <FontAwesomeIcon icon={faLink} size="xs" className="mr-1"/>
                                    {link.label}
                                </a>
                            })
                        }
                    </div>
                }


                <TextPillsContainer>
                    {
                        project_entry?.card_tags.map((tag) =>
                            <TextPill key={project_entry.Project_Name + tag}>{tag}</TextPill>
                        )
                    }
                </TextPillsContainer>
            </div>


        </div>
    )
}
