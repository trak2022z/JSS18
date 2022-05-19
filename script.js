"use strict";
(function() {
window.addEventListener("load", init);

  function init() {

    console.log('page loaded');
    
    let demobtn1 = document.getElementById("demo-btn1");
    demobtn1.addEventListener("click", clickHandler);

    disableMenu();
    showMenu();
}

function showMenu() {
  let outputtext2 = document.getElementById("output-text2");
  outputtext2.classList.remove('hidden');
}
  
function disableMenu() {
  let outputtext2 = document.getElementById("output-text2");
  outputtext2.classList.add('hidden');
}


function clickHandler() {
  let outputtext1 = document.getElementById("output-text1");
  outputtext1.textContent = "Wait for it...";
  setTimeout(sayHello1, 5000);
}

function sayHello1() { // called when the timer goes off
  let outputtext1 = document.getElementById("output-text1");
  outputtext1.textContent = "Hello1!";
}

})();
