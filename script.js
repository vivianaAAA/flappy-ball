var block = document.getElementById('block')
var hole = document.getElementById('hole')
var jumping = 0;

hole.addEventListener('animationiteration', () => {
	var random = -((Math.random()*300)+150);
	hole.style.top = random + "px";
});
setInterval (function() {
	var characterTop = 
	parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	if (jumping==0) {
	character.style.top = (characterTop+3)+"px";
	}
},10);

function jump() {
	jumping = 1;
	let jumpCount = 0;
	var jumpInterval = setInterval(function(){
	var characterTop = 
	parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	if((characterTop>6)&&(jumpCount<15)){
	character.style.top = (characterTop-5)+"px";
	}
	if(jumpCount>20){
		clearInterval(jumpInterval);
		jumping=0;
		jumpCount=0;
	}
		
		jumpCount++;
	
	
	},10)
}