import { CSSProperties, useEffect, useState } from "react";
import "./css/navbar.css"
import "./css/gif.css"
import "./css/framer-motion-classes.css"
import { motion, AnimatePresence, easeIn } from "framer-motion"


interface FloatingGif_3_Props {
    givenGifName: string;
    givenIndex: number;
    givenCurrentIndex: number

    givenCarouselTimer: number;
    SetCurrentIndex(givenNumber: number): void;
    PauseCurrentTimer(): void;
}


export default function FloatingGif_3(props: FloatingGif_3_Props) {

    var opacityNumber: string = "0";

    const [animationToggleState, setAnimationToggle] = useState(0);



    /*  console.log("TIMER SHOULD BE: " + props.givenCarouselTimer) */

    useEffect(() => {

        // Check if the givenIndex matches the givenCurrentIndex
        if (props.givenIndex === props.givenCurrentIndex) {
            /*    setAnimationName(1);
               opacityNumber = "1"; */

            setAnimationToggle(1)
        } else {
            /*  setAnimationName(-1); */
            setAnimationToggle(-1)
        }
    }, [props.givenCurrentIndex]);



    const handleAnimationStartEnd = () => {

        setAnimationToggle(-1);

    };

    const handleAnimationEndEnd = () => {


        /*    setFinalClass("final-state-class"); // Change class after animation ends */
        /*   opacityNumber = "0"; */
        setAnimationToggle(-1);


    };




    return (


        <AnimatePresence >
            {animationToggleState >= 1 && (

                <motion.div

                    className="framer-motion-general framer-motion-transition"
                    initial={{ opacity: 0, x: 500 }}
                    onAnimationComplete={handleAnimationEndEnd}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1.01,
                    }}

                /*    exit={{
                       opacity: 0,
                       x: -500,
                   }} */
                >

                    <img
                        className={`gif-class`}

                        src={`./assets/floating-gifs/${props.givenGifName.toLocaleLowerCase()}.gif`}
                        alt={"IMAGE FOR GIF2: " + props.givenGifName.toLocaleLowerCase() + " wasn't found!"}

                        onClick={() => { props.SetCurrentIndex(props.givenIndex), props.PauseCurrentTimer() }}>

                    </img>

                </motion.div>
            )}
        </AnimatePresence>




    )
}