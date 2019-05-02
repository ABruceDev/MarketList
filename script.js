/*This code is for add element to a list every time 
when the user click on button. Also add a close button to delete the item
created*/

var btnAdd = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li"); //Get all the 'li' elements
var nlist = listItems.length;

document.onload = NumberItems();//Show the initial number items in the list

function inputLength() {
	return input.value.length;
}

function createBtnClose(btn) {
	btn.className = "close";
	btn.appendChild(document.createTextNode("x"));
	btn.onclick = deleteItem;
}

//Create a 'close button' to each current item on the list
function BtnCloseOldItems() {
	for (i = 0; i < listItems.length; i++) {
	  var btnClose = document.createElement("button");
	  listItems[i].appendChild(btnClose);
	  createBtnClose(btnClose);
	}
}

//Create a new 'li' element adding to the existing list and next to it
//is created a 'close button' to delete the item created
function createListElement() {
	var li = document.createElement("li"); //Create a new node li
	var btnClose = document.createElement("button");

	li.appendChild(document.createTextNode(input.value)); //Create a text inside the 'li' node
	ul.appendChild(li); //Append new element li below the last 'li'
	input.value = "";
	nlist += 1;

	//Add a new 'close button' on each new 'li' element
	li.appendChild(btnClose); 
	createBtnClose(btnClose);
	NumberItems();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

function deleteItem(ev){
	nlist = nlist - 1;
	ev.target.parentNode.remove();
	NumberItems();
}

function NumberItems() {
  	document.getElementById("tItems").innerHTML = nlist;
}

BtnCloseOldItems();

//In the second argument the function doesn't need () to be called.
//This is called "callback function" 
//We are passing a reference to the function without running it.
//The function EventListener automatically add "()" and run the function
//every time the click happens.
btnAdd.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
//ul.addEventListener("click",addCheckSym);