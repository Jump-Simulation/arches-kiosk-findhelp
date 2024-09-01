import "./App.css";

import { Col, Container, Row } from "react-bootstrap";
import "./Components/css/navbar.css"
import "./Components/css/MainScreen.css"
import TopicText from "./Components/component_navbar_topictext";
import { useEffect, useState } from "react";
import FloatingGif from "./Components/component_mainscreen_floatingGif";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpText from "./Components/component_mainscreen_helpText";



import osfLogo from "./assets/osf_h_w.svg"
import returnHome from "./assets/returnHomeAnytime.png"
import TopicGif from "./Components/component_navbar-TopicGif";
import FloatingGif_2 from "./Components/component_mainscreen_floatingGifs_2";
import TextHelp_2 from "./Components/component_mainscreen_TextHelp_2";
import FloatingGif_3 from "./Components/component_mainscreen_floatingGifs_3";

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCC25EHayPIdfPUEv-Bsm28oZHrHRqXi-M",
  authDomain: "osf-kiosk-app.firebaseapp.com",
  projectId: "osf-kiosk-app",
  storageBucket: "osf-kiosk-app.appspot.com",
  messagingSenderId: "482885572486",
  appId: "1:482885572486:web:0da209f1bbbe5169293e07",
  measurementId: "G-9NWJXXMFQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const App = (): JSX.Element => {


  var navbarTextArray: string[] = ["Food", "Housing", "Goods", "Transit", "Health", "Money", "Care", "Education", "Work", "Legal"]
  var helpTextMainArray: string[] = [
    "Need help finding",
    "Need help finding",
    "Need help finding",
    "Need help finding",
    "Need help with",
    "Need financial",
    "Need help finding",
    "Need help getting",
    "Need help finding",
    "Need legal"]
  var helpTextWordArray: string[] = [
    "Food?",
    "Housing?",
    "Goods?",
    "Transit?",
    "Health?",
    "Help?",
    "Care?",
    "Education?",
    "Work?",
    "Help?"]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTopic, setCurrentTopic] = useState("")
  const [currentHelpText, setCurrentHelpText] = useState("Need help finding food?")
  const [isPaused, setIsPaused] = useState(false);

  const [gifAnimationToggle, setGifAnimationToggle] = useState(1)
  const [helpTextAnimationToggle, helpTextGifAnimationToggle] = useState(1)

  const [pauseEndTime, setPauseEndTime] = useState<Date | null>(null);

  const carouselTimer = 6.5; //CANNOT BE LESS THAN THE SUM OF THE SLIDE IN AND SLIDE OUT ANIMATION DURATIONS!!
  const pauseTimer = 10


  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % navbarTextArray.length);
      }, carouselTimer * 1000);
    } else if (pauseEndTime) {
      const timeUntilResume = pauseEndTime.getTime() - new Date().getTime();
      interval = setTimeout(() => {
        setIsPaused(false);
        setPauseEndTime(null);
      }, timeUntilResume);
    }

    // Cleanup intervals on component unmount or when dependencies change
    return () => {
      clearInterval(interval);
      clearTimeout(interval);
    };
  }, [isPaused, pauseEndTime, carouselTimer]);

  const handlePauseCarousel = () => {
    setIsPaused(true);
    setPauseEndTime(new Date(new Date().getTime() + pauseTimer * 1000));
  };



  function showGifAnimation() {


    return (
      <div>  <FloatingGif
        givenGifName={navbarTextArray[0]}

        givenIndex={0}
        givenCurrentIndex={0}
        SetCurrentIndex={setCurrentIndex}
        PauseCurrentTimer={handlePauseCarousel}
      />

        <FloatingGif
          givenGifName={navbarTextArray[0]}

          givenIndex={0}
          givenCurrentIndex={0}
          SetCurrentIndex={setCurrentIndex}
          PauseCurrentTimer={handlePauseCarousel}
        /></div>


    )



  }


  function startGifAnimationA(givenNumber: number) {

  }
  function startGifAnimationB(givenNumber: number) {

  }

  function startHelpTextAnimation(givenNumber: number) {

  }


  /*  useEffect(() => {
     console.log("Current Index was changed to: " + currentIndex + "!!")
   }, [currentIndex]); */


  const openWebsite = (givenString: string) => {

    window.location.href = givenString;

    /*  window.location.href = "https://osfmissionpartners.findhelp.com/search_results/61603?lang=es"; */
  };

  function LogButtonPress(givenString: string) {
    logEvent(analytics, "page_view", { page_title: "kiosk-1_" + givenString })
  }

  return (
    <div>

      <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>

        <div className="navbar-text-area" style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexDirection: "row", height: "20dvh"
        }}>
          {navbarTextArray.map((text, index) => (
            <TopicGif
              topicGifString={text}
              key={index}
              givenIndex={index}
              givenCurrentIndex={currentIndex}
              SetCurrentIndex={setCurrentIndex}
              SetCurrentTopic={setCurrentTopic}
              PauseCurrentTimer={handlePauseCarousel}
            />))}
        </div>

        <Row style={{ display: "flex", width: "80dvw", height: "50dvh", justifyContent: "center", alignItems: "center" }}>
          <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={5} style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>

            <TextHelp_2 givenTextMain={helpTextMainArray[currentIndex]}
              givenTextWord={helpTextWordArray[currentIndex]}
              givenCurrentIndex={currentIndex}
              givenIndex={currentIndex}
              givenCarouselTimer={carouselTimer} />



          </Col>

          <Col xs={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>


          </Col>
          <Col xs={3}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <FloatingGif_2
              givenGifName={navbarTextArray[currentIndex]}
              givenIndex={currentIndex}
              givenCurrentIndex={currentIndex}
              SetCurrentIndex={setCurrentIndex}
              PauseCurrentTimer={handlePauseCarousel}
              givenCarouselTimer={carouselTimer}
            />


          </Col>

        </Row>

        <Row style={{ width: "100dvw", height: "15dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Col xs={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div className="button-find-help-now"
              onClick={() => { LogButtonPress("osf-findhelp-01-english"), openWebsite(/* "https://osfmissionpartners.findhelp.com/search_results/61603" */ "https://osfmissionpartners.findhelp.com/search_results/61603?lang=en"); }}
            >
              Find Help Now!
            </div>
          </Col>
          <Col xs={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div className="button-find-help-now"
              onClick={() => { LogButtonPress("osf-findhelp-01-spanish"), openWebsite("https://osfmissionpartners.findhelp.com/search_results/61603?lang=es") }} >¿Ver en Español?
            </div>
          </Col>

        </Row>
        <Row style={{ width: "100dvw", height: "10dvh", display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "25px" }}>
          <Col style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
            <img style={{ maxHeight: "60px" }} src="./assets/OSFHC_s_b.svg"></img>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div onClick={()=>{LogButtonPress("osf-findhelp-01-survey"), openWebsite("https://uic.ca1.qualtrics.com/jfe/form/SV_23QTO5NJKNwmjwq")}} style={{color: "#599b50", textDecoration: "underline", fontSize: "3cqmin", fontWeight: "bold"}}>Take a Research Survey</div>
          </Col>
          <Col style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
            <img style={{ maxHeight: "60px" }} src="./assets/newUIC_logo.svg"></img>
          </Col>
        </Row>


      </Container>



    </div >

  );
};
