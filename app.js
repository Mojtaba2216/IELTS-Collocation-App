let cards=[],i=0,back=false;let learned=JSON.parse(localStorage.learned||'[]');
fetch('cards.json').then(r=>r.json()).then(d=>{cards=d;show()});
function show(){let c=cards[i];document.getElementById('stats').innerHTML='یادگرفته: '+learned.length;document.getElementById('card').innerHTML=back?'<h2>'+c.word+'</h2><h3>'+c.meaning+'</h3><p>'+c.category+'</p><p>جعبه '+c.box+'</p>':'<h2>'+c.word+'</h2><p>'+c.category+'</p>'}
function flip(){back=!back;show()}
function next(){i=(i+1)%cards.length;back=false;show()}
function know(){if(!learned.includes(cards[i].id))learned.push(cards[i].id);localStorage.learned=JSON.stringify(learned);next()}
