import React from "react";
import "./Hero.css";
import Hero1f from "../../assets/hero1f.jpg";
import Hero1m from "../../assets/hero1m.jpg";
import Hero2f from "../../assets/hero2f.jpg";
import Hero2m from "../../assets/hero2m.jpg";
import Hero3f from "../../assets/hero3f.jpg";
import Hero3m from "../../assets/hero3m.jpg";
import Hero4f from "../../assets/hero4f.jpg";
import Hero4m from "../../assets/hero4m.jpg";

function Hero() {
  return (
    <div className="Hero" id="hero">
      {/*NAVIGATION */}
      <div className="navigation-h">
        <div className="logo-h">
          <span>logo goes here</span>
        </div>
        <div className="navBar-h">
          <div>
            <ul>
              <li>Mouses</li>
              <li>Keyboards</li>
              <li>Headphones</li>
            </ul>
          </div>
        </div>
        <div className="chart-h">chart goes here</div>
      </div>
      {/*HERO SECTION */}
      <div className="content-h">
        <div className="text-h">
          <h1>
            <span className="stroke-text glowing">Unlock </span>your true <br />
            gaming
            <span className="stroke-text glowing"> potential </span>{" "}
          </h1>
          <span className="paragraph-h">
            <br /> Become a legend in your own right. With the Black Rose Squad,
            you’ll experience:
            <br /> <span className="glowing">- Enhanced Reflexes:</span>{" "}
            Lightning-fast response times. <br />
            <span className="glowing">- Sharp Focus: </span>Unmatched
            concentration and precision.
            <br />
            <span className="glowing">- Ultimate Agility: </span>Move like a
            shadow, both in-game and out.
          </span>
        </div>
        {/*IMAGES SECTION */}
        <div className="images-h">
          <img src={Hero4f} alt="hero1f" className="hero1f img-h" />
          <img src={Hero3f} alt="hero1f" className="hero1f img-h" />
          <img src={Hero2f} alt="hero1f" className="hero1f img-h" />
          <img src={Hero1f} alt="hero1f" className="hero1f img-h" />

          <img src={Hero1m} alt="hero1f" className="hero1f img-h" />

          <img src={Hero3m} alt="hero1f" className="hero1f img-h" />
          <img src={Hero2m} alt="hero1f" className="hero1f img-h" />

          <img src={Hero4m} alt="hero1f" className="hero1f img-h" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
