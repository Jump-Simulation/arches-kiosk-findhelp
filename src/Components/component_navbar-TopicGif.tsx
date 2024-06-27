
import { CSSProperties, useEffect, useState } from "react";
import "./css/navbar.css"
import React from "react";



interface TopicGif_Props {
    topicGifString: string;
    givenIndex: number;
    givenCurrentIndex: number
    SetCurrentIndex(givenNumber: number): void;
    SetCurrentTopic(givenString: string): void;
    PauseCurrentTimer(): void;
}


export default function TopicGif(props: TopicGif_Props) {



    useEffect(() => {

        if (props.givenIndex === props.givenCurrentIndex) {
            props.SetCurrentTopic(props.topicGifString.toLowerCase());
        }
    }, [props.givenCurrentIndex]);



    const [svgContent, setSvgContent] = useState<string | null>(null);

    useEffect(() => {
        const fetchSvg = async () => {
            const iconPath = `./assets/navbar-icons/${props.topicGifString + "Icon" + "Green"}.svg`;
            try {
                const response = await fetch(iconPath);
                const svgText = await response.text();
                setSvgContent(svgText);
                console.log('FOUND SVG: ' + iconPath);
            } catch (error) {
                console.error('Error fetching SVG:', error);
            }
        };

        fetchSvg();
    }, [props.topicGifString]);


    /*  const iconPath = require(`./assets/navbar-icons/${props.topicGifString + "Icon" + "Green"}.svg`);
  */
    return (


        /*   <svg
              onClick={() => { props.SetCurrentIndex(props.givenIndex), props.PauseCurrentTimer() }}
              width="10cqw" height="10cqh"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
         
  
              className={props.givenIndex === props.givenCurrentIndex ? 'navbar-icon-two' : 'navbar-icon'}
  
          >
  
              {svgContent && <g dangerouslySetInnerHTML={{ __html: svgContent }} />}
          </svg> */

        <img

            onClick={() => { props.SetCurrentIndex(props.givenIndex), props.PauseCurrentTimer() }}
            className={props.givenIndex === props.givenCurrentIndex ? 'navbar-icon-two' : 'navbar-icon'}
            src={`./assets/navbar-icons/${props.topicGifString + "Icon" + "Green"}.svg`}

            alt={props.topicGifString.toLocaleLowerCase() + "icon" + "green"}
        >
        </img>

        //adding a testcomment

        /*     <div
    
                onClick={() => { props.SetCurrentIndex(props.givenIndex), props.PauseCurrentTimer() }}
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    
    
            >
    
    
    
              
            </div> */
    )
}





{/*   <img


                className={props.givenIndex === props.givenCurrentIndex ? 'navbar-icon-two' : 'navbar-icon'}
                src={`./assets/navbar-icons/${props.topicGifString + "Icon" + "Green"}.svg`}

                alt={props.topicGifString.toLocaleLowerCase() + "icon" + "green"}
            >
            </img> */}

{/*       <svg className={props.givenIndex === props.givenCurrentIndex ? 'navbar-icon-highlighted' : 'navbar-icon'}

                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#6baa08", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#0612bf", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {svgContent && <g dangerouslySetInnerHTML={{ __html: svgContent }} fill="url(#grad1)" />}


            </svg> */}