
let header = document.getElementById('header-title');
header.textContent = "New ITEM"

let best = document.getElementsByTagName('title'); 
best.textContent = 'best Item';

let header2 = document.getElementById('main-header');
header2.style.borderBottom = 'solid 3px #000';

let items = document.getElementsByClassName('title'); 
items[0].style.color  = 'green';
items[0].style.fontWeight = 'bold';


let ok = document.getElementsByTagName('li');
ok[4].textContent = 'Hello 5';


let addingid = document.getElementsByClassName('list-group-item');
addingid[2].style.backgroundColor = "green";

for( let i = 0; i < addingid.length; i++){
    addingid[i].style.fontWeight = 'bold';
}


let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';


let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.hidden = 'hidden';

let add = document.querySelectorAll('.list-group-item');
add[1].style.color = 'white';

odd = document.querySelectorAll('li:nth-child(odd)');

for( let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}





