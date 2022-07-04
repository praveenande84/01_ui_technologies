function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.font="bold 50px impact";
	ande.fontStyle="red";
	ande.fillText("WELCOME",200,200);
	ande.rotate(Math.PI/18); //10 degrees rotate.  //we can use rotate method in rectangles also.
	ande.fillText("WELCOME",200,200);
	
}

window.addEventListener("load",a,false);






