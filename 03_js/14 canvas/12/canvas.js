function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	
	ande.fillStyle="red";
	ande.fillRect(10,10,25,15);
	ande.scale(1.5,1.5);
	
	ande.fillStyle="blue";
	ande.fillRect(10,10,25,15);
	ande.scale(1.5,1.5);
	
	ande.fillStyle="yellow";
	ande.fillRect(10,10,25,15);
	ande.scale(1.5,1.5);
	
	
	ande.fillStyle="green";
	ande.fillRect(10,10,25,15);
	ande.scale(1.5,1.5);
	
	
	ande.fillStyle="pink";
	ande.fillRect(10,10,25,15);
	ande.scale(1.5,1.5);
	
	ande.fillStyle="orange";
	ande.fillRect(10,10,25,15);
	ande.scale(1.5,1.5);
	

	
	
	
}

window.addEventListener("load",a,false);






