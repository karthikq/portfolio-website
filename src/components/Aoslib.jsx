/** @format */

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Aoslib = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
};
