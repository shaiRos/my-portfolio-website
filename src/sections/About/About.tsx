export default function About() {

    return (
        <div className='snap-end bg-red-400 w-full h-[100vh] pt-40'>

            <div className="flex flex-col items-center justify-center w-full gap-3">
                <h1 className="text-white text-4xl font-bold">ABOUT ME</h1>
                <hr style={{
                    height: 2,
                    border: 'white solid 2px',
                    width: 120
                }} />

                <p className="text-white text-xl max-w-[1000px] text-center mt-10">
                    Some Information about me, my experience, what I do, and all my applicable skills relating to programming and tech.
                    Head to my Projects section which showcases all these skills being applied to the real world!
                </p>

                <div className="flex gap-12 max-w-[1200px] w-[80%] mt-16">
                    <div className="w-[50%]">
                        <h1 className="text-white text-3xl font-bold mb-6">Get to Know me!</h1>
                        <p className="text-white text-xl">

                            I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming
                        </p>
                    </div>
                    <div className="w-[50%]">
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
                            <TextPill>TypeScript</TextPill>
                            <TextPill>MERN Stack</TextPill>
                            <TextPill>jQuery</TextPill>
                            <TextPill>MongoDB</TextPill>
                            <TextPill>CouchDB</TextPill>
                            <TextPill>REST APIs</TextPill>
                            <TextPill>D3.js</TextPill>
                            <TextPill>Tailwind</TextPill>
                        </TextPillsContainer>
                        <h3 className="text-xl text-white">Other Software Skills</h3>
                        <TextPillsContainer>
                            <TextPill>Tableau Products</TextPill>
                            <TextPill>ArcGIS Products</TextPill>
                            <TextPill>Google BigQuery</TextPill>
                            <TextPill>Figma</TextPill>
                        </TextPillsContainer>
                    </div>

                </div>

            </div>
        </div>
    )
}

function TextPillsContainer({ children }) {
    return (
        <div className="flex flex-wrap gap-2 my-4">
            {children}
        </div>
    )
}


function TextPill({ children }) {
    return (
        <text className="bg-white rounded-3xl px-4 py-1">
            {children}
        </text>
    )
}