
  handlePredict = (text) => {
    console.log("gelddi")
    let token = localStorage.getItem("token");
    let checked = localStorage.getItem("activated");

    const body = {
      text: text,
    };

    if (checked) {
      console.log("gelddi")
      API.post('model/predict', token, body)
        .then((response) => {
          if (response.ok) {
            console.log("gelddi")
            return response.json().then((data) => {
              localStorage.getItem("isChecked");
              //index.isChecked = true;

              if (data.bias === true) {
                // console.log(event.target.value);
                // let string_of_html = `<div style={{ color: "blue" }}>berkeeee</div> `;
                // console.log("string of html", string_of_html);
                // event.target.value = event.target.value + string_of_html;
                // event.target.innerHTML = "berke";
                // const newElement = document.createElement("p");
                // const text = document.createTextNode(
                //   number + "is problematic"
                // );
                // newElement.appendChild(text);

                // newElement.style = StyledHr;

                // newElement.style.position = "absolute";
                // newElement.style.top = "10px";
                // event.target.parentNode.appendChild(newElement);
                // event.target.parentNode.insertBefore(
                //   newElement,
                //   event.target.nextSibling
                // );
                event.target.style.color = "red";
                event.target.style.textDecoration = "underline";
                // event.target.value = index.sentence + "(sexis) .";
                // event.target.value = `<u>{index.sentence}</u>`;
                // event.target.style.color = "blue";
              } else if (data.bias === false) {
                event.target.style.textDecoration = "none";
                event.target.style.color = "black";

                // event.target.value = index.sentence + "(non-sexist) .";
                // event.target.style.color = "red";
              }
            });
          } else {
            response.json().then((data) => {
              console.log(data);
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      API.post('user/activate', token)
        .then((response) => {
          if (response.ok) {
            setIsChecked(!isChecked);
            localStorage.setItem("activated", !isChecked);
          } else {
            return response.json().then((data) => {
              alert(data.error);
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
 
window.addEventListener("keyup", myEventListener);

function myEventListener(event) {
  const myArray = event.target.value.split(".");

  const sentencesArray = [];

  myArray.map((item) => {
    sentencesArray.push({
      sentence: item,
      isChecked: false,
    });
  });
  // console.log(sentencesArray);

  // console.log("is checked", localStorage.getItem("isChecked"));
  document.body.onkeyup = function (e) {
    // const newElement = document.createElement("hr");
    const newElement = document.createElement("p");
    if (e.key === "." || e.code === "Slash") {
      // // console.log("parent is ", event.target.parentNode);

      // // // event.target.innerHTML = "<li>berke</li>";
      // // // event.target.parentNode.replaceChild(newElement, event.target);

      // // console.log("new element is ", newElement);
      // // console.log("target event id", event.target);

      // //event.target.style.backgroundColor = "red";
      // // console.log("target value is ", event.target.value);
      // // console.log("target type is  ", typeof event.target.value);

      // let text = "cerannn";

      // event.target.innerHTML = event.target.innerHTML.replace(
      //   new RegExp(text + "(?!([^<]+)?<)", "gi"),
      //   '<b style="background-color:#ff0;font-size:100%">$&</b>'
      // );
      // const StyledHr = {
      //   marginLeft: "20px",
      //   marginRight: "20px",
      //   marginTop: "5px",
      //   marginBottom: "5px",
      //   border: "0.5px solid gray",
      // };

      if (true) {
        sentencesArray.map((index, number) => {
          if (index.isChecked === false) {

            handlePredict(index.sentence)
            index.isChecked = true;
            /*
            console.log(index.sentence);
            //console.log("local.localStorage.getItem('token')

            fetch("https://neutlan.com/api/model/predict", {
              method: "POST",
              body: JSON.stringify({
                text: index.sentence,
              }),
              headers: {
                Authorization: "Token 6cb05ab1e1f5eecd92810089a3125f27c4ad729d",
                "Content-Type": "application/json",
              },
            })
              .then((response) => {
                if (response.ok) {
                  return response.json().then((data) => {
                    localStorage.getItem("isChecked");
                    index.isChecked = true;

                    if (data.bias === true) {
                      // console.log(event.target.value);
                      // let string_of_html = `<div style={{ color: "blue" }}>berkeeee</div> `;
                      // console.log("string of html", string_of_html);
                      // event.target.value = event.target.value + string_of_html;
                      // event.target.innerHTML = "berke";
                      // const newElement = document.createElement("p");
                      // const text = document.createTextNode(
                      //   number + "is problematic"
                      // );
                      // newElement.appendChild(text);

                      // newElement.style = StyledHr;

                      // newElement.style.position = "absolute";
                      // newElement.style.top = "10px";
                      // event.target.parentNode.appendChild(newElement);
                      // event.target.parentNode.insertBefore(
                      //   newElement,
                      //   event.target.nextSibling
                      // );
                      event.target.style.color = "red";
                      event.target.style.textDecoration = "underline";
                      // event.target.value = index.sentence + "(sexis) .";
                      // event.target.value = `<u>{index.sentence}</u>`;
                      // event.target.style.color = "blue";
                    } else if (data.bias === false) {
                      event.target.style.textDecoration = "none";
                      event.target.style.color = "black";

                      // event.target.value = index.sentence + "(non-sexist) .";
                      // event.target.style.color = "red";
                    }
                  });
                } else {
                  response.json().then((data) => {
                    console.log(data);
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
              */
          }
        });

      }
    }
  };
}

// window.addEventListener("keyup", myEventListener);
// function myEventListener(event) {
//   document.body.onkeyup = function (e) {
//     if (e.key === " " || e.code === "Space") {
//       //event.target.style.backgroundColor = "red";
//       if (event.target.value === "berke ") {
//         event.target.value = "ahmet";
//         //event.target.style.visibility = "hidden";
//         event.target.style.textDecoration = "underline";
//         event.target.style.color = "blue";
//       }
//     }
//   };
// }

