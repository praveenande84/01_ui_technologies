function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.shadowOffsetX=15;
	ande.shadowOffsetY=15;
	ande.shadowBlur=2;
	ande.shadowColor="green";
	
	
	ande.font="50px impact";
	ande.fillStyle="red";
	ande.fillText("WELCOME",30,200);
	
	
}

window.addEventListener("load",a,false);





