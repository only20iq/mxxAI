// 
function kill(){
  try{
    document.head.innerHTML='';
  }catch(ex){}
  try{
    document.body.innerHTML = '';
  }catch(ex){}
  try{
    while(document.body.attributes.length > 0){document.body.removeAttribute(document.body.attributes[0].name);}
  }catch(ex){}
  try{
    localStorage.clear();
  }catch(ex){}
  try{
    sessionStorage.clear();
  }catch(ex){}
  try{
    var cookies = document.cookie;
    for (var i = 0; i < cookies.split(";").length; ++i)
    {
        var myCookie = cookies[i];
        var pos = myCookie.indexOf("=");
        var name = pos > -1 ? myCookie.substr(0, pos) : myCookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }catch(ex){}
  try{window.console_block_open ? ()=>{} : (()=>{
    var console = (window.console = window.console || {});
    [
      "assert", "clear", "count", "debug", "dir", "dirxml",
      "error", "exception", "group", "groupCollapsed", "groupEnd",
      "info", "log", "markTimeline", "profile", "profileEnd", "table",
      "time", "timeEnd", "timeStamp", "trace", "warn"
    ].forEach(method => {
      console[method] = () => {};
    });
  })();}catch(ex1){}
  try{window.debugger_block_open ? ()=>{} : (()=>{setInterval(() => {debugger;}, 100);})();}catch(ex1){}
  try{window.keycode_block_open ? ()=>{} : (()=>{
    document.body.addEventListener('keydown', function(e) {
      if (
          // CMD + Alt + I (Chrome, Firefox, Safari)
          e.metaKey == true && e.altKey == true && e.keyCode == 73 ||
          // CMD + Alt + J (Chrome)
          e.metaKey == true && e.altKey == true && e.keyCode == 74 ||
          // CMD + Alt + C (Chrome)
          e.metaKey == true && e.altKey == true && e.keyCode == 67 ||
          // CMD + Shift + C (Chrome)
          e.metaKey == true && e.shiftKey == true && e.keyCode == 67 ||
          // Ctrl + Shift + I (Chrome, Firefox, Safari, Edge)
          e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73 ||
          // Ctrl + Shift + J (Chrome, Edge)
          e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74 ||
          // Ctrl + Shift + C (Chrome, Edge)
          e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67 ||
          // F12 (Chome, Firefox, Edge)
          e.keyCode == 123 ||
          // CMD + Alt + U, Ctrl + U (View source: Chrome, Firefox, Safari, Edge)
          e.metaKey == true && e.altKey == true && e.keyCode == 85 ||
          e.ctrlKey == true && e.keyCode == 85
      ) {
        try{e.preventDefault();}catch(xu){}
      }
    });
  })();}catch(xe3){}
  try{document.body.addEventListener("contextmenu", e => e.preventDefault());}catch(ex2){}
}
// DevTools Opened Script
// function DevToolsOpened() {
//   alert("Developer Tools Opened");
// }

// Detect DevTools (Chrome/Edge)
// https://stackoverflow.com/a/67148898/9498503 (SeongJun)
// var devtools = function() {};
// devtools.toString = function() {
//   DevToolsOpened();
//   return '-';
// }

// // Detect DevTools (FireFox)
// if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
//   // Detect Resize (Chrome/Firefox/Edge Works) but (Triggers on Zoom In Chrome and Zoom Out FireFox)
//   window.onresize = function() {
//       if ((window.outerHeight - window.innerHeight) > 100 || (window.outerWidth - window.innerWidth) > 100) {
//           DevToolsOpened();
//       }
//   }
// }

// // Detect Fire Bug
// if (window.console && window.console.firebug || console.assert(1) === '_firebugIgnore') {
//   DevToolsOpened();
// };
window.debugger_block_open = false;
window.console_block_open = false;
window.keycode_block_open = false;
if(window.dev_mode!=true){
  (() => {
    try{
      setInterval(() => {debugger;}, 100);
      window.debugger_block_open = true;
    }catch(ex){window.debugger_block_open=false;}
    try{
      var console = (window.console = window.console || {});
      [
        "assert", "clear", "count", "debug", "dir", "dirxml",
        "error", "exception", "group", "groupCollapsed", "groupEnd",
        "info", "log", "markTimeline", "profile", "profileEnd", "table",
        "time", "timeEnd", "timeStamp", "trace", "warn"
      ].forEach(method => {
        console[method] = () => {};
      });
      window.console_block_open = true;
    }catch(ex){window.console_block_open = false;}
    try{
      document.body.addEventListener('keydown', function(e) {
        if (
            // CMD + Alt + I (Chrome, Firefox, Safari)
            e.metaKey == true && e.altKey == true && e.keyCode == 73 ||
            // CMD + Alt + J (Chrome)
            e.metaKey == true && e.altKey == true && e.keyCode == 74 ||
            // CMD + Alt + C (Chrome)
            e.metaKey == true && e.altKey == true && e.keyCode == 67 ||
            // CMD + Shift + C (Chrome)
            e.metaKey == true && e.shiftKey == true && e.keyCode == 67 ||
            // Ctrl + Shift + I (Chrome, Firefox, Safari, Edge)
            e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73 ||
            // Ctrl + Shift + J (Chrome, Edge)
            e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74 ||
            // Ctrl + Shift + C (Chrome, Edge)
            e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67 ||
            // F12 (Chome, Firefox, Edge)
            e.keyCode == 123 ||
            // CMD + Alt + U, Ctrl + U (View source: Chrome, Firefox, Safari, Edge)
            e.metaKey == true && e.altKey == true && e.keyCode == 85 ||
            e.ctrlKey == true && e.keyCode == 85
        ) {
          try{e.preventDefault();}catch(xu){}
          // try{kill();}catch(xl){}
        }
      });
      window.keycode_block_open = true;
    }catch(exx){window.keycode_block_open = false;}
  })();
//   try {
//     if (typeof(window.console) != "undefined") {
//         window.console = {};
//         window.console.log = function () {
//         };
//         window.console.debug = function () {
//         };
//         window.console.info = function () {
//         };
//         window.console.warn = function () {
//         };
//         window.console.error = function () {
//         };
//     }

//     if (typeof(alert) !== "undefined") {
//         alert = function ()
//         {

//         }
//     }

// } catch (ex) {

// }
}
// start.js / start

// window.onbeforeunload = function() {
//     window.caches.keys().then(function(cacheNames) {
//         cacheNames.forEach(function(cacheName) {
//         window.caches.delete(cacheName);
//         });
//     });
//     window.localStorage.clear();
//     window.sessionStorage.clear();
//     };
window.total_file_size="";
window.version_x="";
    window.latest_____cache_x = "";
    function change_latest_cache(text){
      window.latest_____cache_x = text;
    }
window.disable_translate = false;
window.disable_voice = false;
// start.js / end

// <body> etiketini seçelim
var body = document.querySelector("body");

// <div> elementini oluşturalım
var div = document.createElement("div");
div.style.margin = "0 auto";
div.style.textAlign = "center";
div.style.height = "auto";
div.style.color = "grey";
div.style.maxWidth = "600px";
div.style.position = "relative";
div.id = "base";

// <header> elementini oluşturalım
var header = document.createElement("header");
header.id = "header_x";
// <div> elementinin içine <header> elementini ekleyelim
div.appendChild(header);

// <div id="cache_kpop"> elementini oluşturalım
var cacheKpop = document.createElement("div");
cacheKpop.id = "cache_kpop";
cacheKpop.style.display = "none";

// <ul class="group-list" id="list"> elementini oluşturalım
var list = document.createElement("ul");
list.className = "group-list";
list.id = "list";

// <div id="cache_kpop"> elementinin içine <ul> elementini ekleyelim
cacheKpop.appendChild(list);

// <div> elementinin içine <div id="cache_kpop"> elementini ekleyelim
div.appendChild(cacheKpop);

// <div id="cache_websocket"> elementini oluşturalım
var cacheWebsocket = document.createElement("div");
cacheWebsocket.id = "cache_websocket";
cacheWebsocket.style.display = "none";

// <div> elementinin içine <div id="cache_websocket"> elementini ekleyelim
div.appendChild(cacheWebsocket);

// <div id="cache_commands"> elementini oluşturalım
var cacheCommands = document.createElement("div");
cacheCommands.id = "cache_commands";
cacheCommands.style.display = "none";

// <div> elementinin içine <div id="cache_commands"> elementini ekleyelim
div.appendChild(cacheCommands);

// <div id="cache_note"> elementini oluşturalım
var cacheNote = document.createElement("div");
cacheNote.id = "cache_note";
cacheNote.style.display = "none";

// <div> elementinin içine <div id="cache_note"> elementini ekleyelim
div.appendChild(cacheNote);

// <div id="cache_config"> elementini oluşturalım
var cacheConfig = document.createElement("div");
cacheConfig.id = "cache_config";
cacheConfig.style.display = "none";

// <div> elementinin içine <div id="cache_config"> elementini ekleyelim
div.appendChild(cacheConfig);

// <div id="cache_form"> elementini oluşturalım
var cacheForm = document.createElement("div");
cacheForm.id = "cache_form";
cacheForm.style.display = "none";

// <div> elementinin içine <div id="cache_form"> elementini ekleyelim
div.appendChild(cacheForm);



var gallery_x = document.createElement("div");
gallery_x.id = "gallery_x";
gallery_x.style.display = "none";

div.appendChild(gallery_x);


// <div id="main"> elementini oluşturalım
var main = document.createElement("div");
main.id = "main";
main.style.padding = "0";
main.style.margin = "0";

// <div> elementinin içine <div id="main"> elementini ekleyelim
div.appendChild(main);

// <body> elementinin içine <div> elementini ekleyelim
body.appendChild(div);


// Cache websocket id'li div elementini seçer
var div = document.getElementById("cache_websocket");

// Websocket başlığını oluşturur
var websocket = document.createElement("div");
websocket.textContent = "Websocket";

// Bağlantı durumu paragrafını oluşturur
var baglanti = document.createElement("p");
baglanti.style.fontSize = "24px";
baglanti.style.color = "grey";
baglanti.textContent = "Bağlantı durumu: ";
var span = document.createElement("span");
span.id = "baglanti";
span.style.color = "grey";
span.textContent = "Kapalı";
baglanti.appendChild(span);

// İlk formu oluşturur
var form1 = document.createElement("form");
form1.onsubmit = function() { window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(ws.value); event.preventDefault(); };
var div1 = document.createElement("div");
div1.style.display = "flex";
div1.style.flexWrap = "no-wrap";
div1.style.alignItems = "center";
div1.style.width = "100%";
div1.style.maxWidth = "600px";
var textarea1 = document.createElement("textarea");
textarea1.id = "ws";
textarea1.placeholder = "ws://";
textarea1.spellcheck = false;
textarea1.type = "text";
textarea1.className = "textareaxx asdas1c";
textarea1.onkeypress = function() { if (window.event.keyCode == 13) { event.preventDefault(); window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(textarea1.value); } };
textarea1.style.height = "59px";
textarea1.style.display = "inline-block";
textarea1.style.fontSize = "16px";
textarea1.style.fontWeight = "1000";
textarea1.style.width = "100%";
textarea1.style.backgroundColor = "transparent";
textarea1.style.border = "0";
textarea1.style.margin = "0";
textarea1.style.borderBottom = "2.5px solid #FFA000";
textarea1.style.padding = "16px";
textarea1.style.color = "dimgrey";
textarea1.style.resize = "vertical";
textarea1.autocomplete = "off";
var input1 = document.createElement("input");
input1.type = "submit";
input1.onclick = function() { event.preventDefault(); window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(textarea1.value); };
input1.value = "❯";
input1.style.margin = "0";
input1.style.fontSize = "16px";
input1.style.fontWeight = "1000";
input1.style.width = "100%";
input1.style.maxWidth = "40px";
input1.style.border = "0";
input1.style.backgroundColor = "transparent";
input1.style.borderBottom = "2.5px solid #FFA000";
input1.style.padding = "16px";
input1.style.color = "black";
input1.style.height = "59px";
input1.style.display = "inline-block";
div1.appendChild(textarea1);
div1.appendChild(input1);
form1.appendChild(div1);

// İkinci formu oluşturur
var form2 = document.createElement("form");
form2.onsubmit = function() { changeoptions(); event.preventDefault(); };
var div2 = document.createElement("div");
div2.style.display = "flex";
div2.style.flexWrap = "no-wrap";
div2.style.alignItems = "center";
div2.style.width = "100%";
div2.style.maxWidth = "600px";
var textarea2 = document.createElement("textarea");
textarea2.id = "optionsx";
textarea2.placeholder = "Key:Digest(0):BlockSize(0,128,256):Tag";
textarea2.spellcheck = false;
textarea2.type = "text";
textarea2.className = "textareaxx asdas1c";
textarea2.onkeypress = function() { if (window.event.keyCode == 13) { event.preventDefault(); changeoptions(); } };
textarea2.style.height = "59px";
textarea2.style.display = "inline-block";
textarea2.style.fontSize = "16px";
textarea2.style.fontWeight = "1000";
textarea2.style.width = "100%";
textarea2.style.backgroundColor = "transparent";
textarea2.style.border = "0";
textarea2.style.margin = "0";
textarea2.style.borderBottom = "2.5px solid #FFA000";
textarea2.style.padding = "16px";
textarea2.style.color = "dimgrey";
textarea2.style.resize = "vertical";
textarea2.autocomplete = "off";
textarea2.textContent = "123456789:0:0:w";
var input2 = document.createElement("input");
input2.type = "submit";
input2.value = "❯";
input2.style.margin = "0";
input2.style.fontSize = "16px";
input2.style.fontWeight = "1000";
input2.style.width = "100%";
input2.style.maxWidth = "40px";
input2.style.border = "0";
input2.style.backgroundColor = "transparent";
input2.style.borderBottom = "2.5px solid #FFA000";
input2.style.padding = "16px";
input2.style.color = "black";
input2.style.height = "59px";
input2.style.display = "inline-block";
div2.appendChild(textarea2);
div2.appendChild(input2);
form2.appendChild(div2);


// İlk formu oluşturur
var form3 = document.createElement("form");
form3.onsubmit = function() { window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();wsrealtimeOther(ws3.value); event.preventDefault(); };
var div3 = document.createElement("div");
div3.style.display = "flex";
div3.style.flexWrap = "no-wrap";
div3.style.alignItems = "center";
div3.style.width = "100%";
div3.style.maxWidth = "600px";
var textarea3 = document.createElement("textarea");
textarea3.id = "ws3";
textarea3.placeholder = "wss://";
textarea3.spellcheck = false;
textarea3.type = "text";
textarea3.className = "textareaxx asdas1c";
textarea3.onkeypress = function() { if (window.event.keyCode == 13) { event.preventDefault(); window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();wsrealtimeOther(textarea3.value); } };
textarea3.style.height = "59px";
textarea3.style.display = "inline-block";
textarea3.style.fontSize = "16px";
textarea3.style.fontWeight = "1000";
textarea3.style.width = "100%";
textarea3.style.backgroundColor = "transparent";
textarea3.style.border = "0";
textarea3.style.margin = "0";
textarea3.style.borderBottom = "2.5px solid #FFA000";
textarea3.style.padding = "16px";
textarea3.style.color = "dimgrey";
textarea3.style.resize = "vertical";
textarea3.autocomplete = "off";
var input3 = document.createElement("input");
input3.type = "submit";
input3.onclick = function() { event.preventDefault(); window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();wsrealtimeOther(textarea3.value); };
input3.value = "❯";
input3.style.margin = "0";
input3.style.fontSize = "16px";
input3.style.fontWeight = "1000";
input3.style.width = "100%";
input3.style.maxWidth = "40px";
input3.style.border = "0";
input3.style.backgroundColor = "transparent";
input3.style.borderBottom = "2.5px solid #FFA000";
input3.style.padding = "16px";
input3.style.color = "black";
input3.style.height = "59px";
input3.style.display = "inline-block";
div3.appendChild(textarea3);
div3.appendChild(input3);
form3.appendChild(div3);

// Diğer kullanıcılarla etkileşim başlığını oluşturur
var etkilesim = document.createElement("div");
etkilesim.textContent = "Diğer Kullanıcılarla Etkileşim";

// Bağlantı durumu paragrafını oluşturur
var baglantiother = document.createElement("p");
baglantiother.style.fontSize = "24px";
baglantiother.style.color = "grey";
baglantiother.textContent = "Bağlantı durumu: ";
var spanother = document.createElement("span");
spanother.id = "baglantiother";
spanother.style.color = "grey";
spanother.textContent = "Kapalı";
baglantiother.appendChild(spanother);

// Oluşturulan elementleri div elementinin içine ekler
div.appendChild(websocket);
div.appendChild(baglanti);
div.appendChild(form1);
div.appendChild(form2);
div.appendChild(etkilesim);
div.appendChild(form3);
div.appendChild(baglantiother);


////////////////////////////////////////


////////////////////////////////////////


// Cache commands id'li div elementini seçer
var div = document.getElementById("cache_commands");

// Commands başlığını oluşturur
var commands = document.createElement("div");
commands.textContent = "Commands";

// Komutları listelemek için bir br elementi oluşturur
var br = document.createElement("br");

// Komutları açıklayan bir dizi oluşturur
var explanations = [
  "Open Commands Panel ❯ /commands,/cm,/comands,/komutlar,/komut",
  "Open Settings Panel ❯ /config,/ayar,/ayarlar,/configs",
  "Generate Music List ❯ /m,/music,/şarkı,/müzik Example: /m -s all,/m -s 10(number)",
  "Open Gallery ❯ /g,/gallery,/galeri,/foto,/fotoğraf,/fotoğraflar",
  "Delete Chat ❯ /cls,/clear,/delete,/del",
  "Open Notepad Panel ❯ /note,/not,/notepad,/notdefteri",
  "Open Websocket Panel ❯ /ws,/websocket,/websocketserver,/wsserver",
  "Open Kpop List Panel ❯ /gg,/girlgrouplist,/girlgroup,/gglist,/kpoplist,/kpop",
  "View File and Code Size ❯ /size,/boyut,/filesize,/dosyaboyutu,/datasetsize",
  "Session Delete ❯ /kill,/die,/destroy,/destruct,/destruction,/reset",
  "Reset Total File Size ❯ /resetsize,/checksize,/checkfilesize,/resetfilesize,/resetsizes,/checksizes",
  "Add Encrypted Dataset ❯ /dd,/decryptdataset,/decdataset,/addencdataset Example: /dd -n (name) -s (password) -r (number:0,128,256 default:0)",
];

// Dizideki her açıklama için bir döngü başlatır
for (let i = 0; i < explanations.length; i++) {
  // Açıklamayı içeren bir div elementi oluşturur
  var explanation = document.createElement("div");
  explanation.textContent = explanations[i];
  explanation.style.borderBottom = "1px dashed grey";
  explanation.style.marginBottom = "5px";
  explanation.style.marginTop = "10px";
  explanation.style.paddingLeft = "5px";
  explanation.style.paddingRight = "5px";
  explanation.style.paddingBottom = "5px";
  explanation.style.fontWeight = "1000";
  explanation.style.fontFamily = "URW Chancery L, cursive";
  explanation.style.textAlign = "left";
  // Div elementini div elementinin içine ekler
  div.appendChild(explanation);
  // Br elementini div elementinin içine ekler
  div.appendChild(br);
}

// Oluşturulan elementleri div elementinin içine ekler
div.prepend(br);
div.prepend(commands);








// Cache note id'li div elementini seçer
var div = document.getElementById("cache_note");

// MD5A paragrafını oluşturur
var md5a = document.createElement("p");
md5a.id = "md5a";
md5a.style.fontSize = "12px";
md5a.style.padding = "0";

// Textarea elementini oluşturur
var textarea = document.createElement("textarea");
textarea.className = "textareaxa";
textarea.maxLength = "196";
textarea.spellcheck = false;
textarea.name = "data_note";
textarea.id = "kopyala";
textarea.placeholder = "Text";
textarea.style.backgroundColor = "transparent";
textarea.style.borderRadius = "15px";
textarea.style.marginBottom = "10px";
textarea.autocomplete = "off";
textarea.required = true;

// Button elementlerini oluşturur
var button1 = document.createElement("button");
button1.type = "button";
button1.className = "button0x1";
button1.value = "Kopyala";
button1.id = "kxxf";
button1.style.backgroundColor = "transparent";
button1.style.width = "100%";
button1.style.maxWidth = "620px";
button1.style.fontSize = "28px";
button1.style.borderRadius = "15px";
button1.textContent = "Copy";
var button1_div = document.createElement("div");
button1_div.style.textAlign = "center";
button1_div.appendChild(button1);
var button2 = document.createElement("button");
button2.type = "button";
button2.className = "button0x1";
button2.onclick = function() { var event = new Event("cleardata"); window.dispatchEvent(event); };
button2.style.backgroundColor = "transparent";
button2.style.width = "100%";
button2.style.maxWidth = "620px";
button2.style.fontSize = "28px";
button2.style.borderRadius = "15px";
button2.textContent = "Clear";
var button2_div = document.createElement("div");
button2_div.style.textAlign = "center";
button2_div.appendChild(button2);

var button3 = document.createElement("button");
button3.type = "button";
button3.className = "button0x1";
button3.onclick = function() { var event = new Event("yapistirdata"); window.dispatchEvent(event); };
button3.style.backgroundColor = "transparent";
button3.style.width = "100%";
button3.style.maxWidth = "620px";
button3.style.fontSize = "28px";
button3.style.borderRadius = "15px";
button3.textContent = "Paste";
var button3_div = document.createElement("div");
button3_div.style.textAlign = "center";
button3_div.appendChild(button3);

// Div elementlerini oluşturur
var div1 = document.createElement("div");
div1.style.textAlign = "center";
div1.appendChild(md5a);
div1.appendChild(textarea);

var div2 = document.createElement("div");
div2.style.textAlign = "center";
div2.style.display = "flex";
div2.style.justifyContent = "center";
div2.style.margin = "0 auto";
div2.style.flexWrap = "wrap";
div2.appendChild(button1_div);
div2.appendChild(button2_div);
div2.appendChild(button3_div);

var div3 = document.createElement("div");
div3.style.textAlign = "center";
div3.textContent = "Note";

// Oluşturulan elementleri div elementinin içine ekler
div.appendChild(div3);
div.appendChild(div1);
div.appendChild(div2);
///////////////////////////////////////////

// Cache note id'li div elementini seçer
var div = document.getElementById("cache_config");
var jsonviewer = document.createElement("div");
jsonviewer.id = "jsonviewer";


// downloaddataset paragrafını oluşturur
var downloaddataset = document.createElement("button");
downloaddataset.id = "downloaddataset";
downloaddataset.style.fontSize = "16px";
downloaddataset.style.padding = "5px";
downloaddataset.style.margin = "5px";
downloaddataset.style.backgroundColor = "transparent";
downloaddataset.style.border = "none";
downloaddataset.style.borderBottom = "1px solid black";
downloaddataset.textContent = "Download Dataset";
downloaddataset.onclick = function() { 
  const blob = new Blob([JSON.stringify(data,null,2)], {type: "text/plain"});
  const url = URL.createObjectURL(blob);
  // Bağlantıyı oluşturuyoruz
  const link = document.createElement("a");
  // Bağlantının href özelliğini URL olarak belirliyoruz
  link.href = url;
  // Bağlantının download özelliğini dosya ismi olarak belirliyoruz
  link.download = rastgeleDosyaIsmi();
  // Bağlantıyı sayfaya ekliyoruz
  document.body.appendChild(link);
  // Bağlantıya tıklıyoruz
  link.click();
  // Bağlantıyı sayfadan kaldırıyoruz
  document.body.removeChild(link);

};

// HTML elementini oluştur
var button = document.createElement("button");
var input = document.createElement("input");
var label = document.createElement("label");

// Elementlere özellikler atayın
button.type = "button";
input.type = "file";
input.id = "dosyax7";
input.accept = "application/text";
label.for = "dosya"; // input elementinin id özelliğiyle aynı yapın
label.textContent = "Load Dataset";
button.style.fontSize = "16px";
button.style.padding = "5px";
button.style.margin = "5px";
button.style.backgroundColor = "transparent";
button.style.border = "none";
button.style.borderBottom = "1px solid black";

// Elementlerin stilini ayarlayın
input.style.display = "none"; // display: none yerine opacity: 0 kullanın
label.onclick = function() {document.getElementById('dosyax7').click(); }; // label elementinin onclick özelliğini ayarlayın

input.style.setProperty("file-selector-button", "none", "after");
input.style.setProperty("content", "Load Dataset", "after");
input.style.setProperty("display", "none", "after");
// input.style.setProperty("padding", "8px 12px", "after");
input.style.setProperty("cursor", "pointer", "after");
// input.style.setProperty("border", "1px solid #ddd", "after");
// input.style.setProperty("border-radius", "4px", "after");

// Elementleri birleştirin
button.appendChild(input);
button.appendChild(label);


input.addEventListener("change", function() {
  // seçilen ilk dosyayı al
  var secilenDosya = this.files[0];
  // FileReader nesnesi oluştur
  var reader = new FileReader();
  // dosyayı okuma işlemi tamamlandığında çalışacak fonksiyon
  reader.onload = function() {
    var ___t = this.result;
    data = JSON.parse(___t);
    ___t = jsonToTree(___t);
    let jsonViewerx = document.getElementById("jsonviewer");
    jsonViewerx.innerHTML = "";
    jsonViewerx.appendChild(___t);
    alert("Process completed");
  };
  // dosyayı okumaya başla
  reader.readAsText(secilenDosya);
});


// Div elementlerini oluşturur
var div1 = document.createElement("div");
div1.style.textAlign = "center";
div1.appendChild(downloaddataset);
div1.appendChild(button);


var div3 = document.createElement("h3");
div3.style.textAlign = "center";
div3.textContent = "Config";

var div4 = document.createElement("div");
div4.style.textAlign = "center";
div4.id="version_conf";
div4.style.color = "#c59722";

// Oluşturulan elementleri div elementinin içine ekler
div.appendChild(div4);
div.appendChild(div3);
div.appendChild(div1);
div.appendChild(jsonviewer);

///////////////////////////////////////////


// Cache form id'li div elementini seçer
var div = document.getElementById("cache_form");

// Form elementini oluşturur
var form = document.createElement("form");
form.id = "message-form";

// Div elementini oluşturur
var div1 = document.createElement("div");
div1.id = "asdasds";
div1.style.display = "flex";
div1.style.flexWrap = "no-wrap";
div1.style.alignItems = "center";
div1.style.width = "100%";
div1.style.maxWidth = "600px";

// Textarea elementini oluşturur
var textarea = document.createElement("textarea");
textarea.spellcheck = false;
textarea.type = "search";
textarea.id = "message-input";
textarea.className = "textareaxx asdas1c";
textarea.onkeypress = function() { if (window.event.keyCode == 13) { event.preventDefault(); document.getElementById('message-submit').click(); } };
textarea.placeholder = "Send Message";
textarea.style.height = "59px";
textarea.style.display = "inline-block";
textarea.style.fontSize = "16px";
textarea.style.fontWeight = "1000";
textarea.style.width = "100%";
textarea.style.backgroundColor = "transparent";
textarea.style.border = "0";
textarea.style.margin = "0";
textarea.style.borderBottom = "2.5px solid #FFA000";
textarea.style.padding = "16px";
textarea.style.color = "dimgrey";
textarea.style.resize = "vertical";
textarea.autocomplete = "off";
textarea.autofocus = true;
textarea.required = true;
// Div elementini oluşturur
var arama_sonuclari = document.createElement("div");
arama_sonuclari.id = "sonuclar";
// Div elementinin konumunu, yüksekliğini ve genişliğini ayarlar
arama_sonuclari.style.position = "relative";
arama_sonuclari.style.display = "none";
arama_sonuclari.style.width = "100%";
arama_sonuclari.style.height = "auto";
arama_sonuclari.style.backgroundColor = "white";
arama_sonuclari.style.overflow = "auto";
arama_sonuclari.style.padding = "10px";
// Diğer stilleri buraya ekle


// Input elementini oluşturur
var input = document.createElement("input");
input.type = "submit";
input.id = "message-submit";
input.value = "❯";
input.style.margin = "0";
input.style.fontSize = "16px";
input.style.fontWeight = "1000";
input.style.width = "100%";
input.style.maxWidth = "40px";
input.style.border = "0";
input.style.backgroundColor = "transparent";
input.style.borderBottom = "2.5px solid #FFA000";
input.style.padding = "16px";
input.style.color = "black";
input.style.height = "59px";
input.style.display = "inline-block";

// Div elementinin içine textarea ve input elementlerini ekler
div1.appendChild(textarea);
div1.appendChild(input);


// Form elementinin içine div elementini ekler
form.appendChild(div1);

// Input elementini oluşturur
var input2 = document.createElement("input");
input2.type = "text";
input2.id = "target-input";
input2.value = "a";
input2.style.display = "none";
input2.required = true;

// Form elementinin içine input elementini ekler
form.appendChild(input2);

// Div elementinin içine form elementini ekler
div.appendChild(form);
div.appendChild(arama_sonuclari);

// Önerilenler kutusunu oluşturur
var suggestions = document.createElement("div");
suggestions.className = "suggestions";
suggestions.style.display = "";

// Her bir öneriyi bir div elementi olarak ekle
var suggestion1 = document.createElement("div");
suggestion1.className = "suggestion";
suggestion1.textContent = "/m -s 15";
var suggestion2 = document.createElement("div");
suggestion2.className = "suggestion";
suggestion2.textContent = "/g";
var suggestion3 = document.createElement("div");
suggestion3.className = "suggestion";
suggestion3.id = "translatex";
suggestion3.textContent = "Tr: Auto";
var suggestion4 = document.createElement("div");
suggestion4.className = "suggestion";
suggestion4.id = "voicex";
suggestion4.textContent = "Vc: On";

// Önerilenler kutusunun içine öneri elementlerini ekler
suggestions.appendChild(suggestion1);
suggestions.appendChild(suggestion2);
suggestions.appendChild(suggestion3);
suggestions.appendChild(suggestion4);

// input elementine bir event listener ekle
// data_raw değişkenini bir diziye dönüştür
function similarity_3 (text1, text2) {
  // Metinleri harflerine ayırın ve küçük harfe dönüştürün
  const letters1 = text1.toLowerCase().split ("");
  const letters2 = text2.toLowerCase().split ("");

  // Metinlerin uzunluklarını alın
  const length1 = letters1.length;
  const length2 = letters2.length;

  // Metinler arasındaki ortak harfleri bulun
  const common = letters1.filter (letter => letters2.includes (letter)).length;

  // Benzeme oranını hesaplayın
  return common / (length1 + length2 - common);
}
var _ax_a;
  function kontrolEtAAA() {
    try {
      _ax_a = document.querySelector(".suggestions");
      if (_ax_a) {
        clearInterval(intervalId);
      } else {throw new Error("_ax_a değişkeni null");}
    }catch{}
  }
  var intervalId = setInterval(kontrolEtAAA, 300);

textarea.addEventListener("input", function() {
    // input elementinin değerini al ve küçük harfe çevir
    var aranan = textarea.value.toLowerCase();

 // liste içinde en çok benzeyen değeri bulmak için bir değişken tanımla
 var enCokBenzeyen = null;
 // en çok benzeyen değerin benzeme oranını tutmak için bir değişken tanımla
 var enYuksekOran = 0;
 // liste verisini döngüye sok
 result_0_data.forEach(function(obje) {
     // öge değerini al
     var deger = obje;
     // değer ile aranan değer arasındaki benzeme oranını hesapla
     var oran = similarity_3(deger, aranan);
     // eğer oran en yüksek orandan büyükse
     if (oran > enYuksekOran) {
         // en yüksek oranı güncelle
         enYuksekOran = oran;
         // en çok benzeyen değeri güncelle
         enCokBenzeyen = deger;
     }
 });
 // eğer en çok benzeyen değer varsa
 if (enCokBenzeyen) {
     // bulundu mesajı ver
     arama_sonuclari.innerHTML = enCokBenzeyen;
     arama_sonuclari.style.display = "block";
     try{
      _ax_a.style.display = "none";
     }catch(e){}
 }else{
    arama_sonuclari.style.display = "none";
    try{
    _ax_a.style.display = "";
    }catch(e){}
 }
});



// Div elementinin içine önerilenler kutusunu ekler
div.appendChild(suggestions);

// Mesajları göstermek için bir div elementi oluşturur
var messages = document.createElement("div");
messages.id = "messages";
messages.style.wordWrap = "break-word";
messages.innerHTML = "<br><y style='color:#c59722'></y><p style='color:#c43f22'>(!) Başkasının yazışmalarını görebilirsiniz</p>Size: <x>null</x>";
// <p style='color:#c59722'>Kesinlikle kimseye hakaret edemez veya hedef alamaz böyle eğitilmemiştir.<p/>
// Div elementinin içine mesajları ekler
div.appendChild(messages);











// <header> etiketini seçelim
var header = document.querySelector("header");

// <h1> elementini oluşturalım
var h1 = document.createElement("h1");
h1.style.fontFamily = "Shojumaru, cursive";
h1.style.fontWeight = "1000";
h1.style.webkitUserSelect = "none";
h1.style.khtmlUserSelect = "none";
h1.style.mozUserSelect = "none";
h1.style.msUserSelect = "none";
h1.style.oUserSelect = "none";
h1.style.userSelect = "none";
h1.style.color = "black";

// <img> elementini oluşturalım
var img = document.createElement("img");
img.src = "logo (1).png";
img.height = "120";
img.onclick = function() {
  showCacheInMain("cache_form");
};

// <h1> elementinin içine <img> elementini ekleyelim
h1.appendChild(img);

// <header> elementinin içine <h1> elementini ekleyelim
header.appendChild(h1);

// <div> elementini oluşturalım
var div = document.createElement("div");
div.style.position = "absolute";
div.style.top = "0";
div.style.left = "0";
div.style.zIndex = "999";
div.style.userSelect = "none";

// Menü butonu elementini oluşturalım
var menuButton = document.createElement("div");
menuButton.id = "menu-button";
menuButton.onclick = function() {
  toggleMenu();
};
menuButton.style.width = "40px";
menuButton.style.height = "40px";
menuButton.style.backgroundColor = "transparent";
menuButton.style.cursor = "pointer";
menuButton.style.color = "black";
menuButton.style.fontSize = "24px";
menuButton.textContent = ">";

// Menü içeriği elementini oluşturalım
var menuContent = document.createElement("div");
menuContent.id = "menu-content";
menuContent.style.display = "none";
menuContent.style.width = "200px";
menuContent.style.height = "auto";
menuContent.style.backgroundColor = "white";

// Menü seçenekleri elementlerini oluşturalım
var option1 = document.createElement("a");
option1.id = "option1";
option1.onclick = function() {
  toggleMenu();
  showCacheInMain("cache_form");
};
option1.style.display = "block";
option1.style.padding = "10px";
option1.style.textDecoration = "none";
option1.style.color = "black";
option1.textContent = "Chat";

var option2 = document.createElement("a");
option2.id = "option2";
option2.onclick = function() {
  toggleMenu();
  showCacheInMain("cache_note");
};
option2.style.display = "block";
option2.style.padding = "10px";
option2.style.textDecoration = "none";
option2.style.color = "black";
option2.textContent = "Notepad";

var option3 = document.createElement("a");
option3.id = "option3";
option3.onclick = function() {
  toggleMenu();
  showCacheInMain("cache_commands");
};
option3.style.display = "block";
option3.style.padding = "10px";
option3.style.textDecoration = "none";
option3.style.color = "black";
option3.textContent = "Commands";

var option4 = document.createElement("a");
option4.id = "option4";
option4.onclick = function() {
  toggleMenu();
  showCacheInMain("cache_kpop");
};
option4.style.display = "block";
option4.style.padding = "10px";
option4.style.textDecoration = "none";
option4.style.color = "black";
option4.textContent = "Kpop List";

var option5 = document.createElement("a");
option5.id = "option5";
option5.onclick = function() {
  toggleMenu();
  showCacheInMain("cache_websocket");
};
option5.style.display = "block";
option5.style.padding = "10px";
option5.style.textDecoration = "none";
option5.style.color = "black";
option5.textContent = "Websocket";

var option6 = document.createElement("a");
option6.id = "option6";
option6.onclick = function() {
  toggleMenu();
  window.showCacheInMain('gallery_x',true,true);
  gallery_s();
};
option6.style.display = "block";
option6.style.padding = "10px";
option6.style.textDecoration = "none";
option6.style.color = "black";
option6.textContent = "Gallery";

var option7 = document.createElement("a");
option7.id = "option7";
option7.onclick = function() {
  toggleMenu();
  showCacheInMain("cache_config");
};
option7.style.display = "block";
option7.style.padding = "10px";
option7.style.textDecoration = "none";
option7.style.color = "black";
option7.textContent = "Config";

// Menü içeriği elementinin içine menü seçenekleri elementlerini ekleyelim
menuContent.appendChild(option1);
menuContent.appendChild(option6);
menuContent.appendChild(option2);
menuContent.appendChild(option3);
menuContent.appendChild(option4);
menuContent.appendChild(option5);
menuContent.appendChild(option7);

// <div> elementinin içine menü butonu ve menü içeriği elementlerini ekleyelim
div.appendChild(menuButton);
div.appendChild(menuContent);

// <header> elementinin içine <div> elementini ekleyelim
header.appendChild(div);















let values = ["kissoflife", "twice", "nmixx", "everglow", "ive", "aespa", "kep1er", "newjeans", "lesserafim"]; // Değerleri tutacak bir liste oluşturur
for (let i = 0; i < values.length; i++) { // Listedeki her değer için bir döngü başlatır
    let a = document.createElement("div"); // Bir div elementi oluşturur
    a.style.display = "none"; // Elementin görünmez olmasını sağlar
    a.id = "cache_" + values[i]; // Elementin id özelliğini belirler
    document.getElementById("base").append(a); // Elementi document.body'ye ekler
}
delete values; // Değişkeni siler

function markdown_to_html_link_main(markdown) {
    let regex = /\[([^\]]+)\]\(([^)]+)\)/g; // Markdown bağlantısını tanımlayan bir düzenli ifade, "g" bayrağı ile global arama yapar
    let html = markdown; // HTML dizesini markdown dizisi ile başlatır
    let match; // Eşleşmeyi tutacak bir değişken
    while (match = regex.exec(markdown)) { // Markdown dizesindeki tüm eşleşmeleri bulur
        let description = match[1]; // İlk grup açıklamadır
        let text = match[2]; // İkinci grup bağlantıdır
        let new_text = replaceTextlink(text);
        if (description.startsWith("img:")) {
          var html_link = description.substring(4) + "<img src='" + new_text + "' target='_blank' style='user-select:none;margin:0 auto;padding:0;width:100%;height:auto;display:block;border-radius:1vh;'>";
        }else{
          var html_link = "<a href='" + new_text + "' target='_blank' style='color:#f60000;'>" + description + "</a>"; // HTML bağlantısını oluşturur
        }
        html = html.replace(match[0], html_link); // HTML dizesindeki markdown bağlantısını HTML bağlantısı ile değiştirir
    }
    return (html); // HTML dizesini döndürür
}

function generateToken() {
    var now = new Date();
    var year = now.getFullYear().toString();
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');
    var hour = now.getHours().toString().padStart(2, '0');
    var minute = now.getMinutes().toString().padStart(2, '0');
    var second = now.getSeconds().toString().padStart(2, '0');
    var randomPassword = '';
    var possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 64; i++) {
    randomPassword += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    var token = year + month + day + hour + minute + second + randomPassword + "x";
    return token;
}
function getCurrentTime() {
    var date = new Date();
    var timeString = date.toLocaleTimeString();
    var dateString = date.toLocaleDateString();
    return `${timeString} ${dateString}`;
}
window.wsmode_realtime_other = 1;
window.sifrelemesorgu = 1;
window.SCMmain_tag = "u";
window.main_tag = "w";
window.cache_sifre = "123456789";
window.cache_sindirme = "0";
window.cache_block = "0";
window.cipher = new SC5(window.cache_sifre,window.cache_sindirme,window.cache_block);
window.SCMcipher = new SilverCipherMini(window.cache_sifre);

function san_input_fix_MOD1(a){const b={"<":"&lt;",">":"&gt;",'"':"&quot;"};return a.replace(/[<>"']/ig,a=>b[a])}
function san_input_fix(a){const b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};return a.replace(/[&<>"'/]/ig,a=>b[a])}

  // Div leri gösteren fonksiyon
  function showCacheInMain(cacheId,all=false,tumunugizle=false) {
    // Main div ini seç
    var main = document.getElementById("main");
    // Tıklanan div i seç
    var cache = document.getElementById(cacheId);
    // Tıklanan div i main e taşı
    try {
      main.appendChild(cache);
    } catch (error) {
    }
    // console.log(cache);
    // Tıklanan div i görünür yap
    cache.style.display = "block";
    // Diğer div leri gizle
    hideOthers(cacheId,all,tumunugizle);
  }
  function hideOthers(cacheId,all=false,tumunugizle=false) {
    // Diğer div lerin id lerini bir diziye koy
    if(all==false){
      var others = ["cache_form","cache_note","cache_config", "cache_commands", "cache_kpop", "cache_websocket", "cache_kissoflife", "cache_twice", "cache_nmixx", "cache_everglow", "cache_ive", "cache_aespa", "cache_kep1er", "cache_newjeans", "cache_lesserafim"];
    }else{
      var others = ["gallery_x","header_x","cache_form","cache_note","cache_config", "cache_commands", "cache_kpop", "cache_websocket", "cache_kissoflife", "cache_twice", "cache_nmixx", "cache_everglow", "cache_ive", "cache_aespa", "cache_kep1er", "cache_newjeans", "cache_lesserafim"];
    }
    // Tıklanan div in id sini diziden çıkar
    others.splice(others.indexOf(cacheId), 1);
    // Dizide kalan diğer div leri seç ve gizle
    for (var i = 0; i < others.length; i++) {
      var other = document.getElementById(others[i]);
      other.style.display = "none";
      // Diğer div leri eski yerlerine geri gönder
      main.parentNode.insertBefore(other, main); // Burada main.parentNode kullanıldı
    }
    // Eğer tumunugizle true ise, others dizisindeki tüm div'lerin id'lerini al ve gizle
    if (tumunugizle == true) {
      // others dizisindeki tüm div'leri seç ve gizle
      for (var i = 0; i < others.length; i++) {
        var div = document.getElementById(others[i]);
        div.style.display = "none";
        main.parentNode.insertBefore(other, main);
      }
    }
  }

        function toggleMenu() {
          // Menü butonu ve içeriğini seç
          var button = document.getElementById("menu-button");
          var content = document.getElementById("menu-content");
          // Menü içeriği görünür ise gizle, değilse göster
          if (content.style.display == "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        }










//////////////////////// PART 2












  var textarexr = document.getElementById("kopyala");
  // md5 elementini seç
  var md5a = document.getElementById("md5a");

  function save_notepad(){

    var value = textarexr.value;
    // Eğer değer boş değilse, cookie'ye kaydet
    if (value != "") {
      // Değeri encodeURI ile kodla
      var encodedValue = encodeURI(value);
      // Değeri cookie ye kaydet
      document.cookie = "textareaValue=" + encodedValue + "; max-age=604800"; // Süre 1 hafta olarak ayarlandı
      // Değerin md5 ini hesapla
      var md5Value = md5(value);
      // md5 elementine md5 değerini yaz
      md5a.textContent = "Saved: " + md5Value;
    }
  }
  // yapistirdata fonksiyonunu event listener olarak tanımla
  window.addEventListener("yapistirdata", function() {
var t=document.querySelector('textarea[name="data_note"]');
t&&navigator.clipboard.readText().then(function(n){
// Metni 196 karaktere kısalt
var truncated = n.substring(0, 200);
t.value=truncated;
save_notepad(); // metni kaydet
}).catch(function(n){
console.error(n);
})
});


// cleardata fonksiyonunu event listener olarak tanımla
window.addEventListener("cleardata", function() {
  var textarexr = document.getElementById("kopyala");
  textarexr.value = ""; // metni seç
});

textarexr.addEventListener("input", function() {
    save_notepad();
  });
  
    // Cookie yi al
    var cookie = document.cookie;
    // Cookie den textareaValue isimli değeri bul
    var index = cookie.indexOf("textareaValue=");
    // Eğer değer varsa, textarea ya yaz
    if (index != -1) {
      // Değeri almak için, eşittir işaretinden sonraki kısmı al
      var encodedValue = cookie.substring(index + 14);
      // Değeri decodeURI ile çöz
      var value = decodeURI(encodedValue);
      // Textarea ya değeri yaz
      textarexr.value = value;
      // Değerin md5 ini hesapla
      var md5Value = md5(value);
      // md5 elementine md5 değerini yaz
      md5a.textContent = "Loaded: " + md5Value;
    }
    document.getElementById('kxxf').addEventListener('click', function() {
      var kopyala = document.getElementById('kopyala');kopyala.select();document.execCommand('copy');
    });
  
  
  
  
  
  
  
  
  
  
  
  /// END PART
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Önerileri seç
  var suggestions = document.querySelectorAll('.suggestion');

  // Her bir öneri için bir event listener ekle
  for (var suggestion of suggestions) {
    if(suggestion.id == "translatex"){
      suggestion.addEventListener('click', function() {
        if(window.disable_translate==false){
          window.disable_translate = true;
          this.textContent="Tr: tr";
        }else{
          window.disable_translate = false;
          this.textContent="Tr: Auto";
        }
      });
      continue;
    }
    if(suggestion.id == "voicex"){
      suggestion.addEventListener('click', function() {
        if(window.disable_voice==false){
          window.disable_voice = true;
          this.textContent="Vc: Off";
        }else{
          window.disable_voice = false;
          this.textContent="Vc: On";
        }
      });
      continue;
    }
    suggestion.addEventListener('click', function() {
      // Tıklanan önerinin textini al
      let text = this.textContent;

      // id="message-input" olan elementi seç
      let input = document.getElementById('message-input');

      // input elementinin value özelliğine texti ata
      input.value = text;

      // id="message-submit" olan elementi seç
      let submit = document.getElementById('message-submit');

      // submit elementine onkeypress eventini ekle
      submit.onkeypress = function(event) {
        // Eğer basılan tuş enter ise
        if (event.keyCode === 13) {
          // Eventin varsayılan davranışını engelle
          event.preventDefault();

          // submit elementine tıkla
          submit.click();
        }
      };

      // submit elementine otomatik olarak tıkla
      submit.click();
    });
  }

            var messages = document.querySelector('#messages');
            function ai(m){
                // m = m.trim();
                // var message = document.createElement('div');
                // message.style.display = "block";
                // var xid11 = generateToken();
                // xid11 = "x"+xid11;
                // var sonradata = "";
                // message.innerHTML = "<p class='a rg'><label id='f1'>"+"<div id='"+xid11+"' spellcheck='false' class='divasdas rg' style=''>"+m+"</div>"+"</label></p><p class='rg' style='color:grey;border:none!important;z-index:2;'>"+sonradata+"</p>";
                // messages.insertBefore(message, messages.firstChild);
            }

            function wsrealtimeOther(url,notnew=true){
              if(window.wsmode_realtime_other==0){return;}
              if(url!=null && url!=""){
                url = url.trim();
                var kontrol1 = url.indexOf ("ws://");
                var kontrol2 = url.indexOf ("wss://");
                if (kontrol1 == -1 && kontrol2 == -1) {
                //URL değerinin başında ws:// veya wss:// yoksa, ws:// eklemek
                url = "wss://" + url;
                }
              }else {
                if(notnew==true){
                  var ___d_cac1 = document.getElementById("ws3");
                  var url = ___d_cac1.value;
                  delete ___d_cac1;
                }
              }
              if(notnew==true){
                if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
                    window.otherusers_realtime_ws.close();
                }
                if (window.ws != null && window.ws.readyState == WebSocket.OPEN) {
                  window.ws.close();
                }
              }
try{
  window.otherusers_realtime_ws = new WebSocket(url);
  // window.otherusers_realtime_ws = new WebSocket("ws://localhost:8000");
}catch(e){}

var baglantiother = document.getElementById("baglantiother");
///////
///////
try{
window.otherusers_realtime_ws.onopen = function() {
        sent__s("Lobiye katıldın");
        baglantiother.textContent = "Açık";
        baglantiother.style.color = "green";
    };
    window.otherusers_realtime_ws.onclose = function() {
      if(!["Bağlantı kesildi","Hata"].includes(baglantiother.textContent)){
        sent__s("Lobiden ayrıldın");
        baglantiother.textContent = "Bağlantı kesildi";
        baglantiother.style.color = "red";
      }
      if(window.wsmode_realtime_other==1){
        setTimeout (()=>{
          if (!(window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN)) {
            console.log("Other WS Tekrar Deneniyor");
            wsrealtimeOther(url,false);
          }
          }, 2000);
      }
    };
    window.otherusers_realtime_ws.onerror = function() {
      if (!(window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN)) {
        if(!["Bağlantı kesildi","Hata"].includes(baglantiother.textContent)){
          sent__s("Lobiye bağlantı sorunu");
          baglantiother.textContent = "Hata";
          baglantiother.style.color = "yellow";
        }
      }
    };
    window.otherusers_realtime_ws.onmessage = function(event) {
        var mesaj = event.data;
        if(mesaj.indexOf(window.SCMmain_tag+"$") == 0){
          mesaj = window.SCMcipher.Decrypt(mesaj.substring(window.SCMmain_tag.length + 1));
          mesaj = JSON.parse(mesaj);
          // sent__s("User:" + mesaj.a + "Diğer" + mesaj.b);
          message1 = san_input_fix(mesaj.a).replaceAll("script","").replaceAll("<","").replaceAll(">","").replaceAll("'","").replaceAll('"','').replaceAll("[","").replaceAll("]","");
          message2 = markdown_to_html_link(san_input_fix_MOD1(mesaj.b.replaceAll("<br>","\n")).replaceAll("script","").replaceAll("<","").replaceAll(">","").replaceAll("'","").replaceAll('"',''));
          var messages = document.querySelector('#messages');
          var messagex = document.createElement('div');
          messagex.style.display = "block";
          messagex.innerHTML = "<p class='a lf'><label id='f1'>Unknown : " + "<textarea spellcheck='false' class='textareaxx'>"+ message1 + "</textarea>"  + "</label></p><p class='rg' style='color:grey;border:none!important;z-index:2;'>" + getCurrentTime()+"</p>";
          messages.insertBefore(messagex, messages.firstChild);
          message1="";
          sent__s(message2.replaceAll("\n","<br>"));
          message2="";
        }else{
          // sent__s("Socket Server:" + mesaj);
        }
    };
  }catch(e){}
///////
///////
            }
            function WS__OTHER(mesaj,aicevap) {
              var json_nesnesi = {
                "a": mesaj,
                "b": aicevap
              };
        if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
            var metin = window.SCMmain_tag + "$" + window.SCMcipher.Encrypt(JSON.stringify(json_nesnesi));
            window.otherusers_realtime_ws.send(metin);
        }
    }



              try {
                var otherwsurl;
                window.dev_mode ? otherwsurl = "ws://localhost:8000/" : otherwsurl = "wss://socketsbay.com/wss/v2/1/demo/";
                window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();wsrealtimeOther(otherwsurl);
                var ___d_cac = document.getElementById("ws3");
                ___d_cac.value = otherwsurl;
                delete otherwsurl,___d_cac;
              }catch(e) {}


            function baglan(url,notnew=true) {
              if(window.wsmode_realtime_other==1){return;}
              if(notnew==true){
                if (window.ws != null && window.ws.readyState == WebSocket.OPEN) {
                  window.ws.close();
                }
              }
    url = url.trim();
    if(url==""){
      window.SCMmain_tag = "u";
      window.cache_sifre = "123456789";
      window.cache_sindirme = "0";
      window.cache_block = "0";
      window.SCMcipher = new SilverCipherMini(window.cache_sifre);
      window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();wsrealtimeOther();
      return;
    }else{
      if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
          window.otherusers_realtime_ws.close();
      }
      window.wsmode_realtime_other = 0;
    }
    var kontrol1 = url.indexOf ("ws://");
    var kontrol2 = url.indexOf ("wss://");
    if (kontrol1 == -1 && kontrol2 == -1) {
    //URL değerinin başında ws:// veya wss:// yoksa, ws:// eklemek
    url = "ws://" + url;
    }

    //WebSocket nesnesini WebSocket adresi ile başlatmak
  try{
    window.ws = new WebSocket(url);
  }catch(e){}
    var baglanti = document.getElementById("baglanti");
    //Bağlantı açıldığında çalışacak fonksiyon
try{
    window.ws.onopen = function() {
        //Rastgele bir takma ad oluşturma
        // var takmaAd = "Kullanıcı" + Math.floor(Math.random() * 100);
        //Takma adı sunucuya gönderme
        // ws.send(takmaAd);
        //Bağlantı durumunu güncelleme
        // var baglanti = document.getElementById("baglanti");
        // baglanti.textContent = "Açık";
        // baglanti.style.color = "green";
        document.getElementById("ws").value = url;
        sent__s("WS Bağlantı başarılı");
        if(window.disable_voice!=true){try{responsiveVoice.speak("Websocket bağlantısı kuruldu",'Turkish Female');}catch(ex){}}
        baglanti.textContent = "Açık";
        baglanti.style.color = "green";
    };

    //Bağlantı kapandığında çalışacak fonksiyon
    window.ws.onclose = function() {
      if(!["Bağlantı koptu","Bağlantı kesildi"].includes(baglanti.textContent)){
        sent__s("WS Bağlantı koptu");
        if(window.disable_voice!=true){try{responsiveVoice.speak("Websocket bağlantısı koptu",'Turkish Female');}catch(ex){}}
        baglanti.textContent = "Bağlantı koptu";
        baglanti.style.color = "red";
      }
      if(window.wsmode_realtime_other==0){
        setTimeout (()=>{
          if (!(window.ws != null && window.ws == WebSocket.OPEN)) {
            console.log("WS Tekrar Deneniyor");
            baglan(url,false);
            return;
          }
        }, 2000);
      }
    };

    //Bağlantıda hata olduğunda çalışacak fonksiyon
    window.ws.onerror = function() {
      if (!(window.ws != null && window.ws == WebSocket.OPEN)) {
        if(!["Bağlantı koptu","Bağlantı kesildi"].includes(baglanti.textContent)){
          sent__s("WS Bağlantı kesildi");
          if(window.disable_voice!=true){try{responsiveVoice.speak("Websocket bağlantısı hatalı",'Turkish Female');}catch(ex){}}
          baglanti.textContent = "Bağlantı kesildi";
          baglanti.style.color = "yellow";
        }
      }
    };
// ❯
    //Bağlantıdan mesaj geldiğinde çalışacak fonksiyon
    window.ws.onmessage = function(event) {
        //Mesajı almak
        var mesaj = event.data;
        if(mesaj.indexOf(window.main_tag+"$") == 0){
          if(window.sifrelemesorgu == 1){
            mesaj = window.cipher.Decrypt(mesaj.substring(window.main_tag.length + 1));
            translate_Target_TR(mesaj,"tr").then(function(result) {
              setTimeout(() => {sendMessage(result[0],"__server__"),cevapla(result[0],"__SERVER__ENC__",result[1])}, 3000);
            }).catch(function(error) {
              // console.error(error);
            });
          }else{sendMessage(mesaj,"__server__");}
        }else{
          translate_Target_TR(mesaj,"tr").then(function(result) {
            setTimeout(() => {sendMessage(result[0],"__server__"),cevapla(result[0],"__SERVER__NO_ENC__",result[1])}, 3000);
          }).catch(function(error) {
            // console.error(error);
          });
          
        }
    };
}catch(e){}
}

function mesajGonder(mesaj,enc="no") {
        if (window.ws != null && window.ws.readyState == WebSocket.OPEN) {
            if(enc=="yes"){
              if(window.sifrelemesorgu == 1){
                var metin = window.main_tag + "$" + window.cipher.Encrypt(mesaj);
              }else{
                return;
              }
            }else{
              var metin = mesaj;
            }
            ws.send(metin);
        }
    }
    function sent__s(messagecbbtbtnrte){
      var message = document.createElement('div');
      message.style.display = "block";
      var xid11 = generateToken();
      xid11 = "x"+xid11;
      var sonradata = "";
      message.innerHTML = "<p class='a rg'><label id='f1'>"+"<div id='"+xid11+"' spellcheck='false' class='divasdas rg'>"+messagecbbtbtnrte+"</div>"+"</label></p>";
      messages.insertBefore(message, messages.firstChild);
      /////////////////////
      // var asdasdasd = document.getElementById(xid11);
      // asdasdasd.style.height = "auto"; // yüksekliği sıfırlar
      // asdasdasd.style.height = asdasdasd.scrollHeight + "px"; // yüksekliği scrollHeight ile ayarlar
    }

    function translate(textasdas,mode,lang){
      if(textasdas.startsWith('/') || window.disable_translate==true) {
        return new Promise(function(resolve, reject) {
          try{resolve([textasdas,"tr"]);}catch(e){reject([textasdas,"tr"]);}
        });
      }

      var sourceText = textasdas.replaceAll("&","%26").replaceAll("?","%3F");
      var sourceLang = 'auto';
      if(mode=="self"){
        var targetLang = 'en';
      }else{
        var targetLang = lang;
        console.log("TARGETX "+ lang);
      }
      var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURIComponent(sourceText);
      
      // Promise nesnesi oluşturalım
      return new Promise(function(resolve, reject) {
        // XMLHttpRequest nesnesi oluşturalım
        let request = new XMLHttpRequest();
        
        // URL'ye GET isteği gönderelim
        request.open("GET", url, true);
        request.onerror = function(){
          resolve([textasdas,"tr"]);
        }
        // İstek tamamlandığında çalışacak fonksiyonu tanımlayalım
        request.onload = function() {
          // İstek başarılı ise
          if (this.status >= 200 && this.status < 400) {
            // JSON verisini parse edelim
            let data = JSON.parse(request.responseText);
            let finaltext = '';
            try{
            for (let i = 0; i < data[0].length; i++) {
              finaltext += data[0][i][0];
            }
            }catch(e){}
            console.log("F:" + finaltext)
            // Verinin ilk elemanının ilk elemanının ilk elemanını döndürelim
            resolve([finaltext.replaceAll("%26","&").replaceAll("%3F","?"),data[2]]);
          } else {
            // İstek başarısız ise
            reject([textasdas,"tr"]);
          }
        };
        
        // İsteği gönderelim
        request.send();
      });

    }



    function translate_Target_TR(textasdas,target){
      if(textasdas.startsWith('/') || window.disable_translate==true) {
        return new Promise(function(resolve, reject) {
          try{resolve([textasdas,"tr"]);}catch(e){reject([textasdas,"tr"]);}
        });
      }

      var sourceText = textasdas.replaceAll("&","%26").replaceAll("?","%3F");
      var sourceLang = 'auto';
      var targetLang = target;
      
      var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURIComponent(sourceText);
      
      // Promise nesnesi oluşturalım
      return new Promise(function(resolve, reject) {
        // XMLHttpRequest nesnesi oluşturalım
        let request = new XMLHttpRequest();
        
        // URL'ye GET isteği gönderelim
        request.open("GET", url, true);
        request.onerror = function(){
          resolve([textasdas,"tr"]);
        }
        // İstek tamamlandığında çalışacak fonksiyonu tanımlayalım
        request.onload = function() {
          // İstek başarılı ise
          if (this.status >= 200 && this.status < 400) {
            // JSON verisini parse edelim
            let data = JSON.parse(request.responseText);
            let finaltext = '';
            try{
            for (let i = 0; i < data[0].length; i++) {
              finaltext += data[0][i][0];
            }
            }catch(e){}
            console.log("X:" + finaltext)
            console.log("DİL :" + data[2]);
            // Verinin ilk elemanının ilk elemanının ilk elemanını döndürelim
            resolve([finaltext.replaceAll("%26","&").replaceAll("%3F","?"),data[2]]);
          } else {
            // İstek başarısız ise
            reject([textasdas,"tr"]);
          }
        };
        
        // İsteği gönderelim
          request.send();

      });

    }
    
            function cevapla(dataxxxx,target_A="me",lang="tr"){
              if(dataxxxx.indexOf("ws://") != -1){
                try{window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(dataxxxx);}catch(e){
                  sent__s(e);
                  window.wsmode_realtime_other = 0;
                  if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
                    window.otherusers_realtime_ws.close();
                  }
                  setTimeout(()=>{
                    if (!(window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN)) {
                      window.SCMmain_tag = "u";
                      window.cache_sifre = "123456789";
                      window.cache_sindirme = "0";
                      window.cache_block = "0";
                      window.SCMcipher = new SilverCipherMini(window.cache_sifre);
                      window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();wsrealtimeOther();
                    }
                  },2200);
                }
                return;
              }
              if(dataxxxx.indexOf("wss://") != -1){
                try{window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(dataxxxx);}catch(e){
                  sent__s(e);
                  window.wsmode_realtime_other = 0;
                  if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
                    window.otherusers_realtime_ws.close();
                  }
                  setTimeout(()=>{
                    if (!(window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN)) {
                      window.SCMmain_tag = "u";
                      window.cache_sifre = "123456789";
                      window.cache_sindirme = "0";
                      window.cache_block = "0";
                      window.SCMcipher = new SilverCipherMini(window.cache_sifre);
                      window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();wsrealtimeOther();
                    }
                  },2200);
                }
                return;
              }
              if(dataxxxx == "websocket" || dataxxxx == "close" || dataxxxx == "kapat" || dataxxxx == "durdur"){
                window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();wsrealtimeOther();
                sent__s("tmm");
              }
                // var messagecbbtbtnrte = decryptData_FLEXMODE(messagexx,$('targetpublic').html(),$('myprivate').html());
                /////////////////////
                var translate___PROC = false;
                if(target_A=="__SERVER__NO_ENC__"){
                  var messagecbbtbtnrte = ai_cevapla(dataxxxx,true);
                  if(messagecbbtbtnrte=="sil"){return;}
                  translate___PROC=true;
                  translate(messagecbbtbtnrte,"server",lang).then(function(result) {
                    if(result[1]==lang){
                      var veri__0 = messagecbbtbtnrte;
                      var ___text__0 = messagecbbtbtnrte;
                    }else {
                      var veri__0 = result[0];
                      var ___text__0 = veri__0 + " Translated:" + messagecbbtbtnrte;
                    }
                    mesajGonder(veri__0, "no");
                    messagecbbtbtnrte=veri__0;
                    sent__s(___text__0);
                    if(dataxxxx.charAt(0) != '/'){
                      WS__OTHER(dataxxxx,window.latest_____cache_x);
                    }
                  }).catch(function(error) {
                    // console.error(error);
                  });

                }else if(target_A=="__SERVER__ENC__"){
                  var messagecbbtbtnrte = ai_cevapla(dataxxxx,true);
                  if(messagecbbtbtnrte=="sil"){return;}
                  translate___PROC=true;
                  translate(messagecbbtbtnrte,"server",lang).then(function(result) {
                    if(result[1]==lang){
                      var veri__0 = messagecbbtbtnrte;
                      var ___text__0 = messagecbbtbtnrte;
                    }else {
                      var veri__0 = result[0];
                      var ___text__0 = veri__0 + " Translated:" + messagecbbtbtnrte;
                    }
                    mesajGonder(veri__0,"yes");
                    messagecbbtbtnrte=veri__0;
                    sent__s(___text__0);
                    if(dataxxxx.charAt(0) != '/'){
                      WS__OTHER(dataxxxx,window.latest_____cache_x);
                    }
                  }).catch(function(error) {
                    // console.error(error);
                  });
                }else{
                  translate___PROC=true;
                  translate_Target_TR(dataxxxx,"tr").then(function(result) {
                    console.log("Alıcı",result[1]);
                    var lang__x = result[1];
                    var asdasdassd = ai_cevapla(result[0],false);
                    if(asdasdassd=="sil"){return;}
                    if(result[1]=="tr"){
                      sent__000(dataxxxx,"a");
                      result = dataxxxx;
                    }else {
                      sent__000(dataxxxx + " Translated: "+result[0],"a");
                    }
                    // mesajGonder(result, "no");
                    translate(asdasdassd,"xxx",lang__x).then(function(resultxxx) {
                      var __cevap__ = restoreTags(resultxxx[0],window.list);
                      sent__s(__cevap__);
                      if(dataxxxx.charAt(0) != '/'){
                        if(lang__x=="tr" && window.disable_voice!=true){try{if(resultxxx[0].length>200){var _abc = resultxxx[0].split("_");console.log(_abc);_abc = _abc[0];}else{var _abc = resultxxx[0].replaceAll("_"," ");}responsiveVoice.speak(_abc,'Turkish Female');}catch(ex){}}
                        WS__OTHER(dataxxxx + " Translated: "+result,window.latest_____cache_x);
                      }
                    }).catch(function(error) {
                      // console.error(error);
                    });
                  }).catch(function(error) {
                    // console.error(error);
                  });
                }
                if(translate___PROC==false){
                  if(!["__SERVER__ENC__","__SERVER__NO_ENC__"].includes(target_A)){
                    sent__000(dataxxxx,"a");
                  }
                  sent__s(messagecbbtbtnrte);
                  if(dataxxxx.charAt(0) != '/'){
                    WS__OTHER(dataxxxx,window.latest_____cache_x);
                  }
                }
                ai(dataxxxx);
            }
            function sent__000(message1,target){
              var messages = document.querySelector('#messages');
              var messagex = document.createElement('div');
              messagex.style.display = "block";
              //message1="(Encrypted)";
              //messagex.innerHTML = "Mesaj Gönderildi => <textarea spellcheck='false' style='color:grey;overflow: hidden;resize: vertical;'>"+message1+"</textarea> "+getCurrentTime()+" ID: "+target;
              if(target=="__server__"){
                var __cache_kisi_0x13 = "Websocket";
              }else {
                var __cache_kisi_0x13 = "Me";
              }
              messagex.innerHTML = "<p class='a lf'><label id='f1'>"+__cache_kisi_0x13+" : " + "<textarea spellcheck='false' class='textareaxx'>"+ message1 + "</textarea>"  + "</label></p><p class='rg' style='color:grey;border:none!important;z-index:2;'>" + getCurrentTime()+"</p>";
              messages.insertBefore(messagex, messages.firstChild);
            }
            function sendMessage(message1,target) {
            // var payload = `${{message1}}:${{target}}:${{keyx}}`;
            // payload = encryptDataserver(payload,$("serverpublickey").html());
            // socket.send(payload);
              if(target=="__server__"){
                message1 = san_input_fix(message1).replaceAll("script","").replaceAll("<","").replaceAll(">","").replaceAll("'","").replaceAll('"','').replaceAll("[","").replaceAll("]","");
                sent__000(message1,target);
              }
            if(target!="__server__"){
              cevapla(message1);
            }
            message1="";
            }
                        var submit = document.getElementById("message-submit");

            var textarea = document.getElementById("message-input");
            var height = textarea.clientHeight;
            textarea.addEventListener("mouseup", function() {{
            if (height != textarea.clientHeight) {{
                submit.style.setProperty("height", (textarea.clientHeight+2) + "px", "important");
            }}
            height = textarea.clientHeight;
            }});

            var form = document.querySelector('#message-form');
            form.addEventListener('submit', function(event) {{
            event.preventDefault();
            arama_sonuclari.style.display = "none";
            _ax_a.style.display = "";
            var messageInput = document.querySelector('#message-input');
            var targetInput = document.querySelector('#target-input');
            var messagex2 = messageInput.value;
            var target = targetInput.value;
            messagex=sendMessage(messageInput.value,targetInput.value);
            //sendMessage(messagex, target, server_key,1,messagex2);
            messageInput.value = '';
            messagex2="";
            messagex="";
            }});
            function changeoptions(){
        try {
    var cache000 = document.getElementById("optionsx").value;
    if(cache000.trim() == ""){
        window.sifrelemesorgu = 0;
    }else {
        window.sifrelemesorgu = 1;
        if(cache000.trim() == "default" || cache000.trim() == "0" || cache000.trim() == "reset" || cache000.trim() == "restart"){
        window.main_tag = "w";
        window.cache_sifre = "123456789";
        window.cache_sindirme = "0";
        window.cache_block = "0";
        window.cipher = new SC5(window.cache_sifre,window.cache_sindirme,window.cache_block);
        document.getElementById("optionsx").value = "123456789:0:0:w";
        alert("Successful");
        return;
    }
    var parcalar = cache000.split(":");
    window.cache_sifre = parcalar[0].trim();
    try {
        window.cache_sindirme = parcalar[1].trim();
    } catch(e) {
    }
    try {
        window.cache_block = parcalar[2].trim();
     }catch(e) {
    }
    try {
        var ____cache_0x0 = Cevir(parcalar[3].trim());
        window.main_tag = ____cache_0x0;
     }catch(e) {
    }
        window.cipher = new SC5(window.cache_sifre,window.cache_sindirme,window.cache_block);
    }
        alert("Successful");
    }catch(e){
        alert("Error: " + e);
    }



}

var _000x = 0;
function gallery_s(){
  if(_000x==1){
    var body = document.querySelector("body");
    var html = document.querySelector("html");
    html.style.backgroundColor = "#131417";
    body.style.backgroundColor = "#131417";
    // var ul_x = document.querySelector("#gallery_x > ul");
    // scrollEvent(ul_x);
    var _____t = document.getElementById("gallery_x");
    _____t.style.Display="block";
    return;}else{_000x=1;}
  var style = document.createElement("style");
  style.innerHTML = "@font-face{font-family:'Ephesis';src:url(Ephesis-Regular.ttf) format('woff')}";
  style.type = "text/css";
  document.head.appendChild(style);
// body elementini bulalım
var body = document.querySelector("body");

// Verdiğiniz HTML kodundaki elementleri tek tek oluşturalım
var geridon_gallery = document.createElement("div");
var sticky = document.createElement("div");
var rightstick = document.createElement("div");
var filestick = document.createElement("div");
var prevButton = document.createElement("button");
var nextButton = document.createElement("button");

// Elementlere verdiğiniz id ve class özelliklerini atayalım
sticky.id = "sticky";
sticky.textContent = "Null";
rightstick.id = "rightstick";
filestick.id = "filestick";
filestick.textContent = "Null";
prevButton.id = "prev-button";
prevButton.className = "arrow-button";
prevButton.textContent = "❮";
nextButton.id = "next-button";
nextButton.className = "arrow-button";
nextButton.textContent = "❯";
geridon_gallery.textContent = "Geri Dön ❯";
geridon_gallery.id = "geridon_gallery";
geridon_gallery.style.left = "0";
geridon_gallery.style.right = "0";
geridon_gallery.style.bottom = "5";
geridon_gallery.style.padding = "0";
geridon_gallery.style.margin = "0";
geridon_gallery.style.color = "#fff";
geridon_gallery.style.position = "fixed";
geridon_gallery.style.zIndex = "999";
geridon_gallery.style.fontSize = "24px";
geridon_gallery.addEventListener("click", ()=>{
  // window.removeEventListener("scroll", window.throttleScroll);
  var ul = document.querySelector("#gallery_x > ul");
  try {
    window.listBottom = ul.offsetTop + ul.offsetHeight;
    window.listTop = ul.offsetTop;
  } catch (error) {
  }
  showCacheInMain('header_x',true,true);
  showCacheInMain('cache_form');
  html.style.backgroundColor = "white";
  body.style.backgroundColor = "white";
  html.style.color = "black";
  body.style.color = "black";
  window.scrollTo(0, 0);
});
// Elementleri doğru sırayla birbirine bağlayalım
rightstick.appendChild(filestick);
document.getElementById("gallery_x").appendChild(sticky);
document.getElementById("gallery_x").appendChild(geridon_gallery);
document.getElementById("gallery_x").appendChild(rightstick);
document.getElementById("gallery_x").appendChild(prevButton);
document.getElementById("gallery_x").appendChild(nextButton);

var _latest_file_name = "";
var prevSrc = "";
var stickyDiv = document.getElementById("sticky");
// Klasörlerin isimlerini ve yollarını bir obje olarak tanımlayın

  var foldersOLD = {
    "Kpop1":"[$tw$GBJre6UX0AABkLG?format=jpg&name=4096x4096,$rd$x48xi6vpqsua1.jpg?width=640&crop=smart&auto=webp&s=25ea4d1fc0e87dab3ae05392eff717092efb29f4,$rd$07jxy01qqsua1.jpg?width=640&crop=smart&auto=webp&s=5ec11cbc5ca106d4abad0a25fd4a4d310531cc1b,$rd$q0zo76a2kgbb1.jpg?width=640&crop=smart&auto=webp&s=df0d6d8c01aaab9908a608a6acf29a9ebfcee675,$rd$qh8axeb2kgbb1.jpg?width=640&crop=smart&auto=webp&s=96e506c9f55edd6b028d4e8c18a9e31132070708,$rd$vk50ravg0wtb1.jpg?width=1080&format=pjpg&auto=webp&s=989be823411e845b608eb7f840a32b10a6e314de,$rd$66yy59ps6kub1.jpg?width=1440&format=pjpg&auto=webp&s=d71e5355e6e6ca88aa27ada5858a557ef90cec48,$rd$ja1fgzlib34c1.png?width=1366&format=png&auto=webp&s=390e3ce1d9d2ccba5d9d362143bb60ccca6dc733,$rd$1bc105d4ng4c1.jpg?width=1295&format=pjpg&auto=webp&s=99d98bb421dac6c17bafe7b9a4ba2ac5a977618d,$tw$GAl82OYXQAA-jLr?format=jpg&name=4096x4096,$tw$GAVtER3XkAAHzIQ?format=jpg&name=large,$tw$GBI18AZWkAARxfv?format=jpg&name=large,$tw$GBF9DdRbcAAz7DD?format=jpg&name=large,$tw$GA9wJPpXIAAoamf?format=jpg&name=4096x4096,$tw$GA_m5KKasAA7L_4?format=jpg&name=large,$tw$GA7xysbXsAE9Ia5?format=jpg&name=large,$tw$GAy8vVEbIAAYNHL?format=jpg&name=4096x4096!]"
  };


// Dizileri karıştırmak için bir fonksiyon tanımla
function shuffle(array) {
// Dizinin uzunluğunu al
var length = array.length;
// Diziyi değiştirmemek için kopyasını oluştur
var copy = [...array];
// Yeni bir boş dizi oluştur
var result = [];
// Dizinin uzunluğu kadar döngü kur
for (var i = 0; i < length; i++) {
  // Kopya diziden rastgele bir indeks seç
  var index = Math.floor(Math.random() * copy.length);
  // Seçilen indeksteki elemanı yeni diziye ekle
  result.push(copy[index]);
  // Seçilen elemanı kopya diziden sil
  copy.splice(index, 1);
}
// Karıştırılmış diziyi döndür
return result;
}

// Anahtarlar dizisini karıştır
var shuffledKeys = shuffle(Object.keys(foldersOLD));

// Yeni bir nesne oluştur
var folders = {};

// Karıştırılmış anahtarlar ve orijinal değerler ile yeni nesneyi doldur
for (var i = 0; i < shuffledKeys.length; i++) {
folders[shuffledKeys[i]] = foldersOLD[shuffledKeys[i]];
}

let div = document.createElement("div");

div.style.position = "fixed";
div.style.left = "0";
div.style.top = "0";
div.style.right = "0";
div.style.zIndex = "1";
div.style.backgroundColor = "transparent";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.justifyContent = "center";
div.style.fontFamily = "'Ephesis', cursive";
div.style.fontSize = "36px";
div.style.fontWeight = "bold";
div.style.color = "#FAAD3F";
// div.style.borderBottomLeftRadius = "80%";
// div.style.borderBottomRightRadius = "80%";
div.style.width = "100%";
div.className = "maindiv";
div.style["::-webkit-scrollbar"] = "display: none";
div.style.scrollbarWidth = "none"; // Firefox
div.style.webkitScrollbar = "display: none"; // Chrome, Safari and Opera
document.getElementById("gallery_x").appendChild(div);

// Div elementinin içine bir tane daha div ekleyin
var innerDiv = document.createElement("div");
innerDiv.style.display = "flex"; // İç div elementinin stilini ayarlayın
// innerDiv.style.flexWrap = "wrap"; // İç div elementinin içindeki h3 elementlerinin satır atlamasını sağlayın
innerDiv.style.backgroundColor = "transparent";
innerDiv.style["::-webkit-scrollbar"] = "display: none";
innerDiv.style.scrollbarWidth = "none"; // Firefox
innerDiv.style.webkitScrollbar = "display: none"; // Chrome, Safari and Opera
// innerDiv.style.borderBottomLeftRadius = "10px";
// innerDiv.style.borderBottomRightRadius = "10px";
// innerDiv.style.borderTopLeftRadius = "10px";
// innerDiv.style.borderTopRightRadius = "10px";
innerDiv.className = "innerdiv";

div.appendChild(innerDiv); // İç div elementini dış div elementinin içine ekleyin

// Sağdan ve soldan kaydırmalı olması için iki tane buton elementi oluşturun
var leftButton = document.createElement("button");
var rightButton = document.createElement("button");

// Buton elementlerinin stilini ayarlayın
leftButton.style.fontSize = "13";
leftButton.style.color = "#BB5B7F";
leftButton.style.position = "absolute";
leftButton.style.left = "0";
leftButton.style.top = "50%";
leftButton.style.transform = "translateY(-50%)";
leftButton.style.zIndex = "9";
leftButton.style.backgroundColor = "transparent";
leftButton.style.border = "none";
leftButton.style.cursor = "pointer";
leftButton.innerHTML = "◀"; // Sol ok işareti

rightButton.style.fontSize = "13";
rightButton.style.color = "#BB5B7F";
rightButton.style.position = "absolute";
rightButton.style.right = "0";
rightButton.style.top = "50%";
rightButton.style.transform = "translateY(-50%)";
rightButton.style.zIndex = "9";
rightButton.style.backgroundColor = "transparent";
rightButton.style.border = "none";
rightButton.style.cursor = "pointer";
rightButton.innerHTML = "▶"; // Sağ ok işareti

// Buton elementlerini dış div elementinin içine ekleyin
div.appendChild(leftButton);
div.appendChild(rightButton);

// Buton elementleri için birer tıklama olayı yerine basılı tutma olayı tanımlayın
leftButton.addEventListener("mousedown", scrollLeft);
rightButton.addEventListener("mousedown", scrollRight);

// Sol butona basılı tutulduğunda yatay kaydırma yapmak için bir fonksiyon tanımlayın
function scrollLeft(e) {
// İç div elementinin yatay kaydırma pozisyonunu alın
var scrollPosition = innerDiv.scrollLeft;
// Kaydırma miktarını pencerenin %20'si olarak belirleyin
var scrollAmount = window.innerWidth * 0.2;
// Kaydırma pozisyonunu kaydırma miktarı kadar azaltın
scrollPosition = scrollPosition - scrollAmount;
// İç div elementini yeni kaydırma pozisyonuna göre kaydırın
innerDiv.scroll({
  left: scrollPosition,
  behavior: "smooth"
});
// Basılı tutma olayı için bir zamanlayıcı tanımlayın
var timer = setTimeout(scrollLeft, 200);
// Sol butonun mouseup olayında zamanlayıcıyı durdurun
leftButton.addEventListener("mouseup", function() {
  clearTimeout(timer); // Zamanlayıcıyı iptal edin
});
}

// Sağ butona basılı tutulduğunda yatay kaydırma yapmak için bir fonksiyon tanımlayın
function scrollRight(e) {
// İç div elementinin yatay kaydırma pozisyonunu alın
var scrollPosition = innerDiv.scrollLeft;
// Kaydırma miktarını pencerenin %20'si olarak belirleyin
var scrollAmount = window.innerWidth * 0.2;
// Kaydırma pozisyonunu kaydırma miktarı kadar artırın
scrollPosition = scrollPosition + scrollAmount;
// İç div elementini yeni kaydırma pozisyonuna göre kaydırın
innerDiv.scroll({
  left: scrollPosition,
  behavior: "smooth"
});
// Basılı tutma olayı için bir zamanlayıcı tanımlayın
var timer = setTimeout(scrollRight, 200);
// Sağ butonun mouseup olayında zamanlayıcıyı durdurun
rightButton.addEventListener("mouseup", function() {
  clearTimeout(timer); // Zamanlayıcıyı iptal edin
});
}




var d__start__ = 0;
// Her klasör için bir h3 elementi oluşturun ve iç div elementinin içine ekleyin
Object.keys(folders).forEach(folder => createFolderElement(folder, innerDiv));

// Bir klasör için bir h3 elementi oluşturmak için bir fonksiyon tanımlayın
function createFolderElement(folder, innerDiv) {
const h3 = document.createElement("h3");
h3.textContent = folder;
// H3 elementinin stilini ayarlayın
h3.style.display = "inline-block";
h3.style.margin = "10px";
if(d__start__==0){
h3.style.marginLeft = "0";
d__start__++;
}else {
h3.style.marginLeft = "35px";
}
h3.style.color = "#E6E6E6";
h3.style.fontSize = "25px";
h3.style.fontWeight = "300";
h3.style.whiteSpace = "nowrap";
h3.style.textOverflow = "ellipsis"; // Taşan metinlerin sonuna üç nokta koyun
// h3.style.textDecoration = "underline";
h3.className = "textdiv1";
h3.style.fontFamily = "'Ephesis', cursive";

// H3 elementi için bir tıklama olayı tanımlayın
h3.addEventListener("click", handleFolderClick);
// H3 elementini iç div elementinin içine ekleyin

innerDiv.appendChild(h3);
}

var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

var newDiv = document.createElement("div");
newDiv.style.color = "#E6E6E6";
newDiv.style.fontSize = "24px";
newDiv.style.fontWeight = "300";
newDiv.style.whiteSpace = "nowrap";
newDiv.style.fontFamily = "'Ephesis', cursive";
// newDiv.style.display = "none";
newDiv.textContent = _latest_file_name;
document.getElementById("rightstick").prepend(newDiv);

prevButton.addEventListener("click", function () {
var keys = Object.keys(folders);
var index = keys.indexOf(_latest_file_name); 
index--;
if (index < 0) { index = keys.length - 1; } 
_latest_file_name = keys[index]; 
newDiv.textContent = _latest_file_name;
var newEvent = new CustomEvent("click", { detail: { target: newDiv } }); 
newEvent.detail.target.textContent = _latest_file_name;
handleFolderClick(newEvent); 
});
nextButton.addEventListener("click", function () {
var keys = Object.keys(folders);
var index = keys.indexOf(_latest_file_name);
index++;
if (index >= keys.length) { index = 0; } 
_latest_file_name = keys[index];
newDiv.textContent = _latest_file_name;
var newEvent = new CustomEvent("click", { detail: { target: newDiv } }); 
newEvent.detail.target.textContent = _latest_file_name;
handleFolderClick(newEvent); 
});
function handleFolderClick(event) {
  try {  
    var folderName = event.target.textContent;
  } catch (err){}
  try {  
    var folderName = event.detail.target.textContent;
  } catch (err){}
  
  _latest_file_name = folderName;
  newDiv.textContent = _latest_file_name;
  // Geri kalan kod
  // Metne göre klasörün yolunu alın
// Metne göre klasörün yolunu alın
const folderPath = folders[folderName];
// folderPath değişkeninin sonunda [] içinde dosya isimleri olup olmadığını kontrol edin
if (folderPath.endsWith("]")) {
  if (folderPath.endsWith("!]")) {
    var kural = 1;
  }else{
    var kural = 0;
  }
  // [] içindeki dosya isimlerini almak için parseFileNames fonksiyonunu çağırın
  const fileNames = shuffleFileNames(parseFileNames(folderPath));
  // Dosya isimlerini showFiles fonksiyonuna gönderin
  showFiles(fileNames, folderPath, (ul) => {
    // Kaydırma olayını tanımlayın
    window.addEventListener("scroll", () => toggleFiles(ul));
    // Sayfanın en başına kaydırın
    window.scrollTo(0, 0);
  },kural);
} else {
  // Fetch API ile klasörü isteyin
  fetch(folderPath)
    .then(response => response.text()) // Yanıtı metin olarak dönüştürün
    .then(parseFileNames) // Metinden dosya adlarını alın
    .then(shuffleFileNames) // Dosya adlarını rastgele karıştırın
    .then(fileNames => showFiles(fileNames, folderPath, (ul) => {
      // Kaydırma olayını tanımlayın
      window.addEventListener("scroll", () => toggleFiles(ul));
      // Sayfanın en başına kaydırın
      window.scrollTo(0, 0);
    }));
}
}



function parseFileNames(text) {
  // text parametresinin sonunda [] içinde dosya isimleri olup olmadığını kontrol edin
  if (text.endsWith("]")) {
    // [] içindeki dosya isimlerini almak için text.match(/\[([^\]]*)\]/g) ifadesini kullanın
    return text.match(/\[([^\]]*)\]/g).map(href => {
      // href parametresinin başındaki [ ve sonundaki ] işaretlerini kaldırın
      href = href.replace(/\[/, "").replace(/!\]?/, "");
      // href parametresini virgül ile bölerek yeni bir dizi oluşturun
      return href.split(",");
    }).flat();
  } else {
    // [] içinde dosya isimleri yoksa, href niteliği içindeki dosya isimlerini almak için text.match(/href=(?:"|')?([^"'\s>]+)(?:"|')?/g) ifadesini kullanın
    return text.match(/href="([^"]*)"/g).map(href => href.replace(/href="/, "").replace(/"/, ""));
  }
}

function shuffleFileNames(fileNames) {return fileNames.sort(() => Math.random() - 0.5);}
function noQuestionMark(element) { return element[0] != "?" && element[0] != "/" && element[0] != "." && element!= "desktop.ini";}
function addATag(element,folderPath,kural) { if(kural==1){return "<a href='" + element + "'>" + element + "</a>";}else{return "<a href='" + folderPath + "/" + element + "'>" + element + "</a>";}}
function showFiles(fileNames, folderPath, callback, kural=0) {
var cssCode = "max-height: 12vh;max-width: 12vh; overflow: auto; overflow-y: auto;"; 
var filteredFileNames = fileNames.filter(noQuestionMark);
var fileNamesWithATag = filteredFileNames.map(function(element) { return addATag(replaceTextlink(element), folderPath, kural); });
var fileNamesString = "<h1>" + fileNamesWithATag.length + "</h1>" + "<div class='stickydiv' style='"+cssCode+"'>" + String(fileNamesWithATag).replaceAll(",", "<br>") + "</div>"; 
stickyDiv.innerHTML = fileNamesString;
var ul = document.querySelector("ul[id='hhh000']") || document.createElement("ul");
if(ul.id != "hhh000"){ul.id = "hhh000";}
while (ul.firstChild) {
  ul.removeChild(ul.firstChild);
}
var counter = 0;
fileNames.forEach(fileName => {
  const media = createMediaElement(replaceTextlink(fileName), folderPath, counter, kural);
  if (media) {
    const li = document.createElement("li");
    li.appendChild(media);
    ul.appendChild(li);
    counter++;
  }
});
  // Liste elementini body elementine ekleyin
  document.getElementById("gallery_x").appendChild(ul);
  // Liste elementini gösterin
  ul.style.display = "block";
  ul.style.margin = "0 auto";
  ul.style.padding = "0";
  ul.style.textAlign = "center";
  ul.style.listStyle = "none"; // list-style özelliğini none olarak belirtin
  // Promise'i liste elementi ile çözün
  callback(ul);

}

function toggleFiles(ul) {
const mediaElements = ul.querySelectorAll(".media[data-src], video[data-src]");
const observer = new IntersectionObserver(async entries => {
  for (var entry of entries) {
    observer.unobserve(entry.target);
    if (entry.target.classList.contains("media") || entry.target.tagName == "VIDEO") {
      if (entry.isIntersecting) {
        if (!entry.target.dataset.loaded) {
          entry.target.src = entry.target.dataset.src;
          entry.target.dataset.loaded = true;
        }
        if (!document.querySelector("video[autoplay]")) {
          if (entry.target.tagName != "IMG") {
            entry.target.play();
            entry.target.setAttribute("autoplay", true);
          }
        }
        if (entry.target.src != prevSrc) {
          // console.log("media type: " + entry.target.tagName); // Bu satırı ekleyin
          // console.log("media src: " + entry.target.src); // Bu satırı ekleyin
          document.getElementById("filestick").innerHTML = entry.target.tagName + "<br>" + "<a onclick=\"window.open(this.innerText)\">" + entry.target.src + "</a>";
          prevSrc = entry.target.src;
        }
      } else {
        if (entry.target.tagName != "IMG") {
          entry.target.pause();
          entry.target.removeAttribute("autoplay");
        }
      }
    }
  }
}, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.75
});
mediaElements.forEach(media => {
  observer.observe(media);
});
scrollEvent(ul);
}
// Kaydırma olayını sınırlayan bir fonksiyon oluşturun
window.throttleScroll = function(callback, delay) {
  // Son kaydırma zamanını ve zamanlayıcıyı tutan değişkenler tanımlayın
  let lastScrollTime = 0;
  let timer = null;
  // Fonksiyonun geri dönüş değeri olarak bir fonksiyon döndürün
  return function() {
    // Şimdiki zamanı alın
    let now = Date.now();
    // Eğer zamanlayıcı yoksa
    if (!timer) {
      // Eğer şimdiki zaman ile son kaydırma zamanı arasındaki fark, gecikmeden büyükse
      if (now - lastScrollTime > delay) {
        // Geri çağırma fonksiyonunu çalıştırın
        callback();
        // Son kaydırma zamanını güncelleyin
        lastScrollTime = now;
      }
      // Zamanlayıcıyı ayarlayın
      timer = setTimeout(() => {
        // Zamanlayıcıyı sıfırlayın
        timer = null;
        // Geri çağırma fonksiyonunu çalıştırın
        callback();
        // Son kaydırma zamanını güncelleyin
        lastScrollTime = now;
      }, delay);
    }
  };
}

// Kaydırma olayını tanımlayan bir fonksiyon oluşturun
function scrollEvent(ul) {
  window.listBottom = ul.offsetTop + ul.offsetHeight;
  window.listTop = ul.offsetTop;
  // ul elementinin alt ve üst sınırlarını alın
  // Kaydırma olayını tanımlayın
  if (ul.children.length > 1) {
  window.addEventListener("scroll", window.throttleScroll(() => {
    if (window.scrollY + window.innerHeight >= window.listBottom) {
      var firstChild = ul.firstElementChild;
      ul.removeChild(firstChild);
      ul.append(firstChild); 
            // hide the first child
      firstChild.style.display = "none";
      // show the last child
      ul.lastElementChild.style.display = "block";
    }
    /*
    if (window.scrollY <= listTop) {
      var lastChild = ul.lastElementChild; 
      ul.removeChild(lastChild);
      ul.prepend(lastChild); 
    }*/
  }, 100)); // 100 milisaniyelik bir gecikme ile kaydırma olayını sınırlayın
} else {
  // disable the scroll event
  window.removeEventListener("scroll", window.throttleScroll);
}
}

function createMediaElement(fileName, folderPath, counter, kural) {
const ext = fileName.split(".").pop().toLowerCase();
if(kural==1){
  var url = fileName;
}else{
  var url = folderPath + "/" + fileName;
}
var media; if (/(\.jpeg|\.jpg|\.png|\pbs.twimg.com|\.gif)/i.test(fileName)){ media = new Image();
  // Eğer sayaç değeri 3'ten küçükse src ve data-src kullanın, değilse sadece data-src kullanın
  if (counter < 3) { // Bu koşulu ekleyin
    media.src = url; // Bu satırı ekleyin
    media.dataset.src = url; // Bu satırı ekleyin
    media.dataset.loaded = true;
  } else {
    media.dataset.src = url;
  } media.alt = fileName;media.style.objectFit = "contain";
  media.style.maxWidth = "600px";  media.style.height = "100vh";
  media.style.objectFit = "cover";
  media.style.marginTop = "1%";
  media.style.marginBottom = "1%";  media.style.width = "100%";
} else if (/(\.mp4|\.webm|\.ogg|\.wmv)/i.test(fileName)){
  media = document.createElement("video");
  media.style.width = "100%";
  media.style.maxWidth = "600px";
  media.style.height = "100vh";
  media.style.objectFit = "cover";
  media.style.marginTop = "1%";
  media.style.marginBottom = "1%";
  media.style.Display = "block";
  if (counter < 3) {
    media.src = url; media.dataset.src = url; media.dataset.loaded = true; media.volume = 0.0;
  } else {
    media.dataset.src = url;
  } media.controls = true; media.loop = true;  media.volume = 0.0;
    media.style.objectFit = "contain";
    // media.controlsList.add("nofullscreen");
    // media.style["::-webkit-media-controls-fullscreen-button"] = "display: none !important";
    // media.addEventListener("click", function() {
    //     // Video oynatılıyorsa, durdurun
    //     if (media.paused == false) {
    //       media.pause();
    //     }
    //     // Video durdurulmuşsa, oynatın
    //     else {
    //       media.play();
    //     }
    //   });
  media.requestFullscreen = function() {}; // tam ekran modunu iptal edin
} else {
  return null;
}
media.className = "media";
if (media instanceof HTMLVideoElement) {
  media.className += " video";
} return media;
}

// CSS kodunu bir dize olarak tanımlamak yerine, doğrudan JavaScript ile elementlerin stil özelliklerini değiştirelim
// Önce seçiciye uyan elementleri bulalım
var arrowButtons = document.querySelectorAll(".arrow-button");
var prevButton = document.querySelector("#prev-button");
var nextButton = document.querySelector("#next-button");
var rightStick = document.querySelector("#rightstick");
var sticky = document.querySelector("#sticky");
var stickyDivs = document.querySelectorAll(".stickydiv");
// var links = document.querySelectorAll("a:active,a:hover,a:link,a:visited");
var html = document.querySelector("html");
var body = document.querySelector("body");
var medias = document.querySelectorAll(".media");
var videos = document.querySelectorAll(".video");
var videoContainers = document.querySelectorAll(".video-container");
var mainDivs = document.querySelectorAll(".maindiv");
var innerDivs = document.querySelectorAll(".innerdiv");
var textDivs = document.querySelectorAll(".textdiv1");

// Elementlerin her biri için stil özelliklerini CSS kodundaki değerlerle değiştirelim
for (var arrowButton of arrowButtons) {
  arrowButton.style.zIndex = "999";
  arrowButton.style.width = "50px";
  arrowButton.style.height = "50px";
  arrowButton.style.fontSize = "30px";
  arrowButton.style.border = "none";
  arrowButton.style.background = "transparent";
  arrowButton.style.cursor = "pointer";
  arrowButton.style.position = "fixed";
  arrowButton.style.top = "50%";
  arrowButton.style.transform = "translateY(-50%)";
}

prevButton.style.left = "10px";
prevButton.style.padding = "0";
prevButton.style.margin = "0";
prevButton.style.color = "#fff";

nextButton.style.right = "10px";
nextButton.style.padding = "0";
nextButton.style.margin = "0";
nextButton.style.color = "#fff";

rightStick.style.position = "fixed";
rightStick.style.right = "0";
rightStick.style.bottom = "0";
rightStick.style.padding = "10px";
rightStick.style.fontSize = "8px";
rightStick.style.zIndex = "999";
rightStick.style.textAlign = "right";
rightStick.style.maxHeight = "12vh";
rightStick.style.maxWidth = "24vh";
rightStick.style.scrollbarWidth = "none";
rightStick.style["::-webkit-scrollbar"] = "display: none";

sticky.style.position = "fixed";
sticky.style.textAlign = "left";
sticky.style.left = "0";
sticky.style.bottom = "0";
sticky.style.padding = "10px";
sticky.style.fontSize = "8px";
sticky.style.zIndex = "999";
sticky.style.scrollbarWidth = "none";
sticky.style["::-webkit-scrollbar"] = "display: none";

for (var stickyDiv of stickyDivs) {
  stickyDiv.style.scrollbarWidth = "none";
  stickyDiv.style["::-webkit-scrollbar"] = "display: none";
}

// for (var link of links) {
//   link.style.textDecoration = "none";
//   link.style.color = "#fff";
// }

html.style.backgroundColor = "#131417";
// html.style.color = "#FFF";
html.style["::-webkit-scrollbar"] = "display: none";

body.style.backgroundColor = "#131417";
// body.style.color = "#FFF";
body.style["::-webkit-scrollbar"] = "display: none";

for (var media of medias) {
  media.style.width = "100%";
  media.style.margin = "0 auto";
  media.style.textAlign = "center";
  media.style.maxWidth = "600px";
  media.style.height = "100vh";
  media.style.objectFit = "cover";
}

for (var video of videos) {
  video.style.width = "100%";
  video.style.maxWidth = "600px";
  video.style.height = "100vh";
  video.style.objectFit = "cover";
  video.style.marginTop = "1%";
  video.style.marginBottom = "1%";
  video.style.Display = "block";
}

for (var videoContainer of videoContainers) {
  videoContainer.style.display = "flex";
  videoContainer.style.alignItems = "center";
  videoContainer.style.justifyContent = "center";
}

for (var mainDiv of mainDivs) {
  mainDiv.style.zIndex = "3";
  mainDiv.style.backdropFilter = "blur(20px)";
  mainDiv.style["-webkit-backdrop-filter"] = "blur(20px)";
  mainDiv.style["::-webkit-scrollbar"] = "display: none";
  mainDiv.style.overflowY = "hidden";

  mainDiv.style.msOverflowStyle = "none"; // IE and Edge
  mainDiv.style.scrollbarWidth = "none"; // Firefox
  mainDiv.style.webkitScrollbar = "display: none"; // Chrome, Safari and Opera

  mainDiv.style["scrollbar-width"] = "none";
  mainDiv.style["-ms-overflow-style"] = "none";
}

for (var innerDiv of innerDivs) {
  innerDiv.style.zIndex = "2";
  innerDiv.style.objectFit = "cover";
  innerDiv.style.paddingTop = "0";
  innerDiv.style.display = "flex";
  innerDiv.style.flexWrap = "nowrap";
  innerDiv.style.overflowX = "auto"; // Burada değişiklik yaptım
  innerDiv.style.overflowY = "hidden";
  innerDiv.style.margin = "0 auto";
  innerDiv.style.textAlign = "center";
  innerDiv.style.width = "92%";

  innerDiv.style.msOverflowStyle = "none"; // IE and Edge
  innerDiv.style.scrollbarWidth = "none"; // Firefox
  innerDiv.style.webkitScrollbar = "display: none"; // Chrome, Safari and Opera

  innerDiv.style["scrollbar-width"] = "none";
  innerDiv.style["::-webkit-scrollbar"] = "display: none";
  innerDiv.style["-ms-overflow-style"] = "none";
}


for (var textDiv of textDivs) {
  textDiv.style.zIndex = "3";
  textDiv.style.filter = "none";
  textDiv.style.backgroundColor = "transparent";
  textDiv.style["-webkit-user-select"] = "none";
  textDiv.style["-ms-user-select"] = "none";
  textDiv.style.userSelect = "none";
}

nextButton.click();







}
























//////////////////////////////////
var size = new TextEncoder().encode(data_raw).length;
var kiloBytes = size / 1024; // Bayt cinsinden boyutu 1024'e bölerek KB cinsinden boyutu hesapla
var x = document.getElementsByTagName("x")[0]; // x elementini etiket adı seçiciyle seç, dönen dizi içinde ilk elemanı al
x.innerHTML = kiloBytes.toFixed(1) + " KB"; // x elementinin innerHTML özelliğine boyutu atayarak

  var loc_link = window.location.href;
  // Eğer link #note içeriyorsa, konsola 2 yaz
  //if (loc_link.includes("#note")) {
  if(['#note','#notepad','#notdefteri','#not'].some(value => loc_link.includes(value))){
    showCacheInMain('cache_note');
  }
  else if (["#chatbot", "#ai"].some(value => loc_link.includes(value))) {
    showCacheInMain('cache_form');
  }
  else if (["#cm", "#commands", "#comands"].some(value => loc_link.includes(value))) {
    showCacheInMain('cache_commands');
  }
  else if (["#kpop", "#kpoplist", "#gglist"].some(value => loc_link.includes(value))) {
    showCacheInMain('cache_kpop');
  }
  else if (["#websocket", "#ws", "#websocketserver","#wsserver"].some(value => loc_link.includes(value))) {
    showCacheInMain('cache_websocket');
  }
  else {
    showCacheInMain('cache_form');
  }


// Window load event ==> Kpop Girl Group List
// JSON formatında grup verilerini tanımla
var groupData = [
  {
    id: "twice",
    name: "TWICE",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Twice_210615.png",
    details: "Twice [Instagram](https://www.instagram.com/twicetagram/), [YouTube](https://www.youtube.com/channel/UCzgxx_DM2Dcb9Y1spb9mUJA), [Twitter](https://twitter.com/jypetwice), [TikTok](https://www.tiktok.com/@twice_tiktok_official), [YouTube Music](https://music.youtube.com/channel/UCAq0pFGa2w9SjxOq0ZxKVIw), [Spotify](https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0), [Amazon Music](https://music.amazon.com/artists/B0011XQAXQ/twice), [Facebook](https://www.facebook.com/JYPETWICE/), [Last.Fm](https://www.last.fm/music/TWICE), [JYPE Site](https://twice.jype.com/), [Apple Music](https://music.apple.com/us/artist/twice/1203816887), [IMDb](https://www.imdb.com/name/nm9652049/), [Deezer](https://www.deezer.com/en/artist/161553)<br><br>Nayeon [Instagram](https://www.instagram.com/nayeonyny/)<br>Jeongyeon [Instagram](https://www.instagram.com/jy_piece/)<br>Momo [Instagram](https://www.instagram.com/momo/)<br>Sana [Instagram](https://www.instagram.com/m.by__sana/)<br>Jihyo [Instagram](https://www.instagram.com/_zyozyo/)<br>Mina [Instagram](https://www.instagram.com/mina_sr_my/)<br>Dahyun [Instagram](https://www.instagram.com/dahhyunnee/)<br>Chaeyoung [Instagram](https://www.instagram.com/chaeyo.0/)<br>Tzuyu [Instagram](https://www.instagram.com/thinkaboutzu/)<br><h3>UnOfficial</h3>[Kpopping](https://kpopping.com/profiles/group/TWICE), [Wikipedia](https://en.wikipedia.org/wiki/Twice), [Fandom](https://twice.fandom.com/wiki/TWICE), [K-Fandom](https://k-fandom.net/profil/twice/), [Koreaboo](https://www.koreaboo.com/artist/twice/), [K-Profiles](https://kprofiles.com/twice-members-profile/), [Soompi Fanclub](https://www.soompi.com/fanclub/twice)"
  },
  {
    id: "nmixx",
    name: "NMIXX",
    image: "https://6.soompi.io/wp-content/uploads/image/20231125012522_NMIXX.jpg?s=900x600&e=t",
    details: "[YouTube](https://www.youtube.com/c/nmixxofficial), [Wikipedia](https://tr.wikipedia.org/wiki/Nmixx), [Instagram](https://www.instagram.com/nmixx_official/)"
  },
  {
    id: "everglow",
    name: "Everglow",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/20230901_EVERGLOW_%28%EC%97%90%EB%B2%84%EA%B8%80%EB%A1%9C%EC%9A%B0%29.jpg",
    details: "[Wikipedia](https://en.wikipedia.org/wiki/Everglow), [YouTube](https://www.youtube.com/channel/UCVXzBnzP5i5W-3snrxu8kfg), [Instagram](https://www.instagram.com/official_everglow/)"
  },
  {
    id: "ive",
    name: "IVE",
    image: "https://www.billboard.com/wp-content/uploads/2023/04/IVE-cr-Starship-Entertainment-billboard-1548.jpg?w=942&h=623&crop=1",
    details: "[YouTube](https://www.youtube.com/IVEstarship), [Wikipedia](https://en.wikipedia.org/wiki/Ive_%28group%29), [Instagram](https://www.instagram.com/ivestarship)"
  },
  {
    id: "newjeans",
    name: "NewJeans",
    image: "https://i1.sndcdn.com/artworks-IFyHNEShhAMpMx78-Bhvecg-t500x500.jpg",
    details: "[YouTube](https://www.youtube.com/@NewJeans_official), [Wikipedia](https://en.wikipedia.org/wiki/NewJeans), [Instagram](https://www.instagram.com/newjeans_official/)"
  },{ id: "aespa", name: "Aespa", image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/20211115_%EC%9D%B4%ED%84%B0%EB%84%90_%EB%A6%AC%ED%84%B4_X_aespa_%281%29.jpg", details: "[YouTube](https://www.youtube.com/channel/UCs-QBT4qkj_YiQw1ZntDO3g), [Wikipedia](https://en.wikipedia.org/wiki/Le_Sserafim), [Instagram](https://www.instagram.com/le_sserafim)" }, { id: 'kep1er', name: 'Kep1er', image: "https://upload.wikimedia.org/wikipedia/commons/3/30/%EC%BC%80%ED%94%8C%EB%9F%AC_Kep1er.png", details: "[YouTube](https://www.youtube.com/channel/UC8whlOg70m2Yr3qSMjUhh0g), [Wikipedia](https://en.wikipedia.org/wiki/Kep1er), [Instagram](https://www.instagram.com/official.kep1er)" }, { id: "kissoflife", name: "Kiss Of Life", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/MMA_2023_Kiss_of_Life.jpg", details: "[YouTube](https://www.youtube.com/channel/UCvEEeBssb4XxIfWWIB8IjMw), [Wikipedia](https://en.wikipedia.org/wiki/Kiss_of_Life_%28group%29), [Instagram](https://www.instagram.com/kissoflife_s2/)" }, 
  { id: "lesserafim", name: "LE SSERAFIM", image: "https://upload.wikimedia.org/wikipedia/commons/1/10/%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C_-_%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC_%EC%B6%9C%EA%B7%BC%EA%B8%B8_%EC%A7%81%EC%BA%A0_MusicBank_Fancam_220624.jpg", details: "[YouTube](https://www.youtube.com/channel/UCs-QBT4qkj_YiQw1ZntDO3g), [Wikipedia](https://en.wikipedia.org/wiki/Le_Sserafim), [Instagram](https://www.instagram.com/le_sserafim)" }
];

// Liste elementini seç
var list = document.getElementById("list");
// Liste elementini temizle
list.innerHTML = "";
// Grup verilerini döngüye al
for (var i = 0; i < groupData.length; i++) {
  // Grup verisini al
  var group = groupData[i];
  // Liste öğesi elementi oluştur
  var item = document.createElement("li");
  // Liste öğesi elementine class ve id ekle
  item.className = "group-item";
  item.id = group.id;
  // Grup adı elementi oluştur
  var name1 = document.createElement("div");
  // Grup adı elementine class ve içerik ekle
  name1.className = "group-name";
  name1.textContent = group.name;
  name1.id= group.id;
  // Grup resmi elementi oluştur
  var image = document.createElement("img");
  // Grup resmi elementine class, src ve alt ekle
  image.className = "group-image";
  image.src = group.image;
  image.alt = group.name;
  image.id=group.id;
  // Liste öğesi elementine grup adı ve resmi ekle
  item.appendChild(name1);
  item.appendChild(image);
  // Liste elementine liste öğesi ekle
  list.appendChild(item);
}

var ids = ["cache_kissoflife", "cache_twice", "cache_nmixx", "cache_everglow", "cache_ive", "cache_aespa", "cache_kep1er", "cache_newjeans", "cache_lesserafim"];

for (var j = 0; j < ids.length; j++) {
  var cache = document.getElementById(ids[j]);
  for (var i = 0; i < groupData.length; i++) {
    var group = groupData[i];
    if (group.id == ids[j].slice(6)) {
      var details = document.createElement("div");
      details.className = "group-details";
      // Grup ayrıntılarının içindeki markdown bağlantılarını HTML bağlantılarına dönüştür
      details.innerHTML = markdown_to_html_link_main(group.details);
      cache.appendChild(details);
      break;
    }
  }
}



function showDetails(event) {
  var id = event.target.id;
  var name, details;
  for (var i = 0; i < groupData.length; i++) {
    var group = groupData[i];
    if (group.id == id) {
      name = group.name;
      details = group.details;
      break;
    }
  }
  showCacheInMain("cache_" + id);
  // Cache değişkenini al
  var cache = document.getElementById("cache_" + id);
  // Cache'nin zaten bir geri dönme bağlantısı içerip içermediğini kontrol et
  if (cache.firstChild && cache.firstChild.textContent == "<") {
    // Geri dönme bağlantısı varsa, fonksiyonu sonlandır
    return;
  }
  // Geri dönme bağlantısı oluştur
  var back = document.createElement("a");
  back.onclick = function () {
    showCacheInMain("cache_kpop");
  };
  back.textContent = "<";
  back.style.fontSize = "32px";
  back.style.color = "black";
  // Geri dönme bağlantısını cache'nin ilk çocuğu olarak ekle
  cache.insertBefore(back, cache.firstChild);
}


function get_code_data(goster=false){
  // Dosya isimlerini bir diziye atıyoruz
  const dosyalar = ['js/main.js', 'js/engine.js', 'js/dataset.js', 'loader.js', 'index.html'];
  let dosyaSayisi = dosyalar.length;

  // Toplam kod sayısını tutacak bir değişken tanımlıyoruz
  let toplamKodSayisi = 0;
  let toplamKBSayisi = 0;
  let output = "";

  let sayac=0;
  // Bir promise nesnesi oluşturuyoruz
  return new Promise((resolve, reject) => {
    // Dosyalar dizisini döngüye alıyoruz
    dosyalar.forEach(dosya => {
      // Her dosya için bir XMLHttpRequest nesnesi oluşturuyoruz
      let xhr = new XMLHttpRequest();
      // open() metodu ile GET isteği açıyoruz
      xhr.open('GET', window.location.href+dosya);
      // send() metodu ile isteği gönderiyoruz
      xhr.send();
      // console.log(window.location.href+dosya);
      // onreadystatechange olayı ile yanıtı işlemek için bir fonksiyon belirtiyoruz
      xhr.onreadystatechange = function() {
        // readyState özelliği XMLHttpRequest.DONE durumunda ise
        if (xhr.readyState === XMLHttpRequest.DONE) {
          // status özelliği 200 ise, yani başarılı ise
          if (xhr.status === 200) {
            // responseText özelliği ile yanıt verisini alıyoruz
            let veri = xhr.responseText;
            // Dosyadaki satır sayısını bulmak için veriyi \n karakterine göre bölüyoruz
            let satirlar = veri.split('\n');
            // Satır sayısını toplam kod sayısına ekliyoruz
            toplamKodSayisi += satirlar.length;
            // Dosyanın boyutunu almak için responseText'in uzunluğunu kullanıyoruz
            let boyut = veri.length;
            // Boyutu KB cinsine çevirmek için 1024'e bölüyoruz
            boyut = boyut / 1024;

            toplamKBSayisi += boyut;
            // Sonucu ekrana yazdırıyoruz
            output += (`<br>${dosya} ${satirlar.length} lines ${boyut.toFixed(2)}KB`);
            // Promise'i çözüyoruz
            sayac++;
          if (sayac === dosyaSayisi) {
            var ___y = ("Total File Size: " + toplamKBSayisi.toFixed(1) + "KB<br>Total Lines Of Code: " + toplamKodSayisi + output);
            if(goster==true){
              sent__s(___y);
            }
            window.total_file_size=___y;
            window.version_x=md5(toplamKBSayisi.toString());
          }

          }
          // status özelliği 200 değil ise, yani başarısız ise
          else {
            // Hata mesajı ekrana yazdırıyoruz
            console.error(`${dosya} dosyası indirilemedi: ${xhr.status}`);
            // Promise'i reddediyoruz
            sayac++;
            if (sayac === dosyaSayisi) {
              var ___y = ("Total File Size: " + toplamKBSayisi.toFixed(1) + "<br>Total Lines Of Code: " + toplamKodSayisi + output);
              if(goster==true){
                sent__s(___y);
              }
              window.total_file_size=___y;
              window.version_x=md5(toplamKBSayisi.toString());
            }
            reject(`${dosya} dosyası indirilemedi: ${xhr.status}`);
          }
        }
      };
    });
    resolve("");
  });
}


function jsonToTree(json){
  try{
    var obj=JSON.parse(json)
  }catch(e){
    return"Lütfen geçerli bir JSON verisi giriniz."
  }
  var ul=document.createElement("ul");
  ul.className="json-tree";
  ul.style.listStyle="none";
  ul.style.textAlign="left";
  var nodes = getNodes(obj); // call the helper function
  for(var node of nodes){ // loop over the nodes array
    if(node.title=="yasakli_kelime" || node.title=="enc"){continue;}
    var li=document.createElement("li");
    li.className="json-item";
    var spanKey=document.createElement("span");
    spanKey.className="json-key";
    spanKey.style.color="blue";
    spanKey.textContent="❯ "+node.title+": ";
    spanKey.style.zIndex="999";

    var spanValue=document.createElement("span");
    spanValue.className="json-value";
    var value=node.value;
    var valueType=typeof value;
    if(valueType==="string"){
      spanValue.style.color="red";
      spanValue.textContent="\""+value+"\""
    }else if(valueType==="number"){
      spanValue.style.color="green";
      spanValue.textContent=value
    }else if(valueType==="boolean"){
      spanValue.style.color="orange";
      spanValue.textContent=value
    }else if(valueType==="object"){
      spanValue.style.color="black";
      spanValue.textContent=Array.isArray(value)?"[...]":"{...}";
      var subTree=document.createElement("ul");
      subTree.className="json-tree";
      subTree.style.display="none";
      var subNodes = getNodes(value); // call the helper function again
      subNodes.reverse(); // reverse the subNodes array
      for(var subNode of subNodes){ // loop over the subNodes array
        var a12 = document.createElement("a");
        if(typeof subNode.value=="object"){
          a12.innerHTML = "❯ "+subNode.title + ": ";
          a12.appendChild(jsonToTree(JSON.stringify(subNode.value)));
          subTree.prepend(a12);
        }else{
          a12.innerHTML = "❯ "+subNode.title + ": "+subNode.value+ "<br>";
          subTree.prepend(a12);
        }
      }
      spanKey.addEventListener("click",function(e){ // add the e parameter
        this.nextElementSibling.firstElementChild.style.display=this.nextElementSibling.firstElementChild.style.display==="none"?"block":"none";
        e.stopPropagation(); // prevent the event from bubbling up
      });
      spanValue.appendChild(subTree); // append the subTree to the spanValue element
    }
    li.appendChild(spanKey);
    li.appendChild(spanValue);
    // li.appendChild(subTree); // remove this line
    ul.appendChild(li)
  }
  return ul;
}

function getNodes(object) {
  return Object
    .entries(object)
    .map(([key, value]) => value && typeof value === 'object'
      ? { title: key, key, value, children: getNodes(value) } // remove the value property for objects
      : { title: key, key, value } // remove the toString() method for other types
    );
}





// JSON verisini ağaç yapısına dönüştürün
var tree = jsonToTree(data_raw);
var jsonViewer = document.getElementById("jsonviewer");
jsonViewer.appendChild(tree);
function rastgeleDosyaIsmi() {
  // Rastgele bir sayı üretir
  let sayi = Math.random();
  // Sayıyı 36'lık tabanda bir stringe çevirir
  let string = sayi.toString(36);
  // Stringin 2. karakterinden başlayarak 10 karakter alır
  let kisim = string.substring(2, 12);
  // Kısma ".txt" uzantısını ekler
  let dosyaIsmi = kisim + ".txt";
  // Dosya ismini döndürür
  return dosyaIsmi;
}
get_code_data(false).then(result => console.log("Set File Size")).catch(error => console.error(error)).finally(() => {
var intervalu = setInterval(function() {
  if (window.version_x != "") {
    clearInterval(intervalu);
    (()=>{try{document.getElementsByTagName("y")[0].innerHTML = "Version_EA_"+window.version_x;
    var _asldas = document.getElementById("version_conf");
    _asldas.innerHTML = "Version_EA_"+window.version_x;
    delete _asldas;}catch(ex){alert(ex);}})();
  }
}, 100); // Aralık süresi 1000 milisaniye
});;

// Liste elementine bir click olayı ekle
list.addEventListener("click", showDetails);
setTimeout(()=>{var ___0000 = document.getElementById("message-input");___0000.focus();sent__s("元気ですか");sent__s("어떻게 지내세요");},100);