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
  console.log(sentences);

  //   fetch(" https://neutlan.com/api/predict", {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Token c181f59a5eb178bc38bc65b1f98772656e4c1681",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //       } else {
  //         return response.json().then((data) => {
  //           alert(data.error);
  //         });
  //       }
  //     })

  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  return <div>BackgroundFunction</div>;
};

export default BackgroundFunction;
