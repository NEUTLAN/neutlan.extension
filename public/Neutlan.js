let target;
let sentencesArray = [];
let styledTextElement = document.createElement('div');
let size = 'large';
let font = 'arial, sans-serif';
// Toke taken fromthe choreme storage you always loged in if you not delete chorome storage and logout
chrome.storage.local.get(['token', 'activated'], function (result) {
  let token = result.token;
  let checked = result.activated;
  localStorage.setItem("token", token);
  localStorage.setItem("activated", checked)

});
// In your background page script

chrome.storage.onChanged.addListener(function (changes, namespace) {

  for (var key in changes) {
    console.log("Runtimee")
    if (key == 'activated') {
      console.log(changes[key].newValue)
      localStorage.setItem("activated", changes[key].newValue);
      console.log(localStorage.getItem('activated'))
      this.removeUnderline();
    }
    if (key == 'token' ) {
      window.location.reload()
    }
  }
});


// Define function to remove underline
function removeUnderline() {
  console.log("ın",localStorage.getItem('activated'))
  if(localStorage.getItem('activated')== true){
    console.log("add container")
    this.updateContainer();
  }else{
    console.log("delete container")
    styledTextElement.innerHTML = ""
  }
  
}



NEUTLAN_URL = 'https://neutlan.com/api';
//static NEUTLAN_URL_MODEL = 'https://neutlan.com/api';

post = (endpoint, TOKEN = null, body = {}) => {
  var headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  }

  if (TOKEN != null) {
    headers['Authorization'] = 'Token ' + TOKEN;
  }

  return fetch(this.NEUTLAN_URL + endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  })
}
updateContainer = () => {
  console.log(sentencesArray)
  const numberElement = document.createElement('div');
  let count = 0;
  numberElement.innerHTML = count;
  styledTextElement.innerHTML = ""
  sentencesArray.map(async (index, number) => {
    if (index.bias) {
      // apply styles if the sentence should be underlined in red
      console.log("Geldi")
      count = 1 + count;
      numberElement.innerHTML = count;
      const spanElement = document.createElement('span');
      spanElement.style.color = '#0000ff00';
      spanElement.style.textDecoration = 'underline';
      spanElement.style.textDecorationColor = 'red';
      spanElement.style.fontSize = 'xx-large';
      spanElement.style.fontSize = size;
      spanElement.style.fontFamily = font;
      spanElement.innerHTML = index.sentence;
      styledTextElement.appendChild(spanElement);
    } else {
      // otherwise, apply default styles
      const spanElement = document.createElement('span');
      spanElement.style.color = '#0000ff00';
      spanElement.style.fontSize = 'xx-large';
      spanElement.style.fontSize = size;
      spanElement.style.fontFamily = font;
      spanElement.innerHTML = index.sentence;
      styledTextElement.appendChild(spanElement);
    }
  });

  const format = `
  position: absolute;
  bottom: 2px;
  right: -10px;
  height: 30px;
  pointer-events: none;
  width: 30px;
  font-size: 15px;
  color: #fff;
  border-radius: 50%;
  display: flex;
  background-color: #313265;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`.trim();

  // Set the styles on the number element
  numberElement.style.cssText = format;
  styledTextElement.appendChild(numberElement);

};
//Fix it
handlePredict = (number) => {
  let item = sentencesArray[number]
  console.log("gelddi")
  let token = localStorage.getItem("token");
  console.log(token)
  let checked = localStorage.getItem("activated");
  console.log(checked)
  const body = {
    text: item.sentence,
  };

  if (checked) {
    console.log("gelddi")
    post('/model/predict', token, body)
      .then((response) => {
        if (response.ok) {
          console.log(response)
          return response.json().then((data) => {
            console.log("Data", data)
            if (data.bias === true) {
              sentencesArray[number].bias = true;
              updateContainer();
            } else if (data.bias === false) {
              item.bias = false;
              sentencesArray[number].bias = false;
              updateContainer();
            }

          });

        } else {
          console.log(response)
          response.json().then((data) => {
            console.log(data);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {

  }
};
myEventListener = (event) => {
  target = event.target;
  event.target.classList.add('underline');
  console.log( event)
  const myArray = event.target.value.split(/(?<=\.|\?|\!)\s/g);
  sentencesArray = [];
  myArray.map((item) => {
    sentencesArray.push({
      sentence: item,
      bias: false,
      isChecked: false,
    });
  });
  const textarea = event.target;
  styledTextElement.innerHTML = "";
  styledTextElement.style.position = 'absolute';
  styledTextElement.style.top = `2px`;
  styledTextElement.style.left = `0px`;
  styledTextElement.style.height = window.getComputedStyle(textarea).getPropertyValue('height');
  styledTextElement.style.boxSizing = window.getComputedStyle(textarea).getPropertyValue('box-sizing');
  styledTextElement.style.width = window.getComputedStyle(textarea).getPropertyValue('width');
  styledTextElement.style.zIndex = "5";
  styledTextElement.style.pointerEvents= 'none';
  styledTextElement.style.padding=window.getComputedStyle(textarea).getPropertyValue('padding');
  styledTextElement.style.margin= window.getComputedStyle(textarea).getPropertyValue('margin');
  size =  window.getComputedStyle(textarea).getPropertyValue('font-size');
  font = window.getComputedStyle(textarea).getPropertyValue('font-family');
  parent = textarea.parentNode;
  parent.appendChild(styledTextElement)
  document.body.onkeyup = function (e) {
    let checked = localStorage.getItem("activated");
    if (e.key === "." || e.code === "Slash") {
      if (checked) {
        styledTextElement.innerHTML = "";
        console.log(event.target.value)
        sentencesArray.map((index, number) => {
          if (index.isChecked === false) {
            handlePredict(number);
            index.isChecked = true;
          }
        });
        /*
        sentencesArray.map((index, number) => {
          if (index.bias === true) {
            event.target.style.color = "red";
            event.target.style.textDecoration = "underline";
          }else{
            event.target.style.textDecoration = "none";
            event.target.style.color = "black";
          }
        });
        */
      }
      else {
      }
    }
  };
};



window.addEventListener("keyup", myEventListener);

