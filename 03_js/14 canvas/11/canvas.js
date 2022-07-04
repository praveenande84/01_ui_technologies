function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.font="50px impact";
	ande.fillStyle="red";
	ande.fillRect(50,50,250,100);
	ande.rotate(Math.PI/9);
	ande.scale(2,2); //  zoom value x,y 2=200% zoom
	ande.fillRect(50,50,250,100);
	
}

window.addEventListener("load",a,false);






