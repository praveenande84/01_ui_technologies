function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	var display=ande.createLinearGradient(0,0,200,0); //x1,y1,x2,y2
	
	
	display.addColorStop(0,"red"); //size,color
	display.addColorStop(0.25,"green");//size = 1=100%
	display.addColorStop(0.5,"blue");
	display.addColorStop(0.75,"yellow");
	display.addColorStop(1,"pink");// you should use size between 0-1
	
	
	
	ande.fillStyle=display;
	ande.fillRect(10,10,200,150); //rectangle x=10,y=110,width=100,height=150
	
	
	
}

window.addEventListener("load",a,false);

