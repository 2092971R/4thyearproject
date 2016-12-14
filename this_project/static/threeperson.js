var x = 0;
var y = 0;
var z = 0;
var biggest = 0;
var second = 0;
var img = document.getElementById("garden");


function killme(){
	var thisone = document.getElementById("firstCanvas");
	var ctx = thisone.getContext("2d");
	ctx.drawImage(img,0,0, thisone.width, thisone.height);
	
	var template = document.getElementById("shellCanvas");
	var ctx = template.getContext("2d");
}

function slice(start, end){
	this.start = start;
	this.end = end;
	
}

var sliceA = new slice(0,0);
var sliceB = new slice(0,0);
var sliceC = new slice(0,0);

var biggestslice = new slice(0,0);
var secondslice = new slice(0,0);

$("#slider1").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
		y = rightValue;
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
		
		var trythisone = document.getElementById("thirdCanvas");
		var ctx2 = trythisone.getContext("2d");
		ctx2.clearRect(0, 0, trythisone.width, trythisone.height);
		ctx2.beginPath();
		ctx2.moveTo(y*4,0);
		ctx2.lineTo(y*4,200);
        ctx2.lineWidth = 2;

      // set line color
        ctx2.strokeStyle = '#ff0000';
		ctx2.stroke();
    }
});

$("#slider2").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        var $container = $(this).parent(),
            g = 255,
            r = 255,
            b = 0;
        $container.find('.leftLabel').text(leftValue);
        $(this).find('.bar').css('background', 'rgb(' + [r, g, b].join(',') + ')');
		z = leftValue;
		
	var line = document.getElementById("coverCanvas");
	var ctx2 = line.getContext("2d");
	ctx2.clearRect(0, 0, line.width, line.height);
	ctx2.beginPath();
	ctx2.moveTo(biggestslice.start*4 + (((biggestslice.end-biggestslice.start)*4)/(100/z)),0);
	ctx2.lineTo(biggestslice.start*4 + (((biggestslice.end-biggestslice.start)*4)/(100/z)),200);
    ctx2.lineWidth = 2;

      // set line color
    ctx2.strokeStyle = '#ff0000';
	ctx2.stroke();
    }
});

function cut(){
	sliceA.start = 0;
    sliceA.end = x;
    sliceB.start = x;
    sliceB.end = y;
	sliceC.start = y;
    sliceC.end = 100;
	
	div = document.getElementById('hide')
	div.style.display = "block";
	
	var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
	ctx.drawImage(img, 0, 0, c.width, c.height);
    ctx.rect(sliceA.end*3,0,c.width,c.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	var d=document.getElementById("myCanvas2");
    var ctx=d.getContext("2d");
	ctx.drawImage(img, 0, 0, d.width, d.height);
    ctx.rect(0,0,sliceB.start*3,d.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
    ctx.rect(sliceB.end*3,0,d.width,d.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	
	
	var e=document.getElementById("myCanvas3");
	var ctx=e.getContext("2d");
	ctx.drawImage(img, 0, 0, e.width, e.height);
    ctx.rect(0,0,sliceC.start*3,e.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
}

function display(){
	var thisone = document.getElementById("choosingCanvas");
	var ctx = thisone.getContext("2d");
	ctx.drawImage(img,0,0, thisone.width, thisone.height);
	ctx.rect(0,0,biggestslice.start*4,thisone.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	ctx.rect(biggestslice.end*4,0,thisone.width,thisone.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	
	var thisotherone = document.getElementById("compareCanvas");
	var ctx = thisotherone.getContext("2d");
	ctx.drawImage(img,0,0, thisotherone.width, thisotherone.height);
	ctx.rect(0,0,secondslice.start*4,thisotherone.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	ctx.rect(secondslice.end*4,0,thisotherone.width,thisotherone.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	
	div = document.getElementById('hide2')
	    div.style.display = "block";
	
}

function pick(ram){
	if (biggest == 0){
		biggest = ram;
		if (biggest == 1){
			biggestslice.start = sliceA.start;
			biggestslice.end = sliceA.end;
		} else{
			if (biggest == 2){
				biggestslice.start = sliceB.start;
				biggestslice.end = sliceB.end;
			} else{
				biggestslice.start = sliceC.start;
				biggestslice.end = sliceC.end;
			}
		}
	}else{
		second = ram;
		if (second == 1){
			secondslice.start = sliceA.start;
			secondslice.end = sliceA.end;
		} else{
			if (second == 2){
				secondslice.start = sliceB.start;
				secondslice.end = sliceB.end;
			} else{
				secondslice.start = sliceC.start;
				secondslice.end = sliceC.end;
			}
		}
		display();
	}
}

function cut2(){
	biggestslice.start = biggestslice.start + (((biggestslice.end-biggestslice.start))/(100/z))
	div = document.getElementById('hide3')
	div.style.display = "block";
	
	var c=document.getElementById("3choice");
    var ctx=c.getContext("2d");
	ctx.drawImage(img,0,0, c.width, c.height);
	
    ctx.rect(0,0,biggestslice.start*3,c.height);
	ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	ctx.rect(biggestslice.end*3,0,c.width,c.height);
	ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	var d=document.getElementById("3choice2");
    var ctx=d.getContext("2d");
	ctx.drawImage(img,0,0, c.width, c.height);
	ctx.rect(0,0,secondslice.start*3,c.height);
	ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	ctx.rect(secondslice.end*3,0,c.width,c.height);
	ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	var e=document.getElementById("3choice3");
    var ctx=e.getContext("2d");
	ctx.drawImage(img,0,0, c.width, c.height);
	
	if ((biggest == 1) || (second == 1)){
		if ((second == 2) || (biggest == 2)){
			ctx.rect(0,0,sliceC.start*3,c.height);
			ctx.lineWidth = 0;
			ctx.fillStyle = '#FFFFFF';
			ctx.fill();
			ctx.stroke();
			
			ctx.rect(sliceC.end*3,0,c.width,c.height);
			ctx.lineWidth = 0;
			ctx.fillStyle = '#FFFFFF';
			ctx.fill();
			ctx.stroke();
		}else{
			ctx.rect(0,0,sliceB.start*3,c.height);
			ctx.lineWidth = 0;
			ctx.fillStyle = '#FFFFFF';
			ctx.fill();
			ctx.stroke();
			
			ctx.rect(sliceB.end*3,0,c.width,c.height);
			ctx.lineWidth = 0;
			ctx.fillStyle = '#FFFFFF';
			ctx.fill();
			ctx.stroke();
		}
	}else{
		ctx.rect(0,0,sliceA.start*3,c.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#FFFFFF';
		ctx.fill();
		ctx.stroke();
			
		ctx.rect(sliceA.end*3,0,c.width,c.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#FFFFFF';
		ctx.fill();
		ctx.stroke();
	}
}

function secondpick(picked){
	if ((picked == 1) || (picked == 2))
}


