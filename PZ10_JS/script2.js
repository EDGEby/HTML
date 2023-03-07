/*
colorDiv.addEventListener("click",function(){
				colorDiv.style.backgroundColor = "rgb(" + 
				Math.round(255*Math.random()) + "," + 
				Math.round(255*Math.random()) + "," + 
				Math.round(255*Math.random()) + "," + 
				")";
			
*/
colorDiv.addEventListener("mousemove",function(e){
				colorDiv.style.backgroundColor =
				"rgb(127," + e.pageX+ "," + e.pageY + ")";





			})
		