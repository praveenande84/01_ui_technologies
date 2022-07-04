function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	var display=ande.createLinearGradient(0,0,200,0); //x1,y1,x2,y2  
	
	
	display.addColorStop(0,"red"); //size,color
	display.addColorStop(0.25,"green");//size = 1=100%
	display.addColorStop(0.5,"blue");
	display.addColorStop(0.75,"yellow");
	display.addColorStop(1,"pink");// you should use size between 0-1
	
	
	ande.font="50px mistral";
	ande.fillStyle=display;
	ande.fillText("WELCOME",50,300); //rectangle x=10,y=110,width=200,height=150
	
	
	
}

window.addEventListener("load",a,false);




