function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.beginPath();
	ande.arc(300,300,100,0,2*Math.PI); //x,y,r,start angle, end angle.
	ande.stroke();
	
}

window.addEventListener("load",a,false);




function b(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.fillStyle="red";
	
	ande.beginPath();
	ande.arc(150,150,100,0,2*Math.PI); //x,y,r,start angle, end angle.
	ande.fill();
	
}

window.addEventListener("load",b,false);








