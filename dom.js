
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
let filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e){
  e.preventDefault();

  let newItem = document.getElementById('item').value;
  let newDis = document.getElementById('discription').value;

  let li = document.createElement('li');
  let li1 = document.createElement('li');

  li.className = 'list-group-item';
  li1.className = 'list-group-item';
  
  li.appendChild(document.createTextNode(newItem));
  li1.appendChild(document.createTextNode(newDis));

  let deleteBtn = document.createElement('button');
  let deleteBtn1 = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn1.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));
  deleteBtn1.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  li1.appendChild(deleteBtn);
  
  itemList.appendChild(li);
  itemList.appendChild(li1);
}



function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  
  function filterItems(e){
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }