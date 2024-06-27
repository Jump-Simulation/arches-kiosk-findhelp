import { CSSProperties, useEffect, useState } from "react";
import "./css/navbar.css"
import "./css/MainScreen.css"
import "./css/gif.css"



interface HelpText_Props {
    givenTextMain: string;
    givenTextWord: string;
    givenIndex: number;
    givenCurrentIndex: number;
}






export default function HelpText(props: HelpText_Props) {

    var opacityNumber: string = "0";

    const [animationToggleState, setAnimationName] = useState(1);

    const [finalClass, setFinalClass] = useState("");



    const handleAnimationStartEnd = () => {

        setAnimationName(-1);

    };

    const handleAnimationEndEnd = () => {


        /* setFinalClass("final-state-class"); // Change class after animation ends */
        opacityNumber = "0";


    };




    function renderAnimationStart() {

        return (


            <div className={`text-help ${finalClass}`} onAnimationEnd={handleAnimationStartEnd} style={{
                animationName: "slideInAndFadeIn",
                animationDuration: "6s",
                animationTimingFunction: "ease-out",
                animationIterationCount: "1",
                /*  opacity: opacityNumber, */
            }}>

                <div className={'text-help-main'}>
                    {props.givenTextMain}
                </div>



                <div className={'text-help-word'}>
                    {props.givenTextWord}
                </div>


            </div>

        )
    }


    function renderAnimationEnd() {

        return (
            <div className={`text-help ${finalClass}`} onAnimationEnd={handleAnimationEndEnd} style={{
                animationName: "slideOutAndFadeOut",
                animationDuration: ".5s",
                animationTimingFunction: "ease-out",
                animationIterationCount: "1",
                /*  opacity: opacityNumber, */
            }}>
                {/*   <p dangerouslySetInnerHTML={{ __html: props.givenText }} /> */}
                <div className={'text-help-main'}>
                    {props.givenTextMain}
                </div>



                <div className={'text-help-word'}>
                    {props.givenTextWord}
                </div>

            </div>

        )
    }




    useEffect(() => {

        // Check if the givenIndex matches the givenCurrentIndex
        if (props.givenIndex === props.givenCurrentIndex) {
            setAnimationName(1);
            opacityNumber = "1";
        } else {
            setAnimationName(-1);
        }
    }, [props.givenCurrentIndex]);




    return (

        <div>
            {animationToggleState > 0 ? (renderAnimationStart()) : (renderAnimationEnd())}
        </div>
        /*   <div className="text-help">{props.givenText}</div> */

    )
}