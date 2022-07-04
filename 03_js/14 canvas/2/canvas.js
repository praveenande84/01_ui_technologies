function a(){
	var praveen=document.getElementById("mycanvas");
	var ande=praveen.getContext("2d");
	
	ande.fillStyle="pink";
	ande.fillRect(10,10,100,150); //rectangle x=10,y=110,width=100,height=150
	
	ande.strokeStyle="green";
	ande.strokeRect(200,200,100,150);
	
	
	ande.clearRect(20,20,50,100);  // erase the rectangle some area.
	
}

window.addEventListener("load",a,false);

