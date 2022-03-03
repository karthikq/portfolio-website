/** @format */

import React, { useEffect, useRef } from "react";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
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
          <span>Services</span>
          <span>Portfolio</span>
          <span>Contact me</span>
        </div>
        <div className="bottom-social">
          <BsLinkedin className="bottom-icon" />
          <BsFacebook className="bottom-icon" />
          <BsYoutube className="bottom-icon" />
        </div>
      </div>
    </div>
  );
};

export default Bottomtab;
