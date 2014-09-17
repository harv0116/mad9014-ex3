// JavaScript Document

/****************************************
Write a function that runs AFTER the page has 
finished loading.

Add a second function that will run each time the 
menu toggle image is clicked. When the function 
runs it checks to see if the nav area is displayed
(css style display:block). If it is not shown then 
the function will display it, else hide it.

Attach the second function to the menu toggle 
with the click event inside your first function.

Make sure you uncomment the CSS file
where it is setting the nav menu to 
display:none;
****************************************/

document.addEventListener ("DOMContentLoaded", function() {
	//listen for image click
	var tag = document.querySelector(" .menu-toggle");
	tag.addEventListener('click',menuClicked);
	//call menu clicked
});

function menuClicked(){
  //determined image display is block or not  - toggle the menu
  	var toggle = document.querySelector(" .main-nav");
  	if (toggle.style.display.block === hidden) {
  		toggle.style.display.block = block;
  	} else {
  		toggle.style.display.block = hidden;
  	}
 }
