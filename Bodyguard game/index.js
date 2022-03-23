var table=document.getElementById("table").style;
var chair=document.getElementById("chair").style;
var game=document.getElementById("game").style;
var heart= document.getElementById("heart1");	
var b = document.getElementById("myAudio");
var d = document.getElementById("myAudio1");
var a = document.getElementById("shoe").style;
var c = document.getElementById("man1");
var f = document.getElementById("health").style;
var rock = document.getElementById("rock").style;
var button = document.getElementById("button").style;
var lose = document.getElementById("lose").style;
var button1 = document.getElementById("button1").style;
var prevented =document.getElementById("prevented");
var prevent = document.getElementById("prevent").style;
var z=0;
var x=1150;
var df=200;
var rx=587;
var dy=70;
var Vy=0;
var Vdy=0;
var started=false;
var working=true;
var s=0;
var y=675;
var counter=0;
prevent.visibility="hidden";
f.visibility="hidden";
c.style.visibility="hidden";
a.visibility="hidden";
button.visibility="hidden";
lose.visibility="hidden";
game.backgroundImage="url('img/conferance1.png')";
table.visibility="hidden";
chair.visibility="hidden";
heart.style.visibility="hidden";
button.visibility="hidden";
lose.visibility="hidden";
rock.visibility="hidden";
document.onkeydown = checkKey;
function checkKey(e) {
	e = e || window.event;

	if(e.keyCode == '37' && started == false) {
		if(rx > 280) {
			rx -= 10;
		}
	}
	else if(e.keyCode == '39'&& started == false) {
		if(rx < 1160) {
			rx += 10;
		}
	}
	else if(e.keyCode=='32') {
		started=true;
		Vy=16;
	}	
} 
function mov() {
	if(working==true) { 
		b.play(); 
		f.width=df+ "px";
		a.transform = "rotate(" + z + "deg)"; 
		z=z-20; 
		if(x<150) {
			c.src="img/angry.png" ;
		}
		if(x<120) { 
			x=1150; 
			z=0; 
			d.play();
			c.src="img/calm.png"
			df=df-20;
			f.width=df+ "px";
			if(df<=120&&df>=70) 
				{heart1.src="img/heart1.png"; f.backgroundColor="yellow";
			}
			else if(df<=60)
				{heart1.src="img/heart2.png"; f.backgroundColor="red";
			}
			if(df==0) {
				b.pause();
				f.width=df+ "px"; 
				button.visibility="visible";
				lose.visibility="visible"; 
				working=false; 
				a.visibility="hidden";
				y=675;
				rock.visibility="hidden";
				c.style.opacity="0.3";
				heart.style.opacity="0.3";
				f.opacity="0.3";
				table.opacity="0.1";
				chair.opacity="0.3";
				c.src="img/angry.png";
				game.backgroundImage="url('img/conferance1.png')";
			}

		} 
		a.left=x + "px";
		dy=dy-Vdy;
		a.top =dy +"px";
		x=x-(Math.floor(Math.random() * 10)+1);
		rock.left=rx+ "px";
		if(y<170 && y>140) {
			if(x>rx-75 && x<rx+25) {	
				Vdy=10;
				counter=counter+1;
				prevented.innerHTML=counter/2;
			}
		}
		if(y<=0) {
			y=675;
			rx=587;
			Vy=0;
			started = false;
		}
		rock.top=y + "px";
		y=y-Vy; 
		if(dy==-50) { 
			x = 1150; dy = 70; Vdy=0; 
		}
	}
}

function klicked() {
	prevent.visibility="visible";
	table.visibility="visible";
	chair.visibility="visible";
	c.style.visibility="visible";
	button1.visibility="hidden";
	rock.visibility="visible";
	a.visibility="visible";
	rock.visibility="visible";
	heart.style.visibility="visible";
	f.visibility="visible";
	table.opacity="0.8";
	game.backgroundImage="url('img/conferance.png')";
	setInterval(mov, 40);
	mov();
}
function clicked() {
	prevent.visibility="visible";
	prevented.innerHTML=0;
	rx=587;
	b.play();
	working=true; df=200; 
	button.visibility="hidden";
	lose.visibility="hidden";
	f.backgroundColor="green"; 
	heart1.src="img/img/heart.png"; ; 
	rock.visibility="visible";
	a.visibility="visible";
	c.src="img/img/angry.png";
	rock.visibility="visible";
	c.style.opacity="1";
	heart.style.opacity="1";
	f.opacity="1";
	table.opacity="0.8";
	chair.opacity="1";
	game.backgroundImage="url('img/conferance.png')";
}
mov() ;