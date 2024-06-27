import { CSSProperties, useEffect, useState } from "react";
import "./css/navbar.css"
import "./css/gif.css"


interface FloatingGif_Props {
    givenGifName: string;
    givenIndex: number;
    givenCurrentIndex: number
    SetCurrentIndex(givenNumber: number): void;
    PauseCurrentTimer(): void;
}


export default function FloatingGif(props: FloatingGif_Props) {

    var opacityNumber: string = "0";

    const [animationToggleState, setAnimationName] = useState(1);

    const [finalClass, setFinalClass] = useState("");



    useEffect(() => {

        // Check if the givenIndex matches the givenCurrentIndex
        if (props.givenIndex === props.givenCurrentIndex) {
            setAnimationName(1);
            opacityNumber = "1";
        } else {
            setAnimationName(-1);
        }
    }, [props.givenCurrentIndex]);



    const handleAnimationStartEnd = () => {

        setAnimationName(-1);

    };

    const handleAnimationEndEnd = () => {


        /*    setFinalClass("final-state-class"); // Change class after animation ends */
        opacityNumber = "0";


    };


    function renderAnimationStart() {

        return (
            <img
                className={`gif-class ${finalClass}`}
                onAnimationEnd={handleAnimationStartEnd}
                src={`./assets/floating-gifs/${props.givenGifName.toLocaleLowerCase()}.gif`}
                alt={"IMAGE FOR: " + props.givenGifName.toLocaleLowerCase() + " wasn't found!"}
                style={{
                    animationName: "slideInAndFadeIn",
                    animationDuration: "6s",
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    /*  opacity: opacityNumber, */
                }}
                onClick={() => { props.SetCurrentIndex(props.givenIndex), props.PauseCurrentTimer() }}>

            </img>

        )
    }


    function renderAnimationEnd() {

        return (
            <img
                className={`gif-class ${finalClass}`}
                onAnimationEnd={handleAnimationEndEnd}
                src={`./assets/floating-gifs/${props.givenGifName.toLocaleLowerCase()}.gif`}
                style={{
                    animationName: "slideOutAndFadeOut",
                    animationDuration: ".5s",
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    /*  opacity: opacityNumber, */
                }}
                onClick={() => { props.SetCurrentIndex(props.givenIndex), props.PauseCurrentTimer() }}>

            </img>

        )
    }


    return (
        <div>
            {animationToggleState > 0 ? (renderAnimationStart()) : (renderAnimationEnd())}
        </div>




    )
}