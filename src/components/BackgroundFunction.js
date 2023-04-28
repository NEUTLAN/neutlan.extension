import React, { useState } from "react";

const BackgroundFunction = () => {
  const [sentences, setSentence] = useState("");

  const sentencesGet = () => {

    function myEventListener(event) {
      document.body.onkeyup = function (e) {
        if (e.key === " " || e.code === "Space") {
          //event.target.style.backgroundColor = "red";
          if (event.target.value === "berke ") {
            setSentence(event.target.value);
            event.target.value = "ahmet";
            //event.target.style.visibility = "hidden";
            event.target.style.textDecoration = "underline";
            event.target.style.color = "blue";
          }
        }
      };
    };

    window.addEventListener("keyup", myEventListener);
    
  };
  sentencesGet();


  return <div>BackgroundFunction</div>;
};

export default BackgroundFunction;
