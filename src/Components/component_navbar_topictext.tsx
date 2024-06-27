
import { CSSProperties, useEffect, useState } from "react";
import "./css/navbar.css"


interface TopicText_Props {
    topictextString: string;
    givenIndex: number;
    givenCurrentIndex: number
    SetCurrentIndex(givenNumber: number): void;
    SetCurrentTopic(givenString: string): void;
    PauseCurrentTimer(): void;
}


export default function TopicText(props: TopicText_Props) {

    useEffect(() => {

        if (props.givenIndex === props.givenCurrentIndex) {
            props.SetCurrentTopic(props.topictextString.toLowerCase());
        }
    }, [props.givenCurrentIndex]);

    return (

        <div
            className={props.givenIndex === props.givenCurrentIndex ? 'navbar-text-highlighted' : 'navbar-text'}
            onClick={() => { props.SetCurrentIndex(props.givenIndex), props.PauseCurrentTimer() }}>
            {props.topictextString}
        </div>
    )
}