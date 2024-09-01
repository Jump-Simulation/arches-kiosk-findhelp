import { CSSProperties, useEffect, useState } from "react";
import "./css/navbar.css"
import "./css/MainScreen.css"
import "./css/gif.css"
import "./css/framer-motion-classes.css"

import { motion, AnimatePresence } from "framer-motion"


interface TextHelp_2_Props {
    givenTextMain: string;
    givenTextWord: string;
    givenIndex: number;

    givenCarouselTimer: number

    givenCurrentIndex: number;
}






export default function TextHelp_2(props: TextHelp_2_Props) {

    var opacityNumber: string = "0";

    const [animationToggleState, setAnimationToggle] = useState(0);





    const handleAnimationEndEnd = () => {


        /* setFinalClass("final-state-class"); // Change class after animation ends */
        setAnimationToggle(-1);


    };







    useEffect(() => {

        // Check if the givenIndex matches the givenCurrentIndex
        if (props.givenIndex === props.givenCurrentIndex) {
            setAnimationToggle(1);
            opacityNumber = "1";
        } else {
            setAnimationToggle(-1);
        }
    }, [props.givenCurrentIndex]);




    return (

        <AnimatePresence  >
            {animationToggleState >= 1 && (

                <motion.div
                    className="framer-motion-general"
                    initial={{ opacity: 0, x: 500 }}

                    onAnimationComplete={handleAnimationEndEnd}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1.01,

                        transition: {
                            ease: "easeIn",
                            duration: props.givenCarouselTimer - 2,
                            x: { duration: 0.5, },
                            opacity: { duration: 0.5, },
                            scale: { duration: props.givenCarouselTimer - 2 }

                        }
                    }}
                    transition={{ duration: props.givenCarouselTimer, }}
                    exit={{
                        opacity: 0,
                        x: -500,
                        transition: {
                            delay: 1.5,
                            ease: "easeOut",
                            duration: 0.4


                        }
                    }}
                >

                    <div className={`text-help`}>

                        <div className={'text-help-main'}>
                            {props.givenTextMain}
                        </div>



                        < div className={'text-help-word'}>
                            {props.givenTextWord}
                        </div>


                    </div>

                </motion.div>
            )}
        </AnimatePresence>

        /*  <div>
             {animationToggleState > 0 ? (renderAnimationStart()) : (renderAnimationEnd())}
         </div> */
        /*   <div className="text-help">{props.givenText}</div> */

    )
}