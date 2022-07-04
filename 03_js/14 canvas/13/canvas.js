function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	var display=ande.createRadialGradient(250,250,50,250,250,25);//x,y,radius,

	display.addColorStop(0,"blue");
	display.addColorStop(0.25,"red");
	display.addColorStop(0.50,"yellow");
	display.addColorStop(0.75,"orange");
	display.addColorStop(1,"green");
	
	ande.fillStyle=display;
	ande.fillRect(10,10,300,300);
	
}

window.addEventListener("load",a,false);






