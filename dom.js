
//
// let header = document.getElementById('header-title');
// header.textContent = "New ITEM"

// let best = document.getElementsByTagName('title'); 
// best.textContent = 'best Item';

// let header2 = document.getElementById('main-header');
// header2.style.borderBottom = 'solid 3px #000';

// let items = document.getElementsByClassName('title'); 
// items[0].style.color  = 'green';
// items[0].style.fontWeight = 'bold';


// let ok = document.getElementsByTagName('li');
// ok[4].textContent = 'Hello 5';


// let addingid = document.getElementsByClassName('list-group-item');
// addingid[2].style.backgroundColor = "green";

// for( let i = 0; i < addingid.length; i++){
//     addingid[i].style.fontWeight = 'bold';
// }


// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';


// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.hidden = 'hidden';

// let add = document.querySelectorAll('.list-group-item');
// add[1].style.color = 'white';

// odd = document.querySelectorAll('li:nth-child(odd)');

// for( let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// console.log('get element by name');
// dom = document.querySelector('.list-group-item')


const itemlist = document.querySelector('#items');
itemlist.parentElement.style.backgroundColor = '#f4f4f4';


itemlist.lastElementChild.textContent = 'this is item 5';

itemlist.lastChild.textContent = 'last child created';

itemlist.firstElementChild.style.color = '#EC6649';

itemlist.firstChild.textContent = 'this is first child';

itemlist.nextSibling.textContent = 'nothing here';

// we don't have any sibling element

itemlist.previousElementSibling.style.color = '#276356';

itemlist.previousElementSibling.style.backgroundColor = '#7C88CC';

itemlist.nextSibling = 'display: none';


let newDiv = document.createElement('div');

newDiv.className = 'hello';

newDiv.id = 'hello1';

newDiv.setAttribute('title', 'hello div');

let newDivText = document.createTextNode(' HEllo ');
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);
newDiv.style.fontSize = '30px';


let newDiv2 = document.createElement('div');

itemlist.firstChild.textContent = 'HEllo';



let form = document.getElementById('addForm');
let itemList = document.getElementById('items');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e){
  e.preventDefault();

  let newItem = document.getElementById('item').value;

  let li = document.createElement('li');

  li.className = 'list-group-item';
  
  li.appendChild(document.createTextNode(newItem));

  let deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  