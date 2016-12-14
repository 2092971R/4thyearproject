var x = 0;
var img = document.getElementById("garden");

$('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("secondCanvas");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

function start(){
	var thisone = document.getElementById("firstCanvas");
	var ctx = thisone.getContext("2d");

	ctx.drawImage(img,0,0, thisone.width, thisone.height);
	
	var template = document.getElementById("shellCanvas");
	var ctx = template.getContext("2d");
}

function cut(){
	div = document.getElementById('hide')
	div.style.display = "block";
	
	var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
	ctx.drawImage(img,0,0, c.width, c.height);
	
    ctx.rect(x*4,0,c.width,c.height);
	ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	var d=document.getElementById("myCanvas2");
    var ctx=d.getContext("2d");
	ctx.drawImage(img,0,0, c.width, c.height);
	ctx.rect(0,0,x*4,c.height);
	ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
}

function pick(ram){
	div = document.getElementById('hide2')
	div.style.display = "block";
	if (ram == 1){
		var e=document.getElementById("myCanvas3");
		var ctx=e.getContext("2d");
		ctx.drawImage(img,0,0, e.width, e.height);
		ctx.rect(0,0,x*4,e.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#FFFFFF';
		ctx.fill();
		ctx.stroke();
		
		var f=document.getElementById("myCanvas4");
		var ctx=f.getContext("2d");
		ctx.drawImage(img,0,0, f.width, f.height);
		ctx.rect(x*4,0,f.width,f.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#FFFFFF';
		ctx.fill();
		ctx.stroke();
	} else {
		var e=document.getElementById("myCanvas3");
		var ctx=e.getContext("2d");
		ctx.drawImage(img,0,0, e.width, e.height);	
		ctx.rect(x*4,0,e.width,e.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#FFFFFF';
		ctx.fill();
		ctx.stroke();
		
		var f=document.getElementById("myCanvas4");
		var ctx=f.getContext("2d");
		ctx.drawImage(img,0,0, f.width, f.height);
		ctx.rect(0,0,x*4,f.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#FFFFFF';
		ctx.fill();
		ctx.stroke();
	}
	
	
}