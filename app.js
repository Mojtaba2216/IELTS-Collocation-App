let cards=[],i=0,back=false;
fetch('cards.json').then(r=>r.json()).then(d=>{cards=d;show()});
function show(){let c=cards[i];document.getElementById('card').innerHTML=back?`<h2>${c.front}</h2><h3>${c.meaning}</h3><p>${c.example}</p><small>${c.topic}</small>`:`<h2>${c.front}</h2><p>${c.topic}</p>`}
function flip(){back=!back;show()}
function next(){i=(i+1)%cards.length;back=false;show()}
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js')}
