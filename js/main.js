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
window.old_header_x_height = "52px";
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
    image: "https://6.soompi.io/wp-content/uploads/image/20231107131031_IVE-5231.jpeg?s=900x600&e=t",
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
  "Kpop1":"[$tw$GBJre6UX0AABkLG?format=jpg&name=4096x4096,$rd$x48xi6vpqsua1.jpg?width=640&crop=smart&auto=webp&s=25ea4d1fc0e87dab3ae05392eff717092efb29f4,$rd$07jxy01qqsua1.jpg?width=640&crop=smart&auto=webp&s=5ec11cbc5ca106d4abad0a25fd4a4d310531cc1b,$rd$q0zo76a2kgbb1.jpg?width=640&crop=smart&auto=webp&s=df0d6d8c01aaab9908a608a6acf29a9ebfcee675,$rd$qh8axeb2kgbb1.jpg?width=640&crop=smart&auto=webp&s=96e506c9f55edd6b028d4e8c18a9e31132070708,$rd$vk50ravg0wtb1.jpg?width=1080&format=pjpg&auto=webp&s=989be823411e845b608eb7f840a32b10a6e314de,$rd$66yy59ps6kub1.jpg?width=1440&format=pjpg&auto=webp&s=d71e5355e6e6ca88aa27ada5858a557ef90cec48,$rd$ja1fgzlib34c1.png?width=1366&format=png&auto=webp&s=390e3ce1d9d2ccba5d9d362143bb60ccca6dc733,$rd$1bc105d4ng4c1.jpg?width=1295&format=pjpg&auto=webp&s=99d98bb421dac6c17bafe7b9a4ba2ac5a977618d,$tw$GAl82OYXQAA-jLr?format=jpg&name=4096x4096,$tw$GAVtER3XkAAHzIQ?format=jpg&name=large,$tw$GBI18AZWkAARxfv?format=jpg&name=large,$tw$GBF9DdRbcAAz7DD?format=jpg&name=large,$tw$GA9wJPpXIAAoamf?format=jpg&name=4096x4096,$tw$GA_m5KKasAA7L_4?format=jpg&name=large,$tw$GA7xysbXsAE9Ia5?format=jpg&name=large,$tw$GAy8vVEbIAAYNHL?format=jpg&name=4096x4096,$tw$GB8LPD-WMAA5KAJ?format=jpg&name=large,$tw$GCMeI2NXUAAgl3s?format=jpg&name=large,$tw$F1d5etIakAI6qHG?format=jpg&name=large,$tw$GDZEiZJaAAAn5pk?format=jpg&name=large,$tw$GDbp8ZhWcAAlihE?format=jpg&name=large,$tw$GC36cujXoAAE1B_?format=jpg&name=large,$tw$GC5JyHMakAAUXdu?format=jpg&name=large,$tw$GCbybCsbkAABTrW?format=jpg&name=large,$tw$GCXMnzva8AAPiWp?format=jpg&name=large,$tw$GCXdr-BWYAAitRa?format=jpg&name=large,$tw$GDzE_IGXYAAQT_q?format=jpg&name=large!]"
};
// * IMAGE
var noteb64img = b64dataURItoBlob_onlyblob("data:image/png;base64,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");
var dfileb64img = b64dataURItoBlob_onlyblob("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2bz0sbQRTHB4nHgj+JKOg9xV4LuYie407ij+ylqFQMrX9BBI+KPdV7QCk1p+wgeowJRCL6F0QUeynYU+6BhIJPZpIN0RA2xs3uzO77wjskebs789nvvJldJoSgUCgU6pU0dk0oA0+Fxq5I16ISNLgf8WYAXhECYBY3dInNEI3licZqto65uUKAKAFAY/n+FJ7MGlEEQI0nxI5roKfh3fF5/28DgvEghQssAdB6gh2d5xE/eYIPX7LyuMBpADp3wZ7pAvbHdRe4ASAukwvcAKDL5AK3AMRlcYFbAPQXM4IkIWY8I0cimWlHAMR/P8HY5qX7HW8L48IRALIFX+s0neBHADzaawJFAIAOoDgEwO2xiTUg7YMiSI+qEEqWYGg9D4HlMxHDG3kI7ZTEb54GED54FB3utDjhv4V//PMmgPDBI5Bo/TpT2zewcFiG5V//RcwflmHy+3W9UVHWdwiOA6BH1ead/7R73zFvdvdO5AyunEO0j8PBcQChZKl5561yJ7/VnfAxeesdAENrOXF+bnur3PmfZZHLC6NnAAQa9ufj3SqX55gF0TMAyBvP71R7CAIwhQ5gOAQI1gBma6GJpCoQ3CrCQOy05/d2/NhgogiLqYp6RTC4VbTtBeZEoqgegAHzzq9mRkivip6Omk5QDgBpu0iPcqRtFAEAOoDiEACsAWksgoCzQBqnQbB1IcQXM35cCAUTPl8KR1IV0fD3PgxNJK7UfBjSJQ4EQBV2wNjXQtdDiO9Naj3G/Kw2gM3uN1yNmwAax4x3BKDZu1laiU1S1Ki2OMDI2TVlqROt2+SW2Iz4ws4/TMgavI8ay77cKIlCoVDEn3oGrXcuy5WVu3cAAAAASUVORK5CYII=");
var vfileb64img = b64dataURItoBlob_onlyblob("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE+ElEQVR4nO2a3W8aRxDA/VA1/6HfozxyfYifqwJJqjoRtE2CojykkMhWo9pgYvNh181H6yhuaoxNXOyoSgrGgOMYfG5VKe7xcVPtwcJyt3e3cAe4lx1phHaX3bn93c7O7MLEBBcuXLhw4cLlo5ebn9284HMFb/hcwUO/EAKHatknhKbd7rlPNS/c7wpePwcPOBp1Bb/SAhBCZdR4ceUdTKYkR+rFlcPOSqABAKTjfshhK56nKQD31SR4vLGezk6oYwbgp6wIJ9RxAALjCvBcS4DXG++h+b+s88Z66pgBTDpUOQCBcQVc8SyNP2GxSa/0EwX2TkHRe9OxsT+4XRr4MgbzOUlRZgB7FE1XZAjnewfCA1vRxEENUpVmZ2xU3hW7djcJu+o2o+cm+1kGsHMiQ3S/phnI6uSj+ZoC9lG+1im/EuWuXVG/zQgA2c86ABEgedA7GA3Ao30JdsUGdaKB6STc8kRh5udCpy6Sk5S3FG+PjcoIBrabFUG3zQgA2c8WAE/L2knRALw+bUBTBlgu6pNHeufrVXiYEWH9qAk/leud76AyadeozQgA2c8ygPX3TcOBlLeTlyBTbUBDBkXEf2V4UqavmFuX7yuf30zNwg+RDMy9PVPanx02euyuvetCV7cZASD7WQawVZUhbDIQmvzRhyaoBbF4+b6u+b74OgyJu7NdIJ+HYf6XguJm2G7quAnz7c0rWaz3tBkBIPtZBvC7CLBYoPuRlRUgFRcUzb2Yg5DnQad+5vZjSOf/gYyy2bb6LO7XYOdEf/IkALKfZQC7pwDLB/p+ZGUPwACQnhUWYCP6EG5Ptd3i8gzc/z4Nc28+KFDRCjSaPAkgZvCy+gbw7NDYj4yiQFYnCtAAYKW5xcqLounkSQAsk2cC8Bvyoz4G6tcwDYCZW4wUwILJJjIIgOVinQmAnlssRbYhW9FGgo3jpv0A5vscyOx7S4VWpscKAOvJXhgWA123CN5I9Ex+uyorL+tcA4jkW9nb0n7NVgAo00NjWnHFoQMI5yRlP1kptqKJXS6AIhQecyQAwjkJUsfakGhmGGVkZDSxaxNUR6ihA0hX6kpsXy2ZH4aw/liqw0sihUblfsLgXXcE1jZKmk2PHHMkAN783eiktggCLbVVG0AJyWZVVk5vuJwlwtWgO/4WMeagAMhNkwlAJC/BH3+1IKwTk9czjAxsVeROCo3KmXY2x5oK02K9UVrOCgDvSX27QCTfSnHNDCMDKC7jFFopV7pHWPx91uWOVZ2Wq/N9VgDPj1qramhR4PlRo+feABtUA8DH4W+nZiG+uAPZKv2cT7uLiOYlqJ7JyrVYPwAel+ua57AVwGqpDr8SGxQqk5NAbfj7rCku7kfaxO6Ijt84YzV7br07RNsAxNCmhy4fiU1vl3KngK7EAt4orG2WmQ45encRyB2RW7KsANpx2nYA6Ur3shR9vjqRqRep6jYjVV/A9uOKWNEK2abYsx1Asu2P6Po5RVxaomWn12akZL9BAeAN2ej0aAogcM05vwx9dz3ODmCy/ROS10E/jXkH+YPEpEOVAxAYV4D7nPynx+46ZgB+iks4oY4DEBhXgEf13xqn1PFNUNBZAT4hWEINlxKlkYWkUeuleLG1AlyhohaAK3R13AnLqNQnBL0aAG63+xO/K+TxCaE/x/2AQ1NX8K3fFfoCzVUDgAsXLly4cOEy8bHJf9C1G2LO8hRrAAAAAElFTkSuQmCC");

var main_page_b64 = b64dataURItoBlob("data:image/png;base64,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");
var gallery_img_base64 = b64dataURItoBlob("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAWJklEQVR4nO1dB1gU19o+u7C7wLJLExEUCypFARUQFRWkiIgiiBR7A1HEjoAFsPeCvfdeorHdPyY3iSmmmJh4k3sTY5pJNLmp997//2/+W3O///lGZubM7uzM7LK4RPY8z/foszNzzsx5z3e+fiDE2ZzN2Zyt2TQ3QsgZQshnTiK2zMH7hJBMewIyghACTiINmQMExW5tohMM0tAFeb9RAPEICofQ0sNOKpWfg+DsqsYHxNApHuLq7jmpTn4OwsqOOwGJa+6AhE47BP4JI8G/T2Gzp8D06RCz9o7jAMHB1Ro3p/ZFeOGNoDgMkKiaF51gEKE21SI+t+kAkjl9drOkzj17NU1ADj/8qVlS9rxKJyCHmwAQTkAeOn7ynYA8dPyEP3GAnLl/D+6+PBN+fjoCfjkXAH+5Egu3b62Gow/+6PDJbCqAqAghPQkhaQppvZgvq8PYjQJAKk5fNKOao3vh2tK28NtqgxmdXRMPVafOij7XVKny7CXY9t49uwOy0+m9JTbbUO4GA6x//V27AoJBE6dRR2yfgylbd9sVkPvsjTo3PbjrjU7Si8+Bq0YnCkjR5h2NA0hs0nBIy5vhpLxHc5A6ogziUwugU1QC+LYMBpVK7QQk7TEvkKRhxRDVOwNah3QFnbte0Zbl5JA8+4LQJ300zwVqcS5wOCDIqjp3z2Yv7F1dCCR1cYW1oz3gvQ1eMLi7xjGAtAmJbLZgBPqoYXKyDs7P9YS/HPYBOOvL0bZJHo4BJKh9hMMnhjwmUqsI9A1zhVUj3eHddV7wnzM8AKb0yVYvxwMycHIJrH/9nSZPMw8chwFjJoBvUGtZEAK81DBxgA7OzvGE7/cLuUCOQgNdHAsIDuJoH9FhEdr7yUPGhYELxq91G1kuiA1xhapsN3h1mRF+keACpM+2ecOOyR6Q01MLU1J18NdjPGizM4Wh6mYNyPrX34HRy1ZDl/5J4KoVN9S4CTGoIL+3FvZO0cMf93pLAvD3E77w3GIDzB3iBmFBQg5AWj/Gg7v3+iJD0wWk5upzkDG1DHqkZ0Cv7FzIrVgEm9/+vd0A2HPvK5h18AQMGDtRERfEd3KFpfnucGuVPBfc3+HNgIWgGd1Vkn0nRrhyz/3thA946FRNC5CdH34O0SkDRV/exVUDWbPL4dCDH20CYfVLb8LI2hWKuMDPoILR/bRwfIa8LPjHSV94vsYA5UPdoEsbcy4wJVoWofr750N8//3CXblruCAdCgju3W3Cu8h+EK5qpbJgzpFTkDKhCPzbtpPlgrgQV6gZ4Q5vrDTCv09Lc8G3+7zhaNkjLvDykOYCjU4HIT1imQmec+Q01P7mBdB7+3DXz8315PpFWcT+HhQa5lhA0qeUCj4kuasGNo3zgOUF7tAxQGjpzj12RhSENa+8xciCyKRkZiIkV6qnCgoTtHBkup6ZYCkAEKDba4ywJM+dEeIqlfSi8WkVCLGDh8KoJaug+vKzsOS/XhRQt9R07t5JA3TcOJ9v9xb0s+GNO44BZO+nX4NOz/t45me5CfT2/zvuA31CeXaOTk7jnpt7/CykTiqGlu06SE6SSkWgR3sXWDTcHW4ul+eC7ygu8NZLcwFugcgFaZOmQNneI2YAmNKIqmru2VbeasG3RrTmt73xqzc4BpCKM09zv+PH475sOkGoVnIToNEyoGjdpLMavfWPNKJDpXr4Zk/jccHiS9dlQaCp6txlULvwE4+GI/se84by39R9YIZjACnbd4T7HTUaeqJQ+3h2sQFmZChLKe3WzgUW5LjBy0uN8K9T0lyAAhv38HGJOvCxggum7zlsFQBiFBzRlet7ZaE7904YemZ/13l4wP7Pv3n8gFSeuyzY2z+q84JdRXoYGqMBPaUKihGqlrnxWtg/VQ8PdyvjgrWjPRi3hhwXeNdzQf7CJbDwwrUGg0BT8rjJ3Dj4LrTt4unGf/P8UxcePyC77t4HtSsvI+QoMtgFKoa5wYu1BvinDBf8cIDnAgRbmgu0HBeUbNvDTV7lmUswaukqyK1cxIRW1732DmPLoCaH/6K6vuXOXVj32m1Yev2GIkBKtu3lxnVRE/jxAK/+ZsdpuWvpxdMeDyCovk5Yuwl6DBosEOhihCsG3Q1ocH25U5oL0HC7TXGBWo4LAlpxXLDgKSEXLL78DMRn5YDaRbhYUIYljhoHO/7wqZmmd+irH2DHB5/BmpdvSQKC6q/Bz4/r88xsXv3dM4Wfj1YdOzUOIKm508E/KEQxF6C2gcYWGl1iQp6mH+u5oCRNx7i5iUS/KEyDu0SacQESru51N28zaTiocvq3bS/ZF07W1jsfWbSFdt39Ala++JpFUFBos31NSOLVX1x09DgJIwrsB0hwp2ho2bojs6qkPg5lRVashpEd6H5QygVpURrG4pXs29uH8QAwXHD+qmBScMI2vfU+M3msFwD/De3VRzj53mqG49CKp39Hy1/KQEWO2XjrPVFA8hbWcv34G1UCt0xXyuo3tmhhP0CkKCRAzazqK5UGRpuSAuGngzwXBMlwgUqthsBOoZA0ZgLDBbg9iHEBajBik1h+8rygv+pcd45LUXNbmOMuuI5KiZznAMczBQQXBy07315j5L4XbTGxb7MrIO5aFbOicWV/uJnXvS3RHzZ6cVygkeUCb8tc8MJNngu++kF28pLH8xrQwGiN6LuhY5C7p2iqInfO9vc/NgOlbWQU1w96Jdj+X6gxNB4guKqfWWhgLG4pAP73qA/DLXh/a9+GccHaV9+Grb+zzAVS1DVxADfO1om8i5ymdWP4sCu6QpT2jV5rGpDUicVcP+iNYPtHjhTzFtsFEATDHlzg4eXN7Nk55Qug6vwVMy7AvRpV6EMKuECKuqUNEl21NKEjkr0HtTSlfaN8Qs8z+95Td+yzqP4Oj9c2DiCzBruZ+YmmKtCIkAvado1iPLZTt+8VcsEzNxjVEvV/tAcsTUBO+QLGysbtbNWNNxRNGrr52Xdo768242x0mXdoyb87xmusARzfV6j+8kL75Exe/d1Xom8cQFB40x9UnKKT1IhwheYtqGF8PjQXrHj+VYYL0BBTwgXLf/uKICcKYyq436OdIPUcAk37mtCdg3s6eoXRGEVXPd0nRhyt5UJ8hv2uHoMyuf7G9tdy8/Rgl7eZN8FuQv3jLbwQL03nAcEJaxPRhXElmMkC5IJX3mJ0/X2fWS8LopPTREH39PVjjNKDX35v8VmMX0hxL0tZs+Yx9+/5+AFj5KKPauL6Osm+2fvZ7yxYvNSi+hvV1qVxAKGF46UKPlnO3WiE2mvPcy+HqxqNMlzFch8lRZWUf4yRP0ZzrkQDccFTV0Sfx7H7jxwjCQZ6G1hOHVI2R9h3RFcmWULqHVHuMervU9cE6u+bq4yiQSu7ApLRnVcfMdtCp+Gvle4++EgWfPq1zQCYCs6OMXFc/63D/KBo00DoMzwctG7mPjPcIul6DJow6hiZlMIFvNw8PRnFAuMw9PZjKSyM9+LEy2lc7aK6cc9gCICdq5eWGBsHEDeNCn6m0l5SI/n0SRSi9gCCpdLdB/mxVQQmb0yD6XsGw5Qt6TBmeRKExgcxv9Pvh7GV7LkVkgoCyi6x33GrYvvR6NCLLFRXGdk1uQS2//4TwXO7P/qSAyRtcolAZrHzhIYoHSCzq2F4rYpXfzeO4/X49tHd7QbGgS++hZbt+ehhl77BUHutEBZdzIMpW9MZUJCGl/eGgA5CnxEbeCresktxMgUdXENKGR8FOeW9ILAjHzdnSe/lDfmLajnbCMdY9uxLDCCluw5w96FDFDVRdq7yevPqr19sVsMA0brxEz89nXegfbCJT5/EFVX37od2AWTMirX8h7moYPruwQwgSLMPZ3GAMFSXDqkTu4Gnj7mbIqR7DFRfeVZyrINffCdIzAiOaAGzD2VBcd1AhtKLu4OxhdDNghTQIQSm7znE9IEue5ZLvPxbcvdgxgs7V2gLsb/r/IIbBkhgu3DuIdTdafUXdXz2WnHdzgaDgbEJo78/12dcZicODKTFT+cLuISlSetTISajI7hohHYRaoDoabXk0cWECnpRIQg4zsz9QzhQcLvsPTwMtO7msisioZ9AtY/JGMJdwzQkdp4wE4ZWfyMXXrcdkKhevNWLdHezuPobP2x4gwFBGcDt5W6uMO/YMAEgzGQdGGIGCEujlyZC555BZhOH8RqMSdBuGIyFePr4cvcgoOwYNVcKYOr2QRwoSONWDYBuqe1B7WIOOhqt5SfOQ2H1cu53DKbRiRiYoMFxYs6ihsVDDN78qt08nld/0W9F76+4BdgKBmppdKArcWRXMzCQKs/mWgSEpczpseDTylM0/sFqV8njJnG/u+k1UH4iWzBOxenhAkBYyqtKYLY2075RqeibP0qgELy+gld/MVuG/d0Y1q9hgHQIjxP1npqqv4su/sZmQGgPrYeXDqrO5YoCUnO1AEpEti1TKto8EBJyw0HnYV5M06VfosCSR1lhNtbVQijZJuQSmjKmxoiCbur2F8u6UblqmbPEbAYkLnkEz/4awnh12YEQIPba0JlzbQIDrXlULdl+Bk+LEQWDpbI9mbKAsDR+dTJEJrYFtVo8Ht8i2AjVl/JFx5l9aKhFQJCKNqdB0uhIcDeIB+/QRUOrv3RmjHdUGnh1TbYNEKw81VCG0+UKXoPALYz9vV1ktE2AxGVm8S8aoIfFFiaIpTlHTLQtBZS/sK/oVjN6WaLFcSrPiG9bpjRhbQrEDAoBF1cT+aIignwyzLSU4CjrYuoBwZ25h6cN5NVfTPnhX0AFde98YBUYmClP77sjKvtIgoE0/1SO1YAw2tiGNHDz5CcFDUypcRZeyFMECEuF1f2gQ7cAwURjqis7V/h/CUCuWQVI1568o6+dv1D9RW8we23yxm1WARLWuy/3bGAnH2bvrpUBpEqBYBej2MEdubFwNc/Ylyk5DqrZ1gDCUngfvkQCuYKdJ/Q2m2TRnCSErCWEVBBC/KwCJDGrSLCS0TBkByobxBtmcUOGKQYD/Uz0Khm7coAsGLXXCmHBUyOsBgNVYlctL8gTRoTLjmMrIKgksOOg3KAzMDHNlfrmcikQJAFBMvrwluiGsbz6iy4V+uAVdH/IgYFeVgxesc91ig1UBEatjYCE9GjFjaX3dmO4TJYTz+XaBMjEdSkCeYLJ4WKRSkLI8w0CpENET66zlEhe/cWIHCZAsNcWXLgqC0jRpu0C2YMWuFJAqs5Zt2UNmx0vcEZmz4lXNA4aprYAgoQeana8xZT6i7YJBcg/CCEGmwHpmZzHdYbxc7peG93z7DWMLUiBgcEquhQtOqW9YjBq6402pWDg5PgHGwVyCm0ZJeOgh9lWQHrnhHJjopXOzhNa7ya5Ydk2A4Lqr1bHs9zFcl79xQAWHdyRAiR/0RKBcEV3iDWAzD02TDEg/Quoqi4VgYnrUxWNgd5lW8FAyl+YIFB/v6bU31F9BervHpsBeZTfyzsbsTRYrHgetyBLRZ4YSUQ3C3tv75wwq8CovVYIM/Zb9mfRhPaBO6XmRiW3s2qMhgCCY9Mq9sFpvPp7rEyg/j6oP8HPNkC69eUD+m38hNVDnani+UkbtogCMrh0JnePTq9hth9rASnZNkgRIFED+NpEjDTOPTpM8ZZoCwjo5+qVHQpBob5mTkjM3qcz+k3U30ibAcGjimj19/0NvPqL6ULccxlDzMDA7EO6djBlQrTVYCxQqGGhZY7xFG6s8VFW9a9Um0IVNyKhjWhMhqZl+cL8MIwqUtcrbQaEUX99eWsUk+TYQTChjlZ/998Xnirar2AUd93g585YwtYCMvvQUEWA0G4SdAKiTFBkcG5Nl5UNKLBRizJ1lZgSuuBHJmjh9GxPs5pIjLtT995oECAhXeK5zvCYIkvF83QSM+Zk0R7WrFk9rQaj5kqBou0qfUoPwcQUVPeT7RejkaJcsD4VBpfGMrEQ9LNJAYCEte6YaYKlbVLFSJiZQj33T0KIl82AxKfkW1R/M3tQXtvSmRwg9IECfm0MUH1ZmepZa2IXyIFRtCkNvPx5jQ99Sxb7vFoI80/mmLnZ0SfVryACOnQPAI3ORbYMA0v3sBhJriQPLXbMQkHATPO1CCE5NgNiqv7iGVLsoNups6Nah0UwYKChSA9eWCO9YmtFCAFUwh3xWbz+r1KrYNqODItAsFHBSRsoLmglzwXou0N5iVwgV4yE6u6BqXom0UHmkIJCRYAoITzYy1Lx/MY3fwedYnkLv024nyIHYq0VoVuWxq4YIMjbis/qLKpBTd0xyIQLXBVzwVe75LkAg1FYg9K9vYtsYSoh5BNCyDJCiIsUIB9bAwgW4NDqL31yDiap0ffiarQWjMozyizz0F78OSQYNKJV6nnHsmHojJ4QmdQOvFrKc0F020ey4MYSg2x5NnpxD5fqoaCPVrY8mxDyN0LIdULILEJIZ6KwLSaE/McaUO5QxfNzTM6OYgnd0taCsfBCnqKQ7fD5vQXqOMbV5x3PhiFlcdAxphWTNCH1/qiMYEnFlgkesoWpqDGhTwpDtEoOKag/mHpH/V/z9CA2thaEkBAZusUOikfhsS+MZ0yZvpRpjpUSWnQxj9leZLmjLh0C2lNbpQpP7RGvYKIJ6wCx9Awz4+VkAR5SgBY2uj1M6xRF6O+EkOcIIXMJIWHkMbYa9iX6hwuL500PDMAQZ2OAMXppItO3Ei7GdxoWp4XdxXr4Yod9y7Pr5e5eQkg+IcRIHNTi6OohLOxkPwgrctlrGBjCOLhSMCpOD7e4TRVvHsikkWIeFSYomOb4ShWm4kKxV3k2IeRfhJCbhJAqQkisEn/U42j4Et+wL4mHR7Ifh+XRtN2hVLWdddDcEh+zLInJ00KbQqtAFgyJ0cDOIj2j8UkBYFqSJ1eeTQj5lhByrJ4LJA05R7Yj7AvjiZ6WiuclXexXC5lENdbOKLaRC3B10ylKcuXZcoWphJB/E0JuE0KWNiUukGuFSs6OyiyNtajSTtuZAeNWDmASpzEVVCeS3GZaGsGWZ9OxfXsUphJCvqO4wJv8CptP/X7KfBAKQnYi8GgNSyk3FadyIG9BAmO8YVmBaU0GMSFM9Ga54H+OSHMBZlSy5dkYIngSuUCu3WQ/cEWhePE8+oTQgYd2Qee4QEVckB6tgboJHnCPqm+UOlMXbQjkAq2rLBd8Twg5RwgZX7+gnri2mP3YBJPieYPMUas0YXkDywX/bQUXBCvnAsyB6vekcIFU62GpeB6PZbI0UajVoI6P+zu91YF9uOAHigt8STNruOK+Zifj1Cxe/T0xU5gh3raFmjl0ACt55TSin4/5MB5V9KziczIA/GLCBWrSzNtBsfgxal1Y3oWyALUdJVywd8qj4wHpUgcL9GM9F5QQQgIdPQFNreVZKp6XIkyyY7kAc4at4II0Qoiroz+6KTdjfSiSmTw8Z10JF6A2JQPCTxQXBDn6I39t7WV2IvHwe1MuwPgCbSxK0AcUF2gc/VG/5lZFn7+L2YyYYkrn/VqgPxFCztb/Td0AR3/Ek9SildocTi54fO1LCwD8lRBytV4WtHmM79PsWzUFwnv1siDJqRE5futq7eB3cDZnczbypLb/B0qd9MAdnyp8AAAAAElFTkSuQmCC");
var websocket_b64_img = b64dataURItoBlob("data:image/png;base64,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");
var magic_book_b64_img = b64dataURItoBlob("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJjklEQVR4nO2dC0xb1xnHP+MHBgPhEagB8wgxjSGGEB7lDSGGFkghMBhkYJOWBAIhSUtKHkuImpC0aUK6UtK0JlMadWnVkk2qmnXVVmVd00bqtFWdlk3bWqlj0rZ2mrQt26S9t286Ftc5dvy4NueCH+eT/hI595zv+n4/n3N9z/nODQA3bty4hZSdAYBPAOBTRvoAAIwrfVHBanoAQAn0tZW+sGC1IomAvL7SFxb8QNSRCCcf81+tDRwIUyCaaIRvXvJfO7dxIAyMAwkw40ACzDiQADMOJGCBqJQI27v9V9kGqW7qcgCwAMAhHzUBAPdCkFkwPIfsWsLn+A0AyCCILBiAPLPEzxLvwXcsALQBwLMA8BEAvAIAkRAIQJRKJZrNFr9VUlpKB+FHADDMSNcFv/GZeahvNHtUzqZeT0AUAFADAMcB4CYA/NsFQHNAAImLW4Wfff47v3ViakqKnoa0DFuGsO/q5x7Vfflj53aVALAPAK4BwF9EnOcKBwKSAvGoVTFqLFibSpd9tpL3HXsP0Wg0OD9/1W9t3/6Q/aKSY2XYmKdkoszECKZAVEo5luZl4OgXqvDFyV58b24M33pmJ0ZEyOh6xpC6qXcUKRGtCUz0qClyyUDSkuOwvW49nhnbgu9cGMWbF/fcJUNWCt3mUQ7EKg2QQn2qSwDOsrSU0O3eXHkgMhmCNtl/xcZI3kNyGrZh+/nve1TL2esOQBTyCPzO7LBXIM/u76Db/RUAVCEz/S4VEPBTZKjyBoQMZWqVgm5Xy4FYpQHS1VDoFchrpyyYnZpAt5viQKzSAMnSJtwF4Ftf2YlTw83YVpOPqUlxrtp9EDJDllSKrezDzBMfeZTuyzdctn31pBlnxrdif3MxrstKwQhyz/R8vv8AQAIHAtIAEQEAUxM0qFbK6bJODgSkAeJKMWolFmatxq4KPR7tKsPpgRosyk6m61wICSDlWYBvDLFRu5H6lqtjUJGQ7lnxaW4BRCrkmKdLxPayHJxoL7YBcFZPVS7d5pOQALJJD/jhBBv1lbC7B40/uNElBEFnLNW4vSHPuV0WBzLBFMjHwt+kZzhDONxZahuyyNAVHenwHCJoBwcy4RpIRnkrbj4271F1By47B/Q54W9DegKe6K1AS70BK+7VYlKsWgzQ14IeSEkG4BULGz1ggKVOLnbQv7S8/dqSR0Q4PyD+HgAighqIVDL4ByRlcW7KrV9hNvjkrmb89swQvj07bJsDo+ps5ECAGRCyhPsWXZYYF40PVKzDow834utnH3Y5lVKgd1i0OhjUQJRywIRoGRNFKpgA2S/8W69bje/PeZ+OH2y7j/bxdlADCbAFqngAKLTfRyJkthVCb0CeP9hF+/g7AERxIFZmQGSLa+W2sidGWrwCuWHdjRq1ivZj4kCszIAQe1ko66w3ilpFrC5cQ/s5zYFYmQJ5SCjTpcSLAvLItlraz4cciJUpkHS6/OtPDngF8vKJPtrPfwEgmd/UTcyAEPuZUH5oYLOoXpKScCdXAAB6OBATUyCzQrmpLFcUkJZKA+3rIgdiYgqkTShfpVHbkuS8ATk22ET7+hUHYmIKhGS7/0s4RjIXvQG5dm4QZTIHf2ulhBIuD4a03RSOjXZViRq2ctKTaH8jIKGFI5DjwrGy/AxRQHobi2h/3+BAgCmQajrx+rsXRrwCmd7bRvv70+I2O95DDGyAkE07t4XjM/s7vAK5fn4XKhUO2Sj3cSDArIcQe0M4bm4uETVsFeU6JE8c4UCAKZC9wnGSNCcGyNDWctrnOxwIMAViEI6TJV2SVuoNyNzhbtrnPwFAIwWUcPyVJdivhTokx9ft/eO5EXz6kXb8oslhHz5RM0hg4QzkslCHrKcLAMjT+6WjPbYtb2TrG/kl5uRP0LmwB5K20YQ14xc9qmL3jFggfUIdbVIsHjQ3YEOJHuM0olKDiG6FPRAQFyixQO4BgP+J8UESsNdnJOL9RZl0OWmrDeshC9gCIfZjV23IjV6XFIMNRh0ONxnxKXO1PdMxMcahB/WHNRC5JhFVaXmepV3nC5Bz9l6gUmBtXhoObs7HU32VbvN/y3O1tO+XwhpIrH/bETwBaRbqRakUtmRrdyCO95ajuc6Aem087fu3rF8ycAeIQoHQXO+/DGuDEUg0APxDqLu3dYMdwJP9VTjUZMRN63WYnhjjPAVPK18aIAwlFZCYsm7UHX7Xo9LG3/QFCCw+ddvqkuGotTgbc1PjnVNJPWlf2AIB9jd1WJyXEuWLrK+3VuVhZUEWXX5NEiAqlQrH9uzxWzW1tcEKpMxdW5IoV7NhDY5/qQ5fmeq3PzySJ3eq3p8BQBnQr2cKMiByAPiDUJ+sDu5oL8cXDnXZshfdTac4TcdXhyWQ3KYB7L78C4/aeuEHvgKBxVVAW30yZyVm9rfEoKPP8ThzIFFRUXh2etpvtbff6cZFGXKc649mIpNBIdVclsv3Oq5JSxQFZFdnJX2O95kDCQYZpAOylm7jbs8Ira8e6aHPQV4VGMeBXGUGhNgvhTYkF8sbkPesY84TkQ+yBUJ+dxfl+6/0e+wfbrUGsF7PRrr4ZekhxOaENmR3lZhhi8wOU+eZCdipky35gH88zUaj1csGpIfe8iZml9UB8yb6PD/lQK4yBZK0mOFua3fleJ9XIPNPWJzPRTLsl2S8hzjaD4Xg7uupFTVsOb3aaQCWaByIo50WgltVkO0SANmfeGqkBTvqjZievMq5h5Bl4SUZB+JoJvtzWaQS331hN37v+VGcfawDB1pLMS87xfl1ss66BEs0DsTR1ADwNyHA63O0zu9hdCeyEWgaABLBR9vh7a0GXMAyBiTWg56A/JwHHJb7S0di7tYWOBBYbiALooDs6yzF2bEmrjH2MSCx9RnI45YanJ/s4JpkHwMSWw5kMnC+XBzI5MpD4EAmVz7wHMhkCAMpztViY3E2VzH7GJDY+gyECwLiOcTh3YNcsBwx8Pi/9awGgAMA8JSTbgkOslPibGn4ztq4xuGd6Ldd+Ag13Raul1y7q5iQWFExueXCx4HFhS+fzb69q2lDpsvs75H7C0R3wxCxBeF6ybW7igmJFcu1EJdAumrX4atHtt6lY/3VYQvkWH+1y5iQWEkOpLvOsOSfciFiC96mmUisOJDlMw4kwCwwgNQVZOBkf/VdsjQaw3bIsjQaXcaExEpyICwedkLEFnyMCVMg5308uSSb5gPMfuJjTMgLNpkZyf6+AQCfihDZ290CoW+ti188MTEhsctZ6Q/MjRs3bsDW/g/uBUScLYciLwAAAABJRU5ErkJggg==");
// ! ||--------------------------------------------------------------------------------||
// ! ||                              Load Extra Script/CSS                             ||
// ! ||--------------------------------------------------------------------------------||
// ^ CSS
(()=>{
  var style = document.createElement("style");
  style.innerHTML = "@font-face{font-family:'Michroma';src:url(fonts/Michroma-Regular.ttf) format('truetype')}";
  style.type = "text/css";
  document.head.appendChild(style);
})();
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
    if(child.id=="iframe-wrapper"){continue}
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
  let count = sourceText.split("§").length - 1;
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
        let count2 = finaltext.split("§").length - 1;
        if (count2 < count) {
          // Eksik olan _ sayısı kadar text'in sonuna _ ekle
          for (let i = 0; i < count - count2; i++) {
            finaltext += "§";
          }
        }
        console.log("F:" + finaltext)
        // Verinin ilk elemanının ilk elemanının ilk elemanını döndürelim
        resolve([finaltext.replaceAll("% 3F","?").replaceAll("%26","&").replaceAll("%3F","?"),data[2]]);
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
  let count = sourceText.split("§").length - 1;
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
        let count2 = finaltext.split("§").length - 1;
        if (count2 < count) {
          // Eksik olan _ sayısı kadar text'in sonuna _ ekle
          for (let i = 0; i < count - count2; i++) {
            finaltext += "§";
          }
        }
        console.log("X:" + finaltext)
        console.log("DİL :" + data[2]);
        // Verinin ilk elemanının ilk elemanının ilk elemanını döndürelim
        resolve([finaltext.replaceAll("% 3F","?").replaceAll("%26","&").replaceAll("%3F","?"),data[2]]);
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
  const dosyalar = ['js/main.js', 'js/engine.js', 'js/dataset.js', "css/start.css", "css/abc.css", "css/a1b.css", "css/a.css", 'loader.js', 'index.html'];
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
      spanValue.style.color="white";
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
  message.style.backgroundColor = "rgb(34 34 69 / 31%)";
  message.style.boxShadow = "-1px 3px 8px -1px rgba(0, 0, 0, 0.2)";
  message.style.display = "block";
  message.style.borderRadius = "10px";
  message.style.padding = "10px";
  message.style.marginBottom = "10px";
  message.style.marginLeft = "5px";
  message.style.marginRight = "5px";
  message.className="div3dAAA";
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
            if(lang__x=="tr" && window.disable_voice!=true){try{if(resultxxx[0].length>200){var _abc = resultxxx[0].split("§");console.log(_abc);_abc = _abc[0];}else{var _abc = resultxxx[0].replaceAll("§"," ");}responsiveVoice.speak(_abc,'Turkish Female');}catch(ex){}}
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
  messagex.style.backgroundColor = "rgb(34 34 69 / 31%)";
  messagex.style.boxShadow = "-1px 3px 8px -1px rgba(0, 0, 0, 0.2)";
  messagex.style.display = "block";
  messagex.style.borderRadius = "10px";
  messagex.style.padding = "10px";
  messagex.style.marginBottom = "10px";
  messagex.style.marginLeft = "5px";
  messagex.style.marginRight = "5px";
  messagex.className="div3dBBB";
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
      body.style.backgroundColor = "#111111";
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
  style.innerHTML = "@font-face{font-family:'Ephesis';src:url(fonts/Ephesis-Regular.ttf) format('woff')}";
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
geridon_gallery.style.width = "auto"; // Set width to 100px
geridon_gallery.style.left = "50%";  // Position at 50% from the left
geridon_gallery.style.transform = "translateX(-50%)"; // Center horizontally
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
    window.addEventListener("scroll", () => scrollEvent(ul));
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
      window.addEventListener("scroll", () => scrollEvent(ul));
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

// Medya öğelerini değiştiren bir fonksiyon oluşturun
function toggleFiles(ul) {
  const mediaElements = ul.querySelectorAll(".media[data-src], video[data-src]");
  // prevSrc değişkenini tanımlayın
  let prevSrc = "";
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
            // console.log("media type: " + entry.target.tagName); // Bu satırı yorum olarak bırakabilir veya silebilirsiniz
            // console.log("media src: " + entry.target.src); // Bu satırı yorum olarak bırakabilir veya silebilirsiniz
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
    rootMargin: "0px 0px 0px 0px"
    //threshold: 0.75
  });
  mediaElements.forEach(media => {
    observer.observe(media);
  });
}
// Son kaydırma zamanını ve zamanlayıcıyı tutan global değişkenler tanımlayın
let lastScrollTime = 0;
let timer = null;

// Kaydırma olayını tanımlayan bir fonksiyon oluşturun
function scrollEvent(ul) {
  window.listBottom = ul.offsetTop + ul.offsetHeight;
  window.listTop = ul.offsetTop;
  // ul elementinin alt ve üst sınırlarını alın
  // Kaydırma olayını tanımlayın
  if (ul.children.length > 1) {
    // Kaydırma olayını sınırlayan bir fonksiyon tanımlayın
    function throttleScroll() {
      // Şimdiki zamanı alın
      let now = Date.now();
      // Eğer şimdiki zaman ile son kaydırma zamanı arasındaki fark, gecikmeden büyükse
      if (now - lastScrollTime > 150) {
        // Geri çağırma fonksiyonunu çalıştırın
        scrollCallback();
        // Son kaydırma zamanını güncelleyin
        lastScrollTime = now;
      }
      // Zamanlayıcıyı iptal edin
      clearTimeout(timer);
      // Zamanlayıcıyı 0.150 saniye sonra scrollCallback() fonksiyonunu çalıştıracak şekilde ayarlayın
      timer = setTimeout(scrollCallback, 150);
    }

    // Kaydırma olayında yapılacak işlemleri tanımlayan bir fonksiyon tanımlayın
    function scrollCallback() {
      // Zamanlayıcıyı null olarak ayarlayın
      clearTimeout(timer);
      timer = null;
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
      // toggleFiles fonksiyonunu çağırın
      toggleFiles(ul);
    }

    // Kaydırma olayını dinlemeye başlayın
    window.addEventListener("scroll", throttleScroll);
  } else {
    // Kaydırma olayını dinlemeyi durdurun
    window.removeEventListener("scroll", throttleScroll);
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
  media.style.maxWidth = "100%";  media.style.height = "100vh";
  media.style.objectFit = "contain";
  media.style.marginTop = "1%";
  media.style.textIndent = "-20000px";
  media.style.background = "none";
  media.style.backgroundColor = "transparent";
  media.style["::before"] = "content: none";
  media.style.marginBottom = "1%";  media.style.width = "100%";
} else if (/(\.mp4|\.webm|\.ogg|\.wmv)/i.test(fileName)){
  media = document.createElement("video");
  media.style.width = "100%";
  media.style.maxWidth = "600px";
  media.style.height = "100vh";
  media.style.objectFit = "contain";
  media.style.backgroundColor = "transparent";
  media.style.marginTop = "1%";
  media.style.marginBottom = "1%";
  media.style.display = "block";
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
body.style.backgroundColor = "#111111";
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
  `<svg id="wavebodyanimate" class="editorial"
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
  </svg>`;
  div.insertAdjacentHTML('beforeend',wave_data);
  
  
  }catch(ex){}
// ^ Header
(()=>{
  var header = document.createElement("header");
  header.id = "header_x";
  header.style.height = "52px";

  // var bgimg = document.createElement("img");
  // bgimg.id="backgrounddivimage";
  // var node = document.createElement("div");
  // node.id="backgrounddiv";
  // node.style.position = "fixed";
  // node.style.top = "0";
  // node.style.left = "0";
  // node.style.zIndex = "-2";
  // node.style.userSelect = "none";
  // node.style.pointerEvents = "none";
  // node.style.width = "100%";
  // node.style.height = "100%";
  // var bgImg = new Image();
  // bgImg.onload = function(){
  //     URL.revokeObjectURL(background_theme_img);
  //     bgImg = undefined;
  // };
  // bgImg.src = background_theme_img;
  // node.style.backgroundImage = "url("+bgImg.src+")";
  // node.style.backgroundRepeat = "no-repeat";
  // node.style.backgroundAttachment = "fixed";
  // node.style.backgroundSize = "cover";
  // header.appendChild(node); // div'i belirli bir node'un içine ekle

var div_nav = document.createElement("div");
div_nav.className = "nav";
var div_nav_first = document.createElement("div");
div_nav_first.className = "nav-first";

var img_base = document.createElement("img");
img_base.src = main_page_b64;
img_base.onload = function() {
  URL.revokeObjectURL(main_page_b64);
};
img_base.onclick = function() {
  showCacheInMain('cache_form');
};
div_nav_first.appendChild(img_base);
var img_base1 = document.createElement("img");
img_base1.src = gallery_img_base64;
img_base1.onload = function() {
  URL.revokeObjectURL(gallery_img_base64);
};
img_base1.onclick = function() {
  showCacheInMain("gallery_x",!0,!0),gallery_s(foldersOLD);
};
div_nav_first.appendChild(img_base1);
var img_base2 = document.createElement("img");
img_base2.src = websocket_b64_img;
img_base2.onload = function() {
  URL.revokeObjectURL(websocket_b64_img);
};
img_base2.onclick = function() {
  showCacheInMain('cache_websocket');
};
div_nav_first.appendChild(img_base2);
var img_base3 = document.createElement("img");
img_base3.src = magic_book_b64_img;
img_base3.onload = function() {
  URL.revokeObjectURL(magic_book_b64_img);
};
img_base3.onclick = function() {
  showCacheInMain('cache_kpop');
};
div_nav_first.appendChild(img_base3);

div_nav.appendChild(div_nav_first);
header.appendChild(div_nav_first);


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
menuButton.textContent = "➤";

// Menü içeriği elementini oluşturalım
var menuContent = document.createElement("div");
menuContent.id = "menu-content";
menuContent.style.display = "none";
menuContent.style.width = "200px";
menuContent.style.height = "auto";
menuContent.style.backgroundColor = "rgb(17 17 17 / 91%)";
menuContent.style.boxShadow = "-1px 3px 8px -1px rgba(0, 0, 0, 0.2)";

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
option4.textContent = "Kpop";

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
  !function(){
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
  fetch(group.image)
  .then(res => res.blob())
  .then(function load(res){
    var url = URL.createObjectURL(res, {type: "one-time-only", expires: "session"});
    res = undefined;
    image.src = url;
    image.onload = function() {
      URL.revokeObjectURL(url);
    };
  }).catch(function(){
    image.src = group.image;
  });
  image.alt = group.name;
  image.id=group.id;
  // Liste öğesi elementine grup adı ve resmi ekle
  item.appendChild(name1);
  item.appendChild(image);
  // Liste elementine liste öğesi ekle
  list.appendChild(item);
  }(this);
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
textarea1.style.resize = "none";
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
textarea2.style.resize = "none";
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
textarea3.style.resize = "none";
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
  cacheCommands.style.fontWeight = "1000";
  cacheCommands.style.display = "none";

// Commands başlığını oluşturur
var commands = document.createElement("div");
commands.textContent = "Commands";

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
  "Base64 Decode ❯ /base64decode,/b64decode,/b64d Example: /b64d (Base64 Encoded Text)",
  "Link To Short Link ❯ /l2sl,/linktoshortlink,/l2sl Example: /l2sl (Link)",
  "Short Link To Link ❯ /sl2l,/shortlinktolink,/sl2l Example: /sl2l (Short Link)"
];
// Oluşturulan elementleri div elementinin içine ekler
cacheCommands.appendChild(commands);

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
  // explanation.style.fontFamily = "monospace";
  explanation.style.textAlign = "left";
  // Div elementini div elementinin içine ekler
  cacheCommands.appendChild(explanation);
  // Br elementini div elementinin içine ekler
}
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
// textarea.style.borderRadius = "15px";
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


  // <img> elementini oluşturalım
var img = document.createElement("div");

!function(){
const circ = document.createElement('div');
circ.classList.add('circ');

const hands = document.createElement('div');
hands.classList.add('hands');

const body = document.createElement('div');
body.classList.add('body');

const head = document.createElement('div');
head.classList.add('head');

const eye = document.createElement('div');
eye.classList.add('eye');

// Assemble the elements
head.appendChild(eye);
circ.appendChild(hands);
circ.appendChild(body);
circ.appendChild(head);
img.appendChild(circ);
}(this);

img.style.position = "static";
img.style.minHeight="128px";
img.style.minWidth="128px";
img.style.maxHeight="128px";
img.style.maxWidth="128px";
img.style.width="100%";
img.style.height="100%";
img.style.margin="0 auto";
img.id = "staticAAA";
// img.onclick = function() {
//   showCacheInMain("cache_form");
// };

// <header> elementinin içine <h1> elementini ekleyelim
cacheForm.appendChild(img);

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
textarea.style.resize = "none";
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
ytpanel.className = "iframeAAAdiv";
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
suggestion3.textContent = "🌐:🇹🇷";
var suggestion4 = document.createElement("div");
suggestion4.className = "suggestion";
suggestion4.id = "voicex";
suggestion4.textContent = "🎙️:🔇";
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
          this.textContent="🌐:🇹🇷";
        }else{
          window.disable_translate = false;
          this.textContent="🌐:🔁";
        }
      });
      continue;
    }
    if(suggestion.id == "voicex"){
      suggestion.addEventListener('click', function() {
        if(window.disable_voice==false){
          window.disable_voice = true;
          this.textContent="🎙️:🔇";
        }else{
          window.disable_voice = false;
          this.textContent="🎙️:🔉";
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
messages.innerHTML = "<br><y style='color:#c59722'></y><br>Size: <x>null</x>";
// <p style='color:#c43f22'>(!) Başkasının yazışmalarını görebilirsiniz</p>
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
  passwordLabel.style.color = 'white';
  formElement.appendChild(passwordLabel);
  formElement.appendChild(document.createElement('br'));
  
  let passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('name', 'passwordAAA');
  passwordInput.setAttribute('autocomplete', 'off');
  passwordInput.style.color = 'white';
  formElement.appendChild(passwordInput);
  formElement.appendChild(document.createElement('br'));
  
  let roundLabel = document.createElement('label');
  roundLabel.setAttribute('for', 'roundAAA');
  roundLabel.textContent = 'Round:';
  roundLabel.style.color = 'white';
  formElement.appendChild(roundLabel);
  formElement.appendChild(document.createElement('br'));
  
  let roundInput = document.createElement('input');
  roundInput.setAttribute('type', 'number');
  roundInput.setAttribute('name', 'roundAAA');
  roundInput.setAttribute('value', 0);
  roundInput.setAttribute('min', '0');
  roundInput.style.color = 'white';
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
img.style.maxHeight = "64px";
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
  olustur("gallery",data["gallery_enc"], vfileb64img);

  
  
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

// setTimeout(()=>{ 
//   youtubeatag("https://youtu.be/hUisUVjUkRg?t=16");
// },100);

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






