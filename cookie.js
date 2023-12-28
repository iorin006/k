// ==UserScript==
// @name         Cookie Master
// @namespace    http://tampermonkey.net/
// @version          Dev
// @description  try to take over the world!
// @author       You
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var hogehoge = 0
var hoge = 0
var tonakai = 0
const messageName = 'zero-timeout-message';

//ゴールデンクッキー自動
setInterval(() => {
  Game.shimmers.forEach(function (shimmer) {
    if (shimmer.type == 'golden' && shimmer.wrath == 0) {
      shimmer.pop();
      hogehoge++
      console.log('[info] あなたがいない間にゴールデンクッキー' + hogehoge + '回クリック')
    }
  });
}, 0);

// //トナカイ自動
setInterval(() => {
  Game.shimmers.forEach(function (shimmer) {
    if (shimmer.type == 'reindeer') {
      shimmer.pop();
    }
  });
}, 0);

//限界突破クリックの関数
function clickCookieForce() {
  Game.lastClick = 0;
  Game.ClickCookie();
  window.postMessage(messageName, '*');
  
}
//クリックon
function on() {
  () => {
    clickCookieForce()
  }
  window.addEventListener('message', clickCookieForce, true);
  window.postMessage(messageName, '*');
}



//クッリクstop
function off() {
  window.removeEventListener('message', clickCookieForce, true);
}

//key bind
window.addEventListener('keydown', (event) => {
  if (event.key === 'c' && hoge == true) {
    off()
    hoge = false
    //console.log('off')
  }
  else if (event.key === 'c') {
    on()
    hoge = true
    //console.log('on')
  }

})
