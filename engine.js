function shuffle (array) { // Karıştırma fonksiyonunu tanımlayın
  let currentIndex = array.length, randomIndex; // Mevcut indeks ve rastgele indeks değişkenlerini tanımlayın
  // Karıştırılacak eleman kalmayana kadar
  while (currentIndex != 0) {
    // Bir eleman seçin
    randomIndex = Math.floor (Math.random () * currentIndex);
    currentIndex--;
    // Seçilen elemanı mevcut elemanla değiştirin
    [array [currentIndex], array [randomIndex]] = [
      array [randomIndex], array [currentIndex]];
  }
  return array; // Diziyi döndürün
}
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
    "sevme":[],"nasıl":[],"love":[],"kötü":[],"fart":[],"sevgili":[],"renk":[],"milliyet":[]
  };
  for (let key of Object.keys(data["quad"])) { // data["quad"] nesnesinin tüm anahtarlarını döngü ile gez
    if (key.startsWith("dataset")) { // Anahtarın "dataset" ile başlayıp başlamadığını kontrol et
      if (data["quad"][key].hasOwnProperty("n")) { // Anahtarın değerinin "n" özelliği olup olmadığını kontrol et
        let value = data["quad"][key]["n"]; // "n" özelliğinin değerini al
        let parts = value.split("/"); // Değeri "/" ile ayır ve bir diziye at
        for (let part of parts) { // Dizinin tüm elemanlarını döngü ile gez
          if (text.includes(part.replace("+"," "))) { // Metnin part değerini içerip içermediğini kontrol et
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
    if (e.includes("+")) { // e değerinin içinde + olup olmadığını kontrol et
      let parts = e.split("+"); // e değerini + ile ayır ve bir diziye at
      let last = parts[parts.length - 1]; // Dizinin son elemanını al
      let result = e+"/"+last+"ımı/"+last+"imi/"+last+"nı/"+last+"ni/"+last+"ı/"+last+"i/"+last+"mi/"+last+"ğı/"+last+"yi/"+last+"yı/"+last+"mı/"+last+"am/"+last+"dan/"+last+"den/"+last+"ten/"+last+"tan"; // Sonucu oluştur
      for (let i = 0; i < parts.length - 1; i++) { // Dizinin ilk elemanından sondan bir önceki elemanına kadar döngü ile gez
        let part = parts[i]; // Dizinin i. elemanını al
        result += "/"+part+last; // Sonuca part+last değerini ekle
      }
      return result; // Sonucu döndür
    } else { // e değerinin içinde + yoksa
      return e+"/"+e+"ımı/"+e+"imi/"+e+"nı/"+e+"ni/"+e+"ı/"+e+"i/"+e+"mi/"+e+"ğı/"+e+"yi/"+e+"yı/"+e+"mı/"+e+"am/"+e+"dan/"+e+"den/"+e+"nın/"+e+"nin/"+e+"ten/"+e+"un/"+e+"ın/"+e+"in/"+e+"tan";
    }
  }  
  function _a(item) {
    var parts = item.split("/"); // item[0] değerini "/" ile ayır ve bir diziye at
    let result = "";
    let result1 = [];
    for (let i = 0; i < parts.length; i++) { // Dizinin tüm elemanlarını döngü ile gez
      let part = parts[i]; // Dizinin i. elemanını al
      if (part.includes("+")) { // Elemanın "+" içerip içermediğini kontrol et
        result1.push(part);
      } else { // Eleman "+" içermiyorsa
        result += part + "/"; // Sonuca elemanı ve "/" ekleyin
      }
    }
    result = result.slice(0, -1);
    if(result!=""){
      result1.push(result);
    }
    return result1;
  }
  for (let item of wait_dataset_cache["sevme"]) {
    var result = _a(item[0]);
    for (let element of result) {
    var _cache_dataset_data = ekler(element);
    var dataset = _cache_dataset_data+"+sevecen/seviyore/siver/sever/seviyor/sevyon/sev/seviyon/sewyon/seyon+musun/misin/mısın/müsün/mu/sun/san/sen/mi/cin,ben/sen/o/biz/siz/onlar/beni/seni/onu/onları/sizi/kendimi/sizleri/düşüncelerin+"+_cache_dataset_data+"+sevecen/seviyore/siver/sever/seviyor/sevyon/sev/seviyon/sewyon/seyon+musun/misin/mısın/müsün/mu/sun/san/sen/mi/cin,"+_cache_dataset_data+"+sevecen/seviyore/siver/sever/seviyor/sevyon/sev/seviyon/sewyon/seyon+musun/misin/mısın/müsün/mu/sun/san/sen/mi/cin,ben/sen/o/biz/siz/onlar/beni/seni/onu/onları/sizi/kendimi/sizleri/düşüncelerin,"+_cache_dataset_data+"+sevecen/seviyore/siver/sever/seviyor/sevyon/sev/seviyon/sewyon/seyon/musun/misin/mısın/müsün/mu/sun/san/sen/mi/cin/seviyorum/sevyom+ben/sen/o/biz/siz/onlar/beni/seni/onu/onları/sizi/kendimi/sizleri+mu/mü/ki/ben/sen/o/biz/siz/onlar/onları/düşüncelerin=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"sevme",element);
    cevap += cevapx;
    }
  }
  for (let item of wait_dataset_cache["nasıl"]) {
    var result = _a(item[0]);
    for (let element of result) {
    var _cache_dataset_data = ekler(element);
    var dataset = _cache_dataset_data+"+nasıl/iyi/sence/hakkında+mi/iyi/nasıl/sizce/yer/bahset/anlat/düşünüyorsun/düşünüyon/düşündün/anlatsana/açıkla/açıklasana/konuş/konuşsana,"+_cache_dataset_data+"+nasıl/sence/bahset/bahsetsene/anlat,"+_cache_dataset_data+"+yi/din/den/dan/tan/ten/a/e/o/yu/yü+nasıl/iyi/sence/hakkında/mi/iyi/nasıl/sizce/yer/bahset/anlat=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"nasıl",element);
    cevap += cevapx;
    }
  }
  for (let item of wait_dataset_cache["love"]) {
    var result = _a(item[0]);
    for (let element of result) {
    var _cache_dataset_data = ekler(element);
    var dataset = _cache_dataset_data+"+e/aşık/aşk/aşıq/seksi/seksilik/seksiliği/ateşli/azıyor/azdın/ateşliliği/ateşi/sexy/sexyliği/hottest/çekici/çekiciliği/çekci/tatlı/gideri/a+sanırım/özelliği/özellikleri/var/varmı/mi/mı/sence/nasıl/seviyesi/buldun/buluyorsun/beğeniyorsun/anladın/anlatsana/mısın/misin,"+_cache_dataset_data+"+nasıl/sence/bahset/bahsetsene/anlat,"+_cache_dataset_data+"+gideri/yi/din/den/dan/tan/ten/a/e/o/yu/yü+var/özelliği/özellikleri+mı/mi/varmı/var/sence,"+_cache_dataset_data+"+hoşlanıyonmu/hoşlanıyorsun/hoşlanıyorsan/hoşlanıyon/hoşlanıyormusun=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"love",element);
    cevap += cevapx;
    }
  }
  for (let item of wait_dataset_cache["kötü"]) {
    var result = _a(item[0]);
    for (let element of result) {
    var _cache_dataset_data = ekler(element);
    var dataset = _cache_dataset_data+"+kötü/iğrenç/berbat/rezil/kalitesiz/beceriksiz/vasıfsız/gereksiz/rezil/berbat/yeteneksiz/nefret/sevmiyom/beğenmiyom/beğenmiyorum,"+_cache_dataset_data+"+kötü/iğrenç/berbat/rezil/kalitesiz/beceriksiz/vasıfsız/gereksiz/rezil/berbat/yeteneksiz/nefret/sevmiyom/beğenmiyom/beğenmiyorum+ediyorum/kesinlikle/ettim/edicem/etyom/edyom/ben/sen/biz/siz/onlar=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"kötü",element);
    cevap += cevapx;
    }
  }
  for (let item of wait_dataset_cache["fart"]) {
    var result = _a(item[0]);
    for (let element of result) {
    var _cache_dataset_data = ekler(element);
    var dataset = _cache_dataset_data+"+osurur/osurdu/sıçtı/yellendi/zortladı/osuruyor/yelleniyor+mu/mi/mı=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"fart",element);
    cevap += cevapx;
    }
  }
  for (let item of wait_dataset_cache["sevgili"]) {
    var result = _a(item[0]);
    for (let element of result) {
    var _cache_dataset_data = ekler(element);
    var dataset = _cache_dataset_data+"+sevgilisi/manitası/aşık/sevgilisinden/sevgilisini+mı/kim/belli/var/varmı/bahset/anlat=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"sevgili",element);
    cevap += cevapx;
    }
  }
  for (let item of wait_dataset_cache["renk"]) {
    var result = _a(item[0]);
    for (let element of result) {
    var _cache_dataset_data = ekler(element);
    var dataset = _cache_dataset_data+"+sevdiği/ensevdiği/seveceği/beğendiği/favori+renk/rengi/renki=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"renk",element);
    cevap += cevapx;
    }
  }
  for (let item of wait_dataset_cache["milliyet"]) {
    var result = _a(item[0]);
    for (let element of result) {
    var _cache_dataset_data = ekler(element);
    var dataset = _cache_dataset_data+"+ulusu/ırkı/milliyeti/hangi+ırk/ıraktan/milliyetten/ne/nedir,"+_cache_dataset_data+"+nereli/nereden=this";
    var [cevapx, database_0] = quad_core([dataset,text,item[1]],database_0,"milliyet",element);
    cevap += cevapx;
    }
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
function rand_single() {
  let keys = Object.keys(data["single"]); // data["single"] nesnesinin tüm anahtarlarını bir diziye at
  let randomKey = keys[Math.floor(Math.random() * keys.length)]; // Diziden rastgele bir anahtar seç
  return single_thread(randomKey); // Seçilen anahtarı single_thread fonksiyonuna gönder ve sonucu döndür
}
function rand_multi() {
  let keys = Object.keys(data["multi"]); // data["multi"] nesnesinin tüm anahtarlarını bir diziye at
  let scKeys = keys.filter(key => key.startsWith("sc")); // Diziden sadece "sc" ile başlayan anahtarları seç ve bir diziye at
  if (scKeys.length > 0) { // scKeys dizisinin boş olup olmadığını kontrol et
    let randomKey = scKeys[Math.floor(Math.random() * scKeys.length)]; // Diziden rastgele bir anahtar seç
    let value = data["multi"][randomKey]; // Seçilen anahtarın değerini al
    if (Array.isArray(value)) { // Değerin bir dizi olup olmadığını kontrol et
      value = value[Math.floor(Math.random() * value.length)]; // Diziden rastgele bir eleman seç
    }
    return value; // Değeri döndür
  } else { // scKeys dizisi boşsa
    return null; // null döndür
  }
}
function rand_quad() {
  let keys = Object.keys(data["quad"]); // data["quad"] nesnesinin tüm anahtarlarını bir diziye at
  let datasetKeys = keys.filter(key => key.startsWith("dataset")); // Diziden sadece "dataset" ile başlayan anahtarları seç ve bir diziye at
  if (datasetKeys.length > 0) { // datasetKeys dizisinin boş olup olmadığını kontrol et
    let randomKey = datasetKeys[Math.floor(Math.random() * datasetKeys.length)]; // Diziden rastgele bir anahtar seç
    let subkeys = Object.keys(data["quad"][randomKey]); // Seçilen anahtarın değerinin tüm anahtarlarını bir diziye at
    let subkeysWithoutN = subkeys.filter(subkey => subkey != "n"); // Diziden sadece "n" olmayan anahtarları seç ve bir diziye at
    if (subkeysWithoutN.length > 0) { // subkeysWithoutN dizisinin boş olup olmadığını kontrol et
      let randomSubkey = subkeysWithoutN[Math.floor(Math.random() * subkeysWithoutN.length)]; // Diziden rastgele bir anahtar seç
      let value = data["quad"][randomKey][randomSubkey]; // Seçilen anahtarın değerini al
      if (Array.isArray(value)) {
        value = value[Math.floor(Math.random() * value.length)]; // Diziden rastgele bir eleman seç
        return value;
      } else {
        if (value.startsWith("$")) { // Değerin "$" ile başlayıp başlamadığını kontrol et
          let key = value.slice(1); // Değerin "$" işaretinden sonraki kısmını al
          if (key in data["quad"][randomKey]) { // key değerinin data["quad"] nesnesinde olup olmadığını kontrol et
            value = data["quad"][randomKey][key]; // key değerinin data["quad"] nesnesindeki değerini al
            if (Array.isArray(value)) { // Değerin bir dizi olup olmadığını kontrol et
              value = value[Math.floor(Math.random() * value.length)]; // Diziden rastgele bir eleman seç
              return value;
            } else {
              return value;
            }
          }
        } else {
          return value;
        }
      }
    } else { // subkeysWithoutN dizisi boşsa
      return null; // null döndür
    }
  } else { // datasetKeys dizisi boşsa
    return null; // null döndür
  }
}
function shuffle_array(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function del_fff(test){
  let regex = /\{.*?\}/g; // süslü parantezler arasındaki kısımları eşleştiren regex'i tanımla
  let regex1 = /\[.*?\]\(.*?\)/g;
  return test.replace(regex, "").replace(regex1, "").replace("<br>"," "); // eşleşen kısımları boşlukla değiştir
}
function ai_cevapla(metin,onlytext=false) {
  var test = "";
  // /enc text123hello -k 123456789 yazınca key değişkenine sorunsuz alıyor ama text değişkeni boş oluyor hep
  let args = metin.split(" "); // metin.split(" ") yerine metin.split() kullanıyoruz
  let text = null; // text değişkenini varsayılan olarak null tanımlıyoruz
  let key = null; // key değişkenini varsayılan olarak null tanımlıyoruz
  if (metin.startsWith('/')) { // metin değişkeni / ile başlıyorsa bu bloğu çalıştırıyoruz
    if (['kpop','müzik','şarkı','music','m'].includes(args[0].toLowerCase().slice(1))) {
      if (args.includes('-s')) {
        let key_index = args.indexOf('-s') + 1;
        key = args[key_index]; // key değişkenine -k argümanının değerini atıyoruz
        if (key_index == 2) { // -k argümanı ikinci sırada ise
          text = args.slice(3).join(" "); // text değişkenine -k argümanından sonraki tüm argümanları birleştirerek atıyoruz
        } else { // -k argümanı ikinci sırada değilse
          text = args.slice(1, key_index - 1).join(" "); // text değişkenine ilk ve -k argümanları arasındaki tüm argümanları birleştirerek atıyoruz
        }
      } else {
        text = args.slice(1).join(" "); // text değişkenine ilk argümandan sonraki tüm argümanları birleştirerek atıyoruz
      }
      if(key==null) {
        test += "{kpop:5}";
      }else{
        if (isNaN(key) && key!="all") {
          // eğer rakam veya sayı değilse, Number() fonksiyonu ile dönüştür
          key = Number(key);
          test += "{kpop:"+key+"}";
        }else if(key=="all") {
          test += "{kpop:all}";
        }else{
          test += "{kpop:"+key+"}";
        }
      }
      // alert(text);
      // alert(key);
      // ...
    }
    if(onlytext==false){
      if (['die','kill','clear','cls'].includes(args[0].toLowerCase().slice(1))) {
        window.location='';
        test += "İşleniyor...";
      }
      if (['note','notepad','notdefteri','not'].includes(args[0].toLowerCase().slice(1))) {
        showCacheInMain('cache_note');
        test += "İşleniyor...";
      }
      if (['cm','commands','comands'].includes(args[0].toLowerCase().slice(1))) {
        showCacheInMain('cache_commands');
        test += "İşleniyor...";
      }
    }
  }

  metin = metin.toLowerCase().replace("?", "").replace("!", "").replace(".", "").replace(",", "");
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
  var array = [1,2,3];
  array = shuffle_array(array);
  array = [array[0]];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) {
      test += rand_single() + " ";
    }
    else if (array[i] == 2) {
      test += rand_multi() + " ";
    }
    else if (array[i] == 3) {
      test += rand_quad() + " ";
    }
    if (i != array.length - 1) {
      test += " ";
    }
  }
  if (test.endsWith("<br>")) { // Değişkenin "<br>" ile bitip bitmediğini kontrol et
    test = test.slice(0, -4); // Değişkenin son 4 karakterini sil
  }
    if(onlytext==true){
      return del_fff(test);
    }else{
      return markdown_to_html_link(test);
    }
  } else {
    if (test.endsWith("<br>")) { // Değişkenin "<br>" ile bitip bitmediğini kontrol et
      test = test.slice(0, -4); // Değişkenin son 4 karakterini sil
    }
    if(onlytext==true){
      return del_fff(test);
    }else{
      return markdown_to_html_link(test);
    }
  }
}
var cache_ds = {};
for (let key of Object.keys(data["set"])) { // data["set"] nesnesinin tüm anahtarlarını döngü ile gez
  cache_ds[key] = 0; // cache_ds nesnesine anahtarları 0 değeri ile ekle
  shuffle(data["set"][key]);
}

function link(data) {
  var link = data.split(",")[0]; // Seçilen elemanın ilk kısmını link olarak alın
  var description = data.split(",")[1]; // Seçilen elemanın ikinci kısmını description olarak alın
  return "<a href='" + link + "' target='_blank' style='color:#f60000;'>" + description + "</a><br>"; // HTML bağlantısını oluşturun
}
function xxx(string, length = 0) {
  for (let key of Object.keys(data["set"])) { // data["set"] nesnesinin tüm anahtarlarını döngü ile gez
    if (key.startsWith("link")) { // Anahtarın "link" ile başlayıp başlamadığını kontrol et
      if (key.slice(5) == string) {
        let array = data["set"][key]; // Anahtarın değerini bir diziye at
        if (array.length > 0) { // Dizinin boş olup olmadığını kontrol et
          if (cache_ds[key] >= array.length) {
            cache_ds[key] = 0;
          }
          if (length === 'all') { // Eğer length parametresi 'all' ise
            var result = ''; // Sonucu tutacak bir değişken tanımla
            for (let item of array) { // Dizinin tüm elemanlarını döngü ile gez
              result += link(item); // Her elemanı link fonksiyonu ile işle ve sonuca ekle
            }
            return result; // Sonucu döndür
          } else if (length > 0) { // Eğer length parametresi pozitif bir sayı ise
            var result = ''; // Sonucu tutacak bir değişken tanımla
            for (let i = 0; i < length; i++) { // Length kadar döngü yap
              result += link(array[cache_ds[key]]); // Diziden sırayla bir eleman seçin ve link fonksiyonu ile işle ve sonuca ekle
              cache_ds[key]++; // Cache değerini artırın
              if (cache_ds[key] >= array.length) { // Eğer cache değeri dizinin uzunluğunu aşıyorsa
                cache_ds[key] = 0; // Cache değerini sıfırlayın
              }
            }
            return result; // Sonucu döndür
          } else { // Eğer length parametresi yoksa veya sıfır ise
            var random = link(array[cache_ds[key]]); // Diziden rastgele bir eleman seçin
            cache_ds[key]++;
            return random;
          }
        }
      }
    }
    if (key.startsWith("p")) { // Anahtarın "p" ile başlayıp başlamadığını kontrol et
      if (key.slice(2) == string) {
        let array = data["set"][key]; // Anahtarın değerini bir diziye at
        if (array.length > 0) { // Dizinin boş olup olmadığını kontrol et
          if (cache_ds[key] >= array.length) {
            cache_ds[key] = 0;
          }
          if (length === 'all') { // Eğer length parametresi 'all' ise
            var result = ''; // Sonucu tutacak bir değişken tanımla
            for (let item of array) { // Dizinin tüm elemanlarını döngü ile gez
              result += item + "<br>"; // Her elemanı sonuca ekle ve sonuna <br> koy
            }
            return result; // Sonucu döndür
          } else if (length > 0) { // Eğer length parametresi pozitif bir sayı ise
            var result = ''; // Sonucu tutacak bir değişken tanımla
            for (let i = 0; i < length; i++) { // Length kadar döngü yap
              result += array[cache_ds[key]] + "<br>"; // Diziden sırayla bir eleman seçin ve sonuca ekle ve sonuna <br> koy
              cache_ds[key]++; // Cache değerini artırın
              if (cache_ds[key] >= array.length) { // Eğer cache değeri dizinin uzunluğunu aşıyorsa
                cache_ds[key] = 0; // Cache değerini sıfırlayın
              }
            }
            return result; // Sonucu döndür
          } else { // Eğer length parametresi yoksa veya sıfır ise
            var random = array[cache_ds[key]] + "<br>"; // Diziden rastgele bir eleman seçin ve sonuna <br> koy
            cache_ds[key]++;
            return random;
          }
        }
      }
    }
  }
}
function replace_with_xxx(string) {
  let regex = /\{([^}:]+)(?::([^}]+))?\}/g; // Stringin içinde {text}, {text:10}, {text:all} veya {text:10ü} gibi olan kısmı tanımlayan bir regex oluşturun
  let callback = function(match, text, length) { // Replace metodu için bir callback fonksiyonu tanımlayın
      if (length) { // Eğer length parametresi varsa
          if (length === 'all') { // Eğer length parametresi 'all' ise
              return xxx(text, 'all'); // Callback fonksiyonu xxx fonksiyonunun çıktısını döndürür
          } else { // Eğer length parametresi sayı veya başka bir şey ise
              length = Number(length); // Length parametresini Number() fonksiyonu ile dönüştür
              if (isNaN(length)) { // Eğer length parametresi sayı değilse
                return xxx(text); // Callback fonksiyonu xxx fonksiyonunun çıktısını döndürür
              } else { // Eğer length parametresi sayı ise
                return xxx(text, length); // Callback fonksiyonu xxx fonksiyonunun çıktısını döndürür
              }
          }
      } else { // Eğer length parametresi yoksa
          return xxx(text); // Callback fonksiyonu xxx fonksiyonunun çıktısını döndürür
      }
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