/** @format */

import React, { useEffect, useRef } from "react";
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import "./Bottomtab.styles.scss";

import BIRDS from "vanta/dist/vanta.waves.min";

const Bottomtab = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const ref = useRef();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: ref.current,
          color: 0x101316,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
    <div ref={ref} className="bottom-container">
      <div className="bottom-contents">
        <div className="bottom-profile">
          <h2>Karthik</h2>
          <span>Full stack developer</span>
        </div>
        <div className="bottom-navigate">
          <span>
            <a href="#services">Services</a>
          </span>
          <span>
            <a href="#portfolio">Projects</a>
          </span>
          <span>
            <a href="#contact">Contact me</a>
          </span>
        </div>
        <div className="bottom-social">
          <BsLinkedin
            className="bottom-icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/karthik-j-suvarna-84879a83/",
                "_blank"
              )
            }
          />
          {/* <BsFacebook
            className="bottom-icon"
            onClick={() =>
              window.open(
                "https://www.facebook.com/karthik.poojary.92",
                "_blank"
              )
            }
          /> */}
          <BsGithub
            className="bottom-icon"
            onClick={() => window.open("https://github.com/karthikq", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Bottomtab;
