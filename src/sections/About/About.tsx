import { TextPill, TextPillsContainer } from "../../components/TextPills";

export default function About() {

    return (
        <div className='bg-main w-full pt-40 pb-16 px-2 lg:px-0'>

            <div className="flex flex-col items-center justify-center w-full gap-3">
                <h1 className="text-white text-4xl font-bold">ABOUT ME</h1>
                <hr style={{
                    height: 2,
                    border: 'white solid 2px',
                    width: 120
                }} />

                <p className="text-white text-xl max-w-[1000px] text-center mt-10">
                    Some Information about me, my experience, what I do, and all my applicable skills relating to programming and tech.
                    Head to my Portfolio section which showcases all these skills being applied to real world projects!
                </p>

                <div className="flex flex-col md:flex-row gap-12 max-w-[1200px] px-2 md:px-0 md:w-[80%] mt-16">
                    <div className="">
                        <h1 className="text-white text-3xl font-bold mb-6">Get to know me!</h1>
                        <p className="text-white text-xl">
                            Fueled by a love for design, art, and technology, I've found fulfillment as a programmer. This career embodies the perfect fusion of my passions, allowing me to weave creativity, innovation, and technical expertise into every project I undertake.
                            <br></br>
                            <br></br>
                            My experience lies in developing web based applications for clients, working as a sole developer from crafting front-end experiences to architecting robust back-end solutions.
                            I ventured into data analytics and big data, utilizing Tableau for data management and visualization. Additionally, I explored machine learning to uncover patterns and integrate learning models into my web applications.
                            <br></br>
                            <br></br>
                            I am looking to gain experience, expand my connections and meet new people. Overall, I am most excited on being able to apply my creative ideas and technical skills I have learned into creating and advancing our technology!

                        </p>
                    </div>
                    <div className="min-w-[50%]">
                        <h1 className="text-white text-3xl font-bold mb-6">SKILLS</h1>
                        <h3 className="text-xl text-white">General</h3>
                        <TextPillsContainer>
                            <TextPill>Full-Stack Development</TextPill>
                            <TextPill>UX/UI</TextPill>
                            <TextPill>Product Design/Wireframing</TextPill>
                            <TextPill>Data Analysis</TextPill>
                            <TextPill>Data Visualization</TextPill>
                            <TextPill>Big Data</TextPill>
                            <TextPill>Software Engineering</TextPill>
                            <TextPill>Web Development</TextPill>
                            <TextPill>Web-based Dashboard Creation</TextPill>
                        </TextPillsContainer>
                        <h3 className="text-xl text-white">Programming & Engineering</h3>
                        <TextPillsContainer>
                            <TextPill>HTML/CSS</TextPill>
                            <TextPill>Node.js</TextPill>
                            <TextPill>React.js</TextPill>
                            <TextPill>Tailwind.css</TextPill>
                            <TextPill>TanStack Query</TextPill>
                            <TextPill>TypeScript</TextPill>
                            <TextPill>MERN Stack</TextPill>
                            <TextPill>MongoDB</TextPill>
                            <TextPill>CouchDB</TextPill>
                            <TextPill>REST API</TextPill>
                            <TextPill>Git</TextPill>
                            <TextPill>d3.js</TextPill>
                            <TextPill>jQuery</TextPill>
                            <TextPill>SQL</TextPill>
                            <TextPill>Python</TextPill>
                            <TextPill>ArcPy</TextPill>
                            <TextPill>Java</TextPill>
                            <TextPill>C++</TextPill>
                        </TextPillsContainer>
                        <h3 className="text-xl text-white">Tools & Platforms</h3>
                        <TextPillsContainer>
                            <TextPill>Tableau Desktop</TextPill>
                            <TextPill>Tableau Prep</TextPill>
                            <TextPill>ArcGIS Products</TextPill>
                            <TextPill>ArcGIS Maps SDK for JavaScript</TextPill>
                            <TextPill>Google BigQuery</TextPill>
                            <TextPill>Figma</TextPill>
                            <TextPill>AWS Athena</TextPill>
                        </TextPillsContainer>
                    </div>

                </div>

            </div>
        </div>
    )
}

