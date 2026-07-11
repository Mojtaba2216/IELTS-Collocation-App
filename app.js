let cards=[];let index=0;
fetch('data.json').then(r=>r.json()).then(d=>{cards=d;show()});
function show(){
let c=cards[index];
document.getElementById('card').innerHTML=
`<h2>${c.word}</h2>
<h3>${c.meaning}</h3>
<p>${c.example}</p>
<p>${c.translation}</p>
<p>Box ${c.box}</p>`;
}
function answer(ok){
index=(index+1)%cards.length;
show();
}