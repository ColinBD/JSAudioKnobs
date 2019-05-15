/*to do
1) allow the loading of knobs of 4 different sizes 30,50,85,128
*/

let madeGlobalEventHandlers = false; //checked during each Knob class instantiation. Only the first instantiation creates the event handlers.

let knobInUse = {
  id: "",
  initY: 0,
  currentKnob: {}
};

class Knob {
  constructor({
    id = "knob1",
    lowVal = 0,
    highVal = 100,
    value = 0,
    size = "medium",
    sensitivity = 1,
    type = "LittlePhatty",
    label = true,
    lblTxtColor = "silver"
  }) {
    this.id = id;
    this.lowVal = lowVal;
    this.highVal = highVal;
    if (value > highVal) {
      this.currentValue = highVal;
    } else if (value < lowVal) {
      this.currentValue = lowVal;
    } else {
      this.currentValue = value;
    }
    this.sensitivity = sensitivity;
    this.scaler = 100 / (this.highVal - this.lowVal);
    this.type = type;
    this.label = label;
    this.lblTxtColor = lblTxtColor;
    if (size == "xlarge") {
      this.size = 128;
    } else if (size == "large") {
      this.size = 85;
    } else if (size == "medium") {
      this.size = 50;
    } else if (size == "small") {
      this.size = 40;
    } else if (size == "xsmall") {
      this.size = 30;
    } else {
      //user provides their own size for a custom image
      this.size = size;
    }
    //set the image file
    //LittlePhatty
    if (this.type == "LittlePhatty" && this.size == 30) {
      this.imgFile = "LittlePhatty/LittlePhatty_30.png";
    } else if (this.type == "LittlePhatty" && this.size == 40) {
      this.imgFile = "LittlePhatty/LittlePhatty_40.png";
    } else if (this.type == "LittlePhatty" && this.size == 50) {
      this.imgFile = "LittlePhatty/LittlePhatty_50.png";
    } else if (this.type == "LittlePhatty" && this.size == 85) {
      this.imgFile = "LittlePhatty/LittlePhatty_85.png";
    } else if (this.type == "LittlePhatty" && this.size == 128) {
      this.imgFile = "LittlePhatty/LittlePhatty_128.png";
    }
    //Vintage
    else if (this.type == "Vintage" && this.size == 30) {
      this.imgFile = "Vintage/Vintage_30.png";
    } else if (this.type == "Vintage" && this.size == 40) {
      this.imgFile = "Vintage/Vintage_40.png";
    } else if (this.type == "Vintage" && this.size == 50) {
      this.imgFile = "Vintage/Vintage_50.png";
    } else if (this.type == "Vintage" && this.size == 85) {
      this.imgFile = "Vintage/Vintage_85.png";
    } else if (this.type == "Vintage" && this.size == 128) {
      this.imgFile = "Vintage/Vintage_128.png";
    }
    //FStyle
    else if (this.type == "FStyle" && this.size == 30) {
      this.imgFile = "FStyle/FStyle_30.png";
    } else if (this.type == "FStyle" && this.size == 40) {
      this.imgFile = "FStyle/FStyle_40.png";
    } else if (this.type == "FStyle" && this.size == 50) {
      this.imgFile = "FStyle/FStyle_50.png";
    } else if (this.type == "FStyle" && this.size == 85) {
      this.imgFile = "FStyle/FStyle_85.png";
    } else if (this.type == "FStyle" && this.size == 128) {
      this.imgFile = "FStyle/FStyle_128.png";
    }
    //SSLish
    else if (this.type == "SSLish" && this.size == 30) {
      this.imgFile = "SSLish/SSLish_30.png";
    } else if (this.type == "SSLish" && this.size == 40) {
      this.imgFile = "SSLish/SSLish_40.png";
    } else if (this.type == "SSLish" && this.size == 50) {
      this.imgFile = "SSLish/SSLish_50.png";
    } else if (this.type == "SSLish" && this.size == 85) {
      this.imgFile = "SSLish/SSLish_85.png";
    } else if (this.type == "SSLish" && this.size == 128) {
      this.imgFile = "SSLish/SSLish_128.png";
    }
    //RedScale
    else if (this.type == "RedScale" && this.size == 30) {
      this.imgFile = "RedScale/RedScale_30.png";
    } else if (this.type == "RedScale" && this.size == 40) {
      this.imgFile = "RedScale/RedScale_40.png";
    } else if (this.type == "RedScale" && this.size == 50) {
      this.imgFile = "RedScale/RedScale_50.png";
    } else if (this.type == "RedScale" && this.size == 85) {
      this.imgFile = "RedScale/RedScale_85.png";
    } else if (this.type == "RedScale" && this.size == 128) {
      this.imgFile = "RedScale/RedScale_128.png";
    }
    //Silver
    else if (this.type == "Silver" && this.size == 30) {
      this.imgFile = "Silver/Silver_30.png";
    } else if (this.type == "Silver" && this.size == 40) {
      this.imgFile = "Silver/Silver_40.png";
    } else if (this.type == "Silver" && this.size == 50) {
      this.imgFile = "Silver/Silver_50.png";
    } else if (this.type == "Silver" && this.size == 85) {
      this.imgFile = "Silver/Silver_85.png";
    } else if (this.type == "Silver" && this.size == 128) {
      this.imgFile = "Silver/Silver_128.png";
    }
    //Aqua
    else if (this.type == "Aqua" && this.size == 30) {
      this.imgFile = "Aqua/Aqua_30.png";
    } else if (this.type == "Aqua" && this.size == 40) {
      this.imgFile = "Aqua/Aqua_40.png";
    } else if (this.type == "Aqua" && this.size == 50) {
      this.imgFile = "Aqua/Aqua_50.png";
    } else if (this.type == "Aqua" && this.size == 85) {
      this.imgFile = "Aqua/Aqua_85.png";
    } else if (this.type == "Aqua" && this.size == 128) {
      this.imgFile = "Aqua/Aqua_128.png";
    }
    //kjLED
    else if (this.type == "kjLED" && this.size == 30) {
      this.imgFile = "kjLED/kjLED_30.png";
    } else if (this.type == "kjLED" && this.size == 40) {
      this.imgFile = "kjLED/kjLED_40.png";
    } else if (this.type == "kjLED" && this.size == 50) {
      this.imgFile = "kjLED/kjLED_50.png";
    } else if (this.type == "kjLED" && this.size == 85) {
      this.imgFile = "kjLED/kjLED_85.png";
    } else if (this.type == "kjLED" && this.size == 128) {
      this.imgFile = "kjLED/kjLED_128.png";
    }
    //Credence
    else if (this.type == "Credence" && this.size == 30) {
      this.imgFile = "Credence/Credence_30.png";
    } else if (this.type == "Credence" && this.size == 40) {
      this.imgFile = "Credence/Credence_40.png";
    } else if (this.type == "Credence" && this.size == 50) {
      this.imgFile = "Credence/Credence_50.png";
    } else if (this.type == "Credence" && this.size == 85) {
      this.imgFile = "Credence/Credence_85.png";
    } else if (this.type == "Credence" && this.size == 128) {
      this.imgFile = "Credence/Credence_128.png";
    }
    //Wedge
    else if (this.type == "Wedge" && this.size == 30) {
      this.imgFile = "Wedge/Wedge_30.png";
    } else if (this.type == "Wedge" && this.size == 40) {
      this.imgFile = "Wedge/Wedge_40.png";
    } else if (this.type == "Wedge" && this.size == 50) {
      this.imgFile = "Wedge/Wedge_50.png";
    } else if (this.type == "Wedge" && this.size == 85) {
      this.imgFile = "Wedge/Wedge_85.png";
    } else if (this.type == "Wedge" && this.size == 128) {
      this.imgFile = "Wedge/Wedge_128.png";
    }
    //Hexagonal
    else if (this.type == "Hexagonal" && this.size == 30) {
      this.imgFile = "Hexagonal/Hexagonal_30.png";
    } else if (this.type == "Hexagonal" && this.size == 40) {
      this.imgFile = "Hexagonal/Hexagonal_40.png";
    } else if (this.type == "Hexagonal" && this.size == 50) {
      this.imgFile = "Hexagonal/Hexagonal_50.png";
    } else if (this.type == "Hexagonal" && this.size == 85) {
      this.imgFile = "Hexagonal/Hexagonal_85.png";
    } else if (this.type == "Hexagonal" && this.size == 128) {
      this.imgFile = "Hexagonal/Hexagonal_128.png";
    }
    //Hippy
    else if (this.type == "Hippy" && this.size == 30) {
      this.imgFile = "Hippy/Hippy_30.png";
    } else if (this.type == "Hippy" && this.size == 40) {
      this.imgFile = "Hippy/Hippy_40.png";
    } else if (this.type == "Hippy" && this.size == 50) {
      this.imgFile = "Hippy/Hippy_50.png";
    } else if (this.type == "Hippy" && this.size == 85) {
      this.imgFile = "Hippy/Hippy_85.png";
    } else if (this.type == "Hippy" && this.size == 128) {
      this.imgFile = "Hippy/Hippy_128.png";
    }
    //Bluesbreaker
    else if (this.type == "Bluesbreaker" && this.size == 30) {
      this.imgFile = "Bluesbreaker/Bluesbreaker_30.png";
    } else if (this.type == "Bluesbreaker" && this.size == 40) {
      this.imgFile = "Bluesbreaker/Bluesbreaker_40.png";
    } else if (this.type == "Bluesbreaker" && this.size == 50) {
      this.imgFile = "Bluesbreaker/Bluesbreaker_50.png";
    } else if (this.type == "Bluesbreaker" && this.size == 85) {
      this.imgFile = "Bluesbreaker/Bluesbreaker_85.png";
    } else if (this.type == "Bluesbreaker" && this.size == 128) {
      this.imgFile = "Bluesbreaker/Bluesbreaker_128.png";
    }
    //Oscar
    else if (this.type == "Oscar" && this.size == 30) {
      this.imgFile = "Oscar/Oscar_30.png";
    } else if (this.type == "Oscar" && this.size == 40) {
      this.imgFile = "Oscar/Oscar_40.png";
    } else if (this.type == "Oscar" && this.size == 50) {
      this.imgFile = "Oscar/Oscar_50.png";
    } else if (this.type == "Oscar" && this.size == 85) {
      this.imgFile = "Oscar/Oscar_85.png";
    } else if (this.type == "Oscar" && this.size == 128) {
      this.imgFile = "Oscar/Oscar_128.png";
    } else {
      console.log("going with the default"); //just for testing
      this.imgFile = "LittlePhatty/LittlePhatty_40.png";
    }
    //run the initializer method
    this.setUpKnob();
  }

  setUpKnob() {
    let div = document.getElementById(this.id);
    //setup div contents
    let imgDiv = document.createElement("div");
    let src = "./jsaudioknobs/knobs/" + this.imgFile;
    imgDiv.innerHTML = `<img draggable='false' style='pointer-events: none; transform: translateY(0px);' src=${src}>`;
    let lblDiv = document.createElement("div");
    div.appendChild(imgDiv);
    div.appendChild(lblDiv);
    //set the style
    imgDiv.style = `overflow: hidden; height: ${
      this.size
    }px; user-select: none;`;
    div.style = "position: absolute";

    //add an event listener
    imgDiv.addEventListener(
      "mousedown",
      function(e) {
        //set the knobInUse object
        knobInUse = {
          id: this.id,
          initY: e.pageY,
          value: this.currentValue, //storing the value
          currentKnob: this //storing the reference
        };
      }.bind(this) //we must bind 'this' to the event listener (or use 'let that = this', then set values to 'that')
    );

    //do we need to make the global event handlers? - they only get made on the first knob instantiation
    if (madeGlobalEventHandlers == false) {
      createGlobalEventHandlers();
      madeGlobalEventHandlers = true;
    }

    //set the style for the label
    lblDiv.style =
      "text-align: center;width: 100%;margin: 0 auto;font-size: 12px";
    lblDiv.style.color = this.lblTxtColor;

    //set the image position
    this.setImage();
  }

  setValue(val) {
    //check the new value is within the acceptable range
    if (val > this.highVal) {
      this.currentValue = this.highVal;
      console.log(
        `you tried to set a value of ${val} which exceeded the upper limit of ${
          this.highVal
        }`
      );
    } else if (val < this.lowVal) {
      this.currentValue = this.lowVal;
      console.log(
        `you tried to set a value of ${val} which exceeded the lower limit of ${
          this.lowVal
        }`
      );
    } else {
      this.currentValue = val;
    }
    //set the image
    this.setImage();
    //call the users function
    if (typeof knobChanged == "function") {
      knobChanged(this.id, this.currentValue);
    }
  }

  setImage() {
    //change the image position to match
    let sum =
      (Math.floor(((this.currentValue - this.lowVal) * this.scaler) / 2) - 1) *
      this.size;

    let newY = `translateY(-${sum}px)`;
    //access to the image goes: container div > image wrapper div > image tag
    document.getElementById(
      this.id
    ).childNodes[0].childNodes[0].style.transform = newY;
    //update label (if user wants labels)
    if (this.label != false) {
      document.getElementById(
        this.id
      ).childNodes[1].innerHTML = this.currentValue;
    }
  }

  getValue() {
    return this.currentValue;
  }
} //end of class definition

function createGlobalEventHandlers() {
  //also add the global style here (needed for the onmousemove > e.pageY call to work correctly)
  document
    .querySelectorAll("html, body")
    .forEach(node => (node.style.height = "100%"));

  //mouseup global event handler > resets the knobinuse object to show no knob in use
  document.body.addEventListener("mouseup", function(e) {
    //set the knobInUse object
    knobInUse = {
      id: "",
      initY: 0,
      value: 0,
      currentKnob: null
    };
  });

  //mousemove global event handler > does the bulk of the work
  document.body.addEventListener("mousemove", function(e) {
    if (knobInUse.id != "") {
      //console.log(e.pageY); //for testing
      //freeze mouse drag activity if user hits top or bottom of the page
      if (e.pageY <= 10 || e.pageY >= document.body.clientHeight - 10) {
        knobInUse = { id: "", initY: 0, currentKnob: null };
        return;
      } else {
        //calculate new knob value
        knobInUse.currentKnob.currentValue = Math.round(
          knobInUse.value +
            ((knobInUse.initY - e.pageY) * knobInUse.currentKnob.sensitivity) /
              knobInUse.currentKnob.scaler
        );
        //use max/min variables for easier reading
        let max = knobInUse.currentKnob.highVal,
          min = knobInUse.currentKnob.lowVal;

        //ensure the know value does not exceed max and/or minimum values
        if (knobInUse.currentKnob.currentValue > max) {
          knobInUse.currentKnob.currentValue = max;
        } else if (knobInUse.currentKnob.currentValue < min) {
          knobInUse.currentKnob.currentValue = min;
        }
      }

      //update label (if user wants labels)
      if (knobInUse.currentKnob.label != false) {
        document.getElementById(knobInUse.id).childNodes[1].innerHTML =
          knobInUse.currentKnob.currentValue;
      }

      //change the image position to match
      let sum =
        (Math.floor(
          ((knobInUse.currentKnob.currentValue - knobInUse.currentKnob.lowVal) *
            knobInUse.currentKnob.scaler) /
            2
        ) -
          1) *
        knobInUse.currentKnob.size;
      let newY = `translateY(-${sum}px)`;
      //access to the image goes: container div > image wrapper div > image tag
      document.getElementById(
        knobInUse.id
      ).childNodes[0].childNodes[0].style.transform = newY;

      //the knob change function call that users can hook into
      if (typeof knobChanged == "function") {
        knobChanged(knobInUse.id, knobInUse.currentKnob.currentValue);
      }
    }
  });
}
