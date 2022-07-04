function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.beginPath(); //starting
	ande.moveTo(50,50); //x,y  //starting point.
	ande.lineTo(50,200); //line draw upto x,y   //ending point.
	ande.closePath()//ending
	ande.stroke();
	
	
}

window.addEventListener("load",a,false);




function b(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.beginPath(); //starting
	ande.moveTo(100,200); //x,y
	ande.lineTo(100,300); //line draw upto x,y 
	ande.lineTo(200,300);
	ande.lineTo(200,200);
	ande.lineTo(100,200);
	ande.closePath()//ending
	ande.stroke();
	
	
}

window.addEventListener("load",b,false);






