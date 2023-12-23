// ! ||--------------------------------------------------------------------------------||
// ! ||                          Thematic Language Processing                          ||
// ! ||                     Like, About, Love, Dislike, Nationality                    ||
// ! ||--------------------------------------------------------------------------------||
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
      let result = e+"/"+last+"ımı/"+last+"imi/"+last+"nı/"+last+"ni/"+last+"ı/"+last+"i/"+last+"mi/"+last+"ğı/"+last+"yi/"+last+"yı/"+last+"mı/"+last+"am/"+last+"dan/"+last+"den/"+last+"lük/"+last+"lik/"+last+"cilik/"+last+"ci/"+last+"ciyim/"+last+"çılık/"+last+"cülük/"+last+"rizm/"+last+"izm/"+last+"zm/"+last+"nın/"+last+"nin/"+last+"ten/"+last+"tım/"+last+"ın/"+last+"in/"+last+"ite/"+last+"ma/"+last+"tan"; // Sonucu oluştur
      for (let i = 0; i < parts.length - 1; i++) { // Dizinin ilk elemanından sondan bir önceki elemanına kadar döngü ile gez
        let part = parts[i]; // Dizinin i. elemanını al
        result += "/"+part+last; // Sonuca part+last değerini ekle
      }
      return result; // Sonucu döndür
    } else { // e değerinin içinde + yoksa
      return e+"/"+e+"ımı/"+e+"imi/"+e+"nı/"+e+"ni/"+e+"ı/"+e+"i/"+e+"mi/"+e+"ğı/"+e+"yi/"+e+"yı/"+e+"mı/"+e+"am/"+e+"dan/"+e+"den/"+e+"lük/"+e+"lik/"+e+"cilik/"+e+"ci/"+e+"ciyim/"+e+"çılık/"+e+"cülük/"+e+"rizm/"+e+"izm/"+e+"zm/"+e+"nın/"+e+"nin/"+e+"ten/"+e+"tım/"+e+"un/"+e+"ın/"+e+"in/"+e+"ite/"+e+"ma/"+e+"tan";
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
// ! ||--------------------------------------------------------------------------------||
// ! ||                     Language Processing by Word Simulation                     ||
// ! ||                    Levenshtein, Normalized Cosine Similarity                   ||
// ! ||--------------------------------------------------------------------------------||
function levenshtein(text1, text2) {
  // Metinlerin uzunluklarını alın
  const len1 = text1.length;
  const len2 = text2.length;

  // Metinlerden biri boşsa, mesafe diğerinin uzunluğudur
  if (len1 === 0) return len2;
  if (len2 === 0) return len1;

  // Mesafeleri tutmak için bir matris oluşturun
  let matrix = [];

  // Matrisin ilk satırını ve sütununu doldurun
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Matrisin geri kalanını doldurun
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      // Metinlerin i ve j indisli harflerini karşılaştırın
      if (text1[i - 1] === text2[j - 1]) {
        // Eğer aynıysa, mesafe değişmez
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        // Eğer farklıysa, mesafe bir artar
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // Değiştirme
          matrix[i][j - 1] + 1, // Ekleme
          matrix[i - 1][j] + 1 // Silme
        );
      }
    }
  }

  // Matrisin sağ alt köşesindeki değer mesafedir
  return matrix[len1][len2];
}

// Metinler arasındaki benzeme oranını hesaplayan bir fonksiyon
function similarity(text1, text2) {
  // Metinlerin uzunluklarını alın
  const len1 = text1.length;
  const len2 = text2.length;

  // Metinlerden biri boşsa, benzeme oranı 0'dır
  if (len1 === 0 || len2 === 0) return 0;

  // Metinler arasındaki Levenshtein mesafesini bulun
  const distance = levenshtein(text1.toLowerCase(), text2.toLowerCase());

  // Benzeme oranını hesaplayın
  return 1 - distance / Math.max(len1, len2);
}

function similarity_1 (text1, text2) {
  // Metinleri harflerine ayırın ve küçük harfe dönüştürün
  const letters1 = text1.toLowerCase().split ("");
  const letters2 = text2.toLowerCase().split ("");
 
  // Metinler arasındaki benzeme oranını hesaplayın
  const matches = letters1.filter (letter => letters2.includes (letter)).length;
  const differences = letters1.length + letters2.length - 2 * matches;
 
  // Benzeme oranını hesaplayın
  return matches / (matches + differences);
 }
 function selectSentences (list, input, threshold) {
  // Seçilen cümleleri tutacak bir dizi tanımlayın
  const selected = [];
 
  // List içindeki her cümle için döngü başlatın
  for (let sentence of list) {
     // Cümle ile kullanıcının girdiği cümle arasındaki benzeme oranlarını hesaplayın
     const ratio1 = similarity (sentence, input); // Levenshtein mesafesi ile
     const ratio2 = similarity_1 (sentence, input); // Harf kesişimi ile

     // Benzeme oranlarının ortalamasını alın
     const average = (ratio1 + ratio2) / 2;

     // Ortalama eşik değerinden büyük veya eşitse, cümleyi seçin
     if (average >= threshold) {
       selected.push (sentence);
     }
  }
 
  // Seçilen cümleleri döndürün
  return selected;
 }
// Kullanıcının girdiği değeri list içindeki cümlelerle karşılaştıran bir fonksiyon tanımlayın
function compareInput (userInput, list, threshold) {
  // selectSentences fonksiyonunu kullanarak, benzeme oranı eşik değerinden büyük veya eşit olan cümleleri seçin
  const selected = selectSentences (list, userInput, threshold);
  // Seçilen cümlelerin sayısını kontrol edin
  if (selected.length === 0) {
    // Eğer hiç cümle seçilmediyse, bir hata mesajı döndürün
    return "";
  } else if (selected.length === 1) {
    // Eğer sadece bir cümle seçildiyse, o cümleyi ve benzeme oranlarını döndürün
    return [selected[0], (similarity(selected[0], userInput) + similarity_1(selected[0], userInput))/2];
  } else {
    // Eğer birden fazla cümle seçildiyse, benzeme oranlarının ortalamalarına göre sıralayın
    selected.sort((a, b) => ((similarity(b, userInput) + similarity_1(b, userInput)) / 2) - ((similarity(a, userInput) + similarity_1(a, userInput)) / 2));
    // En yüksek ortalama benzeme oranına sahip olan cümleyi ve benzeme oranlarını döndürün
    return [selected[0], (similarity(selected[0], userInput) + similarity_1(selected[0], userInput))/2];
  }
}
// ! ||--------------------------------------------------------------------------------||
// ! ||                        Precision Q&A Language Processing                       ||
// ! ||--------------------------------------------------------------------------------||
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
// ! ||--------------------------------------------------------------------------------||
// ! ||                      Simple Tokenized Language Processing                      ||
// ! ||--------------------------------------------------------------------------------||
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
// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Math Engine                                  ||
// ! ||--------------------------------------------------------------------------------||
// ! ||                           [+-*/^%], (), log([+-*/^%])                          ||
// ! ||--------------------------------------------------------------------------------||
// ! ||          (2^log((24^8)/8.6)*(1%1+(12-0.001*0.2))) = 13235.544601814112         ||
// ! ||--------------------------------------------------------------------------------||

function convertNegative(input) {
  // Replace all negative numbers (not enclosed in parentheses) with the same number enclosed in parentheses
  let result = input.replace(/(?<!\()\-\d+(\.\d+)?([eE][-+]?\d+)?/g, '($&)');

  // Add "+" sign to the left of ")" if it's not there
  result = result.replace(/\)\(/g, ')+(');
  result = result.replace(/(?<=[^\+\-\*\/\^\%])\(/g, '+(');


  // Return the result
  return result;
}
function removeExtraPlus(input) {
  // console.log("D1: "+input);
  // Remove "+" sign at the start of the string
  let result = input.replace(/^\+/, '');

  // Remove "+" sign inside parentheses
  result = result.replace(/\(\+/g, '(');
  result = result.replace(/\((\d+\.\d+|\d+)(?!\d)\)/g, function(match, p1) {
    return p1;
  });  
  // Return the result
  // console.log("D2: "+result);
  return result;
}


function evaluateMath(expression) {
  expression = removeExtraPlus(convertNegative(expression.replaceAll(",","."))).trim();
  // console.log(expression);
    let tokens = expression.split(/(\+|\*|\/|\^|\(|\)|\[|\]|%|(?<=\d)-(?=\d))/).filter(x => x.trim() !== "");
  
    let grouped = groupTokens(tokens);
  
    return evaluateGrouped(grouped);
  }
  function groupTokens(tokens) {
    let stack = [];
    let grouped = [];
    for (let token of tokens) {
      if (token === "(" || token === "[") { 
        stack.push(token);
      }
      else if (token === ")" || token === "]") { 
        while (stack.length > 0 && stack[stack.length - 1] !== "(" && stack[stack.length - 1] !== "[") { 
          grouped.push(stack.pop());
        }
        if (stack.length === 0) {
          throw new Error("Mismatched parentheses");
        }
        stack.pop();
      }
      else if (isOperator(token, tokens, tokens.indexOf(token))) {
        while (stack.length > 0 && isOperator(stack[stack.length - 1], tokens, tokens.indexOf(stack[stack.length - 1])) && hasHigherOrEqualPrecedence(stack[stack.length - 1], token)) {
          grouped.push(stack.pop());
        }
        stack.push(token);
      }
      else if (isNumber(token)) {
        grouped.push(token);
      }
      else {
        throw new Error("Invalid token: " + token);
      }
    }
    while (stack.length > 0) {
      if (stack[stack.length - 1] === "(" || stack[stack.length - 1] === ")" || stack[stack.length - 1] === "[" || stack[stack.length - 1] === "]") { 
        throw new Error("Mismatched parentheses");
      }
      grouped.push(stack.pop());
    }
    return grouped;
  }
  function evaluateGrouped(grouped) {
    let stack = [];
    for (let token of grouped) {
      if (isNumber(token)) {
  
        stack.push(parseFloat(token));
      }
      else if (isOperator(token, grouped, grouped.indexOf(token))) {
  
        let right = stack.pop();
        let left = stack.pop();
  
        if (right === undefined || left === undefined) {
  
          throw new Error("Insufficient operands");
        }
  
        stack.push(applyOperator(token, left, right));
      }
  
      else {
  
        throw new Error("Invalid token: " + token);
      }
    }
  
    if (stack.length === 1) {
  
      return stack.pop();
    }
  
    else {
  
      throw new Error("Too many operands");
    }
  }
  function isOperator(token, tokens, index) {
    if (token === "+" || token === "*" || token === "/" || token === "^" || token === "%") {
      return true;
    }
    else if (token === "-") {
      if ((index === 0 || tokens[index - 1] === "(" || tokens[index - 1] === "[") && (index === tokens.length - 1 || tokens[index + 1] === ")" || tokens[index + 1] === "]")) {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return false;
    }
   }
  function isNumber(token) {
    return !isNaN(token);
   }
  function getPrecedence(operator) {
    if (operator === "+" || operator === "-") {
       return 1;
    }
    else if (operator === "*" || operator === "/" || operator === "%") {
       return 2;
    }
    else if (operator === "^") {
       return 3;
    }
    else {
       return 0;
    }
   }
  function hasHigherOrEqualPrecedence(operator1, operator2) {
    return getPrecedence(operator1) >= getPrecedence(operator2);
   }
   function applyOperator(operator, left, right) {
    if (operator === "+") {
       return parseFloat((left + right).toFixed(16));
    }
    else if (operator === "-") {
       return parseFloat((left - right).toFixed(16));
    }
    else if (operator === "*") {
       return parseFloat((left * right).toFixed(16));
    }
    else if (operator === "/") {
       return parseFloat((left / right).toFixed(16));
    }
    else if (operator === "^") {
       return parseFloat(Math.pow(left, right).toFixed(16));
    }
    else if (operator === "%") {
       return parseFloat((left % right).toFixed(16));
    }
    else {
       return 0;
    }
   }

// String içindeki matematik ifadelerini ayıran fonksiyon
function splitMathExpressions(string) {
  // Matematik ifadelerini tutacak bir dizi oluştur
  let expressions = [];
  // Stringi işlem önceliklerine göre böl
  let parts = string.split("");
  // Her parçayı döngüyle kontrol et
  var cache_list = "";
  for (let part of parts) {
    // Eğer parça boş değilse ve bir matematik ifadesi ise, diziye ekle
    if (isMathExpression(part)) {
      cache_list += part;
    }else {
      if(part !== "" && cache_list.length !== 0){
        expressions.push(cache_list);
        cache_list = "";
      }
    }
  }
  expressions.push(cache_list);
  // Diziyi döndür
  return expressions;
}

// Bir stringin matematik ifadesi olup olmadığını kontrol eden fonksiyon
function isMathExpression(string) {
  // Matematik ifadesinin bir parçası olabilecek karakterleri tanımla
  let validChars = "0123456789.,+-/*()[]%^";
  // Stringin her karakterini döngüyle kontrol et
  for (let char of string) {
    // Eğer karakter geçerli karakterlerden biri değilse, false döndür
    if (!validChars.includes(char)) {
      return false;
    }
  }
  // Eğer stringin tüm karakterleri geçerli ise, true döndür
  return true;
}

// Eğer eleman logaritma işlemi içeriyorsa true döndüren bir fonksiyon tanımlayın
function isLog(element) {
  // Eğer eleman logaritma işlemi içeriyorsa
  if (/log\(\d+(\.\d+)?\)/.test(element)) {
    // true döndür
    return true;
  }
  // Aksi halde, false döndür
  return false;
}


// İfadeyi sayılar ve işaretler olarak ayıran bir fonksiyon tanımlayın
function splitMathExpressions_log(expression) {
  // İfade içindeki işaretleri bulun
  let signs = expression.match(/[\+\-\*\/\^%]/g);

  // İfade içindeki sayıları bulun
  let numbers = expression.split(/[\+\-\*\/\^%]/g);

  // Sayılar ve işaretler dizilerini döndürün
  return [numbers, signs];
}

function replaceLog(expression) {
  // Düzgün iç içe geçmiş parantezleri ele alacak düzenli ifade
  const regex = /log\(((?:[^()]|\([^()]*\))*)\)/g;

  return expression.replace(regex, function (match, group1) {
    let result = evaluateMath(group1);
    let logResult = Math.log10(Math.abs(result));
    if (result < 0) {
      logResult = -logResult;
    }
    return logResult.toString();
  });
}

// İfadeler dizisindeki her bir ifade için bir işlem fonksiyonu tanımlayın
function logcalculate(match) {
  // match değişkenini bir diziye dönüştürün
  match = Array.from(match);

  // match değişkeninin her bir elemanı için replaceLog fonksiyonunu çağırın
  match = match.map(replaceLog);

  // match değişkenini döndürün
  return match;
}
// (3+(3+3+([1+1+log(5)+log(3)-1%6+2-1/1%1]))

// matematik işlemini ayıklayan ve değerlendiren bir fonksiyon tanımla
function extractAndEvaluateMath(expression) {
  // matematik işlemini tanımlayan bir regular expression tanımla
  // bu regular expression, sayılar, operatörler ve parantezler içeren basit bir matematik işlemini yakalar
  // let regex = /(\d+(\.\d+)?\s*[\+\-\*\/\^]\s*|\(\s*)+(\d+(\.\d+)?)\s*(\s*[\+\-\*\/\^]\s*\d+(\.\d+)?|\s*\))*(\s|$)/;
  // let regex = /(\s|\()*(\d+(\.\d+)?\s*[\+\-\*\/\^%]?\s*|\(\s*)+(\d+(\.\d+)?)\s*(\s*[\+\-\*\/\^%]?\s*\d+(\.\d+)?|\s*\))*(\s|\))*$/;
  // let regex = /(.|\s|\()*(\d+(\.\d+)?\s*[\+\-\*\/\^%]?\s*|\(\s*)+(\d+(\.\d+)?)\s*(\s*[\+\-\*\/\^%]?\s*\d+(\.\d+)?|\s*\))*(\s|\))*$/;
// Regex'i basitleştirin

// İçindeki stringleri ayıklayan ama her şeyi matematik işlemi olarak kabul eden
// let regex = /(.|\s|\()*(\d+(\.\d+)?\s*[\+\-\*\/\^%]?\s*|\(\s*)+(\d+(\.\d+)?)\s*(\s*[\+\-\*\/\^%]?\s*\d+(\.\d+)?|\s*\))*(\s|\))*$/;
// İçindeki stringleri ayıklamayan ama her şeyi matematik işlemi kabul etmeyen
// let regex = /^\s*(\d+(?!\.)\.\d+|\d+|\(.*\))\s*([\+\-\*\/\^%]\s*(\d+(?!\.)\.\d+|\d+|\(.*\))\s*)*$/;
// Hem stringleri ayıklayabilen hem de her şeyi matematik işlemi olarak algılamayan regex


// Başarılı olan bu
// let regex = /(\d+(?!\.)\.\d+|\d+|\(.*\))\s*([\+\-\*\/\^%]\s*(\d+(?!\.)\.\d+|\d+|\(.*\))\s*)*/;

// let regex = /(\d+(?!\.)\.\d+|\d+|\(.*\))\s*([\+\-\*\/\^%]\s*(\d+(?!\.)\.\d+|\d+|\(.*\))\s*)*(?=\s*([^0-9\+\-\*\/\^%\(\)\s]+|[^0-9\+\-\*\/\^%\(\)\s][^0-9\+\-\*\/\^%\(\)]*)\s*|$)/g;



// let regex = /(\b\d+([.,]\d+)?|\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\))\s*([\+\-\*\/\^%]\s*(\b\d+([.,]\d+)?|\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\))\s*)+/g;
  
// let regex = /(\b\d+([.,]\d+)?|\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\)|\[(?:[^\[\]]*|\[(?:[^\[\]]*|\[[^\[\]]*\]\])*])\])\s*([\+\-\*\/\^%]\s*(\b\d+([.,]\d+)?|\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\)|\[(?:[^\[\]]*|\[(?:[^\[\]]*|\[[^\[\]]*\]\])*])\])\s*)+/g;


// En başarılı olanı
// let regex = /(\b\d+([.,]\d+)?|\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\)|\[(?:[^\[\]]*|\[(?:[^\[\]]*|\[[^\[\]]*\]\])*])\]|[a-z]+\d+\+\d+[a-z]+)\s*([\+\-\*\/\^%]\s*(\b\d+([.,]\d+)?|\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\)|\[(?:[^\[\]]*|\[(?:[^\[\]]*|\[[^\[\]]*\]\])*])\]|[a-z]+\d+\+\d+[a-z]+)\s*)+/g;

// Best V1
// let regex = /(\b\d+([.,]\d+)?|\((?:[^()]*|\([^()]*\))*\)|\[[^\[\]]*\]|[a-z]+\d+\+\d+[a-z]+)\s*([\+\-\*\/\^%]\s*(\b\d+([.,]\d+)?|\((?:[^()]*|\([^()]*\))*\)|\[[^\[\]]*\]|[a-z]+\d+\+\d+[a-z]+)\s*)+/g;

// let regex = /(\b\d+([.,]\d+)?|\((?:[^()]|\g<0>)*\)|\[[^\[\]]*\]|[a-z]+\d+\+\d+[a-z]+)\s*([\+\-\*\/\^%]\s*(\b\d+([.,]\d+)?|\((?:[^()]|\g<0>)*\)|\[[^\[\]]*\]|[a-z]+\d+\+\d+[a-z]+)\s*)*/g;

//BEST x4
// let regex = /(\b\d+([.,]\d+)?|\((?:[^()]*|\([^()]*\)|\((?:[^()]*|\([^()]*\))*\))*\)|\[(?:[^\[\]]*|\[[^\[\]]*\]|\[(?:[^\[\]]*|\[[^\[\]]*\])*\])*\]|[a-z]+\d+\+\d+[a-z]+)\s*([\+\-\*\/\^%]\s*(\b\d+([.,]\d+)?|\((?:[^()]*|\([^()]*\)|\((?:[^()]*|\([^()]*\))*\))*\)|\[(?:[^\[\]]*|\[[^\[\]]*\]|\[(?:[^\[\]]*|\[[^\[\]]*\])*\])*\]|[a-z]+\d+\+\d+[a-z]+)\s*)+/g;


// let regex = /(\b\d+([.,]\d+)?|\((?:[^()]*|\([^()]*\))*\)|\[(?:[^\[\]]*|\[\[[^\[\]]*\]\])*\]|\[[^\[\]]*\]|[a-z]+\d+\+\d+[a-z]+)\s*([\+\-\*\/\^%]\s*(\b\d+([.,]\d+)?|\((?:[^()]*|\([^()]*\))*\)|\[(?:[^\[\]]*|\[\[[^\[\]]*\]\])*\]|\[[^\[\]]*\]|[a-z]+\d+\+\d+[a-z]+)\s*)+/g;
// regex değişkenini, işlemleri gruplamak için parantez ekleyerek değiştirin
// let regex = /((\b\d+([.,]\d+)?|\((?:[^()]*|\([^()]*\))*\)|\[(?:[^\[\]]*|\[\[[^\[\]]*\]\])*\]|\[[^\[\]]*\]|[a-z]+\d+\+\d+[a-z]+)\s*([\+\-\*\/\^%]\s*(\b\d+([.,]\d+)?|\((?:[^()]*|\([^()]*\))*\)|\[(?:[^\[\]]*|\[\[[^\[\]]*\]\])*\]|\[[^\[\]]*\]|[a-z]+\d+\+\d+[a-z]+)\s*)+)/g;
try{

// [ ve ] işaretlerini ( ve ) işaretine dönüştür
expression = expression.toLowerCase().replace(/\[/g, '(').replace(/\]/g, ')').replace(/,/g, '.').replaceAll(/\?/g, "").replaceAll(/\=/g, "");



function removeSpacesX(str) {
  // Parantez içindeki boşlukları sil
  // str = str.replaceAll(/\s+(?=[^[]*\])/g, ""); // Köşeli parantez için
  // str = str.replaceAll(/\s+(?=[^(]*\))/g, ""); // Yuvarlak parantez için

  // Parantezin solundaki boşlukları düzelt
  // str = str.replaceAll(/\s+(?=[^[]*\[)/g, " "); // Köşeli parantez için
  // str = str.replaceAll(/\s+(?=[^(]*\()/g, ""); // Yuvarlak parantez için
  // console.log("V1: "+str);
  // str = str.replaceAll(/\s+(?=[+\-*/^%])/g, ""); // Matematiksel operatörlerin solu için
  // str = str.replaceAll(/(?<=[+\-*/^%])\s+/g, ""); // Matematiksel operatörlerin sağı için
  // Sayı, parantez ve operatörlerin sol tarafındaki boşlukları kontrol et ve sil
  str = str.replace(/([\d)])(\s+)(?=[+\-*/^%\d(])/g, "$1");

  // Sayı, parantez ve operatörlerin sağ tarafındaki boşlukları kontrol et ve sil
  str = str.replace(/(?<=[+\-*/^%\d)])\s*([\d(])/g, "$1");
  
  
  // console.log("V2: "+str);
  str = str.replaceAll(/log\s+(?=[+\-*/^%0123456789()\[\]])/g, "log");
  str = str.replaceAll(/\s+log(?=[+\-*/^%0123456789()\[\]])/g, "log");
  // console.log("V3: "+str);
  str = str.replaceAll(/(\d|[\+\-\*\/\^\%])\s+(?=\D)/g, "$&"); // Sayı veya operatör ile harf arasındaki boşluk için
  str = str.replaceAll(/\D\s+(?=(\d|[\+\-\*\/\^\%]))/g, "$&"); // Harf ile sayı veya operatör arasındaki boşluk için
  
  // Sayı veya operatör ile harf ve harf ile sayı veya operatör arasındaki boşlukları 1'e indir
  str = str.replaceAll(/(\d|[\+\-\*\/\^\%])\s{2,}(?=\D)/g, "$&"); // Sayı veya operatör ile harf arasındaki boşluk için
  str = str.replaceAll(/\D\s{2,}(?=(\d|[\+\-\*\/\^\%]))/g, "$&"); // Harf ile sayı veya operatör arasındaki boşluk için

  // str = str.replaceAll(/\s+(?<=\d)\s+(?=\D)/g, " "); // Sayı ile harf arasındaki boşluk için
  // str = str.replaceAll(/\s+(?<=\D)\s+(?=\d)/g, " "); // Harf ile sayı arasındaki boşluk için

  // // Sayı ile harf ve harf ile sayı arasındaki boşlukları 1'e indir
  // str = str.replaceAll(/\s{2,}(?<=\d)\s+(?=\D)/g, " "); // Sayı ile harf arasındaki boşluk için
  // str = str.replaceAll(/\s{2,}(?<=\D)\s+(?=\d)/g, " "); // Harf ile sayı arasındaki boşluk için

  return str;
}


expression = removeSpacesX(expression);
// let paren = "\\((?:[^()]*|\\(\\s*\\d+([.]\\d+)?\\)*)*\\)";
// let log = "\\s*log\\((?:[^()]*|\\(\\s*\\d+([.]\\d+)?\\)*)\\)\\s*([\\+\\-\\*\\/\\^%]\\s*\\d+([.]\\d+)?\\s*)*";
// let other = "\\s*\\d+([.]\\d+)?\\s*([\\+\\-\\*\\/\\^%]\\s*\\d+([.]\\d+)?\\s*)*";
// let regex = new RegExp(`(${log}|${other}|${paren})\\s*([\\+\\-\\*\\/\\^%]\\s*(${log}|${other}|${paren})\\s*)*`, "g");

function detectMathExpressions(str) {
  // İfadeler arasında boşluklar ve metinler olduğu için, metni boşluklara göre bölelim
  let parts = str.split(' ');

  // Matematiksel ifadeleri tutacak bir dizi oluşturalım
  let expressions = [];

  // Her bir parçayı kontrol edelim
  for (let part of parts) {
    // Eğer parça bir sayı veya matematiksel işlem içeriyorsa ve bu işlem bir sayı ile başlamıyorsa, diziye ekleyelim
    // if (/^(?=.*(?<!log\()log\()|^(?=.*\d+[+\-*/^%.0-9,()]*$)/.test(part) && !/^\d/.test(part)) {
    //   expressions.push(part);
    // }
    if (/^(?=.*(?<!log)\b\d+\b)(?=.*[+\-*/^%.0-9,()a-zA-Z])/.test(part)) {
      expressions.push(part);
    }
  }
  console.log("İŞLEM: " + expressions);

  // Matematiksel ifadeleri içeren diziyi döndürelim
  return expressions;
}



// console.log(expression);
let match = detectMathExpressions(expression);
// console.log(match);

  if (match) {
    for(let i = 0; i < match.length; i++) {
        let X = match[i];
        let isSingleNumber = /^(\d+(\.\d+)?)$/.test(X) || /^[\[(]\d+(\.\d+)?[\])]$/.test(X);
        if (isSingleNumber) {
          match.splice(i, 1);
            i--; // Dizinin boyutu azaldığı için indeksi azaltıyoruz
        }
    }
    if(match.length==0){return false;}
    

    
    try{
      // ONLY LIST/OBJECT
      // match = logcalculate(match);
    }catch(ex){console.log(ex);}
    // matematik işlemini al
    let regex = /[^0123456789.,+\-/*()[]%^]/g;
    var mathExpression=[];
    for (let i = 0; i < match.length; i++) {
        let input = match[i];
        if (regex.test(input)) {
          console.log("çalıştı: " + input);
            var _l = splitMathExpressions(removeSpaces(replaceLog(input)));
            for (let ix = 0; ix < _l.length; ix++) {
              mathExpression.push(_l[ix]);
            }
        } else {
            mathExpression.push(input)
        }
    }
    var output = "";
    for (let part of mathExpression) {
      let result = evaluateMath(replaceLog(part));
      output += part + "=" + result + "<br>";
    }
    return output;
  }
  // eğer bir matematik işlemi bulunmazsa
  else {
    // hata mesajı döndür
    return false;
  }
}catch(ex){console.log(ex);}
}


// String içindeki boşlukları kaldıran fonksiyon
function removeSpaces(string) {
  // Boşluk karakterini tanımlayan regular expression
  let regex = /\s/g;
  // Stringdeki boşluk karakterlerini boş string ile değiştir
  let newString = string.replace(regex, "");
  // Yeni stringi döndür
  return newString;
}
// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Other Functions                                ||
// ! ||--------------------------------------------------------------------------------||

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
function uint8ArrayToString(uint8Array) {
  return new TextDecoder().decode(uint8Array);
}
function StringTouint8Array(str) {
  return new TextEncoder().encode(str);
}
function base64_encode(array) {
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
function base64_decode(str) {
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
  return new Uint8Array(buffer);
}
function linkA(item) {
  return `<a href="${item.split(",")[1]}" style="color:#f60000;">${item.split(",")[0]}</a>`;
}
function listToLinks(list) {
  return list.map(linkA).join("<br>");
}
function link_thread(text) {
  text = text.trim().replace(/\s/g, "");
  if (text in data["link"]) {
    let response = data["link"][text];
    if (Array.isArray(response)) { // Değerin bir dizi olup olmadığını kontrol eder
      if (response.length == 1) {
        cevap = linkA(response[0]) + " ";
      } else {
        cevap = listToLinks(response) + " ";
      }
    } else if (typeof response == "string" && response.startsWith("$")) { // Değerin bir dize olup başında "$" işareti olup olmadığını kontrol eder
      cevap = link_thread(response.slice(1)); // Değerin başındaki "$" işaretini atlayarak aynı fonksiyonu çağırır
    } else { // Değer bir dizi değilse, doğrudan kullanır
      cevap = linkA(response) + " ";
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
function r_thread(text) {
  text = text.trim().replace(/\s/g, "");
  if (text in data["random"]) {
    let response = data["random"][text];
    if (Array.isArray(response)) { // Değerin bir dizi olup olmadığını kontrol eder
      if (response.length == 1) {
        cevap = response[0] + " ";
      } else {
        cevap = random_choice(response) + " ";
      }
    } else if (typeof response == "string" && response.startsWith("$")) { // Değerin bir dize olup başında "$" işareti olup olmadığını kontrol eder
      cevap = r_thread(response.slice(1)); // Değerin başındaki "$" işaretini atlayarak aynı fonksiyonu çağırır
    } else { // Değer bir dizi değilse, doğrudan kullanır
      cevap = response + " ";
    }
    return cevap.trim();
  } else {
    return null;
  }
}
function rand_r() {
  let keys = Object.keys(data["random"]); // data["single"] nesnesinin tüm anahtarlarını bir diziye at
  let randomKey = keys[Math.floor(Math.random() * keys.length)]; // Diziden rastgele bir anahtar seç
  return r_thread(randomKey); // Seçilen anahtarı single_thread fonksiyonuna gönder ve sonucu döndür
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
  test =  test.replace(regex, "").replace(regex1, "").replaceAll("<br>"," "); // eşleşen kısımları boşlukla değiştir
  return test;
}
var Wax0_ = '<iframe src="https://www.youtube.com/embed/';
var Wax1 = '" title="None" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
function ai_cevapla(metin,onlytext=false) {
  metin = metin.trim();
  var test = "";
  var _return = 0;
  var _x = extractAndEvaluateMath(metin);
  _x ? (test += _x,_return=1) : false;
  var _000 = youtubetest(metin);
  var ytpanelx = document.getElementById("ytpanel");
  if(_000 != false){
    ytpanelx.style.textAlign = "center";
    ytpanelx.style.setProperty('position', 'fixed');
    ytpanelx.style.setProperty('margin', '0 auto');
    ytpanelx.style.setProperty('max-width', '600px');
    ytpanelx.style.setProperty('width', '100%');
    ytpanelx.style.setProperty('height', 'auto');
    ytpanelx.style.setProperty('z-index', '1');
    ytpanelx.style.setProperty('min-height', '280px');
    ytpanelx.style.setProperty('max-height', '360px');
    ytpanelx.style.setProperty('bottom', '0');
    ytpanelx.style.setProperty('left', '0');
    ytpanelx.style.setProperty('right', '0');
    ytpanelx.style.bottom = 0;    
    ytpanelx.innerHTML = '<iframe src="https://www.youtube.com/embed/'+_000+'" title="None" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    let bg1 = document.getElementById("ytpanel").firstChild;
    bg1.style.setProperty('min-height', '280px');
    bg1.style.setProperty('max-height', '360px');
    bg1.style.setProperty('max-width', '600px');
    bg1.style.setProperty('width', '100%');
    bg1.style.setProperty('height', '100%');
    bg1.style.setProperty('z-index', '1');
    bg1.style.setProperty('bottom', '0');
    bg1.style.setProperty('left', '0');
    bg1.style.setProperty('right', '0');
    bg1.style.bottom = 0;
    bg1.style.borderRadius = "none";
    bg1.style.borderTopRightRadius = "25px";
    bg1.style.borderTopLeftRadius = "25px";
    bg1.style.backgroundColor = "transparent";
    ytpanelx.style.backgroundColor = "transparent";
    _return = 1;
    return "sil";
  }
  let args = metin.split(" "); // metin.split(" ") yerine metin.split() kullanıyoruz
  let text = null; // text değişkenini varsayılan olarak null tanımlıyoruz
  let key = null; // key değişkenini varsayılan olarak null tanımlıyoruz
  if (metin.startsWith('/')) { // metin değişkeni / ile başlıyorsa bu bloğu çalıştırıyoruz
    test += "%notr%";
    if (['müzik','şarkı','music','m'].includes(args[0].toLowerCase().slice(1))) {
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
      if (['clear','cls','delete','del'].includes(args[0].toLowerCase().slice(1))) {
        var __t = document.getElementById("messages");
        __t.innerHTML = "";
        return "sil";
      }
      if (['note','notepad','notdefteri','not'].includes(args[0].toLowerCase().slice(1))) {
        window.showCacheInMain('cache_note');
        return "sil";
      }
      if (['cm','commands','comands','komutlar','komut','help','helper','yardım'].includes(args[0].toLowerCase().slice(1))) {
        window.showCacheInMain('cache_commands');
        return "sil";
      }
      if (['kpop','kpoplist','gglist','girlgroup','girlgrouplist','gg'].includes(args[0].toLowerCase().slice(1))) {
        window.showCacheInMain('cache_kpop');
        return "sil";
      }
      if (['ws','websocket','websocketserver','wsserver'].includes(args[0].toLowerCase().slice(1))) {
        window.showCacheInMain('cache_websocket');
        return "sil";
      }
      if (['g','galeri','gallery','foto','fotoğraf',"fotoğraflar"].includes(args[0].toLowerCase().slice(1))) {
        window.showCacheInMain('gallery_x',true,true);
        gallery_s(foldersOLD);
        return "sil";
      }
      if (['config','ayar','ayarlar','configs'].includes(args[0].toLowerCase().slice(1))) {
        window.showCacheInMain('cache_config');
        return "sil";
      }
      if (['dp','db','deleteplayer','deletebg','deletebackground'].includes(args[0].toLowerCase().slice(1))) {
        var ytpanelx = document.getElementById("ytpanel");
        ytpanelx.removeAttribute("style");
        ytpanelx.style.borderTopLeftRadius = "25px";
        ytpanelx.style.borderTopRightRadius = "25px";
        ytpanelx.innerHTML = "<Youtube Embed Panel>";
        let bg1 = document.getElementById("ytpanel").firstChild;
        ytpanelx.style.backgroundColor = "transparent";
        bg1.style.backgroundColor = "transparent";
        return "sil";
      }
      if (['bg','background','arkaplan'].includes(args[0].toLowerCase().slice(1))) {
        try{
          let bg = document.getElementById("ytpanel");
          if(!bg.firstElementChild){return "Video Not Found%notr%%noeval%";}
          if(bg.firstElementChild.tagName!="IFRAME"){return "Video Not Found%notr%%noeval%";}
          bg.style.setProperty('max-height', '100%');
          bg.style.setProperty('max-width', '100%');
          bg.style.setProperty('width', '100%');
          bg.style.setProperty('height', '100%');
          bg.style.setProperty('z-index', '-1');
          bg.style.borderRadius = "0";
          let bg1 = document.getElementById("ytpanel").firstChild;
          bg1.style.setProperty('max-height', '100%');
          bg1.style.setProperty('max-width', '100%');
          bg1.style.setProperty('width', '100%');
          bg1.style.setProperty('height', '100%');
          bg1.style.setProperty('z-index', '-1');
          bg1.style.objectFit = "cover";
          bg1.style.borderRadius = "0";
          bg.style.backgroundColor = "black";
          bg1.style.backgroundColor = "black";
        }catch(ex){console.log(ex);}
        return "sil";
      }
      if (['kill','die','destroy','destruct',"destruction",'reset'].includes(args[0].toLowerCase().slice(1))) {
        // window.caches.keys().then(function(cacheNames) {
        //   cacheNames.forEach(function(cacheName) {
        //   window.caches.delete(cacheName);
        //   });
        // });
        // window.localStorage.clear();
        // window.sessionStorage.clear();
        localStorage.clear();
        sessionStorage.clear();
        var cookies = document.cookie;
        for (var i = 0; i < cookies.split(";").length; ++i)
        {
            var myCookie = cookies[i];
            var pos = myCookie.indexOf("=");
            var name = pos > -1 ? myCookie.substr(0, pos) : myCookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        var __t = document.getElementById("messages");
        __t.innerHTML = "";
      return "sil";
      }
      
    if (['dd','decryptdataset','decdataset','addencdataset'].includes(args[0].toLowerCase().slice(1))) {
      let name,key,round;
      if (args.includes('-n')) {
        let name_index = args.indexOf('-n') + 1;
        name = args[name_index];
      }else {
        return '/dd -n (dataset name) -s (key) -r (round number default:0)';
      }
      if (args.includes('-s')) {
        let key_index = args.indexOf('-s') + 1;
        key = args[key_index];
      }else {
        return '/dd -n (dataset name) -s (key) -r (round number default:0)';
      }
      if (args.includes('-r')) {
        let round_index = args.indexOf('-r') + 1;
        round = args[round_index];
      }else {
        round = "0";
      }
      try {
        enc_text_add_data(name,key,round);
        return "Başarılı";
      }catch(ex){
        return "Server >%notr% "+ex;
      }
    }
    if (['gd','gallerydecryptdataset','gallerydecdataset','galleryaddencdataset'].includes(args[0].toLowerCase().slice(1))) {
      let name,key,round;
      if (args.includes('-n')) {
        let name_index = args.indexOf('-n') + 1;
        name = args[name_index];
      }else {
        return '/gd -n (dataset name) -s (key) -r (round number default:0)';
      }
      if (args.includes('-s')) {
        let key_index = args.indexOf('-s') + 1;
        key = args[key_index];
      }else {
        return '/gd -n (dataset name) -s (key) -r (round number default:0)';
      }
      if (args.includes('-r')) {
        let round_index = args.indexOf('-r') + 1;
        round = args[round_index];
      }else {
        round = "0";
      }
      try {
        gallery_enc_text_add_data(name,key,round);
        return "Başarılı";
      }catch(ex){
        return "Server >%notr% "+ex;
      }
    }
    if (['sn','snote','snotes','secretnote','secretnotes'].includes(args[0].toLowerCase().slice(1))) {
      let name,key,round;
      if (args.includes('-n')) {
        let name_index = args.indexOf('-n') + 1;
        name = args[name_index];
      }else {
        return '/sn -n (dataset name) -s (key) -r (round number default:0)';
      }
      if (args.includes('-s')) {
        let key_index = args.indexOf('-s') + 1;
        key = args[key_index];
      }else {
        return '/sn -n (dataset name) -s (key) -r (round number default:0)';
      }
      if (args.includes('-r')) {
        let round_index = args.indexOf('-r') + 1;
        round = args[round_index];
      }else {
        round = "0";
      }
      try {
        return "Server >%notr% "+note_enc_text_read_data(name,key,round);
      }catch(ex){
        return "Server >%notr% "+ex;
      }
    }







    }
    if (['size','boyut','filesize','dosyaboyutu','datasetsize'].includes(args[0].toLowerCase().slice(1))) {
      if(onlytext==true){
        test += window.total_file_size;
      }else{
        sent__s(window.total_file_size);
        return "sil";
      }
    }
    if (['resetsize','checksize','checkfilesize','resetfilesize','resetsizes','checksizes'].includes(args[0].toLowerCase().slice(1))) {
      get_code_data(true).then(result => console.log("Reset File Size")).catch(error => console.error(error));
      return "sil";
    }
    if (['base64encode','b64encode','b64e'].includes(args[0].toLowerCase().slice(1))) {
      try{test += base64_encode(StringTouint8Array(args.slice(1).join(" ")));}catch(ex){test += "Base64 Encode İşlem Başarısız";}
    }
    if (['base64decode','b64decode','b64d'].includes(args[0].toLowerCase().slice(1))) {
      try{test += "%noeval%"+uint8ArrayToString(base64_decode(args.slice(1).join(" ")));}catch(ex){test += "Base64 Decode İşlem Başarısız";}
    }
    if(test=="%notr%"){
      return "Command not found"+" %notr%";
    }
  }

  metin = metin.toLowerCase().replaceAll("?", "").replaceAll("!", "").replaceAll(".", "").replaceAll(",", "");
  var regex = new RegExp(data.yasakli_kelime.join("|"));
  if (regex.test(metin)) {
    if(onlytext==false){kill();}
    return "sil";
  }
  var test_link = link_thread(metin);
  var test1 = single_thread(metin);
  var test2 = multi_thread(metin);
  var test3 = quad_thread(metin);
  if(test_link!=null && test_link!=""){
    test+=test_link+"<br>";
  }
  if(test1!=null && test1!=""){
    test+=test1+"<br>";
  }
  if(test2!=null && test2!=""){
    test+=test2+"<br>";
  }
  if(test3!=null && test3!=""){
    test+=test3+"<br>";
  }
//   let r = rand_r(); // rand_r() fonksiyonunun çıktısını r değişkenine atıyoruz
// result_0_data.contains(r) ? (array[i] = r + " ", result_0_data.remove(r)) : printf("Hata: rand_r() fonksiyonunun ciktisi result_0_data listinin icinde degil.\n");
  if (test.length < 500 && test != "sil" && (!metin.startsWith('/')) && _return == 0) {
    var r = random_generate_bonus(metin,1);
    result_0_data.indexOf(r) != -1 ? (test += (" "+r+" "),/*console.log("Random Başarılı: "+r),*/result_0_data.splice(result_0_data.indexOf(r), 1)) : /*console.log("Random Başarısız: "+r)*/()=>{};

  var cikti = compareInput(metin, result_0_data, 0);
  // Çıktının tipini kontrol ediyoruz
  var tip = Array.isArray(cikti) ? "array" : "string";
  // Ternary fonksiyon ile farklı işlemler yapıyoruz
  test += tip == "array" ? cikti[0] + " " : cikti + " ";
  // console.log(result_0_data.length);
  // while (result_0_data.length > 1) {
  //   // Diziden son elemanı siliyoruz
  //   result_0_data.pop();
  // }
  try{
  tip == "array" ? result_0_data.splice(result_0_data.indexOf(cikti[0]), 1) : result_0_data.splice(result_0_data.indexOf(cikti), 1);
  }catch(e){}
  result_0_data.length == 0 ? result_0_data = getAllValues(data) : ()=>{};
  if(onlytext==false){
    document.querySelector("#message-input").placeholder = tip == "array" ? cikti[1] : "0";
  }
  if (test.endsWith("<br>")) { // Değişkenin "<br>" ile bitip bitmediğini kontrol et
    test = test.slice(0, -4); // Değişkenin son 4 karakterini sil
  }
  test = test.trim();
    if(onlytext==true){
      return del_fff(replace_with_xxx(test,true));
    }else{
      window.latest_____cache_x = test;
      return replaceTags(markdown_to_html_link(test));
    }
  } else {
    if (test.endsWith("<br>")) { // Değişkenin "<br>" ile bitip bitmediğini kontrol et
      test = test.slice(0, -4); // Değişkenin son 4 karakterini sil
    }
    if(onlytext==true){
      return del_fff(replace_with_xxx(test,true));
    }else{
      window.latest_____cache_x = test;
      return replaceTags(markdown_to_html_link(test));
    }
  }
}
var cache_ds = {};
for (let key of Object.keys(data["set"])) { // data["set"] nesnesinin tüm anahtarlarını döngü ile gez
  cache_ds[key] = 0; // cache_ds nesnesine anahtarları 0 değeri ile ekle
  shuffle(data["set"][key]);
}
function random_generate_bonus(metin,sayi){
  var test = "";
  var array = [1,2,3,4,1,1];
  array = shuffle_array(array);
  if(sayi==1 || sayi==true){
    array = [array[0]];
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) {
      array[i] = rand_single();
    }
    else if (array[i] == 2) {
      array[i] = rand_multi();
    }
    else if (array[i] == 3) {
      array[i] = rand_quad();
    }
    else if (array[i] == 4) {
      array[i] = rand_r();
    }
    // if (i != array.length - 1) {
    //   test += "";
    // }
  }

  
  var ___c___ = selectSentences(array,metin,0.5);
  var tip = Array.isArray(___c___) ? "array" : "string";
  ___c___ = tip == "array" ? ___c___[0] : ___c___;
  // try{
  //   tip == "array" ? result_0_data.splice(result_0_data.indexOf(___c___[0]), 1) : result_0_data.splice(result_0_data.indexOf(___c___), 1);
  // }catch(e){}
  result_0_data.length == 0 ? result_0_data = getAllValues(data) : ()=>{};
  // console.log("Random: " + ___c___);
  ___c___ == null ? test+="" : test += ___c___;
  return test;
}
window.list = [];
// Bir fonksiyon tanımlayalım
function replaceTags(text) {
  let list = [];
  // Metni  <a></a> <img> ile eşleşen bir regex ile bölüyoruz
  var parts = text.split(/(\[\]\([^\)]*\)|<a[^>]*>[^<]*<\/a>|<img[^>]*>|<iframe[^>]*>[^<]*<\/iframe>|<br[^>]*>)/);
  // Parçaları döngüye sokuyoruz
  for (var i = 0; i < parts.length; i++) {
    // Eğer parça bir etiket ise
    if (parts[i].match(/(\[\]\([^\)]*\)|<a[^>]*>[^<]*<\/a>|<img[^>]*>|<iframe[^>]*>[^<]*<\/iframe>|<br[^>]*>)/)) {
      // Parçayı listeye ekliyoruz
      list.push(parts[i]);
      // Parçayı _ ile değiştiriyoruz
      parts[i] = "_";
    }
  }
  var newText = parts.join("");
  window.list = list;
  return newText;
}
function restoreTags(text, list) {
  let index = 0;
  text = text.replace(/[_]/g, function(match) {
    return list[index++];
  });
  return text;
}


function link(data) {
  var link = data.split(",")[0]; // Seçilen elemanın ilk kısmını link olarak alın
  var description = data.split(",")[1]; // Seçilen elemanın ikinci kısmını description olarak alın
  return "<a href='#"+link+"' onclick='event.preventDefault(),youtubeatag(\"" + replaceTextlink(link) + "\")' style='color:#f60000;'>" + description + "</a><br>"; // HTML bağlantısını oluşturun
}
function linktoimg(data) {
  return "<img src='" + replaceTextlink(data) + "' target='_blank' style='user-select:none;margin:0 auto;padding:0;width:100%;height:auto;display:block;border-radius:1vh;'>"; // HTML bağlantısını oluşturun
}
function xxx(string, length = 0,onlytext=false) {
  for (let key of Object.keys(data["set"])) { // data["set"] nesnesinin tüm anahtarlarını döngü ile gez
    if (key.startsWith("link")) { // Anahtarın "link" ile başlayıp başlamadığını kontrol et
      if(onlytext==true){return "";}
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
    if (key.startsWith("k")) { // Anahtarın "k" ile başlayıp başlamadığını kontrol et
      if(onlytext==true){return "";}
      if (key.slice(2) == string) {
        let array = data["set"][key]; // Anahtarın değerini bir diziye at
        if (array.length > 0) { // Dizinin boş olup olmadığını kontrol et
          if (cache_ds[key] >= array.length) {
            cache_ds[key] = 0;
          }
          if (length === 'all') { // Eğer length parametresi 'all' ise
            var result = ''; // Sonucu tutacak bir değişken tanımla
            for (let item of array) { // Dizinin tüm elemanlarını döngü ile gez
              result += "<br>" + linktoimg(item) + "<br>"; // Her elemanı sonuca ekle ve sonuna <br> koy
            }
            return result; // Sonucu döndür
          } else if (length > 0) { // Eğer length parametresi pozitif bir sayı ise
            var result = ''; // Sonucu tutacak bir değişken tanımla
            for (let i = 0; i < length; i++) { // Length kadar döngü yap
              result += "<br>" + linktoimg(array[cache_ds[key]]) + "<br>"; // Diziden sırayla bir eleman seçin ve sonuca ekle ve sonuna <br> koy
              cache_ds[key]++; // Cache değerini artırın
              if (cache_ds[key] >= array.length) { // Eğer cache değeri dizinin uzunluğunu aşıyorsa
                cache_ds[key] = 0; // Cache değerini sıfırlayın
              }
            }
            return result; // Sonucu döndür
          } else { // Eğer length parametresi yoksa veya sıfır ise
            var random = "<br><br>" + linktoimg(array[cache_ds[key]]) + "<br>"; // Diziden rastgele bir eleman seçin ve sonuna <br> koy
            cache_ds[key]++;
            return random;
          }
        }
      }
    }
  }
}
function replace_with_xxx(string,onlytext=false) {
  let regex = /\{([^}:]+)(?::([^}]+))?\}/g; // Stringin içinde {text}, {text:10}, {text:all} veya {text:10ü} gibi olan kısmı tanımlayan bir regex oluşturun
  let callback = function(match, text, length) { // Replace metodu için bir callback fonksiyonu tanımlayın
      if (length) { // Eğer length parametresi varsa
          if (length === 'all') { // Eğer length parametresi 'all' ise
              return xxx(text, 'all',onlytext); // Callback fonksiyonu xxx fonksiyonunun çıktısını döndürür
          } else { // Eğer length parametresi sayı veya başka bir şey ise
              length = Number(length); // Length parametresini Number() fonksiyonu ile dönüştür
              if (isNaN(length)) { // Eğer length parametresi sayı değilse
                return xxx(text,0,onlytext); // Callback fonksiyonu xxx fonksiyonunun çıktısını döndürür
              } else { // Eğer length parametresi sayı ise
                return xxx(text, length,onlytext); // Callback fonksiyonu xxx fonksiyonunun çıktısını döndürür
              }
          }
      } else { // Eğer length parametresi yoksa
          return xxx(text,0,onlytext); // Callback fonksiyonu xxx fonksiyonunun çıktısını döndürür
      }
  }
  let result = string.replace(regex, callback); // Stringin içinde regex ile eşleşen kısmı callback fonksiyonu ile değiştirir
  return result; // Sonucu döndürür
}
function replaceTextlink(text) {
  let regex = /\$([^\$]+)\$/g; // $ ile başlayıp $ ile biten karakter dizilerini tanımlayan bir düzenli ifade, "g" bayrağı ile global arama yapar
  let new_text = text.replace(regex, function(match, value) { // Text dizesindeki tüm eşleşmeleri değiştiren bir fonksiyon kullanır
    if (value == "tw") { // Eğer değer "tw" ise
      return "https://pbs.twimg.com/media/"; // Değeri https://twitter/api/ ile değiştirir
    } else if (value == "y") { // Eğer değer "tw" ise
      return "https://youtu.be/"; // Değeri https://youtu.be/ ile değiştirir
    } else if (value == "rd") { // Eğer değer "rd" ise
      return "https://preview.redd.it/"; // Değeri https://preview.redd.it/ ile değiştirir
    } else if (value == "i") { // Eğer değer "rd" ise
      return "https://i.imgur.com/"; // Değeri https://i.imgur.com/ ile değiştirir
    } else if (value == "v1pin") { // Eğer değer "rd" ise
      return "https://v1.pinimg.com/"; // Değeri https://v1.pinimg.com/ ile değiştirir
    } else if (value == "ipin") { // Eğer değer "rd" ise
      return "https://i.pinimg.com/"; // Değeri https://i.pinimg.com/ ile değiştirir
    } else { // Eğer değer "tw" değilse
      return match; // Değeri olduğu gibi bırakır
    }
  });
  return new_text; // Yeni dizeyi döndürür
}

function markdown_to_html_link(markdown) {
    let regex = /\[([^\]]+)\]\(([^)]+)\)/g; // Markdown bağlantısını tanımlayan bir düzenli ifade, "g" bayrağı ile global arama yapar
    let html = markdown; // HTML dizesini markdown dizisi ile başlatır
    let match; // Eşleşmeyi tutacak bir değişken
    while (match = regex.exec(markdown)) { // Markdown dizesindeki tüm eşleşmeleri bulur
        let description = match[1]; // İlk grup açıklamadır
        let text = match[2]; // İkinci grup bağlantıdır
        let new_text = replaceTextlink(text);
        if (description.startsWith("img:")) {
          var html_link = description.substring(4) + "<img src='" + new_text + "' target='_blank' style='user-select:none;margin:0 auto;padding:0;width:100%;height:auto;display:block;border-radius:1vh;'>";
        }else if (description.startsWith("iframeb64:")) {
          new_text = uint8ArrayToString(base64_decode(new_text));
          // HTML taglarını bulmak için bir regex tanımla
          let regex = /<([a-z][a-z0-9]*)\b[^>]*>/gi;
          // Stringdeki tüm HTML taglarını bir diziye al
          let tags = new_text.match(regex);
          // Eğer dizi boş değilse, yani HTML tagı varsa
          if (tags) {
            // Dizideki her tag için
            for (let tag of tags) {
              // Tagin iframe olup olmadığını kontrol et
              if (tag.toLowerCase().slice(0,7) !== "<iframe") {
                return;
              }
            }
          }
          var html_link = description.substring(10) + new_text;
        }else{
          var html_link = "<a href='#" + new_text + "' onclick='event.preventDefault(),youtubeatag(\"" + new_text + "\")' target='_blank' style='color:#f60000;'>" + description + "</a>"; // HTML bağlantısını oluşturur
        }
        html = html.replace(match[0], html_link); // HTML dizesindeki markdown bağlantısını HTML bağlantısı ile değiştirir
    }
    return replace_with_xxx(html); // HTML dizesini döndürür
}

// Data nın içindeki tüm değerleri alan bir fonksiyon tanımlıyoruz
function getAllValues(data) {
  // Sonuçları tutacak bir dizi tanımlıyoruz
  const results = [];

  // data.set içindeki değerleri alıyoruz
  for (let key in data.set) {
    // Her değer için bir alt nesne tanımlıyoruz
    if(!key.startsWith("p_")){continue;}
    let subobj = data.set[key];
    for (let subkey in subobj) {
      // Her alt özelliğin değerini alıyoruz
      let value = subobj[subkey];
      if(typeof value == "string") {
        if (!value.startsWith("$")) {
          results.push(value);
        }
      }
      // Eğer değer bir liste ise, listin içindeki tüm değerleri sonuçlara ekliyoruz
      if (Array.isArray(value)) { for (let item of value) { if (!item.startsWith("$")) { results.push(item); } } }
    }
  }

  // data.random içindeki değerleri alıyoruz
  for (let key in data.random) {
    // Her özelliğin değerini alıyoruz
    let value = data.random[key];
    if(typeof value == "string") {
      if (!value.startsWith("$")) {
        results.push(value);
      }
    }
    // Eğer değer bir liste ise, listin içindeki tüm değerleri sonuçlara ekliyoruz
    if (Array.isArray(value)) { for (let item of value) { if (!item.startsWith("$")) { results.push(item); } } }
  }

  // data.single içindeki değerleri alıyoruz
  for (let key in data.single) {
    // Her özelliğin değerini alıyoruz
    let value = data.single[key];
    if(typeof value == "string") {
      if (!value.startsWith("$")) {
        results.push(value);
      }
    }
    // Eğer değer bir liste ise, listin içindeki tüm değerleri sonuçlara ekliyoruz
    if (Array.isArray(value)) { for (let item of value) { if (!item.startsWith("$")) { results.push(item); } } }
  }

  // data.multi içindeki değerleri alıyoruz
  for (let key in data.multi) {
    // Her özelliğin değerini alıyoruz
    if(key.startsWith("set")){continue;}
    let value = data.multi[key];
    if(typeof value == "string"){
      if (!value.startsWith("$")) {
        results.push(value);
      }
    }
    // Eğer değer bir liste ise, listin içindeki tüm değerleri sonuçlara ekliyoruz
    if (Array.isArray(value)) { for (let item of value) { if (!item.startsWith("$")) { results.push(item); } } }
  }

  // data.quad içindeki değerleri alıyoruz
  for (let key in data.quad) {
    // Her değer için bir alt nesne tanımlıyoruz
    let subobj = data.quad[key];
    for (let subkey in subobj) {
      // Her alt özelliğin değerini alıyoruz
      let value = subobj[subkey];
      if(typeof value == "string") {
        if(subkey=="n"){continue;}
        if (!value.startsWith("$")) {
          results.push(value);
        }
      }
      // Eğer değer bir liste ise, listin içindeki tüm değerleri sonuçlara ekliyoruz
      if (Array.isArray(value)) { for (let item of value) { if (!item.startsWith("$")) { results.push(item); } } }
    }
  }

  // Sonuçları döndürüyoruz
  return results;
}

var result_0_data = getAllValues(data);

// Eklenecek veriyi dizi olarak eklemek için fonksiyon
function addData(data, decryptedObj) {
  // Eklenecek veriyi dizi olarak eklemek
  for (var prop in decryptedObj) {
    if (data.hasOwnProperty(prop)) {
      // Eğer data objesinde aynı özellik varsa, sonuna ekle
      if (typeof decryptedObj[prop] === "object") {
        // Eğer eklenecek veri obje ise, hepsini teker teker ekle
        for (var key in decryptedObj[prop]) {
          // Eğer data[prop] bir obje ise, önceki değeri al
          if (typeof data[prop] === "object") {
            var onceki_deger = data[prop][key];
          } else {
            // Eğer data[prop] bir obje değilse, önceki değer yok
            var onceki_deger = null;
          }
          // Eğer önceki değer varsa, yeni bir dizi oluştur ve sonuna ekle
          if (onceki_deger) {
            // Eğer önceki değer ile eklenecek değer aynı değilse, sonuna ekle
            if (onceki_deger !== decryptedObj[prop][key]) {
              data[prop][key] = [onceki_deger, decryptedObj[prop][key]];
            }
          } else {
            // Eğer önceki değer yoksa, tek bir değer olarak ekle
            data[prop][key] = decryptedObj[prop][key];
          }
        }
      } else if (Array.isArray(decryptedObj[prop])) {
        // Eğer eklenecek veri liste ise, hepsini teker teker ekle
        for (var i = 0; i < decryptedObj[prop].length; i++) {
          // Eğer data[prop] bir dizi ise, sonuna ekle
          if (Array.isArray(data[prop])) {
            // Eğer data[prop] içinde eklenecek değer yoksa, sonuna ekle
            if (!data[prop].includes(decryptedObj[prop][i])) {
              data[prop].push(decryptedObj[prop][i]);
            }
          } else {
            // Eğer data[prop] bir dizi değilse, yeni bir dizi oluştur ve sonuna ekle
            data[prop] = [data[prop], decryptedObj[prop][i]];
          }
        }
      } else {
        // Eğer eklenecek veri obje veya liste değilse, tek bir değer olarak ekle
        // Eğer data[prop] bir dizi ise, sonuna ekle
        if (Array.isArray(data[prop])) {
          // Eğer data[prop] içinde eklenecek değer yoksa, sonuna ekle
          if (!data[prop].includes(decryptedObj[prop])) {
            data[prop].push(decryptedObj[prop]);
          }
        } else {
          // Eğer data[prop] bir dizi değilse, yeni bir dizi oluştur ve sonuna ekle
          if(data[prop] !== decryptedObj[prop]){
            data[prop] = [data[prop], decryptedObj[prop]];
          }
        }
      }
    } else {
      // Eğer data objesinde aynı özellik yoksa, yeni bir dizi oluştur
      if (typeof decryptedObj[prop] === "object") {
        // Eğer eklenecek veri obje ise, yeni bir dizi oluştur ve hepsini ekle
        data[prop] = [];
        for (var key in decryptedObj[prop]) {
          // Eğer eklenecek veri obje ise, fonksiyonu tekrar çağır
          addData(data[prop], decryptedObj[prop][key]);
        }
      } else if (Array.isArray(decryptedObj[prop])) {
        // Eğer eklenecek veri liste ise, yeni bir dizi oluştur ve hepsini ekle
        data[prop] = [];
        for (var i = 0; i < decryptedObj[prop].length; i++) {
          data[prop].push(decryptedObj[prop][i]);
        }
      } else {
        // Eğer eklenecek veri obje veya liste değilse, yeni bir dizi oluştur ve tek bir değer olarak ekle
        data[prop] = decryptedObj[prop];
      }
    }
  }
}
function enc_text_add_data(data_name,data_key,data_round){
  // Şifreleme/deşifreleme fonksiyonu
const cipher = new SC5(data_key,data_round,"128"); // key required
// OR
// cipher.setkey("123");
// cipher.setdigest("0");
// cipher.setblocksize("128"); // 0,128,256

// Deşifreleme işlemi
try {
var dataset_x = data['enc'][data_name];
if(dataset_x=="" || dataset_x==null){throw new Error("Dataset undefined", { cause: err });}
}catch(err){throw new Error("Dataset undefined", { cause: err });}
try {
  var decryptedText = cipher.Decrypt(dataset_x);
  var decryptedObj = JSON.parse(decryptedText);
}catch(err){throw new Error("Decrypt Error", { cause: err });}

// Eklenecek veriyi dizi olarak eklemek
try{
  addData(data, decryptedObj);
  let jsonViewerx = document.getElementById("jsonviewer");
  jsonViewerx.innerHTML = "";
  jsonViewerx.appendChild(jsonToTree(JSON.stringify(data)));
}catch(ex){console.log(ex);}

}

function gallery_enc_text_add_data(data_name,data_key,data_round){
  // Şifreleme/deşifreleme fonksiyonu
const cipher = new SC5(data_key,data_round,"128"); // key required
// OR
// cipher.setkey("123");
// cipher.setdigest("0");
// cipher.setblocksize("128"); // 0,128,256

// Deşifreleme işlemi
try {
var dataset_x = data['gallery_enc'][data_name];
if(dataset_x=="" || dataset_x==null){throw new Error("G Dataset undefined", { cause: err });}
}catch(err){throw new Error("G Dataset undefined", { cause: err });}
try {
  var decryptedText = cipher.Decrypt(dataset_x);
  var decryptedObj = JSON.parse(decryptedText);
}catch(err){throw new Error("G Decrypt Error", { cause: err });}

// Eklenecek veriyi dizi olarak eklemek
try{
  addData(foldersOLD, decryptedObj);
}catch(ex){console.log(ex);}

}

function note_enc_text_read_data(data_name,data_key,data_round){
  // Şifreleme/deşifreleme fonksiyonu
const cipher = new SC5(data_key,data_round,"128"); // key required
// OR
// cipher.setkey("123");
// cipher.setdigest("0");
// cipher.setblocksize("128"); // 0,128,256

// Deşifreleme işlemi
try {
var dataset_x = data['notes'][data_name];
if(dataset_x=="" || dataset_x==null){throw new Error("Note Dataset undefined", { cause: err });}
}catch(err){throw new Error("Note Dataset undefined", { cause: err });}
var decryptedText = "Name/Key/Round Error";
try {
  decryptedText = cipher.Decrypt(dataset_x);
}catch(err){throw new Error("Note Decrypt Error", { cause: err });}

// Eklenecek veriyi dizi olarak eklemek
return decryptedText;
}
function isYouTubeLink(url){
  // YouTube linki olup olmadığını algılayan regex
  var regExp = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  // URL ile regex'i eşleştir
  var match = url.match(regExp);
  // Eşleşme varsa, true döndür
  if (match) {
    return true;
  }
  // Eşleşme yoksa, false döndür
  else {
    return false;
  }
}
// function YouTubeGetID(url){
//   url = url.split(/(vi\/|v%3D|v=|\/v\/|youtube\/|youtu\.be\/|\/embed\/)/);
//   return undefined !== url[2]?url[2].split(/[^0-9a-z_\-]/i)[0]:url[0];
// }
function YouTubeGetID(url){
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtube\/|youtu\.be\/|\/embed\/)/);
  var id = undefined !== url[2]?url[2].split(/[^0-9a-z_\-]/i)[0]:url[0];
  var t = url[2].match(/t=([0-9]+)/); // ?t= parametresini bul
  if (t) { // eğer varsa
    id = id + '?start=' + t[1]; // video kimliğine ekle
  }
  return id;
}

function youtubetest(url){
  return isYouTubeLink(url) ? YouTubeGetID(url): false;
}

function youtubeatag(data){
  var _000 = youtubetest(data.trim());
  var _return = 0
  var ytpanelx = document.getElementById("ytpanel");
  if(_000 != false){
    ytpanelx.style.textAlign = "center";
    ytpanelx.style.setProperty('position', 'fixed');
    ytpanelx.style.setProperty('margin', '0 auto');
    ytpanelx.style.setProperty('max-width', '600px');
    ytpanelx.style.setProperty('width', '100%');
    ytpanelx.style.setProperty('height', 'auto');
    ytpanelx.style.setProperty('z-index', '1');
    ytpanelx.style.setProperty('min-height', '280px');
    ytpanelx.style.setProperty('max-height', '360px');
    ytpanelx.style.setProperty('bottom', '0');
    ytpanelx.style.setProperty('left', '0');
    ytpanelx.style.setProperty('right', '0');
    ytpanelx.style.bottom = 0;
    ytpanelx.innerHTML = '<iframe src="https://www.youtube.com/embed/'+_000+'" title="None" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    
    let bg1 = document.getElementById("ytpanel").firstChild;
    bg1.style.setProperty('min-height', '280px');
    bg1.style.setProperty('max-height', '360px');
    bg1.style.setProperty('max-width', '600px');
    bg1.style.setProperty('width', '100%');
    bg1.style.setProperty('height', '100%');
    bg1.style.setProperty('z-index', '1');
    bg1.style.setProperty('bottom', '0');
    bg1.style.setProperty('left', '0');
    bg1.style.setProperty('right', '0');
    bg1.style.bottom = 0;
    bg1.style.borderRadius = "none";
    bg1.style.borderTopRightRadius = "25px";
    bg1.style.borderTopLeftRadius = "25px";
    bg1.style.backgroundColor = "transparent";
    ytpanelx.style.backgroundColor = "transparent";
    _return = 1;
    return "sil";
  }
}
// // Fonksiyonu test edin
// const resultx1 = compareInput ("Merhaba nasılsın iyi misin nasıl gidiyor?", result_0_data, 1);
// console.log (resultx1); // "Bana herhangi bir soru sorabilirsiniz."