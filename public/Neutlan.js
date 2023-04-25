let target;
let sentencesArray = [];
var style = document.createElement('style');

// Set the style content to include the styles for the .span_neutlan class
style.textContent = `
.span_neutlan { 
  color: #0000ff00;
  font-size: xx-large;
  vertical-align: middle;
  line-height: initial;
}`;

// Add the style element to the document head
document.head.appendChild(style);
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
    if (key == 'activated') {
      localStorage.setItem("activated", changes[key].newValue);
      console.log("value change")
      this.removeUnderline();
    }
    if (key == 'token') {
      chrome.storage.local.get("token", function(result) {
        if (result.token) {
          window.location.reload()
        }})
      
    }
  }
});


// Define function to remove underline
function removeUnderline() {
  if (localStorage.getItem('activated') == "true") {
    this.updateContainer();
  } else {
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

      count = 1 + count;
      numberElement.innerHTML = count;
      const spanElement = document.createElement('span');
      spanElement.classList.add('span_neutlan');
      spanElement.style.textDecoration = 'underline';
      spanElement.style.textDecorationThickness = '2px';
      spanElement.style.textDecorationColor = 'red';
      spanElement.style.fontSize = size;
      spanElement.style.lineHeight = size;
      spanElement.style.fontFamily = font;
      spanElement.innerHTML = index.sentence;
      styledTextElement.appendChild(spanElement);
    } else {
      // otherwise, apply default styles
      const spanElement = document.createElement('span');
      spanElement.classList.add('span_neutlan');
      spanElement.style.fontSize = size;
      spanElement.style.fontFamily = font;
      spanElement.style.lineHeight = size;
      spanElement.innerHTML = index.sentence;
      styledTextElement.appendChild(spanElement);
    }
  });

  const format = `
  position: absolute;
  bottom: 4px;
  right: 5px;
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
  let item = sentencesArray[number];
  console.log(item);
  let token = localStorage.getItem("token");
  let checked = Boolean(localStorage.getItem("activated"));
  const body = {
    text: item.sentence,
  };

  if (checked) {
    post('/model/predict', token, body)
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            if (data.bias === true) {
              sentencesArray[number].bias = true;
              this.updateContainer();
            } else if (data.bias === false) {
              item.bias = false;
              sentencesArray[number].bias = false;
              this.updateContainer();
            }

          });

        } else {
          response.json().then((data) => {
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
  chrome.storage.local.get("token", function(result) {
    if (result.token) {
    target = event.target;
    const myArray = event.target.value.split(/(?<=\.|\?|\!)\s/g);
    sentencesArray = [];
    myArray.map((item) => {
      sentencesArray.push({
        sentence: item,
        bias: false,
        isChecked: false,
      });
    });
    //sentencesArray = []; 
    /**
    if(myArray.length < sentencesArray.length){
      sentencesArray = [];
      myArray.map((item) => {
        sentencesArray.push({
          sentence: item,
          bias: false,
          isChecked: false,
        });
      });
    }else{
      myArray.map((item,index) => {
        if(index< sentencesArray.length && sentencesArray[index].text ==item){
    
        }else if (index < sentencesArray.length && sentencesArray[index].text !=item){
          sentencesArray[index] = {
            sentence: item,
            bias: false,
            isChecked: false,
          };
        }
        else{
          sentencesArray.push({
            sentence: item,
            bias: false,
            isChecked: false,
          });
        }
        console.log(sentencesArray)
    
      });
    }
     */
  
    const textarea = event.target;
    const styles = window.getComputedStyle(textarea);
    styledTextElement.style.cssText = `
      position: absolute;
      inset: 0;
      pointer-events: none;
      height: ${styles.getPropertyValue('height')};
      box-sizing: ${styles.getPropertyValue('box-sizing')};
      width: ${styles.getPropertyValue('width')};
      font-size: ${styles.getPropertyValue('font-size')};
      line-height: ${styles.getPropertyValue('line-height')};
      font-family: ${styles.getPropertyValue('font-family')};
      padding-top: ${styles.getPropertyValue('padding-top')};
      padding-right: ${styles.getPropertyValue('padding-right')};
      padding-bottom: ${styles.getPropertyValue('padding-bottom')};
      padding-left: ${styles.getPropertyValue('padding-left')};
      margin-top: ${styles.getPropertyValue('margin-top')};
      margin-right: ${styles.getPropertyValue('margin-right')};
      margin-bottom: ${styles.getPropertyValue('margin-bottom')};
      margin-left: ${styles.getPropertyValue('margin-left')};
      z-index: 5;
      overflow: hidden;
      white-space: pre-wrap;
    `;
     /*
    const styledTextElement = document.getElementById('styled-text-element');
    
    for (const property in styles) {
      if (styles.hasOwnProperty(property)) {
        console.log(styles[property])
        console.log(property)
        styledTextElement.style[`${property}`] = styles[`${property}`];
      }
    }
   
    styledTextElement.style = styles;
    styledTextElement.style.position = 'absolute';
    styledTextElement.style.inset = `0`;
    //styledTextElement.style.height = window.getComputedStyle(textarea).getPropertyValue('height');
    styledTextElement.style.boxSizing = window.getComputedStyle(textarea).getPropertyValue('box-sizing');
    styledTextElement.style.width = window.getComputedStyle(textarea).getPropertyValue('width');
    styledTextElement.style.zIndex = "5";
    styledTextElement.style.pointerEvents = 'none';
    styledTextElement.style.paddingTop = window.getComputedStyle(textarea).getPropertyValue('padding-top');
    styledTextElement.style.paddingLeft = window.getComputedStyle(textarea).getPropertyValue('padding-left');
    styledTextElement.style.paddingRight = window.getComputedStyle(textarea).getPropertyValue('padding-right');
    styledTextElement.style.paddingBottom = window.getComputedStyle(textarea).getPropertyValue('padding-bottom');
    styledTextElement.style.margin = '0 1px';
    //styledTextElement.style.lineHeight= window.getComputedStyle(textarea).getPropertyValue('line-height');
    */
    size = window.getComputedStyle(textarea).getPropertyValue('font-size');
    font = window.getComputedStyle(textarea).getPropertyValue('font-family');
    parent = textarea.parentNode;
    parent.appendChild(styledTextElement)
    document.body.onkeyup = function (e) {
      let checked = localStorage.getItem("activated");
      if (e.key.match(/(?<=\.|\?|\!)\s/g) || e.code.match(/(?<=\.|\?|\!)\s/g) || e.code === "Slash") {
        if (checked) {
          styledTextElement.innerHTML = "";
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
  }

})
 
};



window.addEventListener("keyup", myEventListener);

