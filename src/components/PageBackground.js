import React, { Fragment } from "react";
import image1 from "../images/Vector1.png";
import image2 from "../images/Vector2.png";

const BackgroundImage = (props) => (
  <img
    src={props.position === "top" ? image2 : image1}
    className={` backgroundImage ${
      props.position === "top" ? "imageTop" : "imageBottom"
    } `}
    alt="yellowstar"
  />
);

export const PageBackground = (props) => (
  <Fragment>
    <BackgroundImage position="top"></BackgroundImage>
    <BackgroundImage position="bottom"></BackgroundImage>
  </Fragment>
);
