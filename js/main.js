// ! ||--------------------------------------------------------------------------------||
// ! ||                                Global Variables                                ||
// ! ||--------------------------------------------------------------------------------||
// * ANTI-DEBUGGER
window.debugger_block_open = false;
window.console_block_open = false;
window.keycode_block_open = false;
// * OTHER
window.total_file_size="";
window.version_x="";
window.disable_translate = true;
window.disable_voice = true;
window.latest_____cache_x = "";
// * WEBSOCKET
window.wsmode_realtime_other = 1;
window.wsmode_websocket = 0;
window.sifrelemesorgu = 1;
window.SCMmain_tag = "u";
window.main_tag = "w";
window.SCMcache_sifre = "123456789";
window.cache_sifre = "123456789";
window.SCMcache_sindirme = "0";
window.cache_sindirme = "0";
window.SCMcache_block = "0";
window.cache_block = "0";
window.cipher = new SC5(window.cache_sifre,window.cache_sindirme,window.cache_block);
window.SCMcipher = new SilverCipherMini(window.SCMcache_sifre);
// * OTHER 2
window.old_form_height = "auto";
window.old_form_width = "100%";
window.old_header_x_height = "120px";
window.old_header_x_width = "100%";
window.oldValues = {};
var _000x = 0;
var __index__C = 0;
var _index_randomString = 0;
var _ax_a;
// * KPOP
var ids__A = ["kissoflife", "twice", "nmixx", "everglow", "ive", "aespa", "kep1er", "newjeans", "lesserafim"];
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
// * GALLERY
var foldersOLD = {
  "Kpop1":"[$tw$GBJre6UX0AABkLG?format=jpg&name=4096x4096,$rd$x48xi6vpqsua1.jpg?width=640&crop=smart&auto=webp&s=25ea4d1fc0e87dab3ae05392eff717092efb29f4,$rd$07jxy01qqsua1.jpg?width=640&crop=smart&auto=webp&s=5ec11cbc5ca106d4abad0a25fd4a4d310531cc1b,$rd$q0zo76a2kgbb1.jpg?width=640&crop=smart&auto=webp&s=df0d6d8c01aaab9908a608a6acf29a9ebfcee675,$rd$qh8axeb2kgbb1.jpg?width=640&crop=smart&auto=webp&s=96e506c9f55edd6b028d4e8c18a9e31132070708,$rd$vk50ravg0wtb1.jpg?width=1080&format=pjpg&auto=webp&s=989be823411e845b608eb7f840a32b10a6e314de,$rd$66yy59ps6kub1.jpg?width=1440&format=pjpg&auto=webp&s=d71e5355e6e6ca88aa27ada5858a557ef90cec48,$rd$ja1fgzlib34c1.png?width=1366&format=png&auto=webp&s=390e3ce1d9d2ccba5d9d362143bb60ccca6dc733,$rd$1bc105d4ng4c1.jpg?width=1295&format=pjpg&auto=webp&s=99d98bb421dac6c17bafe7b9a4ba2ac5a977618d,$tw$GAl82OYXQAA-jLr?format=jpg&name=4096x4096,$tw$GAVtER3XkAAHzIQ?format=jpg&name=large,$tw$GBI18AZWkAARxfv?format=jpg&name=large,$tw$GBF9DdRbcAAz7DD?format=jpg&name=large,$tw$GA9wJPpXIAAoamf?format=jpg&name=4096x4096,$tw$GA_m5KKasAA7L_4?format=jpg&name=large,$tw$GA7xysbXsAE9Ia5?format=jpg&name=large,$tw$GAy8vVEbIAAYNHL?format=jpg&name=4096x4096,$tw$GB8LPD-WMAA5KAJ?format=jpg&name=large,$tw$GCMeI2NXUAAgl3s?format=jpg&name=large,$tw$F1d5etIakAI6qHG?format=jpg&name=large!]"
};
// * IMAGE
var noteb64img = b64dataURItoBlob_onlyblob("data:image/png;base64,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");
var dfileb64img = b64dataURItoBlob_onlyblob("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1ElEQVR4nO2bO07DQBCGPykpU4FQOnIV4AqINtwjHYITQQVJlSgtjw7BKcJDIgUMWmmKEIwtk/V6dzO/NEWcyXj9+V/P2lbAZDKZTL80BySzmFFDkmnUBpCLDAAVJ3QATICl5znXJREAk4bm3JBEACw1YcfTDoda7ykSF1QCEM8XvQ7wGJELggNwOtWazxG4oBUAnYhc0AqAmFzQGoBOJC5oDcBqR4glXMcbA/sEAtDVRZFEFjehAMSm3RUnbCWAwuMVA4A5QNge2RTArgG0dhHsA+fAPfAOvAB3um0vdwecAIuSxYmDcZwrgBPgS/dzCRwAPY1D3ea++wwAITiAPvCq+xiV5I00Z9HwdAgO4GLlzFfpSnPPcgLwoPWd1at0pLm3OQF40/puvlepp7luymQDQGrWDz4eMQCYAySk5TznbzweMQfgnbiPF66FDzBTccCkqQeYqQBYenjhWvgAMxUA4qlmkLGJAcAcIE3brOU6pTXFHIA5QJq2Wct1SmuKOYDGFkJuMbPpQuiDBB0w3val8EAHvunN0HWqN0MxywCQsAPm//iTxHztc9IAZjUATNd+M/3reJceWlYqKmytY48tK5X40Vp9tKxUoqnWajKZTCSnb3JP7PaXaLkfAAAAAElFTkSuQmCC");
var mainlogo_b64img = b64dataURItoBlob("data:image/png;base64,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");
// ! ||--------------------------------------------------------------------------------||
// ! ||                                Global Functions                                ||
// ! ||--------------------------------------------------------------------------------||
// * KILL PAGE
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
    deleteAllCookies();
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
  try{
    if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
      window.otherusers_realtime_ws.close();
    }
  }catch(ex2){}
  try{
    if (window.ws != null && window.ws.readyState == WebSocket.OPEN) {
      window.ws.close();
    }
  }catch(ex2){}
}
// * Set Latest Message
function change_latest_cache(text){
  window.latest_____cache_x = text;
}
// * Generate Token
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
// * Get Time
function getCurrentTime() {
  var date = new Date();
  var timeString = date.toLocaleTimeString();
  var dateString = date.toLocaleDateString();
  return `${timeString} ${dateString}`;
}
// * XSS FIX MODE 1
function san_input_fix_MOD1(a){const b={"<":"&lt;",">":"&gt;",'"':"&quot;"};return a.replace(/[<>"']/ig,a=>b[a])}
// * XSS FIX
function san_input_fix(a){const b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};return a.replace(/[&<>"'/]/ig,a=>b[a])}
function randomStringAAA(length=32) {
  var chars = '0123456789abcdefghiklmnopqrstuvwxyz'.split('');

  if (! length) {
      length = Math.floor(Math.random() * chars.length);
  }

  var str = '';
  for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
// * Background Display Protect
var _index_randomString_tag = randomStringAAA(4);
function zeroSize(parent) {
// parent elementin içindeki tüm elementleri seç
let children = parent.getElementsByTagName("*");
// her bir element için döngü oluştur
for (let child of children) {
  if(child.tagName=="IFRAME"){continue;}
  if(child.id){
    if(child.id=="ytpanel"){continue}
  }else{
    child.id="c-"+_index_randomString_tag+"-"+_index_randomString;
    _index_randomString++;
  }
  let id = child.id;
  // window.oldValues değişkenine elementin id, genişlik, yükseklik, min-genişlik ve min-yükseklik değerlerini kaydet
  // her bir değeri ayrı ayrı "0px" veya "" değerine eşit mi diye kontrol et
  if (child.style.width != "0px") {
    window.oldValues[id] = window.oldValues[id] || {};
    window.oldValues[id].width = child.style.width;
    child.style.width = "0px";
  }
  if (child.style.height != "0px") {
    window.oldValues[id] = window.oldValues[id] || {};
    window.oldValues[id].height = child.style.height;
    child.style.height = "0px";
  }
  if (child.style.minWidth != "0px") {
    window.oldValues[id] = window.oldValues[id] || {};
    window.oldValues[id].minWidth = child.style.minWidth;
    child.style.minWidth = "0px";
  }
  if (child.style.minHeight != "0px") {
    window.oldValues[id] = window.oldValues[id] || {};
    window.oldValues[id].minHeight = child.style.minHeight;
    child.style.minHeight = "0px";
  }
  if (child.style.overflowWrap != "normal") {
    window.oldValues[id] = window.oldValues[id] || {};
    window.oldValues[id].overflowWrap = child.style.overflowWrap;
    child.style.overflowWrap = "normal";
  }
  if (child.style.fontSize != "0px") {
    window.oldValues[id] = window.oldValues[id] || {};
    window.oldValues[id].fontSize = child.style.fontSize;
    child.style.fontSize = "0px";
  }
}
// let ids = Array.from(children).map(child => child.id);
// for (let id in window.oldValues) {
//   if (!ids.includes(id)) {
//     delete window.oldValues[id];
//   }
// }

}
// * Background Display Restore
function restoreSize(parent) {
// parent elementin içindeki tüm elementleri seç
let children = parent.getElementsByTagName("*");
// her bir element için döngü oluştur
for (let child of children) {
  // elementin id özelliğini al
  let id = child.id;
  // window.oldValues değişkeninin boş olup olmadığını kontrol et
  if (window.oldValues[id]) {
    // window.oldValues değişkeninden elementin id'ye karşılık gelen eski genişlik, yükseklik, min-genişlik ve min-yükseklik değerlerini al
    if (window.oldValues[id].hasOwnProperty("width")) {
      let oldWidth = window.oldValues[id].width;
      if (oldWidth == "") {
        child.style.removeProperty("width");
      }else{
        child.style.width = oldWidth;
      }
    }
    if (window.oldValues[id].hasOwnProperty("height")) {
      let oldHeight = window.oldValues[id].height;
      if (oldHeight == "") {
        child.style.removeProperty("height");
      }else{
        child.style.height = oldHeight;
      }
    }
    if (window.oldValues[id].hasOwnProperty("minWidth")) {
      let oldMinWidth = window.oldValues[id].minWidth;
      if (oldMinWidth == "") {
        child.style.removeProperty("min-width");
      }else{
        child.style.minWidth = oldMinWidth;
      }
    }
    if (window.oldValues[id].hasOwnProperty("minHeight")) {
      let oldMinHeight = window.oldValues[id].minHeight;
      if (oldMinHeight == "") {
        child.style.removeProperty("min-height");
      }else{
        child.style.minHeight = oldMinHeight;
      }
    }
    if (window.oldValues[id].hasOwnProperty("overflowWrap")) {
      let overflowWrap = window.oldValues[id].overflowWrap;
      if (overflowWrap == "") {
        child.style.removeProperty("overflow-wrap");
      }else{
        child.style.overflowWrap = overflowWrap;
      }
    }
    if (window.oldValues[id].hasOwnProperty("fontSize")) {
      let fontSize = window.oldValues[id].fontSize;
      if (fontSize == "") {
        child.style.removeProperty("font-size");
      }else{
        child.style.fontSize = fontSize;
      }
    }
    // elementin genişlik, yükseklik, min-genişlik ve min-yükseklik değerlerini eski değerlere ayarla
    // her bir değeri ayrı ayrı "0px" veya "" değerine eşit mi diye kontrol et
  } else {
    // window.oldValues değişkeninde kayıtlı değer yoksa, döngüyü atla
    continue;
  }
}
}
// * Translate TR to X
function translate(textasdas,mode,lang){
  if(textasdas.startsWith('/') || window.disable_translate==true || new RegExp("%notr%").test(textasdas)==true) {
    return new Promise(function(resolve, reject) {
      try{resolve([textasdas.replaceAll("%notr%",""),"tr"]);}catch(e){reject([textasdas.replaceAll("%notr%",""),"tr"]);}
    });
  }
  var sourceText = textasdas.replaceAll("&","%26").replaceAll("?","%3F");
  let count = sourceText.split("_").length - 1;
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
        let count2 = finaltext.split("_").length - 1;
        if (count2 < count) {
          // Eksik olan _ sayısı kadar text'in sonuna _ ekle
          for (let i = 0; i < count - count2; i++) {
            finaltext += "_";
          }
        }
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
// * Translate X to TR
function translate_Target_TR(textasdas,target){
  if(textasdas.startsWith('/') || window.disable_translate==true || new RegExp("%notr%").test(textasdas)==true) {
    return new Promise(function(resolve, reject) {
      try{resolve([textasdas.replaceAll("%notr%",""),"tr"]);}catch(e){reject([textasdas.replaceAll("%notr%",""),"tr"]);}
    });
  }

  var sourceText = textasdas.replaceAll("&","%26").replaceAll("?","%3F");
  let count = sourceText.split("_").length - 1;
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
        let count2 = finaltext.split("_").length - 1;
        if (count2 < count) {
          // Eksik olan _ sayısı kadar text'in sonuna _ ekle
          for (let i = 0; i < count - count2; i++) {
            finaltext += "_";
          }
        }
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
// * Page Change
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
  back.style.color = "#c43f22";
  // Geri dönme bağlantısını cache'nin ilk çocuğu olarak ekle
  cache.insertBefore(back, cache.firstChild);
}
// * Total File Size Calculator
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
// * Json HTML Viewer
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
    if(node.title=="yasakli_kelime"){continue;}
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
// * Part Of Json HTML Viewer
function getNodes(object) {
  return Object
    .entries(object)
    .map(([key, value]) => value && typeof value === 'object'
      ? { title: key, key, value, children: getNodes(value) } // remove the value property for objects
      : { title: key, key, value } // remove the toString() method for other types
    );
}
// * Random File Name Generator
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
// * Markdown Link(Main Page)
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
// * Chatting with Your Friends with the Chatbot
function wsrealtimeOther(url,xnew=true){
  if(url!=null && url!=""){
    url = url.trim();
    var kontrol1 = url.indexOf ("ws://");
    var kontrol2 = url.indexOf ("wss://");
    if (kontrol1 == -1 && kontrol2 == -1) {
    //URL değerinin başında ws:// veya wss:// yoksa, ws:// eklemek
    url = "wss://" + url;
    }
  }else {
    if(xnew==true){
      window.wsmode_realtime_other=0;
      var baglantiother = document.getElementById("baglantiother");
      baglantiother.textContent = "Kapalı";
      baglantiother.style.color = "#c43f22";
      var ___d_cac1 = document.getElementById("ws3");
      var url = ___d_cac1.value;
      delete ___d_cac1;
      if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
          window.otherusers_realtime_ws.close();
      }
      sent__s("Lobi bağlantısı kapatıldı");
      return;
    }
  }
  if(xnew==true){
    window.wsmode_websocket=0;
    window.wsmode_realtime_other=1;
    if (window.ws != null && window.ws.readyState == WebSocket.OPEN) {
      window.ws.close();
    }
    if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
      if(window.otherusers_realtime_ws.url==url || window.otherusers_realtime_ws.url.slice(0, -1)==url){return;}
        window.otherusers_realtime_ws.close();
    }
  }else{
    if(window.wsmode_realtime_other==0 || window.wsmode_websocket==1){
      var baglantiother = document.getElementById("baglantiother");
      baglantiother.textContent = "Kapalı";
      baglantiother.style.color = "#c43f22";
      return;}
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
  if(window.wsmode_realtime_other==0 || window.wsmode_websocket==1){
    if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
      window.otherusers_realtime_ws.close();
  }
    return;}
sent__s("Lobiye katıldın");
baglantiother.textContent = "Açık";
baglantiother.style.color = "green";
};
window.otherusers_realtime_ws.onclose = function() {
if(window.wsmode_realtime_other==1 || window.wsmode_websocket==0){
  var baglantiother = document.getElementById("baglantiother");
if(!["Kapalı","Hata"].includes(baglantiother.textContent)){
sent__s("Lobiden ayrıldın");
baglantiother.textContent = "Kapalı";
baglantiother.style.color = "#c43f22";
}
setTimeout (()=>{
if(window.wsmode_realtime_other==1){
if (!(window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN)) {
console.log("Other WS Tekrar Deneniyor");
wsrealtimeOther(url,false);
}
}
}, 2000);
}else{
  sent__s("Lobiden ayrıldın");
  var baglantiother = document.getElementById("baglantiother");
  baglantiother.textContent = "Kapalı";
  baglantiother.style.color = "#c43f22";
}
};
window.otherusers_realtime_ws.onerror = function() {
  if(window.wsmode_realtime_other==1){
if (!(window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN)) {

if(!["Hata"].includes(baglantiother.textContent)){
sent__s("Lobiye bağlantı sorunu");
baglantiother.textContent = "Hata";
baglantiother.style.color = "yellow";
}
  }
  }
};
window.otherusers_realtime_ws.onmessage = function(event) {
  // console.log(" OtherUser Mesaj Geldi:"+event.data);
var mesaj = event.data;
if(mesaj.indexOf(window.SCMmain_tag+"$") == 0){
mesaj = window.SCMcipher.Decrypt(mesaj.substring(window.SCMmain_tag.length + 1));
mesaj = JSON.parse(mesaj);
// sent__s("User:" + mesaj.a + "Diğer" + mesaj.b);
message1 = san_input_fix(mesaj.a).replaceAll("script","").replaceAll("<","").replaceAll(">","").replaceAll("'","").replaceAll('"','').replaceAll("[","").replaceAll("]","");
message2 = markdown_to_html_link(san_input_fix_MOD1(mesaj.b.replaceAll("<br>","\n")).replaceAll("script","").replaceAll("<","").replaceAll(">","").replaceAll("'","").replaceAll('"',''));
sent__000(message1,"__otherws__");
message1="";
sent__s([message2.replaceAll("\n","<br>"),"Unknown Console"]);
message2="";
}else{
// sent__s("Socket Server:" + mesaj);
}
};
}catch(e){}
///////
///////
}
// * Sending the Message You Sent to Your Own Chatbot to Your Friends
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
// * Connect Personalized Websocket
function baglan(url,xnew=true) {
              if(xnew==true){
                window.wsmode_realtime_other = 0;
                if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
                  window.otherusers_realtime_ws.close();
                }
                if (window.ws != null && window.ws.readyState == WebSocket.OPEN) {
                  if(window.ws.url==url || window.ws.url.slice(0, -1)==url){return;}
                  window.ws.close();
                }
              }else{
                if(window.wsmode_websocket==0 || window.wsmode_realtime_other==1){
                  if (window.ws != null && window.ws.readyState == WebSocket.OPEN) {
                    window.ws.close();
                  }
                  var baglanti = document.getElementById("baglanti");
                  baglanti.textContent = "Kapalı";
                  baglanti.style.color = "#c43f22";
                return;}
              }
    url = url.trim();
    if(url==""){
      window.wsmode_websocket=0;
      window.SCMmain_tag = "u";
      window.SCMcache_sifre = "123456789";
      window.SCMcache_sindirme = "0";
      window.SCMcache_block = "0";
      window.SCMcipher = new SilverCipherMini(window.SCMcache_sifre);
      // window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();
      // wsrealtimeOther();
      var baglanti = document.getElementById("baglanti");
      baglanti.textContent = "Kapalı";
      baglanti.style.color = "#c43f22";
      sent__s("WS Bağlantısı Kapatıldı");
      return;
    }else{
      window.wsmode_websocket=1;
      window.wsmode_realtime_other = 0;
      if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
          window.otherusers_realtime_ws.close();
      }
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
      if(window.wsmode_realtime_other==1 || window.wsmode_websocket==0){
        if (window.ws != null && window.ws.readyState == WebSocket.OPEN) {
          window.ws.close();
        }
        return;}
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
      if(window.wsmode_realtime_other==0 && window.wsmode_websocket==1){
        var baglanti = document.getElementById("baglanti");
      if(!["Bağlantı koptu","Bağlantı kesildi"].includes(baglanti.textContent)){
        sent__s("WS Bağlantı koptu");
        if(window.disable_voice!=true){try{responsiveVoice.speak("Websocket bağlantısı koptu",'Turkish Female');}catch(ex){}}
        baglanti.textContent = "Bağlantı koptu";
        baglanti.style.color = "red";
      }
        setTimeout (()=>{
          if(window.wsmode_realtime_other==0 && window.wsmode_websocket==1){
          if (!(window.ws != null && window.ws == WebSocket.OPEN)) {
            console.log("WS Tekrar Deneniyor");
            baglan(url,false);
            return;
          }
          }
        }, 2000);
      }else {
        sent__s("WS Bağlantı koptu");
        var baglanti = document.getElementById("baglanti");
        baglanti.textContent = "Kapalı";
        baglanti.style.color = "#c43f22";
      }
    };

    //Bağlantıda hata olduğunda çalışacak fonksiyon
    window.ws.onerror = function() {
      if(window.wsmode_realtime_other==0 && window.wsmode_websocket==1){
      if (!(window.ws != null && window.ws == WebSocket.OPEN)) {
        if(!["Bağlantı kesildi"].includes(baglanti.textContent)){
          sent__s("WS Bağlantı kesildi");
          if(window.disable_voice!=true){try{responsiveVoice.speak("Websocket bağlantısı hatalı",'Turkish Female');}catch(ex){}}
          baglanti.textContent = "Bağlantı kesildi";
          baglanti.style.color = "yellow";
        }
      }
    }
    };
// ❯
    //Bağlantıdan mesaj geldiğinde çalışacak fonksiyon
    window.ws.onmessage = function(event) {
      // console.log(" WS Mesaj Geldi:"+event.data);
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
// * Send Message Personalized Websocket
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
            window.ws.send(metin);
        }
}
// * Add Text to the Right Side of the Chat
function sent__s(messagecbbtbtnrte,noeval=false){
  var messages = document.querySelector('#messages');
  var message = document.createElement('div');
  message.style.backgroundColor = "rgb(255 255 255 / 31%)";
  message.style.boxShadow = "-1px 3px 8px -1px rgba(0, 0, 0, 0.2)";
  message.style.display = "block";
  message.style.borderRadius = "10px";
  message.style.padding = "10px";
  message.style.marginBottom = "10px";
  message.style.marginLeft = "5px";
  message.style.marginRight = "5px";
  var xid11 = generateToken();
  xid11 = "x"+xid11;
  var sonradata = "";
  // messagecbbtbtnrte değişkeninin bir dizi olup olmadığını kontrol et
  if (messagecbbtbtnrte.constructor === Array) {
    // eğer bir dizi ise, dizinin ilk elemanını mesaj, ikinci elemanını gönderici olarak al
    var mesaj = messagecbbtbtnrte[0];
    var gonderici = messagecbbtbtnrte[1];
  } else {
    // eğer bir dizi değilse, mesaj olarak al ve göndericiyi "Console" olarak belirle
    var mesaj = messagecbbtbtnrte;
    var gonderici = "Console";
  }
  if(noeval==false){
    message.innerHTML = "<p class='a rg'><label id='f1'>"+gonderici+"<div id='"+xid11+"' spellcheck='false' class='divasdas rg'>"+mesaj+"</div>"+"</label></p>";
  }else{
    let _1a = document.createElement("p");
    _1a.className = "a rg";
    let _2a = document.createElement("label");
    _2a.id = "f1";
    _2a.textContent = gonderici;
    let _3a = document.createElement("div");
    _3a.id = xid11;
    _3a.spellcheck = false;
    _3a.className = "divasdas rg";
    _3a.textContent = mesaj;
    _2a.appendChild(_3a);
    _1a.appendChild(_2a);
    message.appendChild(_1a);
  }
  messages.insertBefore(message, messages.firstChild);

  /////////////////////
  // var asdasdasd = document.getElementById(xid11);
  // asdasdasd.style.height = "auto"; // yüksekliği sıfırlar
  // asdasdasd.style.height = asdasdasd.scrollHeight + "px"; // yüksekliği scrollHeight ile ayarlar
}
// * Send Message Chatbot 1
function cevapla(dataxxxx,target_A="me",lang="tr"){
  dataxxxx = dataxxxx.trim();
  if(dataxxxx.indexOf("ws://") != -1){
    window.wsmode_websocket=1;
    try{window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(dataxxxx,true);}catch(e){
      sent__s(e);
      window.wsmode_realtime_other = 0;
      if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
        window.otherusers_realtime_ws.close();
      }
      setTimeout(()=>{
        if (!(window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN)) {
          window.SCMmain_tag = "u";
          window.SCMcache_sifre = "123456789";
          window.SCMcache_sindirme = "0";
          window.SCMcache_block = "0";
          window.SCMcipher = new SilverCipherMini(window.SCMcache_sifre);
          window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();
        }
      },2200);
    }
    document.getElementById("ws").value = dataxxxx;
    return;
  }
  if(dataxxxx.indexOf("wss://") != -1){
    window.wsmode_websocket=1;
    try{window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(dataxxxx,true);}catch(e){
      sent__s(e);
      window.wsmode_realtime_other = 0;
      if (window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN) {
        window.otherusers_realtime_ws.close();
      }
      setTimeout(()=>{
        if (!(window.otherusers_realtime_ws != null && window.otherusers_realtime_ws.readyState == WebSocket.OPEN)) {
          window.SCMmain_tag = "u";
          window.SCMcache_sifre = "123456789";
          window.SCMcache_sindirme = "0";
          window.SCMcache_block = "0";
          window.SCMcipher = new SilverCipherMini(window.SCMcache_sifre);
          window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();
        }
      },2200);
    }
    document.getElementById("ws").value = dataxxxx;
    return;
  }
  if(dataxxxx == "websocket" || dataxxxx == "close" || dataxxxx == "kapat" || dataxxxx == "durdur"){
    baglan("",true);
    wsrealtimeOther("",true);
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
          messagecbbtbtnrte = messagecbbtbtnrte.replaceAll("%notr%","");
          var veri__0 = messagecbbtbtnrte;
          var ___text__0 = messagecbbtbtnrte;
        }else {
          var veri__0 = result[0];
          var ___text__0 = veri__0 + " Translated:" + messagecbbtbtnrte.replaceAll("%notr%","");
        }
        mesajGonder(veri__0.replaceAll("%noeval%",""), "no");
        messagecbbtbtnrte=veri__0;
        var noeval = false;
        if(new RegExp("%noeval%").test(___text__0)){___text__0 = ___text__0.replaceAll("%noeval%","");noeval=true;}
        sent__s([___text__0,"WS_NO_ENC Console"],noeval);
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
          messagecbbtbtnrte = messagecbbtbtnrte.replaceAll("%notr%","");
          var veri__0 = messagecbbtbtnrte;
          var ___text__0 = messagecbbtbtnrte;
        }else {
          var veri__0 = result[0];
          var ___text__0 = veri__0 + " Translated:" + messagecbbtbtnrte.replaceAll("%notr%","");
        }
        mesajGonder(veri__0.replaceAll("%noeval%",""),"yes");
        messagecbbtbtnrte=veri__0;
        var noeval = false;
        if(new RegExp("%noeval%").test(___text__0)){___text__0 = ___text__0.replaceAll("%noeval%","");noeval=true;}
        sent__s([___text__0,"WS_ENC Console"],noeval);
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
        var noeval = false;
        if(new RegExp("%noeval%").test(asdasdassd)){asdasdassd = asdasdassd.replaceAll("%noeval%","");noeval=true;}
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
          sent__s(__cevap__,noeval);
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
}
// * Add Text to the Left Side of the Chat
function sent__000(message1,target){
  var messages = document.querySelector('#messages');
  var messagex = document.createElement('div');
  messagex.style.backgroundColor = "rgb(255 255 255 / 31%)";
  messagex.style.boxShadow = "-1px 3px 8px -1px rgba(0, 0, 0, 0.2)";
  messagex.style.display = "block";
  messagex.style.borderRadius = "10px";
  messagex.style.padding = "10px";
  messagex.style.marginBottom = "10px";
  messagex.style.marginLeft = "5px";
  messagex.style.marginRight = "5px";
  //message1="(Encrypted)";
  //messagex.innerHTML = "Mesaj Gönderildi => <textarea spellcheck='false' style='color:#c43f22;overflow: hidden;resize: vertical;'>"+message1+"</textarea> "+getCurrentTime()+" ID: "+target;
  if(target=="__server__"){
    var __cache_kisi_0x13 = "Websocket";
  }if(target=="__otherws__"){
    var __cache_kisi_0x13 = "Unknown";
  }else {
    var __cache_kisi_0x13 = "Me";
  }
  messagex.innerHTML = "<p class='a lf'><label id='f1'>"+__cache_kisi_0x13+"<textarea spellcheck='false' class='textareaxx'>"+ message1 + "</textarea>"  + "</label></p><p class='rg' style='color:#c43f22;border:none!important;z-index:2;'>" + getCurrentTime()+"</p>";
  messages.insertBefore(messagex, messages.firstChild);
}
// * Send Message Chatbot 2
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
// * Change Background
function changeBackground(mode){
  switch(mode) {
    case "normal":
      var html = document.querySelector("html");
      var body = document.querySelector("body");
      var wave = document.getElementById("wavebodyanimate");
      html.style.backgroundColor = "transparent";
      body.style.backgroundColor = "transparent";
      html.style.color = "#c43f22";
      body.style.color = "#c43f22";
      wave.style.display = "block";
      break;
    case "gallery":
      var html = document.querySelector("html");
      var body = document.querySelector("body");
      var wave = document.getElementById("wavebodyanimate");
      html.style.backgroundColor = "#131417";
      body.style.backgroundColor = "#131417";
      wave.style.display = "none";
      break;
    default:
      break;
  }
}
// * Create & Open Gallery
function gallery_s(dataset_data){
  if(_000x==1){
    changeBackground("gallery");
    var ytpanelx = document.getElementById("ytpanel");
    ytpanelx.style.visibility = "hidden";
    // var ul_x = document.querySelector("#gallery_x > ul");
    // scrollEvent(ul_x);
    var _____t = document.getElementById("gallery_x");
    _____t.style.Display="block";
    return;}else{_000x=1;    var ytpanelx = document.getElementById("ytpanel");
    ytpanelx.style.visibility = "hidden";}
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
geridon_gallery.style.bottom = "5px";
geridon_gallery.style.padding = "0";
geridon_gallery.style.margin = "0";
geridon_gallery.style.color = "#fff";
geridon_gallery.style.position = "fixed";
geridon_gallery.style.zIndex = "9999";
geridon_gallery.style.fontSize = "24px";
geridon_gallery.addEventListener("click", ()=>{
  var ytpanelx = document.getElementById("ytpanel");
  ytpanelx.style.visibility = "visible";
  ytpanelx.style.backgroundColor = "transparent";
  ytpanelx.style.background = "transparent";
  // window.removeEventListener("scroll", window.throttleScroll);
  var ul = document.querySelector("#gallery_x > ul");
  try {
    window.listBottom = ul.offsetTop + ul.offsetHeight;
    window.listTop = ul.offsetTop;
  } catch (error) {
  }
  showCacheInMain('header_x',true,true);
  showCacheInMain('cache_form');
  changeBackground("normal");
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
var shuffledKeys = shuffle(Object.keys(dataset_data));

// Yeni bir nesne oluştur
var folders = {};

// Karıştırılmış anahtarlar ve orijinal değerler ile yeni nesneyi doldur
for (var i = 0; i < shuffledKeys.length; i++) {
folders[shuffledKeys[i]] = dataset_data[shuffledKeys[i]];
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
leftButton.style.fontSize = "13px";
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

rightButton.style.fontSize = "13px";
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

changeBackground("gallery");
html.style["::-webkit-scrollbar"] = "display: none";
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
// * Show Page
function showCacheInMain(cacheId,all=false,tumunugizle=false) {
// Main div ini seç
var main = document.getElementById("main");
// Tıklanan div i seç
var cache = document.getElementById(cacheId);
// Tıklanan div i main e taşı
try {
if(cacheId!="cache_form" && cacheId!="header_x"){
main.appendChild(cache);
}
} catch (error) {
}
// console.log("OLD_FORMS",window.old_form_height,window.old_form_width);
// console.log("OLD_HEADER_X",window.old_header_x_height,window.old_header_x_width);
// console.log(cache);
// Tıklanan div i görünür yap
if(cacheId=="cache_form" || cacheId=="header_x"){
if(__index__C==0){__index__C++;cache.style.display = "block";}
cache.style.visibility = "visible";
if(cacheId=="cache_form"){
if(cache.style.height == "0px" || cache.style.width == "0px" || cache.style.height == 0 || cache.style.width == 0){
cache.style.height = window.old_form_height;
cache.style.width = window.old_form_width;
restoreSize(cache);
}
}
if(cacheId=="header_x"){
if(cache.style.height == "0px" || cache.style.width == "0px" || cache.style.height == 0 || cache.style.width == 0){
cache.style.height = window.old_header_x_height;
cache.style.width = window.old_header_x_width;
restoreSize(cache);
}
}
}else{
cache.style.display = "block";
}

// console.log("ZZZ OLD_FORMS",window.old_form_height,window.old_form_width);
// console.log("ZZZ OLD_HEADER_X",window.old_header_x_height,window.old_header_x_width);
// Diğer div leri gizle
hideOthers(cacheId,all,tumunugizle);
}
// * Hide Other Page
function hideOthers(cacheId,all=false,tumunugizle=false) {
// Diğer div lerin id lerini bir diziye koy
if(all==false){
var others = ["cache_proc","cache_form","cache_note","cache_config", "cache_commands", "cache_kpop", "cache_websocket", "cache_kissoflife", "cache_twice", "cache_nmixx", "cache_everglow", "cache_ive", "cache_aespa", "cache_kep1er", "cache_newjeans", "cache_lesserafim"];
}else{
var others = ["gallery_x","header_x","cache_proc","cache_form","cache_note","cache_config", "cache_commands", "cache_kpop", "cache_websocket", "cache_kissoflife", "cache_twice", "cache_nmixx", "cache_everglow", "cache_ive", "cache_aespa", "cache_kep1er", "cache_newjeans", "cache_lesserafim"];
}
// Tıklanan div in id sini diziden çıkar
others.splice(others.indexOf(cacheId), 1);
// console.log("OLD_FORMS",window.old_form_height,window.old_form_width);
// console.log("OLD_HEADER_X",window.old_header_x_height,window.old_header_x_width);
// Dizide kalan diğer div leri seç ve gizle
for (var i = 0; i < others.length; i++) {
var other = document.getElementById(others[i]);
if(others[i]=="cache_form" || others[i]=="header_x"){
// console.log(other);
// console.log(others[i] + "BAŞLANGIÇ");
// console.log(other.style.height);
// console.log(other.style.width);
if(others[i]=="cache_form"){
if(other.style.height == "0px" || other.style.width == "0px" || other.style.height == 0 || other.style.width == 0){}else{
  window.old_form_height = other.style.height;
  window.old_form_width = other.style.width;
}
}
if(others[i]=="header_x"){
if(other.style.height == "0px" || other.style.width == "0px" || other.style.height == 0 || other.style.width == 0){}else{
  window.old_header_x_height = other.style.height;
  window.old_header_x_width = other.style.width;
}
}
// console.log(others[i] + "BİTİŞ");
// console.log(other.style.height);
// console.log(other.style.width);
other.style.visibility = "hidden";
other.style.height = "0";
other.style.width = "0";
zeroSize(other);
} else{
other.style.display = "none";
main.parentNode.insertBefore(other, main);
}
}
// Eğer tumunugizle true ise, others dizisindeki tüm div'lerin id'lerini al ve gizle
if (tumunugizle == true) {
// console.log("OLD_FORMS",window.old_form_height,window.old_form_width);
// console.log("OLD_HEADER_X",window.old_header_x_height,window.old_header_x_width);
// others dizisindeki tüm div'leri seç ve gizle
for (var i = 0; i < others.length; i++) {
var div = document.getElementById(others[i]);
if(others[i]=="cache_form" || others[i]=="header_x"){
// console.log(others[i] + "BAŞLANGIÇ");
// console.log(div.style.height);
// console.log(div.style.width);
if(others[i]=="cache_form"){
  if(div.style.height == "0px" || div.style.width == "0px" || div.style.height == 0 || div.style.width == 0){}else{
    // console.log(others[i]);
    // console.log(div.style.height);
    // console.log(div.style.width);
    window.old_form_height = div.style.height;
    window.old_form_width = div.style.width;
  }
}
if(others[i]=="header_x"){
  if(div.style.height == "0px" || div.style.width == "0px" || div.style.height == 0 || div.style.width == 0){}else{
    // console.log(others[i]);
    // console.log(div.style.height);
    // console.log(div.style.width);
    window.old_header_x_height = div.style.height;
    window.old_header_x_width = div.style.width;
  }
}
// console.log(others[i] + "BİTİŞ");
// console.log(div.style.height);
// console.log(div.style.width);
div.style.visibility = "hidden";
div.style.height = "0";
div.style.width = "0";
zeroSize(div);
} else{
div.style.display = "none";
main.parentNode.insertBefore(other, main);
}
// console.log("YYY OLD_FORMS",window.old_form_height,window.old_form_width);
// console.log("YYY OLD_HEADER_X",window.old_header_x_height,window.old_header_x_width);
}
}
}
// * Menu Open & Close Function
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
// * Change Personalized Websocket Settings
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
// * Message Bar Pre-Answer Similarity Algorithm
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
// * Save Note
function save_notepad(){
  var textarexr = document.getElementById("kopyala");
  var md5a = document.getElementById("md5a");
  var value = textarexr.value;
  // Eğer değer boş değilse, cookie'ye kaydet
  if (value != "") {
    // Değeri cookie ye kaydet
    setCookie("textareaValue",value,7);
    // Değerin md5 ini hesapla
    var md5Value = md5(value);
    // md5 elementine md5 değerini yaz
    md5a.textContent = "Saved: " + md5Value;
  }
}
// * Proc Panel Delete
function removeDataDecrypted(attrValue) {
  // "abc" id'li div elementini seçelim
  var abcDiv = document.getElementById("kutular_proc");

  // Öznitelik adını değişkene atayalım
  var attrName = "data";

  // "abc" id'li div elementinin altındaki tüm div elementlerini seçelim
  var divs = abcDiv.getElementsByTagName("div");

  // Her bir div elementi için bir döngü başlatalım
  for (var i = 0; i < divs.length; i++) {
    // Eğer div elementinin özniteliği varsa ve değeri istediğimizle eşleşiyorsa
    if (divs[i].hasAttribute(attrName) && divs[i].getAttribute(attrName) == attrValue) {
      // Div elementini sayfadan kaldıralım
      divs[i].parentNode.removeChild(divs[i]);
    }
  }
}
// * Set Cookie
function setCookie(name,value,days) {
  var expires = "";
  var value_data = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  if(value){
    value_data = encodeURIComponent(value);
  }
  document.cookie = encodeURIComponent(name) + "=" + value_data + expires + "; path=/";
}
// * Get Cookie
function getCookie(sKey) {
  return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}
// * List All Cookie
function listallcookie() {
  var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
  for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
  return aKeys;
}
// * Delete All Cookie
function deleteAllCookies() {
  var aKeys = listallcookie();
  for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { eraseCookie(decodeURIComponent(aKeys[nIdx]));};
}
// * Erase Cookie
function eraseCookie(name) {   
  document.cookie = encodeURIComponent(name) +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
// * Has Cookie
function hasCookie(sKey) {
  return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
}
// * TextBase64Encode
function text_base64_encode(text) {
  var array = new TextEncoder().encode(text);
  var base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var result = '';
  var i, j, triplet;

  for (i = 0; i < array.length; i += 3) {
    triplet = (array[i] << 16) | (array[i + 1] << 8) | array[i + 2];
    for (j = 0; j < 4; j += 1) {
      if (i * 8 + j * 6 <= array.length * 8) {
        result += base64.charAt((triplet >> 18 - j * 6) & 0x3F);
      }
    }
  }
  return result;
}
// * TextBase64Decode
function text_base64_decode(str) {
  let buffer = [];
  let bits = 0;
  let value = 0;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    let digit = charCode > 64 && charCode < 91 ? charCode - 65
      : charCode > 96 && charCode < 123 ? charCode - 71
      : charCode > 47 && charCode < 58 ? charCode + 4
      : charCode === 43 ? 62
      : charCode === 47 ? 63
      : -1;
    if (digit !== -1) {
      value = (value << 6) | digit;
      bits += 6;
      if (bits >= 8) {
        buffer[index++] = (value >> (bits - 8)) & 255;
        bits -= 8;
      }
    }
  }
  return new TextDecoder().decode(new Uint8Array(buffer));
}
// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Security                                    ||
// ! ||--------------------------------------------------------------------------------||
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
// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Create Base                                  ||
// ! ||--------------------------------------------------------------------------------||
// ^ Base
var body = document.querySelector("body");
var div = document.createElement("div");
div.style.margin = "0 auto";
div.style.textAlign = "center";
div.style.height = "auto";
div.style.color = "#c43f22";
div.style.maxWidth = "600px";
div.style.position = "relative";
div.id = "base";
try{

  var wave_data = 
  `
  <svg id="wavebodyanimate" class="editorial"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       viewBox="0 24 150 28"
       preserveAspectRatio="none">
   <defs>
   <path id="gentle-wave"
   d="M-160 44c30 0 
      58-18 88-18s
      58 18 88 18 
      58-18 88-18 
      58 18 88 18
      v44h-352z" />
    </defs>
    <g class="parallax">
     <use xlink:href="#gentle-wave" x="50" y="0" fill="rgba(196, 64, 34, 0.752)"/>
     <use xlink:href="#gentle-wave" x="50" y="3" fill="rgba(181, 59, 31, 0.647)"/>
     <use xlink:href="#gentle-wave" x="50" y="6" fill="rgba(124, 23, 0, 0.543)"/>  
    </g>
  </svg>
  `;
  div.insertAdjacentHTML('beforeend',wave_data);
  
  
  }catch(ex){}
// ^ Header
(()=>{
  var header = document.createElement("header");
  header.id = "header_x";

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
h1.style.color = "#c43f22";

// <img> elementini oluşturalım
var img = document.createElement("img");
img.src = mainlogo_b64img;
img.onload = function() {
  URL.revokeObjectURL(mainlogo_b64img);
};
img.height = "120";
img.onclick = function() {
  showCacheInMain("cache_form");
};

// <h1> elementinin içine <img> elementini ekleyelim
h1.appendChild(img);

// <header> elementinin içine <h1> elementini ekleyelim
header.appendChild(h1);

// <div> elementini oluşturalım
var divx2 = document.createElement("div");
divx2.style.position = "absolute";
divx2.style.top = "0";
divx2.style.left = "0";
divx2.style.zIndex = "999";
divx2.style.userSelect = "none";

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
menuButton.style.color = "#c43f22";
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
option1.style.color = "#c43f22";
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
option2.style.color = "#c43f22";
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
option3.style.color = "#c43f22";
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
option4.style.color = "#c43f22";
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
option5.style.color = "#c43f22";
option5.textContent = "Websocket";

var option6 = document.createElement("a");
option6.id = "option6";
option6.onclick = function() {
  toggleMenu();
  window.showCacheInMain('gallery_x',true,true);
  gallery_s(foldersOLD);
};
option6.style.display = "block";
option6.style.padding = "10px";
option6.style.textDecoration = "none";
option6.style.color = "#c43f22";
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
option7.style.color = "#c43f22";
option7.textContent = "Config";

var option8 = document.createElement("a");
option8.id = "option8";
option8.onclick = function() {
  toggleMenu();
  showCacheInMain("cache_proc");
};
option8.style.display = "block";
option8.style.padding = "10px";
option8.style.textDecoration = "none";
option8.style.color = "#c43f22";
option8.textContent = "Proc";

// Menü içeriği elementinin içine menü seçenekleri elementlerini ekleyelim
menuContent.appendChild(option1);
menuContent.appendChild(option6);
menuContent.appendChild(option2);
menuContent.appendChild(option3);
menuContent.appendChild(option4);
menuContent.appendChild(option5);
menuContent.appendChild(option7);
menuContent.appendChild(option8);

// <div> elementinin içine menü butonu ve menü içeriği elementlerini ekleyelim
divx2.appendChild(menuButton);
divx2.appendChild(menuContent);

// <header> elementinin içine <div> elementini ekleyelim
header.appendChild(divx2);
  div.appendChild(header);
})();
// ^ Kpop
(()=>{
  for (let i = 0; i < ids__A.length; i++) { // Listedeki her değer için bir döngü başlatır
    let a = document.createElement("div"); // Bir div elementi oluşturur
    a.style.display = "none"; // Elementin görünmez olmasını sağlar
    a.id = "cache_" + ids__A[i]; // Elementin id özelliğini belirler
    for (var ix = 0; ix < groupData.length; ix++) {
      var group = groupData[ix];
      if (group.id == ids__A[i]) {
        var details = document.createElement("div");
        details.className = "group-details";
        // Grup ayrıntılarının içindeki markdown bağlantılarını HTML bağlantılarına dönüştür
        details.innerHTML = markdown_to_html_link_main(group.details);
        a.appendChild(details);
        break;
      }
    }
    div.append(a); // Elementi document.body'ye ekler
  }

  var cacheKpop = document.createElement("div");
  cacheKpop.id = "cache_kpop";
  cacheKpop.style.display = "none";
  var list = document.createElement("ul");
  list.className = "group-list";
  list.id = "list";
  cacheKpop.appendChild(list);

// Liste elementini seç
// var list = document.getElementById("list");
// Liste elementini temizle
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


list.addEventListener("click", showDetails);
  div.appendChild(cacheKpop);
})();
// ^ Websocket
(()=>{
  var cacheWebsocket = document.createElement("div");
  cacheWebsocket.id = "cache_websocket";
  cacheWebsocket.style.display = "none";

// Websocket başlığını oluşturur
var websocket = document.createElement("div");
websocket.textContent = "Websocket";

// Bağlantı durumu paragrafını oluşturur
var baglanti = document.createElement("p");
baglanti.style.fontSize = "24px";
baglanti.style.color = "#c43f22";
baglanti.textContent = "Bağlantı durumu: ";
var span = document.createElement("span");
span.id = "baglanti";
span.style.color = "#c43f22";
span.textContent = "Kapalı";
baglanti.appendChild(span);

// İlk formu oluşturur
var form1 = document.createElement("form");
form1.onsubmit = function() { window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(ws.value,true); event.preventDefault(); };
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
textarea1.onkeypress = function() { if (window.event.keyCode == 13) { event.preventDefault(); window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(textarea1.value,true); } };
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
textarea1.style.color = "#c43f22";
textarea1.style.resize = "vertical";
textarea1.autocomplete = "off";
var input1 = document.createElement("input");
input1.type = "submit";
input1.onclick = function() { event.preventDefault(); window.wsmode_realtime_other=0,null!=window.otherusers_realtime_ws&&window.otherusers_realtime_ws.readyState==WebSocket.OPEN&&window.otherusers_realtime_ws.close();baglan(textarea1.value,true); };
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
input1.style.color = "#c43f22";
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
textarea2.style.color = "#c43f22";
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
input2.style.color = "#c43f22";
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
textarea3.style.color = "#c43f22";
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
input3.style.color = "#c43f22";
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
baglantiother.style.color = "#c43f22";
baglantiother.textContent = "Bağlantı durumu: ";
var spanother = document.createElement("span");
spanother.id = "baglantiother";
spanother.style.color = "#c43f22";
spanother.textContent = "Kapalı";
baglantiother.appendChild(spanother);

// Oluşturulan elementleri div elementinin içine ekler
cacheWebsocket.appendChild(websocket);
cacheWebsocket.appendChild(baglanti);
cacheWebsocket.appendChild(form1);
cacheWebsocket.appendChild(form2);
cacheWebsocket.appendChild(etkilesim);
cacheWebsocket.appendChild(form3);
cacheWebsocket.appendChild(baglantiother);
  div.appendChild(cacheWebsocket);
})();
// ^ Commands
(()=>{
  var cacheCommands = document.createElement("div");
  cacheCommands.id = "cache_commands";
  cacheCommands.style.display = "none";

// Commands başlığını oluşturur
var commands = document.createElement("div");
commands.textContent = "Commands";

// Komutları listelemek için bir br elementi oluşturur
var br = document.createElement("br");

// Komutları açıklayan bir dizi oluşturur
var explanations = [
  "Open Commands Panel ❯ /help,/yardım,/helper,/commands,/cm,/comands,/komutlar,/komut",
  "Open Settings Panel ❯ /config,/ayar,/ayarlar,/configs",
  "Generate Music List ❯ /m,/music,/şarkı,/müzik Example: /m -s all,/m -s 10(number)",
  "Open Gallery ❯ /g,/gallery,/galeri,/foto,/fotoğraf,/fotoğraflar",
  "Delete Chat ❯ /cls,/clear,/delete,/del",
  "Set Background ❯ /bg,/background,/arkaplan",
  "Delete Player or Background ❯ /dp,/db,/deleteplayer,/deletebg,/deletebackground",
  "Open Notepad Panel ❯ /note,/not,/notepad,/notdefteri",
  "Open Websocket Panel ❯ /ws,/websocket,/websocketserver,/wsserver",
  "Open Kpop List Panel ❯ /gg,/girlgrouplist,/girlgroup,/gglist,/kpoplist,/kpop",
  "View File and Code Size ❯ /size,/boyut,/filesize,/dosyaboyutu,/datasetsize",
  "Session Delete ❯ /kill,/die,/destroy,/destruct,/destruction,/reset",
  "Reset Total File Size ❯ /resetsize,/checksize,/checkfilesize,/resetfilesize,/resetsizes,/checksizes",
  "Add Encrypted Dataset ❯ /dd,/decryptdataset,/decdataset,/addencdataset Example: /dd -n (name) -s (password) -r (number default:0)",
  "Add Encrypted Gallery Dataset ❯ /gd,/gallerydecryptdataset,/gallerydecdataset,/galleryaddencdataset Example: /gd -n (name) -s (password) -r (number default:0)",
  "Read Secret Note ❯ /sn,/snote,/snotes,/secretnote,/secretnotes Example: /sn -n (name) -s (password) -r (number default:0)",
  "Base64 Encode ❯ /base64encode,/b64encode,/b64e Example: /b64e (Plain Text)",
  "Base64 Decode ❯ /base64decode,/b64decode,/b64d Example: /b64d (Base64 Encoded Text)"
];

// Dizideki her açıklama için bir döngü başlatır
for (let i = 0; i < explanations.length; i++) {
  // Açıklamayı içeren bir div elementi oluşturur
  var explanation = document.createElement("div");
  explanation.textContent = explanations[i];
  explanation.style.borderBottom = "1px dashed #c43f22";
  explanation.style.marginBottom = "5px";
  explanation.style.marginTop = "10px";
  explanation.style.paddingLeft = "5px";
  explanation.style.paddingRight = "5px";
  explanation.style.paddingBottom = "5px";
  explanation.style.fontWeight = "1000";
  explanation.style.fontFamily = "monospace";
  explanation.style.textAlign = "left";
  // Div elementini div elementinin içine ekler
  cacheCommands.appendChild(explanation);
  // Br elementini div elementinin içine ekler
  cacheCommands.appendChild(br);
}

// Oluşturulan elementleri div elementinin içine ekler
cacheCommands.prepend(br);
cacheCommands.prepend(commands);

  div.appendChild(cacheCommands);
})();
// ^ Note
(()=>{
  var cacheNote = document.createElement("div");
  cacheNote.id = "cache_note";
  cacheNote.style.display = "none";

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
cacheNote.appendChild(div3);
cacheNote.appendChild(div1);
cacheNote.appendChild(div2);

  // Cookie yi al
  var cookie = document.cookie;
  if (hasCookie("textareaValue")) {
    // Değeri almak için, eşittir işaretinden sonraki kısmı al
    var encodedValue = getCookie("textareaValue");
    var value = decodeURI(encodedValue);
    // Textarea ya değeri yaz
    textarea.value = value;
    // Değerin md5 ini hesapla
    var md5Value = md5(value);
    // md5 elementine md5 değerini yaz
    md5a.textContent = "Loaded: " + md5Value;
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
  textarea.value = ""; // metni seç
});

textarea.addEventListener("input", function() {
    save_notepad();
  });
  button1.addEventListener('click', function() {
      var kopyala = document.getElementById('kopyala');kopyala.select();document.execCommand('copy');
    });
  div.appendChild(cacheNote);











})();
// ^ Config
(()=>{
  var cacheConfig = document.createElement("div");
  cacheConfig.id = "cache_config";
  cacheConfig.style.display = "none";
  // Cache note id'li div elementini seçer
var jsonviewer = document.createElement("div");
jsonviewer.id = "jsonviewer";
jsonviewer.style.wordBreak = "break-word";

// downloaddataset paragrafını oluşturur
var downloaddataset = document.createElement("button");
downloaddataset.id = "downloaddataset";
downloaddataset.style.fontSize = "16px";
downloaddataset.style.padding = "5px";
downloaddataset.style.margin = "5px";
downloaddataset.style.backgroundColor = "transparent";
downloaddataset.style.border = "none";
downloaddataset.style.color = "#c43f22";
downloaddataset.style.borderBottom = "1px solid #c43f22";
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
label.style.color = "#c43f22";
button.style.fontSize = "16px";
button.style.padding = "5px";
button.style.margin = "5px";
button.style.backgroundColor = "transparent";
button.style.border = "none";
button.style.borderBottom = "1px solid #c43f22";

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
cacheConfig.appendChild(div4);
cacheConfig.appendChild(div3);
cacheConfig.appendChild(div1);
cacheConfig.appendChild(jsonviewer);
  div.appendChild(cacheConfig);
})();
// ^ Form
(()=>{
  var cacheForm = document.createElement("div");
  cacheForm.id = "cache_form";
  cacheForm.style.display = "none";

// Form elementini oluşturur
var form = document.createElement("form");
form.id = "message-form";

// Div elementini oluşturur
var div1 = document.createElement("div");
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
textarea.style.borderBottom = "2.5px solid #c43f22";
textarea.style.padding = "16px";
textarea.style.color = "#c43f22";
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
arama_sonuclari.style.backgroundColor = "transparent";
arama_sonuclari.style.overflow = "auto";
arama_sonuclari.style.padding = "10px";
// Diğer stilleri buraya ekle

var ytpanel = document.createElement("div");
ytpanel.id = "ytpanel";
ytpanel.style.borderTopLeftRadius = "25px";
ytpanel.style.borderTopRightRadius = "25px";
ytpanel.innerHTML = "<Youtube Embed Panel>";

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
input.style.borderBottom = "2.5px solid #c43f22";
input.style.padding = "16px";
input.style.color = "#c43f22";
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
cacheForm.appendChild(form);
cacheForm.appendChild(arama_sonuclari);
cacheForm.appendChild(ytpanel);

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
suggestion3.textContent = "Tr: tr";
var suggestion4 = document.createElement("div");
suggestion4.className = "suggestion";
suggestion4.id = "voicex";
suggestion4.textContent = "Vc: Off";
var suggestion5 = document.createElement("div");
suggestion5.className = "suggestion";
suggestion5.textContent = "/bg";

// Önerilenler kutusunun içine öneri elementlerini ekler
suggestions.appendChild(suggestion1);
suggestions.appendChild(suggestion2);
suggestions.appendChild(suggestion3);
suggestions.appendChild(suggestion4);
suggestions.appendChild(suggestion5);


form.addEventListener('submit', function(event) {{
  event.preventDefault();
  document.getElementById("sonuclar").style.display = "none";
  suggestions.style.display = "";
  // var messagex2 = messageInput.value;
  // var target = targetInput.value;
  sendMessage(textarea.value,input2.value);
  //sendMessage(messagex, target, server_key,1,messagex2);
  textarea.value = '';
  // messagex2="";
  // messagex="";
  }});


var children = [].slice.call(suggestions.childNodes);

// child'ları id'lerine göre sıralayın
// children.sort((a, b) => a.id - b.id);

// sıralanmış child'ları node'a geri ekleyin
// for (const child of children) {
//   console.log(child);
// }

  // Her bir öneri için bir event listener ekle
  for (let suggestion of children) {
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

// input elementine bir event listener ekle
// data_raw değişkenini bir diziye dönüştür
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
var height = 0;
textarea.addEventListener("mouseup", function() {{
  if (height != textarea.clientHeight) {{
    input.style.setProperty("height", (textarea.clientHeight+2) + "px", "important");
  }}
  height = textarea.clientHeight;
}});
// var form = document.querySelector('#message-form');

// Div elementinin içine önerilenler kutusunu ekler
cacheForm.appendChild(suggestions);

// Mesajları göstermek için bir div elementi oluşturur
var messages = document.createElement("div");
messages.style.backgroundImage="white";
messages.id = "messages";
messages.style.wordWrap = "break-word";
messages.innerHTML = "<br><y style='color:#c59722'></y><p style='color:#c43f22'>(!) Başkasının yazışmalarını görebilirsiniz</p>Size: <x>null</x>";
// <p style='color:#c59722'>Kesinlikle kimseye hakaret edemez veya hedef alamaz böyle eğitilmemiştir.<p/>
// Div elementinin içine mesajları ekler
cacheForm.appendChild(messages);
  div.appendChild(cacheForm);
})();
// ^ Gallery
(()=>{
  var gallery_x = document.createElement("div");
  gallery_x.id = "gallery_x";
  gallery_x.style.display = "none";
  
  div.appendChild(gallery_x);
})();
// ^ Proc
(()=>{
  var proc = document.createElement("div");
  proc.id = "cache_proc";
  proc.style.padding = "0";
  proc.style.margin = "0";
  


  let kutular = document.createElement('div');
  kutular.id = "kutular_proc";
  let form = document.createElement('div');
  form.style.display = 'none';
  
  let formElement = document.createElement('form');
  
  let passwordLabel = document.createElement('label');
  passwordLabel.setAttribute('for', 'passwordAAA');
  passwordLabel.textContent = 'Password:';
  formElement.appendChild(passwordLabel);
  formElement.appendChild(document.createElement('br'));
  
  let passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('name', 'passwordAAA');
  passwordInput.setAttribute('autocomplete', 'off');
  formElement.appendChild(passwordInput);
  formElement.appendChild(document.createElement('br'));
  
  let roundLabel = document.createElement('label');
  roundLabel.setAttribute('for', 'roundAAA');
  roundLabel.textContent = 'Round:';
  formElement.appendChild(roundLabel);
  formElement.appendChild(document.createElement('br'));
  
  let roundInput = document.createElement('input');
  roundInput.setAttribute('type', 'number');
  roundInput.setAttribute('name', 'roundAAA');
  roundInput.setAttribute('value', 0);
  roundInput.setAttribute('min', '0');
  roundInput.addEventListener("wheel", function(event) {
    // orta tuşa basılıp basılmadığını kontrol et
    if (event.button === 1) {
    // tekerleğin yönünü al
    var delta = event.deltaY;
    // tekerlek yukarı dönüyorsa değeri artır
    if (delta < 0) {
      roundInput.value = parseInt(roundInput.value) + 1;
    }
    // tekerlek aşağı dönüyorsa değeri azalt
    else if (delta > 0) {
      roundInput.value = parseInt(roundInput.value) - 1;
    }
    // olayı engelle
    event.preventDefault();
    }
});
  formElement.appendChild(roundInput);
  formElement.appendChild(document.createElement('br'));
  
  let submitInput = document.createElement('input');
  submitInput.setAttribute('type', 'submit');
  submitInput.setAttribute('value', 'Apply');
  submitInput.style.fontSize = "16px";
  submitInput.style.padding = "5px";
  submitInput.style.margin = "5px";
  submitInput.style.backgroundColor = "transparent";
  submitInput.style.border = "none";
  submitInput.style.color = "#c43f22";
  submitInput.style.borderBottom = "1px solid #c43f22";


  formElement.appendChild(submitInput);
  
  form.appendChild(formElement);
  proc.appendChild(form);
  proc.appendChild(kutular);
  









  // let data = {
  //   "notes": ["not1", "not2", "not3"],
  //   "enc": ["enc1", "enc2", "enc3"],
  //   "gallery_enc": ["genc1", "genc2", "genc3"]
  // };
  
  let currentKutu = null;
  
  function olustur(name, dosyalar, imgBase64) {
    Object.keys(dosyalar).forEach(dosya => {
      var imgfile = URL.createObjectURL(imgBase64, {type: "one-time-only", expires: "session"});
      let kutu = document.createElement('div');
      kutu.style.width = 'auto';
      kutu.style.height = 'auto';
      kutu.style.backgroundColor = 'transparent';
      kutu.style.border = '0';
      kutu.style.paddingRight = '10px';
      kutu.style.paddingLeft = '10px';
      kutu.style.margin = '10px';
      kutu.style.float = 'left';
      kutu.style.display = 'flex';
      kutu.style.flexDirection = 'column';
      kutu.style.alignItems = 'center';
      kutu.style.justifyContent = 'center';
      kutu.style.borderRadius = '10px';

var h6 = document.createElement("h6");
h6.style.fontSize = "12px";
h6.style.margin = "0";
h6.style.height = "5%";
h6.style.display = "flex";
h6.style.alignItems = "center";
h6.style.justifyContent = "center";
h6.textContent = name;
kutu.appendChild(h6);

var img = document.createElement("img");
img.style.width = "100%";
img.style.height = "85%";
img.alt = dosya;
img.src = imgfile;
img.onload = function() {
  URL.revokeObjectURL(imgfile);
  imgfile = undefined;
};
kutu.appendChild(img);

var p = document.createElement("p");
p.style.margin = "0";
p.style.height = "10%";
p.style.display = "flex";
p.style.alignItems = "center";
p.style.justifyContent = "center";
p.style.fontSize = "10px";
p.textContent = dosya;
kutu.appendChild(p);
      // kutu.innerHTML = `<h6 style="font-size:12px; margin: 0; height: 5%; display: flex; align-items: center; justify-content: center;">${name}</h6><img style="width: 100%; height: 85%;" src="${imgBase64}" alt="${dosya}"><p style="margin: 0; height: 10%; display: flex; align-items: center; justify-content: center; font-size:10px;">${dosya}</p>`;
      kutu.setAttribute('data', name+"="+dosya);
      kutu.addEventListener('click', () => {
        form.style.display = 'block';
        currentKutu = kutu;
      });
      kutular.appendChild(kutu);
    });
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let password = passwordInput.value;
    let round = roundInput.value;
    roundInput.value=0;
    passwordInput.value="";
    form.style.display = 'none';
    let dat0=currentKutu.getAttribute("data").split("=");
    let islem = dat0[0];
    if(islem=="note"){
      try{
        var x1123 = note_enc_text_read_data(dat0[1],password,round);
        sent__s(x1123,true);
        return false;
      }catch(ex){
        alert(ex);
        return false;
      }
    }else if(islem=="chatbot"){
      try{
        enc_text_add_data(dat0[1],password,round);
      }catch(ex){
        alert(ex);
        return false;
      }
    }else if(islem=="gallery"){
      try{
        gallery_enc_text_add_data(dat0[1],password,round);
      }catch(ex){
        alert(ex);
        return false;
      }
    }else{
      alert("Error");
    }
    alert("Başarılı");
    sent__s("Başarılı",true);
    try{currentKutu.remove();}catch(ex2){}
  });
  // console.log(data["notes"]);
  // console.log(data["enc"]);
  // console.log(data["gallery_enc"]);
  olustur("note",data["notes"], noteb64img);
  olustur("chatbot",data["enc"], dfileb64img);
  olustur("gallery",data["gallery_enc"], dfileb64img);

  
  
  div.appendChild(proc);
})();
// ^ Main
(()=>{
  var main = document.createElement("div");
  main.id = "main";
  main.style.padding = "0";
  main.style.margin = "0";
  
  div.appendChild(main);
})();
body.appendChild(div);
// ! ||--------------------------------------------------------------------------------||
// ! ||                                       End                                      ||
// ! ||--------------------------------------------------------------------------------||
var size = new TextEncoder().encode(data_raw).length;
var kiloBytes = size / 1024; // Bayt cinsinden boyutu 1024'e bölerek KB cinsinden boyutu hesapla
var x = document.getElementsByTagName("x")[0]; // x elementini etiket adı seçiciyle seç, dönen dizi içinde ilk elemanı al
x.innerHTML = kiloBytes.toFixed(1) + " KB"; // x elementinin innerHTML özelliğine boyutu atayarak

var loc_link = window.location.href;
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

var tree = jsonToTree(data_raw);
var jsonViewer = document.getElementById("jsonviewer");
jsonViewer.appendChild(tree);
get_code_data(false).then(result => console.log("Set File Size")).catch(error => console.error(error)).finally(() => {
var intervalu = setInterval(function() {
  if (window.version_x != "") {
    clearInterval(intervalu);
    (()=>{try{document.getElementsByTagName("y")[0].innerHTML = "Version_EA_"+window.version_x;
    var _asldas = document.getElementById("version_conf");
    _asldas.innerHTML = "Version_EA_"+window.version_x;
    delete _asldas;}catch(ex){alert(ex);}})();
  }
}, 100);
});
// try {
//   var otherwsurl;
//   window.dev_mode ? otherwsurl = "ws://localhost:8000/" : otherwsurl = "wss://socketsbay.com/wss/v2/1/demo/";
//   window.wsmode_realtime_other=1,null!=window.ws&&window.ws.readyState==WebSocket.OPEN&&window.ws.close();wsrealtimeOther(otherwsurl);
//   var ___d_cac = document.getElementById("ws3");
//   ___d_cac.value = otherwsurl;
//   delete otherwsurl,___d_cac;
// }catch(e) {}

// setTimeout(()=>{      // id="message-input" olan elementi seç
//   let input = document.getElementById('message-input');

//   // input elementinin value özelliğine texti ata
//   input.value = "8.4e+10^(4*log(222.6%2^4))+log(log(12e+30)+24/(38/12^2%4)) = ? %notr%";

//   // id="message-submit" olan elementi seç
//   let submit = document.getElementById('message-submit');
//         // submit elementine onkeypress eventini ekle
//         submit.onkeypress = function(event) {
//           // Eğer basılan tuş enter ise
//           if (event.keyCode === 13) {
//             // Eventin varsayılan davranışını engelle
//             event.preventDefault();
  
//             // submit elementine tıkla
//             submit.click();
//           }
//         };
//         setTimeout(()=>{
//         // submit elementine otomatik olarak tıkla
//         submit.click();
//         ;},500);
        
//   var ___0000 = document.getElementById("message-input");___0000.focus();sent__s("元気ですか");sent__s("어떻게 지내세요");
// },100);


















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
// start.js / end

// <body> etiketini seçelim

// <div> elementini oluşturalım

// <header> elementini oluşturalım

// <div id="cache_websocket"> elementini oluşturalım

// <div id="cache_commands"> elementini oluşturalım

// <div id="cache_note"> elementini oluşturalım

// <div id="cache_config"> elementini oluşturalım

// <div id="cache_form"> elementini oluşturalım


// <div id="main"> elementini oluşturalım

// <body> elementinin içine <div> elementini ekleyelim

////////////////////////////////////////


////////////////////////////////////////


///////////////////////////////////////////


///////////////////////////////////////////





























//////////////////////// PART 2










  
  
  
  
  
  
  
  
  
  
  
  /// END PART
  
  
  
  
  
  
  
  
  
  
  

























//////////////////////////////////


// Window load event ==> Kpop Girl Group List
// JSON formatında grup verilerini tanımla
// Eğer link #note içeriyorsa, konsola 2 yaz
//if (loc_link.includes("#note")) {



// JSON verisini ağaç yapısına dönüştürün


// function dataURItoBlob_v2 (dataURI) {
//   var parts = dataURI.split (",");
//   var mime = parts [0].match (/:(.*?);/) [1];
//   var binData = base64_decode (parts [1]);
//   var arr = [];
//   for (var i = 0; i < binData.length; i++) {
//     arr.push (binData [i]);
//   }
//   var blob = new Blob ([new Uint8Array (arr)], {type: mime});
//   // var blobUrl = URL.createObjectURL(blob);
//   var blobUrl = URL.createObjectURL(blob, {type: "one-time-only", expires: "session"});
//   return blobUrl;
// }






