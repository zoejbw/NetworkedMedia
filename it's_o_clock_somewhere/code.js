// filler cam: {hour:"", place:"somewhere", link:"https://www.youtube.com/embed/86YLFOog4GM", active:"true"};,
let cams = [
    {hour:"0", place:"in New York, NY, USA", link:"https://www.youtube.com/embed/AdUw5RdyZxI", active:"true"},
    {hour:"0", place:"in Long Island, NY, USA", link:"https://www.youtube.com/embed/wndOfaRGJZE", active:"true"},
    {hour:"0", place:"in Auburn, AL, USA", link:"https://www.youtube.com/embed/hMYIc5ZPJL4", active:"true"},
    {hour:"1", place:"in Jost Van Dyke, British Virgin Islands", link:"https://www.youtube.com/embed/LXWVYoBluT4", active:"true"},
    {hour:"1", place:"in the US Virgin Islands", link:"https://www.youtube.com/embed/C0e8bpZ-5WY", active:"true"},
    {hour:"2", place:"in Nuuk, Greenland", link:"https://www.youtube.com/embed/XMs6LnT5mfk", active:"true"},
    {hour:"2", place:"in Foz do Iguaçu, Brazil", link:"https://www.youtube.com/embed/R4l4Uf2eZ54", active:"true"},
    {hour:"3", place:"somewhere", link:"https://www.youtube.com/embed/86YLFOog4GM", active:"true"},
    {hour:"4", place:"somewhere", link:"https://www.youtube.com/embed/86YLFOog4GM", active:"true"},
    {hour:"5", place:"in Oxford, England", link:"https://www.youtube.com/embed/St7aTfoIdYQ", active:"true"},
    {hour:"5", place:"in Southampton, England", link:"https://www.youtube.com/embed/Bs4dkKS4nXA", active:"true"},
    {hour:"5", place:"in Madeira Island, Portugal", link:"https://www.youtube.com/embed/9OjGDm7dLkU", active:"true"},
    {hour:"6", place:"in Venice, Italy", link:"https://www.youtube.com/embed/K_Vg94nBiaY", active:"true"},
    {hour:"6", place:"in Lausanne, Switzerland", link:"https://www.youtube.com/embed/GbAZX-NDPLg", active:"true"},
    {hour:"7", place:"in Maputaland, South Africa", link:"https://www.youtube.com/embed/48MFrf5ADp8", active:"true"},
    {hour:"7", place:"in Brasov, Transylvania", link:"https://www.youtube.com/embed/G05wmWFDtSo", active:"true"},
    {hour:"7", place:"in Jerusalem", link:"https://www.youtube.com/embed/2efYEybuBfk", active:"true"},
    {hour:"8", place:"in Laikipia County, Kenya", link:"https://www.youtube.com/embed/bGpNSsnSlfo", active:"true"},
    {hour:"8", place:"in St. Petersburg, Russia ", link:"https://www.youtube.com/embed/h1wly909BYw", active:"true"},
    {hour:"9", place:"somewhere", link:"https://www.youtube.com/embed/86YLFOog4GM", active:"true"},
    {hour:"10", place:"in Dubai, United Arab Emirates", link:"https://www.youtube.com/embed/7dE4IjDQJmE", active:"true"},
    {hour:"11", place:"somewhere", link:"https://www.youtube.com/embed/86YLFOog4GM", active:"true"},
    {hour:"12", place:"in Koh Phangan, Thailand", link:"https://www.youtube.com/embed/apam0X32RNk", active:"true"},
    {hour:"12", place:"in Koh Samui,  Thailand, Thailand", link:"https://www.youtube.com/embed/oyZ0Um289Ts", active:"true"},
    {hour:"13", place:"in Davao City, Philippines", link:"https://www.youtube.com/embed/GQVs1EN3Si4", active:"true"},
    {hour:"13", place:"in Taipei, Taiwan", link:"https://www.youtube.com/embed/z_fY1pj1VBw", active:"true"},
    {hour:"14", place:"in Tokyo, Japan", link:"https://www.youtube.com/embed/HpdO5Kq3o7Y", active:"true"},
    {hour:"14", place:"in Akita, Japan", link:"https://www.youtube.com/embed/3_nHpbQpABQ", active:"true"},
    {hour:"15", place:"in Melbourne, Australia", link:"https://www.youtube.com/embed/EpvIAopAYbw", active:"true"},
    {hour:"16", place:"in Adelaide, Australia", link:"https://www.youtube.com/embed/xzFMVNbTZTQ", active:"true"},
    {hour:"17", place:"somewhere", link:"https://www.youtube.com/embed/86YLFOog4GM", active:"true"},
    {hour:"18", place:"in South Island, New Zealand", link:"https://www.youtube.com/embed/IH5hNrRzlCY", active:"true"},
    {hour:"19", place:"in Banzai Pipeline, HA, USA", link:"https://www.youtube.com/embed/DY5RYp4sxYc", active:"true"},
    {hour:"20", place:"somewhere", link:"https://www.youtube.com/embed/86YLFOog4GM", active:"true"},
    {hour:"21", place:"in Los Angeles, CA, USA", link:"https://www.youtube.com/embed/vvOjJoSEFM0", active:"true"},
    {hour:"21", place:"in Las Vegas, NV, USA", link:"https://www.youtube.com/embed/gVIlNsKWgYE", active:"true"},
    {hour:"21", place:"in Leavanworth, WA, USA", link:"https://www.youtube.com/embed/lim5hCR59kw", active:"true"},
    {hour:"22", place:"in Jackson Hole, WY, USA", link:"https://www.youtube.com/embed/1EiC9bvVGnk", active:"true"},
    {hour:"22", place:"in Mountain Village, CO, USA", link:"https://www.youtube.com/embed/N-StEGiHtjw", active:"true"},
    {hour:"23", place:"in Houston, TX, USA", link:"https://www.youtube.com/embed/c5_w4yGHmNQ", active:"true"},
    {hour:"23", place:"in Duluth, MN, USA", link:"https://www.youtube.com/embed/nCf7X2cPDAY", active:"true"}

];

let myTime = 17;

var today = new Date();
var currentTime = today.getHours();

let camChoices = [];

var myCam;

var myText = "";
var myPlace = "";

var outTime = 0;

let showTime = 0;


function getTime(selectObject) {
   myTime = parseInt(selectObject.value);  
   console.log("user chose: " + myTime);
   setTitle(myTime);

   currentTime = today.getHours()
   console.log("it is currently: " + currentTime);

    if (myTime < currentTime){myTime = myTime + 24}
    showTime = myTime - currentTime;
    console.log("showing cams in: " + showTime);
    chooseCam(showTime);
  }

function setTitle(inTime){
  if( inTime == 0){
    outTime = 12;
  }
  else if (inTime < 13){
    outTime = inTime;
  } else {
    outTime = inTime - 12;
  }
  document.title = "it's " + outTime + " o'clock somewhere";

}

function startCam(){
  if (myTime < currentTime){myTime = myTime + 24};
  let myHour = myTime - currentTime;

  camChoices = [];
  for(let i = 0;i < cams.length;i++){
    if (cams[i].hour == myHour){
      camChoices.push(cams[i]);
    }
 }

myCam = camChoices[Math.floor(Math.random()*camChoices.length)];
console.log("currently showing: " + myCam.place);

myText = '<iframe id="vid" width="1700" height="915" src="' + myCam.link + '?autoplay=1&controls=0&modestbranding=1&mute=1" title="YouTube video player" frameborder="0" allow="autoplay;" allowfullscreen></iframe>';
myPlace = myCam.place;

document.getElementById("myFeed").innerHTML = myText;
document.getElementById("location").innerHTML = "somewhere";


}

function chooseCam(myHour){
  camChoices = [];
  for(let i = 0;i < cams.length;i++){
    if (cams[i].hour == myHour){
      camChoices.push(cams[i]);
    }
 }

myCam = camChoices[Math.floor(Math.random()*camChoices.length)];
console.log("currently showing: " + myCam.place);

myText = '<iframe id="vid" width="1700" height="980" src="' + myCam.link + '?autoplay=1&controls=0&modestbranding=1&mute=1" title="YouTube video player" frameborder="0" allow="autoplay;" allowfullscreen></iframe>';
myPlace = myCam.place;

document.getElementById("myFeed").innerHTML = myText;
document.getElementById("location").innerHTML = myPlace;


}


