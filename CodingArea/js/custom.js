
    
  var pagenumber = 1;
  var pageDictionary = [];
  pageDictionary[1] = `
  function startGame() {

    // Sets the Costume Color of your avatar
    // valid colors are red orange green
    setOutfitColor("green");

    // Sets the Costume Color of your avatar
    // valid colors are red orange green
    setEyeColor("blue");

    // Sets the Costume Color of your avatar
    // valid colors are red orange green
    setSkinTone("tan");

    // Sets the Costume Color of your avatar
    // valid colors are red orange green
    setHairStyle("long","red");

    // Sets the background 
    // replace the current color with the path to our background image: "images/background.jpg"
    setBackgroundImage("gray");

    myGameArea.start();
}`;

pageDictionary[2] = `  <button onmousedown="moveCharacter('up')" 
          onmouseup="stop('stop')" >UP</button>`;

    function submitTryit(){


    var topDictionary = [];
    topDictionary[1] = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>
canvas {
    border:1px solid #d3d3d3;
}
</style>
</head>
<body onload="startGame()">
<script>

var Costume;
var Eyes;
var SkinTone;
var HairStyle;
var myBackground;`

topDictionary[2] = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>
canvas {
    border:1px solid #d3d3d3;
}
</style>
</head>
<body onload="startGame()">
<script>

var Costume;
var Eyes;
var SkinTone;
var HairStyle;
var myBackground;


` + Tutorial1Text + `


function setBackgroundImage(image){
  if (image == "images/background.jpg")
  {
    myBackground = new component(800, 345, image, 0, 0, "image");
  }
  else{
     myBackground = new component(800, 345, "images/gray.jpg", 0, 0, "image");
  }
}



// Sets the Costume Color of your avatar
// valid colors are red orange green
function setOutfitColor(color){
  Costume = new component(100, 100, "images/Costume/costume_" + color + ".png", 10, 120, "image");
}
// Sets the Costume Color of your avatar
// valid colors are red orange green
function setEyeColor(color){
  Eyes = new component(100, 100, "images/Eyes/eyes_" + color + ".png", 10, 120, "image");
}
// Sets the Costume Color of your avatar
// valid colors are red orange green
function setSkinTone(color){

    SkinTone = new component(100, 100, "images/Skintone/skintone_" + color + ".png", 10, 120, "image");
}
// Sets the Costume Color of your avatar
// valid colors are red orange green
function setHairStyle(type,color){
    HairStyle =  new component(100, 100, "images/Hair/" + type + "_hair_" + color + ".png", 10, 120, "image");
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 345;

        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;

    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image" || width == 800) {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
            if (width == 800) {
                ctx.drawImage(this.image, 
                this.x + this.width, this.y, this.width, this.height);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.width == 800) {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    myBackground.speedX = -1;
    myBackground.newPos();    
    myBackground.update();
    //letter.newPos();
    //letter.update();
    Costume.newPos();
    Costume.update();
    HairStyle.newPos();
    HairStyle.update();
    SkinTone.newPos();
    SkinTone.update();
    Eyes.newPos();
    Eyes.update();
}

function moveCharacter(mov) {
  //code
  switch (mov) { 
    case "up":
      moveup();
      break;
    case "down":
      movedown();
      break;
    case "right":
      moveright();
      break;   
    case "left":
      moveleft();
      break;
    case "stop":
      stop();
      break;
    default:
      moveup();
  }
}

function moveup() {
    Costume.speedY = -1;
    HairStyle.speedY = -1;
    SkinTone.speedY = -1;
    Eyes.speedY = -1;
}

function movedown() {
    Costume.speedY = 1;
    HairStyle.speedY = 1;
    SkinTone.speedY = 1;
    Eyes.speedY = 1;
}

function moveleft() {
    Costume.speedX = -1;
    HairStyle.speedX = -1;
    SkinTone.speedX = -1;
    Eyes.speedX = -1;
}

function moveright() {
    Costume.speedX = 1;
    HairStyle.speedX = 1;
    SkinTone.speedX = 1;
    Eyes.speedX = 1;
}

function stop() {
    Costume.speedX = 0; 
    Costume.speedY = 0;
    HairStyle.speedX = 0;
    HairStyle.speedY = 0;
    SkinTone.speedX = 0;
    SkinTone.speedY = 0;
    Eyes.speedX = 0;
    Eyes.speedY = 0;
}

this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    } 


</script>
<div style="text-align:center;width:480px;">`;

    var bottomDictionary = [];
    bottomDictionary[1] = `function setBackgroundImage(image){
  if (image == "images/background.jpg")
  {
    myBackground = new component(800, 345, image, 0, 0, "image");
  }
  else{
     myBackground = new component(800, 345, "images/gray.jpg", 0, 0, "image");
  }
}



// Sets the Costume Color of your avatar
// valid colors are red orange green
function setOutfitColor(color){
  Costume = new component(100, 100, "images/Costume/costume_" + color + ".png", 10, 120, "image");
}
// Sets the Costume Color of your avatar
// valid colors are red orange green
function setEyeColor(color){
  Eyes = new component(100, 100, "images/Eyes/eyes_" + color + ".png", 10, 120, "image");
}
// Sets the Costume Color of your avatar
// valid colors are red orange green
function setSkinTone(color){

    SkinTone = new component(100, 100, "images/Skintone/skintone_" + color + ".png", 10, 120, "image");
}
// Sets the Costume Color of your avatar
// valid colors are red orange green
function setHairStyle(type,color){
    HairStyle =  new component(100, 100, "images/Hair/" + type + "_hair_" + color + ".png", 10, 120, "image");
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 345;

        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;

    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image" || width == 800) {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
            if (width == 800) {
                ctx.drawImage(this.image, 
                this.x + this.width, this.y, this.width, this.height);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.width == 800) {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    myBackground.speedX = -1;
    myBackground.newPos();    
    myBackground.update();
    //letter.newPos();
    //letter.update();
    Costume.newPos();
    Costume.update();
    HairStyle.newPos();
    HairStyle.update();
    SkinTone.newPos();
    SkinTone.update();
    Eyes.newPos();
    Eyes.update();
}

function moveCharacter(mov) {
  //code
  switch (mov) { 
    case "up":
      moveup();
      break;
    case "down":
      movedown();
      break;
    case "right":
      moveright();
      break;   
    case "left":
      moveleft();
      break;
    case "stop":
      stop();
      break;
    default:
      moveup();
  }
}

function moveup() {
    Costume.speedY = -1;
    HairStyle.speedY = -1;
    SkinTone.speedY = -1;
    Eyes.speedY = -1;
}

function movedown() {
    Costume.speedY = 1;
    HairStyle.speedY = 1;
    SkinTone.speedY = 1;
    Eyes.speedY = 1;
}

function moveleft() {
    Costume.speedX = -1;
    HairStyle.speedX = -1;
    SkinTone.speedX = -1;
    Eyes.speedX = -1;
}

function moveright() {
    Costume.speedX = 1;
    HairStyle.speedX = 1;
    SkinTone.speedX = 1;
    Eyes.speedX = 1;
}

function stop() {
    Costume.speedX = 0; 
    Costume.speedY = 0;
    HairStyle.speedX = 0;
    HairStyle.speedY = 0;
    SkinTone.speedX = 0;
    SkinTone.speedY = 0;
    Eyes.speedX = 0;
    Eyes.speedY = 0;
}

this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    } 


</script>
<div style="text-align:center;width:480px;">

</div>

</body>
</html>`;

bottomDictionary[2] = `</div>


</body>
</html>`;

        var text = editor.getValue();
        var ifr = document.createElement("iframe");
        ifr.setAttribute("frameborder", "0");
        ifr.setAttribute("id", "iframeOutput");  
        document.getElementById("iframewrapper").innerHTML = "";
        document.getElementById("iframewrapper").appendChild(ifr);
        var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
        ifrw.document.open();
        ifrw.document.write(topDictionary[pagenumber] + text + bottomDictionary[pagenumber]);
        ifrw.document.close();
    };

      $( document ).ready(function() {
        var lastPosition = null;
        resizeWindow();
        $( window ).resize(function() {
          resizeWindow()
      });

      function calculatepercent(position) {
        var a = position;
        var b = $("body").width();
        var c = $("body").width() - position;

        $('div.main-left').width((returnPerCalc(a,b) + .4) + '%');
        $('div.main-right').width((returnPerCalc(c,b) - .5) + '%');
      };

      function returnPerCalc(a,b){
        var c = a/b;
        var d = c*100;
        return d;
      };

      $( "#draggable" ).draggable({ 
        axis: "x",
        start: function(a) {
          calculatepercent(a.target.offsetLeft);
        },
        drag: function(b) {
          calculatepercent(b.target.offsetLeft);
        },
        stop: function(c) {
          calculatepercent(c.target.offsetLeft);
          lastPosition = c.target.offsetLeft;
        }
      });

      function resizeWindow(){
        $("#mainContent").height($("body").height() - $(".header").height());
          $("#mainContentHolder,.left-inner-main,.right-inner-main,#draggable").height($("body").height() - ($(".header").height() + 10));

          // Convert the width from px to %
          var percent = $("div.main-left").width() / $("body").width() * 100;

          // Get the left postion of drag bar div incase window resized
          var position = (lastPosition != null)?((percent * $("body").width())/100):(($("body").width()/2));

          $("#draggable").css({
           'left' : position-5
        });
      };
    });