
let header = document.getElementById('header-title');
header.textContent = "New ITEM"

let best = document.getElementsByTagName('title'); 
best.textContent = 'best Item';

let header2 = document.getElementById('main-header');
header2.style.borderBottom = 'solid 3px #000';

items = document.getElementsByClassName('title'); 
items[0].style.color  = 'green';
items[0].style.fontWeight = 'bold';


let ok = document.getElementsByTagName('li');
ok[4].textContent = 'Hello 5';


addingid = document.getElementsByClassName('list-group-item');
addingid[2].style.backgroundColor = "green";

for( let i = 0; i < addingid.length; i++){
    addingid[i].style.fontWeight = 'bold';
}