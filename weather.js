let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};



////////// 課題3-2 ここからプログラムを書こう

  
  let botan = document.querySelector('button#print');
  botan.addEventListener('click', sendRequest);

  function sendRequest() {
    let n = document.querySelector('#nishita[name="itiran"]');
    let suuzi = n.value;
    let rink = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + suuzi + '.json';
  
    // 通信開始
    axios.get(rink)
      .then(showResult)
      .catch(showError)
      .then(finish);
  }
  
  // 通信が成功した時の処理
  function showResult(resp) {
    let gi = new Boolean(false);
    if(gi === true){
      imagetenki.remove();
    }

    let data = resp.data;
  
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
  
    if(data.name === "State of Rio de Janeiro"){
      data.name = "リオデジャネイロ";
  } else if (data.name === "Paris"){
      data.name = "パリ";
  }
  let tennkihantei;
  if(data.weather[0].description==="曇りがち"){
    tennkihantei = "曇りがち";
    gi = true;
  }else if(data.weather[0].description==="晴れ"){
    tennkihantei = "晴れ";
    gi = true;
  }else if(data.weather[0].description==="霧"){
    tennkihantei = "霧";
    gi = true;
  }else if(data.weather[0].description==="厚い雲"){
    tennkihantei = "曇り";
    gi = true;
  }else if(data.weather[0].description==="晴天"){
    tennkihantei = "晴天";
    gi = true;
  }else{
    tennkihantei = "小雨";
    gi = true;
  }

  let kuni = document.querySelector('span#kuni');
  kuni.textContent = data.name +"の天気";

  let tenki = document.querySelector('span#tenki');
  tenki.textContent = tennkihantei;

  let temp = document.querySelector('span#temp');
  temp.textContent = "気温は"+data.main.temp;

  let temp_max = document.querySelector('span#temp_max');
  temp_max.textContent = "最高気温は"+data.main.temp_max;

  let temp_min = document.querySelector('span#temp_min');
  temp_min.textContent = "最低気温は"+data.main.temp_min;

  let feel = document.querySelector('span#feel');
  feel.textContent = "体感気温は"+data.main.feel;

  let humidity = document.querySelector('span#humidity');
  humidity.textContent = "humidity is "+data.main.humidity+"%(may be)";

  let wind = document.querySelector('span#wind');
  wind.textContent = "風の強さは"+data.wind.speed+"です。";

  let presure = document.querySelector('span#presure');
  presure.textContent = "気圧は"+data.main.pressure;
  

    
    
//tenkigazou.src = png;

    // data をコンソールに出力
    console.log(data);
  
    //console.log(temp_min);
    console.log(data.base);
  }
  
  // 通信エラーが発生した時の処理
  function showError(err) {
    console.log(err);
  }	
  
  // 通信の最後にいつも実行する処理
  function finish() {
    console.log('Ajax 通信が終わりました');
  }