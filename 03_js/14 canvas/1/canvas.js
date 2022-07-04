function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.font="50px impact";
	ande.fillStyle="red";
	ande.fillText("WELCOME",50,200); //x-axis=30, y-axis=200 //fill is for solid text.
	
}

window.addEventListener("load",a,false);



function b(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.font="50px impact";
	ande.strokeStyle="green";
	ande.strokeText("WELCOME",100,300); //x-axis=30, y-axis=200 //stroke is for outline of the text.
	
}

window.addEventListener("load",b,false);



function c(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.font="50px impact";
	ande.fillStyle="red";
	ande.strokeStyle="green";
	ande.fillText("WELCOME",200,400);
	ande.strokeText("WELCOME",200,400); //x-axis=30, y-axis=200
	
}

window.addEventListener("load",c,false);