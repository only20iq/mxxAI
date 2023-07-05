function quad_core([dataset, text, name],database_0,sub_item_name,sub_item_keyx) {
  let cevap = "";
  let metin = text.split(" "); // Metni boşluklara göre bölün
  let sub_keys = dataset.split("=");
  let last_element = sub_keys[sub_keys.length - 1]; // Dizinin son elemanını alın
  let words = last_element.split();
  let left_keyx = dataset.split("=")[0].split(",");
  for (let i = 0; i < words.length; i++) {
    for (let c = 0; c < left_keyx.length; c++) {
      let current_sub_key = words[i];
      let left_key = left_keyx[c].split("+");
      if (left_key.length == 1) {
        for (let a = 0; a < left_key.length; a++) {
          let left_key1 = left_key[a].split("/");
          for (let c = 0; c < left_key1.length; c++) {
            if (metin.includes(left_key1[c])) {
              var response = data["quad"][name][sub_item_name];
              var test_x=false;
              if(!Array.isArray(response)){
                if(response.startsWith("$")){
                  test_x=true;
                }
              }
              if(current_sub_key == "this" && test_x!=true) {
                if(!database_0.includes(sub_item_name+sub_item_keyx)) {
                  database_0.push(sub_item_name+sub_item_keyx);
                  if (Array.isArray(response)) { // Değişkenin bir dizi olup olmadığını kontrol eder
                    cevap += response[Math.floor(Math.random() * response.length)] + " "; // Rastgele bir cevap seçin
                  } else { // Değişkenin bir dizi olmadığını varsayar
                    cevap += response + " "; // İlk cevabı alın
                  }
                }
              } else {
                var response = data["quad"][name][sub_item_name];
                if(response!="this"){
                  var _cut = data["quad"][name][current_sub_key.slice(1)];
                }
                var _cut = response;
                if(!database_0.includes(_cut.slice(1))) {
                  database_0.push(_cut.slice(1));
                  if (Array.isArray(data["quad"][name][response.slice(1)])) { // Değişkenin bir dizi olup olmadığını kontrol eder
                    cevap += data["quad"][name][response.slice(1)][Math.floor(Math.random() * data["quad"][name][response.slice(1)].length)] + " "; // Rastgele bir cevap seçin
                  } else { // Değişkenin bir dizi olmadığını varsayar
                    cevap += data["quad"][name][response.slice(1)] + " "; // İlk cevabı alın
                  }
                }
              }
            }
          }
        }
      } else {
        let sayac = 0;
        for (let a = 0; a < left_key.length; a++) {
          let left_key1 = left_key[a].split("/");
          for (let c = 0; c < left_key1.length; c++) {
            if (metin.includes(left_key1[c])) {
              sayac = sayac + 1;
              break;
            }
          }
        }
        if (left_key.length == sayac) {
          var response = data["quad"][name][sub_item_name];
          var test_x=false;
          if(!Array.isArray(response)){
            if(response.startsWith("$")){
              test_x=true;
            }
          }
          if(current_sub_key == "this" && test_x!=true) {
            if(!database_0.includes(sub_item_name+sub_item_keyx)) {
              database_0.push(sub_item_name+sub_item_keyx);
              if (Array.isArray(response)) { // Değişkenin bir dizi olup olmadığını kontrol eder
                cevap += response[Math.floor(Math.random() * response.length)] + " "; // Rastgele bir cevap seçin
              } else { // Değişkenin bir dizi olmadığını varsayar
                cevap += response + " "; // İlk cevabı alın
              }
            }
          } else {
            var response = data["quad"][name][sub_item_name];
            if(response!="this"){
              var _cut = data["quad"][name][current_sub_key.slice(1)];
            }
            var _cut = response;
            if(!database_0.includes(_cut.slice(1))) {
              database_0.push(_cut.slice(1));
              if (Array.isArray(data["quad"][name][response.slice(1)])) { // Değişkenin bir dizi olup olmadığını kontrol eder
                cevap += data["quad"][name][response.slice(1)][Math.floor(Math.random() * data["quad"][name][response.slice(1)].length)] + " "; // Rastgele bir cevap seçin
              } else { // Değişkenin bir dizi olmadığını varsayar
                cevap += data["quad"][name][response.slice(1)] + " "; // İlk cevabı alın
              }
            }
          }
        }
      }
    }
  }
  return [cevap,database_0];
}
// 112234
function quad_thread(text) {
  var cevap = "";
  text = text.trim();
  var wait_dataset_cache={
    "sevme":[],"nasıl":[],"love":[],"kötü":[]
  };
  for (let key of Object.keys(data["quad"])) { // data["quad"] nesnesinin tüm anahtarlarını döngü ile gez
    if (key.startsWith("dataset")) { // Anahtarın "dataset" ile başlayıp başlamadığını kontrol et
      if (data["quad"][key].hasOwnProperty("n")) { // Anahtarın değerinin "n" özelliği olup olmadığını kontrol et
        let value = data["quad"][key]["n"]; // "n" özelliğinin değerini al
        let parts = value.split("/"); // Değeri "/" ile ayır ve bir diziye at
        for (let part of parts) { // Dizinin tüm elemanlarını döngü ile gez
          if (text.includes(part)) { // Metnin part değerini içerip içermediğini kontrol et
            for (let sub_key of Object.keys(data["quad"][key])) { // data["quad"] nesnesinin tüm anahtarlarını döngü ile gez
              if (wait_dataset_cache.hasOwnProperty(sub_key)) { // Başka bir nesnenin sub_key ile eşleşen bir anahtarı olup olmadığını kontrol et
                wait_dataset_cache[sub_key].push([part,key]); // Eşleşen anahtarın değerine part değerini push et
              }
            }
          }
        }
      }
    }
  }
  var database_0 = [];
  var cevapx;
  function ekler(e) {
    return e+"/"+e+"ımı/"+e+"imi/"+e+"nı/"+e+"ni/"+e+"ı/"+e+"i/"+e+"mi/"+e+"ğı/"+e+"yi/"+e+"yı/"+e+"mı/"+e+"am/"+e+"dan/"+e+"den/"+e+"ten/"+e+"tan";
  }
  for (let item of wait_dataset_cache["sevme"]) {
    var _cache_dataset_data = ekler(item[0]);
    var dataset = _cache_dataset_data+"+sevecen/seviyore/siver/sever/seviyor/sevyon/sev/seviyon/sewyon/seyon+musun/misin/mısın/müsün/mu/sun/san/sen/mi/cin,ben/sen/o/biz/siz/onlar/beni/seni/onu/onları/sizi/kendimi/sizleri/düşüncelerin+"+_cache_dataset_data+"+sevecen/seviyore/siver/sever/seviyor/sevyon/sev/seviyon/sewyon/seyon+musun/misin/mısın/müsün/mu/sun/san/sen/mi/cin,"+_cache_dataset_data+"+sevecen/seviyore/siver/sever/seviyor/sevyon/sev/seviyon/sewyon/seyon/musun/misin/mısın/müsün/mu/sun/san/sen/mi/cin,ben/sen/o/biz/siz/onlar/beni/seni/onu/onları/sizi/kendimi/sizleri/düşüncelerin,"+_cache_dataset_data+"+sevecen/seviyore/siver/sever/seviyor/sevyon/sev/seviyon/sewyon/seyon/musun/misin/mısın/müsün/mu/sun/san/sen/mi/cin/seviyorum/sevyom,ben/sen/o/biz/siz/onlar/beni/seni/onu/onları/sizi/kendimi/sizleri+mu/mü/ki/ben/sen/o/biz/siz/onlar/onları/düşüncelerin=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"sevme",item[0]);
    cevap += cevapx;
  }
  for (let item of wait_dataset_cache["nasıl"]) {
    var _cache_dataset_data = ekler(item[0]);
    var dataset = _cache_dataset_data+"+nasıl/iyi/sence/hakkında+mi/iyi/nasıl/sizce/yer/bahset/anlat/düşünüyorsun/düşünüyon/düşündün/anlatsana/açıkla/açıklasana/konuş/konuşsana,"+_cache_dataset_data+"+nasıl/sence/bahset/bahsetsene/anlat,"+_cache_dataset_data+"+yi/din/den/dan/tan/ten/a/e/o/yu/yü+nasıl/iyi/sence/hakkında/mi/iyi/nasıl/sizce/yer/bahset/anlat=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"nasıl",item[0]);
    cevap += cevapx;
  }
  for (let item of wait_dataset_cache["love"]) {
    var _cache_dataset_data = ekler(item[0]);
    var dataset = _cache_dataset_data+"+e/aşık/aşk/aşıq/seksi/seksilik/seksiliği/ateşli/azıyor/azdın/ateşliliği/ateşi/sexy/sexyliği/hottest/çekici/çekiciliği/çekci/tatlı/gideri/a+sanırım/özelliği/özellikleri/var/varmı/mi/mı/sence/nasıl/seviyesi/buldun/buluyorsun/beğeniyorsun/anladın/anlatsana/mısın/misin,"+_cache_dataset_data+"+nasıl/sence/bahset/bahsetsene/anlat,"+_cache_dataset_data+"+gideri/yi/din/den/dan/tan/ten/a/e/o/yu/yü+var/özelliği/özellikleri+mı/mi/varmı/var/sence,"+_cache_dataset_data+"+hoşlanıyonmu/hoşlanıyorsun/hoşlanıyorsan/hoşlanıyon/hoşlanıyormusun=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"love",item[0]);
    cevap += cevapx;
  }
  for (let item of wait_dataset_cache["kötü"]) {
    var _cache_dataset_data = ekler(item[0]);
    var dataset = _cache_dataset_data+"+kötü/iğrenç/berbat/rezil/kalitesiz/beceriksiz/vasıfsız/gereksiz/rezil/berbat/yeteneksiz/nefret/sevmiyom/beğenmiyom/beğenmiyorum,"+_cache_dataset_data+"+kötü/iğrenç/berbat/rezil/kalitesiz/beceriksiz/vasıfsız/gereksiz/rezil/berbat/yeteneksiz/nefret/sevmiyom/beğenmiyom/beğenmiyorum+ediyorum/kesinlikle/ettim/edicem/etyom/edyom/ben/sen/biz/siz/onlar=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"kötü",item[0]);
    cevap += cevapx;
  }
  if (cevap == "") {
    return null;
  } else {
    return cevap.trim();
  }
}
function multi_thread(text) {
  var database_0=[];
  let cevap = "";
  let metin = text.split(" "); // Metni boşluklara göre bölün
  for (let key of Object.keys(data["multi"])) {
    if (key.startsWith("set")) {
      let sub_keys = data["multi"][key].split("=");
      let last_element = sub_keys[sub_keys.length - 1]; // Dizinin son elemanını alın
      let words = last_element.split();
      let left_keyx = data["multi"][key].split("=")[0].split(",");
      for (let i = 0; i < words.length; i++) {
        for (let c = 0; c < left_keyx.length; c++) {
          let current_sub_key = words[i];
          let left_key = left_keyx[c].split("+");
          if (left_key.length == 1) {
            for (let a = 0; a < left_key.length; a++) {
              let left_key1 = left_key[a].split("/");
              for (let c = 0; c < left_key1.length; c++) {
                if (metin.includes(left_key1[c])) {
                  let response = data["multi"][current_sub_key.slice(1)];
                  if(!database_0.includes(current_sub_key.slice(1))) {
                    database_0.push(current_sub_key.slice(1));
                    if (Array.isArray(response)) { // Değişkenin bir dizi olup olmadığını kontrol eder
                      cevap += response[Math.floor(Math.random() * response.length)] + " "; // Rastgele bir cevap seçin
                    } else { // Değişkenin bir dizi olmadığını varsayar
                      cevap += response + " "; // İlk cevabı alın
                    }
                  }
                }
              }
            }
          } else {
            let sayac = 0;
            for (let a = 0; a < left_key.length; a++) {
              let left_key1 = left_key[a].split("/");
              for (let c = 0; c < left_key1.length; c++) {
                if (metin.includes(left_key1[c])) {
                  sayac = sayac + 1;
                  break;
                }
              }
            }
            if (left_key.length == sayac) {
              let response = data["multi"][current_sub_key.slice(1)];
              if(!database_0.includes(current_sub_key.slice(1))) {
                database_0.push(current_sub_key.slice(1));
                if (Array.isArray(response)) { // Değişkenin bir dizi olup olmadığını kontrol eder
                  cevap += response[Math.floor(Math.random() * response.length)] + " "; // Rastgele bir cevap seçin
                } else { // Değişkenin bir dizi olmadığını varsayar
                  cevap += response + " "; // İlk cevabı alın
                }
              }
            }
          }
        }
      }
    }
  }
  if (cevap == "") {
    return null;
  } else {
    return cevap.trim();
  }
}
function single_thread(text) {
  text = text.trim().replace(/\s/g, "");
  if (text in data["single"]) {
    let response = data["single"][text];
    if (Array.isArray(response)) { // Değerin bir dizi olup olmadığını kontrol eder
      if (response.length == 1) {
        cevap = response[0] + " ";
      } else {
        cevap = random_choice(response) + " ";
      }
    } else if (typeof response == "string" && response.startsWith("$")) { // Değerin bir dize olup başında "$" işareti olup olmadığını kontrol eder
      cevap = single_thread(response.slice(1)); // Değerin başındaki "$" işaretini atlayarak aynı fonksiyonu çağırır
    } else { // Değer bir dizi değilse, doğrudan kullanır
      cevap = response + " ";
    }
    return cevap.trim();
  } else {
    return null;
  }
}
function random_choice(array) {
  // Bir dizi alır ve rastgele bir eleman döndürür
  return array[Math.floor(Math.random() * array.length)];
}
function ai_cevapla(metin) {
  metin = metin.toLowerCase().replace("?", "").replace("!", "").replace(".", "").replace(",", "");
  let cevap = "";
  var test = "";
  var test1 = single_thread(metin);
  var test2 = multi_thread(metin);
  var test3 = quad_thread(metin);
  if(test1!=null && test1!=""){
    test+=test1+"<br>";
  }
  if(test2!=null && test2!=""){
    test+=test2+"<br>";
  }
  if(test3!=null && test3!=""){
    test+=test3;
  }
  if (test == "") {
  return markdown_to_html_link(random_choice(data["multi"]["default"]).trim()); // random_choice fonksiyonunu kullanın
  } else {
    return markdown_to_html_link(test);
  }
}
var cache_military=0;
var cache_kpop=0;
var cache_nazi=0;
var cache_dtw=0;
var cache_bts_sozler=0;
var cache_bos_yap_k=0;
var cache_bos_yap_n=0;
var cache_bos_yap_nj=0;
var cache_seksi_kpop=0;
var cache_sikilmamalik_videolar=0;
var cache_troll_kpop_sozler=0;
var cache_stalin_soz=0;
var cache_tatil_music=0;
var cache_sozler_v1=0;
function xxx(string) {
  if (string == "military"){
    if(cache_military>=military.length){
      cache_military=0;
    }
    var random = military[cache_military]; // Diziden rastgele bir eleman seçin
    cache_military++;
    var link = random.split(",")[0]; // Seçilen elemanın ilk kısmını link olarak alın
    var description = random.split(",")[1]; // Seçilen elemanın ikinci kısmını description olarak alın
    return "<a href='" + link + "' target='_blank' style='color:#f60000;'>" + description + "</a>"; // HTML bağlantısını oluşturun
  }
  if (string == "kpop"){
    if(cache_kpop>=kpop.length){
      cache_kpop=0;
    }
    var random = kpop[cache_kpop]; // Diziden rastgele bir eleman seçin
    cache_kpop++;
    var link = random.split(",")[0]; // Seçilen elemanın ilk kısmını link olarak alın
    var description = random.split(",")[1]; // Seçilen elemanın ikinci kısmını description olarak alın
    return "<a href='" + link + "' target='_blank' style='color:#f60000;'>" + description + "</a>"; // HTML bağlantısını oluşturun
  }
  if (string == "sikilmamalik_videolar"){
    if(cache_sikilmamalik_videolar>=sikilmamalik_videolar.length){
      cache_sikilmamalik_videolar=0;
    }
    var random = sikilmamalik_videolar[cache_sikilmamalik_videolar]; // Diziden rastgele bir eleman seçin
    cache_sikilmamalik_videolar++;
    var link = random.split(",")[0]; // Seçilen elemanın ilk kısmını link olarak alın
    var description = random.split(",")[1]; // Seçilen elemanın ikinci kısmını description olarak alın
    return "<a href='" + link + "' target='_blank' style='color:#f60000;'>" + description + "</a>"; // HTML bağlantısını oluşturun
  }
  if (string == "nazi"){
    if(cache_nazi>=nazi.length){
      cache_nazi=0;
    }
    var random = nazi[cache_nazi]; // Diziden rastgele bir eleman seçin
    cache_nazi++;
    return "<br>" + random; // HTML bağlantısını oluşturun
  }
  if (string == "dtw"){
    if(cache_dtw>=dtw.length){
      cache_dtw=0;
    }
    var random = dtw[cache_dtw]; // Diziden rastgele bir eleman seçin
    cache_dtw++;
    var link = random.split(",")[0]; // Seçilen elemanın ilk kısmını link olarak alın
    var description = random.split(",")[1]; // Seçilen elemanın ikinci kısmını description olarak alın
    return "<a href='" + link + "' target='_blank' style='color:#f60000;'>" + description + "</a>"; // HTML bağlantısını oluşturun
  }
  if (string == "seksi_kpop"){
    if(cache_seksi_kpop>=seksi_kpop.length){
      cache_seksi_kpop=0;
    }
    var random = seksi_kpop[cache_seksi_kpop]; // Diziden rastgele bir eleman seçin
    cache_seksi_kpop++;
    var link = random.split(",")[0]; // Seçilen elemanın ilk kısmını link olarak alın
    var description = random.split(",")[1]; // Seçilen elemanın ikinci kısmını description olarak alın
    return "<a href='" + link + "' target='_blank' style='color:#f60000;'>" + description + "</a>"; // HTML bağlantısını oluşturun
  }
  if (string == "tatil_music"){
    if(cache_tatil_music>=tatil_music.length){
      cache_tatil_music=0;
    }
    var random = tatil_music[cache_tatil_music]; // Diziden rastgele bir eleman seçin
    cache_tatil_music++;
    var link = random.split(",")[0]; // Seçilen elemanın ilk kısmını link olarak alın
    var description = random.split(",")[1]; // Seçilen elemanın ikinci kısmını description olarak alın
    return "<a href='" + link + "' target='_blank' style='color:#f60000;'>" + description + "</a>"; // HTML bağlantısını oluşturun
  }
  if (string == "bts_sozler"){
    if(cache_bts_sozler>=bts_sozler.length){
      cache_bts_sozler=0;
    }
    var random = bts_sozler[cache_bts_sozler]; // Diziden rastgele bir eleman seçin
    cache_bts_sozler++;
    return "<br>" + random; // HTML bağlantısını oluşturun
  }
  if (string == "bos_yap_k"){
    if(cache_bos_yap_k>=bos_yap_k.length){
      cache_bos_yap_k=0;
    }
    var random = bos_yap_k[cache_bos_yap_k]; // Diziden rastgele bir eleman seçin
    cache_bos_yap_k++;
    return "<br>" + random; // HTML bağlantısını oluşturun
  }
  if (string == "bos_yap_n"){
    if(cache_bos_yap_n>=bos_yap_n.length){
      cache_bos_yap_n=0;
    }
    var random = bos_yap_n[cache_bos_yap_n]; // Diziden rastgele bir eleman seçin
    cache_bos_yap_n++;
    return "<br>" + random; // HTML bağlantısını oluşturun
  }
  if (string == "bos_yap_nj"){
    if(cache_bos_yap_nj>=bos_yap_nj.length){
      cache_bos_yap_nj=0;
    }
    var random = bos_yap_nj[cache_bos_yap_nj]; // Diziden rastgele bir eleman seçin
    cache_bos_yap_nj++;
    return "<br>" + random; // HTML bağlantısını oluşturun
  }
  if (string == "troll_kpop_sozler"){
    if(cache_troll_kpop_sozler>=troll_kpop_sozler.length){
      cache_troll_kpop_sozler=0;
    }
    var random = troll_kpop_sozler[cache_troll_kpop_sozler]; // Diziden rastgele bir eleman seçin
    cache_troll_kpop_sozler++;
    return "<br>" + random; // HTML bağlantısını oluşturun
  }
  if (string == "stalin_soz"){
    if(cache_stalin_soz>=stalin_soz.length){
      cache_stalin_soz=0;
    }
    var random = stalin_soz[cache_stalin_soz]; // Diziden rastgele bir eleman seçin
    cache_stalin_soz++;
    return "<br>" + random; // HTML bağlantısını oluşturun
  }
  if (string == "sozler_v1"){
    if(cache_sozler_v1>=sozler_v1.length){
      cache_sozler_v1=0;
    }
    var random = sozler_v1[cache_sozler_v1]; // Diziden rastgele bir eleman seçin
    cache_sozler_v1++;
    return "<br>" + random; // HTML bağlantısını oluşturun
  }
}
function replace_with_xxx(string) {
    let regex = /\{([^}]+)\}/g; // Stringin içinde {} olan kısmı tanımlayan bir regex oluşturun
    let callback = function(match, text) { // Replace metodu için bir callback fonksiyonu tanımlayın
        return xxx(text); // Callback fonksiyonu xxx fonksiyonunun çıktısını döndürür
    }
    let result = string.replace(regex, callback); // Stringin içinde regex ile eşleşen kısmı callback fonksiyonu ile değiştirir
    return result; // Sonucu döndürür
}
function markdown_to_html_link(markdown) {
    let regex = /\[([^\]]+)\]\(([^)]+)\)/g; // Markdown bağlantısını tanımlayan bir düzenli ifade, "g" bayrağı ile global arama yapar
    let html = markdown; // HTML dizesini markdown dizisi ile başlatır
    let match; // Eşleşmeyi tutacak bir değişken
    while (match = regex.exec(markdown)) { // Markdown dizesindeki tüm eşleşmeleri bulur
        let description = match[1]; // İlk grup açıklamadır
        let link = match[2]; // İkinci grup bağlantıdır
        let html_link = "<a href='" + link + "' target='_blank' style='color:#f60000;'>" + description + "</a>"; // HTML bağlantısını oluşturur
        html = html.replace(match[0], html_link); // HTML dizesindeki markdown bağlantısını HTML bağlantısı ile değiştirir
    }
    return replace_with_xxx(html); // HTML dizesini döndürür
}