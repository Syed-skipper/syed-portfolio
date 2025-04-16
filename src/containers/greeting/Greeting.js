import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <a
                    href={require("./Syed_Sulthan_FullStack_Developer.pdf")}
                    download="Syed_Sulthan_FullStack_Developer.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
              <DisplayLottie animationData={landingPerson} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
