import React from "react";
import { Lenis, useLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({ children }) => {
  useLenis({
    lerp: 0.1,
    duration: 0.9,
    smoothTouch: false,
    smooth: true,
  });

  return <div>{children}</div>;
};

export default SmoothScrolling;
