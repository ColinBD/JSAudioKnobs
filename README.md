# JSAudioKnobs

Add audio knobs (dials) to your web app. Ideal for web audio API based projects

<img src="docs/images/js_knobs.png" width="200px">

## Getting started

1. Download the source and place the jsaudioknobs folder beside your html files
2. Place the link to the knobs.js file at the bottom of the <head> section of your html file
   `<script src="./jsaudioknobs/knobs.js"></script>`
3. Within the body of your html create a div where you want a knob to reside and give it the class of 'knob' and a unique ID
   `<div class="knob" id="knob1"></div>`
4. Within your main script (which must be below the knobs.js script) create a knob by calling new Knob and passing in the ID of the div you want to place the knob in
   `let dial1 = new Knob({id: "knob1"});`
5. A knob should be visible on your page, configured with the defaults
6. You can pass in more parameters during the instantiation to configure the knob to your requirements - see the next section
7. You can get the value of a knob using `dial1.getValue()`
8. You set the value of a knob like `dial1.setValue(20)`
9. You can hook into the knob change event by placing the following function in your script

```javascript
function knobChanged(id, val) {
  //console.log(`knob with ID: ${id} change to ${val}`);
}
```

## Building your knob

When you create a knob and pass in the object providing the div ID, you can also set the following parameters to override the defaults:

```javascript
{
  (id = "knob1"), // the ID of the div you want the knob to live in
    (lowVal = 0), // the minimum value the knob goes to - set this to whatever you like
    (highVal = 100), // the maximum value the knob goes to - again, set this to whatever you like
    (value = 0), // the initial value
    (size = "medium"), // choices: xsmall, small, medium, large, xlarge
    (sensitivity = 1), // try 0.5 to make the knob less sensitive to mouse movements, 1.5 for bigger knob changes relative to mouse moves
    (type = "LittlePhatty"), //alternatives: Vintage, FStyle, SSLish, RedScale, Silver, Aqua, kjLED, Credence, Wedge, Hexagonal, Hippy, Bluesbreaker, Oscar
    (label = true), // or false. Do you want to see a numeric readout of the value below the knob?
    (lblTxtColor = "silver"); // or "#C0C0C0" or any other css colour you like
}
```

## Author

Colin Bone Dodds  
github.com/colinbd  
colinbd.com  
colinbonedodds@gmail.com  
linkedin.com/in/colinbonedodds

## Acknowledgements

Knobs were created using [KnobMan](https://www.g200kg.com/en/webknobman/gallery.php)

All knobs used are CC0 Public Domain licensed
