// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("myListItem");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById('myListMain');
list.addEventListener('click', function(ev) {
  if (ev.target.className === 'myListItem') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function myListAddFunction() {
  var createdElement = document.createElement("div");
  createdElement.className = "myListItem";
  var inputValue = document.getElementById("myListInput").value;
  var t = document.createTextNode(inputValue);
  createdElement.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myListMain").appendChild(createdElement);
  }
  document.getElementById("myListInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  createdElement.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}