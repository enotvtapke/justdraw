var colorjoe = require("colorjoe");

var canvdiv = document.querySelector(".paintcanvas");
var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
var isMouseDown = false;
var coords = [];
var radius = 3.5;
var timer = null;
var control = false;
var color = "black";
var offsetX = 45;
const joe = colorjoe.rgb("color_picker", "black");

function allowDraw(connections) {
	control = true;
	radius = 3.5;
	color = "black";
	console.log("AllowDraw clear");
	clear();
	let olddata = "";
	timer = setInterval(function() {
  		let data = JSON.stringify(coords);
  		coords = [];
	  	if ((data != olddata) && (data != "[]"))
	  	{
	  		for (let connect in connections[0])
	  		{
	  			connections[0][connect][1].send(data);
	  		}
	  		
	  	}

	  	olddata = data.toString();
	}, 40);
	console.log("Drawing allowed");
}

function disableDraw() {
	control = false;
	console.log("DisableDraw clear");
	clear();
	clearInterval(timer);
	console.log("Drawing disabled");
	color = "black";
	document.querySelector(".chooswidthslider").value = "4.5";
	radius = 4.5;
}

function declareCanvDraw() {
	canv.width = canvdiv.offsetWidth;
	canv.height = canvdiv.offsetHeight;
	canv.addEventListener('mousedown', function(e) {
		if (control)
		{
			coords.push([e.clientX - offsetX, e.clientY]);

			ctx.beginPath();  
			ctx.fillStyle = color;
			ctx.arc(e.clientX - offsetX, e.clientY, radius, 0, Math.PI * 2);
			ctx.fill();
			ctx.beginPath(); 
			ctx.moveTo(e.clientX - offsetX, e.clientY);
		}
		return false;
	});

	document.addEventListener('mouseup', function(e) {
		isMouseDown = false;
		ctx.beginPath(); //Сбрасываю путь, чтобы линия не прорисовывалась из прошлой позиции, если пользователь поднял мышь
		coords.push('mouseup');
	});

	document.addEventListener('mousedown', function(e) {
		if (control)
		{
			isMouseDown = true;
		}
	});

	document.addEventListener('mouseup', function(e) {
		isMouseDown = false;
	});

	document.addEventListener('mousemove', function(e) {
		if (isMouseDown)
		{
			clearSelection();
			coords.push([e.clientX - offsetX, e.clientY]);

			ctx.lineWidth = radius * 2;
			ctx.strokeStyle = color;
			ctx.lineTo(e.clientX - offsetX, e.clientY); //Рисую линию из текущей прошлой позиции в текущую
			ctx.stroke();

			ctx.beginPath(); 
			ctx.fillStyle = color; 
			ctx.arc(e.clientX - offsetX, e.clientY, radius, 0, Math.PI * 2);  //Дорисовываю круги, чтобы не было эффекта железной дороги (нужно, если линия толстая)
			ctx.fill();



			ctx.beginPath();
			ctx.moveTo(e.clientX - offsetX, e.clientY);
		}
		return false;
	});

	canv.onmouseout = function() {
		ctx.beginPath();
		coords.push("out");
	};
  
    declareCanvBind();

    console.log("Canvas declared");
}

function replay(coords)
{
	while (true)
	{
		if (!coords.length) //Если координат нет
		{
			return false;
		}

		var crd = coords.shift(); //Удаляет первый элемент из coords и возвращает этот элемент в переменную crd
		if (crd == "out")
		{
			ctx.beginPath();  
		}
		else if (crd == "clear")
		{
			console.log("Replay clear");
			clear(true);
		}
		else if (crd[0] == "#")
		{
			color = crd.slice(1);
		}
		else if (crd[0] == "*")
		{
			radius = crd.slice(1);
		}
		else
		{
			var	e = {
					clientX: crd['0'],
					clientY: crd['1']
				};

			//Код скопирован из обычного рисования
			ctx.lineWidth = radius * 2;
			ctx.strokeStyle = color;
			ctx.lineTo(e.clientX, e.clientY);
			ctx.stroke();

			ctx.beginPath();
			ctx.fillStyle = color;
			ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(e.clientX, e.clientY);
		}
	}
}

function declareCanvBind() {
	document.querySelector(".chooswidthslider").onchange = function(e) {
		radius = document.querySelector(".chooswidthslider").value;
		coords.push("*" + radius);
	};

	joe.on("done", color => {
		changeColor(color.css()); 
		console.log("Selecting " + color.css());
	});

	document.querySelector(".erase").addEventListener("click", function(event) {
		console.log("Erase clear");
		clear();
		return false;
	});

	document.querySelector("#color1").addEventListener("click", function(event) {
		changeColor("black");
		return false;
	});
	
	document.querySelector("#color2").addEventListener("click", function(event) {
		changeColor("#B10B0B");
		return false;
	});

	document.querySelector("#color3").addEventListener("click", function(event) {
		changeColor("#5C9226");
		return false;
	});

	document.querySelector("#color4").addEventListener("click", function(event) {
		changeColor("white");
		return false;
	});

	document.querySelector("#color5").addEventListener("click", function(event) {
		changeColor("#284AFF");
		return false;
	});

	document.querySelector(".choosecolor").addEventListener("click", function(event) {
		var colorPic = document.querySelector("#color_picker");

		if (colorPic.style.display == "block") {
			colorPic.style.display = "none";
		} else {
			colorPic.style.display = "block";
		}
	});
}

function changeColor(c) {
	color = c;
	coords.push("#" + c);
}

/*
function save()
{
	localStorage.setItem('coords', JSON.stringify(coords)); //Что такое localStorage - https://tproger.ru/articles/localstorage/
}
*/

function clear(replay = false)
{
	console.log("---------Clear--------");
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canv.width, canv.height);

	ctx.beginPath();
	ctx.fillStyle = color;
	if (!replay) {
		coords.push("clear");
		console.log("---------Not Replay--------");
	}
	console.log(coords);
}

function getData(canv) {
	var data = canv.toDataURL();
	return data;
}

function clearSelection() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else { // старый IE
      document.selection.empty();
    }
}

export {declareCanvDraw, allowDraw, disableDraw, replay};

exports.declareCanvDraw = declareCanvDraw;
exports.allowDraw = allowDraw;
exports.disableDraw = disableDraw;