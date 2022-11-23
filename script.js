var block = getElementByIdName('block')
var hole = getElementByIdName('hole')

hole.addEventListener('animationiteration', () =>{
	var random = -((math.random()*300)+150);
	hole.style.top = random + "px";
});