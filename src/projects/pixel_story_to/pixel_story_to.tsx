import { useState } from "react";
import { Project_Entry } from "../../utils/types"
import coverImage from './Pixel-story-cover.png'
import coverImage2 from './Pixel-story-cover-2.png'

export const pixel_story_to : Project_Entry = {
    Project_Name: "Pixel Story | Toronto",
    card_description: <Description />,
    shorten_description: true,
    card_tags: [
        'D3.js',
        'SurveyJS',
        'Data Visualization'
        
    ],
    // this is optional, you can omit this
    modal_content: <ModalContent />,
    links: [
        {
            label: "Bentway Pixel Story Article",
            url: "https://thebentway.ca/event/waterfront-reconnect-pixel-story/"
        },
        {
            label: "Pixel Story, Online Interactive Visualization",
            url: "https://engage.o2design.com/PixelStory/app/"
        }
    ],
    card_image: [coverImage]
}

function Description() {
    const shorten = true
    const [showFull, setShowFull] = useState(false);

    const toggleShowFull = () => {
        setShowFull(!showFull);
      };

      const descriptionHTMLFull = <>
      A survey along with a web accessible data visualization of the submissions was created for City of Toronto for the public to share their stories and experiences of the waterfront. 
      Physical Installations were constructed in an intersection near the waterfront, presenting submissions through colourful pixels that house icons and stories gathered from visitors about the hopes and memories they have at the destinations that await them.
      To learn more about the project, explore the link to Bentway's article below.
  </>
      const descriptionHTMLShort = <>
      A survey along with a web accessible data visualization of the submissions was created for City of Toronto for the public to share their stories and experiences of the waterfront. 
      Physical Installations were constructed in an intersection near the waterfront, presenting
  </>


      if (!shorten) return descriptionHTMLFull
    
    return (
    <div className="transition-all duration-500 ease-out">
      {!showFull ? (
        <>
          <p>{descriptionHTMLShort}...</p>
          <button className="text-main_dark" onClick={toggleShowFull}>Show more</button>
        </>
      ) : (
        <>
          <p>{descriptionHTMLFull}</p>
          <button className="text-main_dark" onClick={toggleShowFull}>Show Less</button>
        </>
      )}
    </div>
  );
    
}

function ModalContent() {
    return (
        <div>
            <h1>
                Title
            </h1>
        </div>
    )
}

