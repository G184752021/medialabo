// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let b1 = document.querySelector('button#kaito');
b1.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let a=document.querySelector('#nyuryoku');
  let yosou =i.value;
  yosou =Number(yosou);
  kaisu++;

let count =document.querySelector('span#kaisu');
count.textContent=kaisu;
let answer =document.querySelector('span#answer');
answer.textContent=yoso;
let kekka =document.querySelector('#p#result');

  if(kaisu>=4){
    console.log("答えは"+kotae+"でした。すでにゲームは終わっています");
  }else if(kotae===yoso){
    console.log("おめでとう、正解です");
  }else{
    if(kaisu===3){
      console.log("間違い、残念でした答えは"+kotae+"です。");
    }else if(kotae>yoso){
      console.log("間違い、答えはもっと大きいですよ");
    }else {
      console.log("間違い、答えはもっと小さいですよ");
    }
  }
}