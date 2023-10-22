let hr = document.querySelector(".hr"),
  min = document.querySelector(".min"),
  sec = document.querySelector(".sec"),
  miliSec = document.querySelector(".miliSec"),
  start = document.querySelector(".start"),
  stop = document.querySelector(".stop"),
  reset = document.querySelector(".reset");
  document.querySelector("#colon").style.display="none"
let id;
hr.style.display="none"

function miliSecFun() {
  hr.style.display="inline-block"
  document.querySelector("#colon").style.display="inline"
  id = setInterval(() => {
    miliSec.innerText = Math.floor(new Date().getMilliseconds() / 10);
    if (miliSec.innerText > 98) {
      sec.innerText = parseInt(sec.innerText) + 1;
      
      if(sec.innerText >= 10){
        document.querySelector("#zeroSec").style.display="none";
      }else{
          document.querySelector("#zeroSec").style.display="inline-block";
      }

      if (sec.innerText == 59) {
        min.innerText = parseInt(min.innerText) + 1;
        sec.innerText = "0";
      }

      if (min.innerText == 59) {
        min.innerText = "0";
        hr.innerText = parseInt(hr.innerText) + 1;
      }
    }
    let i=1;
    
  }, 10);
  
  
}


function stopTime() {
  clearInterval(id);
}

function resetTime() {
  hr.innerText = "00";
  min.innerText = "0";
  sec.innerText = "0";
  miliSec.innerText = "00";
  clearInterval(id);
  document.querySelector(".laps-detail").replaceChildren("LAPS")
  i=0;
}

reset.addEventListener("click", resetTime);
start.addEventListener("click", miliSecFun);
stop.addEventListener("click", stopTime);

let i=1;
function lapss(){
document.querySelector(".lap").addEventListener("click",()=>{
  console.log("clicked");
  let div1=document.createElement("div");
  div1.innerHTML=`<p>Lap ${i++}: &nbsp &nbsp &nbsp ${min.innerText} : ${sec.innerText} : ${miliSec.innerText}</p>`
  console.log(div1);
  document.querySelector(".laps-detail").appendChild(div1);
})
}
lapss()