var data_html = `<animate> <style> html,body,.loader-container{margin:0;height:100%;width:100%}.loader-container{position:relative;background-color:#212526}.structure,.smoke{position:absolute;z-index:1000;top:calc(50% - 65px);left:calc(50% - 100px);width:200px;height:130px}.smoke{z-index:999}.structure{transform:translate3d(0,0,0);perspective:1000px;animation:shake .42s cubic-bezier(0.36,0.07,0.19,0.97) both infinite}.text-container{position:absolute;top:calc(50% + 100px);left:calc(50% - 100px);width:200px}.text-container h2{width:100%;text-align:center;font-weight:700;text-transform:uppercase;color:#fff}#rocket-svg{position:absolute;top:-112px;transform:rotate(90deg)}#right-wing,#left-wing,#nose,#window-stroke,#middle-wing{fill:#F44336}#rocket-main-part{fill:#ffd700}#window-inner{fill:#212526}.smoke span{position:absolute;width:50px;border-bottom:2px solid #fff}.meteors-container{position:absolute;z-index:998;width:100%;height:100%;overflow:hidden}.meteors-container span{position:absolute;width:75px;border-bottom:2px solid #fff}.smoke span:nth-child(1){top:28px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-0 ease-out .55s infinite}@keyframes smokeAnim-0{from{left:-50px;opacity:1}to{left:-290px;opacity:0}}.smoke span:nth-child(2){top:36px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-1 ease-out .55s infinite}@keyframes smokeAnim-1{from{left:-50px;opacity:1}to{left:-167px;opacity:0}}.smoke span:nth-child(3){top:44px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-2 ease-out .4s infinite}@keyframes smokeAnim-2{from{left:-50px;opacity:1}to{left:-126px;opacity:0}}.smoke span:nth-child(4){top:52px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-3 ease-out .6s infinite}@keyframes smokeAnim-3{from{left:-50px;opacity:1}to{left:-211px;opacity:0}}.smoke span:nth-child(5){top:60px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-4 ease-out .2s infinite}@keyframes smokeAnim-4{from{left:-50px;opacity:1}to{left:-115px;opacity:0}}.smoke span:nth-child(6){top:68px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-5 ease-out .45s infinite}@keyframes smokeAnim-5{from{left:-50px;opacity:1}to{left:-222px;opacity:0}}.smoke span:nth-child(7){top:76px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-6 ease-out .25s infinite}@keyframes smokeAnim-6{from{left:-50px;opacity:1}to{left:-166px;opacity:0}}.smoke span:nth-child(8){top:84px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-7 ease-out .2s infinite}@keyframes smokeAnim-7{from{left:-50px;opacity:1}to{left:-205px;opacity:0}}.smoke span:nth-child(9){top:92px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-8 ease-out .25s infinite}@keyframes smokeAnim-8{from{left:-50px;opacity:1}to{left:-300px;opacity:0}}.smoke span:nth-child(10){top:100px;left:-50px;box-shadow:0 0 5px #fff;animation:smokeAnim-9 ease-out .2s infinite}@keyframes smokeAnim-9{from{left:-50px;opacity:1}to{left:-82px;opacity:0}}.meteors-container span:nth-child(1){top:16.6666666667%;left:100%;box-shadow:0 0 5px #fff;animation:meterosAnim-0 linear .55s infinite}@keyframes meterosAnim-0{0%{left:100%}75%{left:calc(0% - 75px)}100%{left:calc(0% - 75px)}}.meteors-container span:nth-child(2){top:33.3333333333%;left:100%;box-shadow:0 0 5px #fff;animation:meterosAnim-1 linear .5s infinite}@keyframes meterosAnim-1{0%{left:100%}75%{left:calc(0% - 75px)}100%{left:calc(0% - 75px)}}.meteors-container span:nth-child(3){top:50%;left:100%;box-shadow:0 0 5px #fff;animation:meterosAnim-2 linear .5s infinite}@keyframes meterosAnim-2{0%{left:100%}75%{left:calc(0% - 75px)}100%{left:calc(0% - 75px)}}.meteors-container span:nth-child(4){top:66.6666666667%;left:100%;box-shadow:0 0 5px #fff;animation:meterosAnim-3 linear .3s infinite}@keyframes meterosAnim-3{0%{left:100%}75%{left:calc(0% - 75px)}100%{left:calc(0% - 75px)}}.meteors-container span:nth-child(5){top:83.3333333333%;left:100%;box-shadow:0 0 5px #fff;animation:meterosAnim-4 linear .4s infinite}@keyframes meterosAnim-4{0%{left:100%}75%{left:calc(0% - 75px)}100%{left:calc(0% - 75px)}}.meteors-container span:nth-child(6){top:100%;left:100%;box-shadow:0 0 5px #fff;animation:meterosAnim-5 linear .45s infinite}@keyframes meterosAnim-5{0%{left:100%}75%{left:calc(0% - 75px)}100%{left:calc(0% - 75px)}}@keyframes shake{10%,90%{transform:translate3d(-1px,1px,0)}20%,80%{transform:translate3d(2px,2px,0)}30%,50%,70%{transform:translate3d(-2px,-2px,0)}40%,60%{transform:translate3d(2px,2px,0)}} </style> <div class='loader-container'> <div class='rocket-container'> <div class='structure'> <svg height='352' id='rocket-svg' version='1.1' viewbox='0 0 59.266662 93.133333' width='224' xmlns='http://www.w3.org/2000/svg'> <g id='layer2' transform='translate(-33.866666,-33.866666)'> <path d='m 296,336 a 8.0000078,8.0000078 0 0 0 -8,8 v 80 a 8.0000078,7.9999501 0 0 0 1.16406,4.14062 l -0.22461,0.11329 49.32227,49.32031 0.0781,0.0801 0.004,-0.004 A 7.9999934,8.0000655 0 0 0 344,480 a 7.9999934,8.0000655 0 0 0 8,-8 v -80 a 7.9999934,7.9998924 0 0 0 -2.34961,-5.65625 l 0.004,-0.004 -48.00391,-48.00195 -0.004,0.002 A 8.0000078,8.0000078 0 0 0 296,336 Z' id='right-wing' style='opacity:1;fill-opacity:1;stroke:none;stroke-width:0.99999994;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' transform='scale(0.26458333)'></path> <path d='m 184,336 a 8.0000006,8.0000078 0 0 0 -5.65234,2.3457 l -0.004,-0.002 -47.91797,47.91797 -0.082,0.082 0.004,0.002 A 8.0000078,7.9998924 0 0 0 128,392 v 80 a 8.0000078,8.0000655 0 0 0 8,8 8.0000078,8.0000655 0 0 0 5.65625,-2.34961 l 0.004,0.004 49.40039,-49.40039 -0.22657,-0.11329 A 8.0000006,7.9999501 0 0 0 192,424 v -80 a 8.0000006,8.0000078 0 0 0 -8,-8 z' id='left-wing' style='opacity:1;fill-opacity:1;stroke:none;stroke-width:0.99999994;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' transform='scale(0.26458333)'></path> <path d='M 239.96875,128 A 111.99996,124.13082 0 0 0 176,240 l 16,200 a 8.0000006,8.0000655 0 0 0 8,8 h 80 a 8.0000078,8.0000655 0 0 0 8,-8 L 304,240 A 111.99996,124.13082 0 0 0 239.96875,128 Z' id='rocket-main-part' style='opacity:1;fill-opacity:1;stroke:none;stroke-width:0.99999994;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' transform='scale(0.26458333)'></path> <path d='m 239.96875,128 a 111.99996,124.13082 0 0 0 -47.77344,48 h 95.51953 a 111.99996,124.13082 0 0 0 -47.74609,-48 z' id='nose' style='opacity:1;fill-opacity:1;stroke:none;stroke-width:0.99999994;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' transform='scale(0.26458333)'></path> <ellipse cx='63.5' cy='59.266663' id='window-stroke' rx='7.4083333' ry='7.4083328' style='opacity:1;fill-opacity:1;stroke:none;stroke-width:0.26458332;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'></ellipse> <ellipse cx='63.499996' cy='59.266666' id='window-inner' rx='6.3499975' ry='6.3500061' style='opacity:1;fill-opacity:1;stroke:none;stroke-width:0.26458332;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1'></ellipse> <path d='m 240,336 a 7.9999898,8.0000078 0 0 0 -8,8 v 128 a 7.9999898,8.0000078 0 0 0 8,8 7.9999898,8.0000078 0 0 0 8,-8 V 344 a 7.9999898,8.0000078 0 0 0 -8,-8 z' id='middle-wing' style='opacity:1;fill-opacity:1;stroke:none;stroke-width:0.99999994;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' transform='scale(0.26458333)'></path> <path d='M 239.96875,128 A 111.99996,124.13082 0 0 0 176,240 l 7.68164,96.01562 a 8.0000006,8.0000078 0 0 0 -5.33398,2.33008 l -0.004,-0.002 -47.91797,47.91797 -0.082,0.082 0.004,0.002 A 8.0000078,7.9998924 0 0 0 128,392 v 80 a 8.0000078,8.0000655 0 0 0 8,8 8.0000078,8.0000655 0 0 0 5.65625,-2.34961 l 0.004,0.004 49.40039,-49.40039 -0.22657,-0.11329 a 8.0000006,7.9999501 0 0 0 0.18946,-0.3496 l 0.0371,0.46289 L 192,440 a 8.0000006,8.0000655 0 0 0 8,8 h 32 v 24 a 7.9999898,8.0000078 0 0 0 8,8 V 336 252 196 128.01758 A 111.99996,124.13082 0 0 0 239.96875,128 Z' id='shadow-layer' style='opacity:0.2;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.99999994;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' transform='scale(0.26458333)'></path> </g> </svg> </div> <div class='text-container'>X<h2 id='sayacx1'>5</h2> </div> <div class='smoke'> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div> </div> <div class='meteors-container'> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div> </div> </animate>`;
var html = new DOMParser().parseFromString(data_html, "text/html").body;delete data_html;
function scriptLoader(a,b){
  function c(c){
    var e=document.createElement("script");
    e.setAttribute("src",c);
    e.setAttribute("type", "text/javascript");
    e.onload=function(){
      d++;
      d==a.length&&b();
    };
    // hata parametresi ekle
    e.onerror=function(error){
      console.error("Script yüklenemedi: " + c);
      // hata parametresini kullanarak diğer scriptlere geç
      d++;
      d==a.length&&b();
    };
    document.head.appendChild(e);
  }
  var d=0;
  for(var d in a)c(a[d]);
}
function FastloadJS(FILE_URL, async = false) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // success event 
  scriptEle.addEventListener("load", () => {
    console.log("File loaded")
  });
   // error event
  scriptEle.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev);
  });
}
function LoadCSS(a){
  function b(a){
    return new Promise(function(b){
      var c=document.createElement("link");
      c.rel="stylesheet",c.href=a,c.onload=function(){b()},
      document.head.appendChild(c)
    })
  }
  var c=[];
  for(var d in a)c.push(b(a[d]));
  return Promise.allSettled(c);
}
const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
document.body.appendChild(html);
async function start(time=0) {
    await sleep(time + 100);
    scriptLoader(["js/dataset.js","js/crypto-js.min.js","js/md5.min.js","js/sc5.min.js","js/SilverCipherMini.min.js"], function() {LoadCSS( ['css/start.css','css/abc.css','css/a1b.css','css/a.css'] ).then( function() {scriptLoader(["js/engine.js"],function(){scriptLoader(["js/main.js"],function(){html.remove();});});});});
}
// window.dispatchEvent(new Event("load"));
async function __init__(){
  FastloadJS("https://code.responsivevoice.org/responsivevoice.js?key=o8iMneO1",false);
    await sleep(100);
    let sayac__1 = 3;
    window.zamanlayici = setInterval(function() {
        var ___dat_1 = document.querySelector("#sayacx1");
        try{
          ___dat_1.textContent = sayac__1.toString();
        }catch(e){}
        sayac__1--;
    if (sayac__1 == 0) {
        clearInterval(window.zamanlayici);
        document.body.removeChild(box);
        window.__nickname__ = "User";
        window.dev_mode=false;
        start(0);
    }
    }, 1000);

// Bir kutucuk oluşturun
let box = document.createElement("div");
let form = document.createElement("form");
form.id="first";
// Kutucuğun stilini ayarlayın
box.style.maxWidth = "600px";
box.style.width = "100%";
box.style.height = "auto";
box.style.backgroundColor = "transparent";
box.style.position = "fixed";
box.style.top = "10";
box.style.left = "0";
box.style.right = "0";
box.style.margin = "0 auto";
box.style.textAlign = "center";
box.style.zIndex = "999";

// Kutucuğa bir soru yazın
let question = document.createElement("h2");
question.textContent = ":)";
question.style.color = "#fff";

// Kutucuğa bir input alanı ekleyin
let input = document.createElement("input");
input.type = "text";
input.setAttribute("placeholder", "..."); // Inputa placeholder attribute'u ekler
input.setAttribute("autofocus", ""); // Inputa placeholder attribute'u ekler
input.style.backgroundColor = "transparent";
input.style.border = "none";
input.style.borderBottom = "2px solid #0D1117";
input.style.color = "#fff";
input.style.outline = "none";
input.style.width = "90%";
input.style.height = "32px";
input.style.fontSize = "24px";
input.style[":focus"] = "border: none;";
input.style.display = "inline-block";
input.required = true;
input.autocomplete = "off";
input.style.lineHeight = "0";
input.style.padding = "0";
input.style.margin = "0";
input.spellcheck = false;
input.style.verticalAlign = "bottom";
input.style.paddingBottom = "5px";
input.style.borderBottomLeftRadius = "5px";

// input.setAttribute("disabled", "disabled"); // Inputu pasif hale getirir
// input.setAttribute("maxlength", "10"); // Inputun maksimum karakter sayısını 10 olarak 

// Kutucuğa bir buton ekleyin
let button = document.createElement("input");
button.value = ">";
button.textContent = "";
button.type = "submit";
button.style.backgroundColor = "transparent";
button.style.border = "none";
button.style.borderBottom = "2px solid #0D1117";
button.style.width = "10%";
button.style.height = "32px";
button.style.fontSize = "24px";
button.style.color = "#fff";
button.style.display = "inline-block";
button.style.lineHeight = "0";
button.style.padding = "0";
button.style.margin = "0";
button.style.maxWidth = "40px";
button.style.verticalAlign = "bottom";
button.style.paddingBottom = "5px";
button.style.borderBottomRightRadius = "5px";

// Butona bir tıklama olayı tanımlayın
form.appendChild(input);
form.appendChild(button);
form.onsubmit = function(event) {
    event.preventDefault();
  // Input alanındaki değeri alın
  let answer = input.value;
  answer = answer.trim().replace(/\s/g, "");
  // Cevabın doğru olup olmadığını kontrol edin
  if (answer === "31") {
    document.body.removeChild(box);
    window.__nickname__ = "Anon";
    window.dev_mode=true;
    clearInterval(window.zamanlayici);
    start(0);
  } else {
    document.body.removeChild(box);
    window.__nickname__ = answer;
    window.dev_mode=false;
    clearInterval(window.zamanlayici);
    start(0);
  }
};

// Kutucuğa soru, input ve butonu ekleyin
box.appendChild(question);
box.appendChild(form);

// Kutucuğu sayfaya ekleyin
document.body.appendChild(box);

}
__init__();