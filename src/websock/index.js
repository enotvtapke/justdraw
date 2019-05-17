import {declareCanvDraw, allowDraw, disableDraw, replay} from "../canvas";

//var serverIp = "188.232.42.73";
var serverIp = "websock-serv.herokuapp.com";
//ngrok http --host-header=justdraw.com 80s

/*
$.ajax({
	url: "http://icanhazip.com",
	dataType: "html",
	type: "GET",
	async: false
})
.done(function(data) {
	let clientIp = data.replace("\n", "");
	console.log(clientIp);
	if (clientIp == serverIp)
	{
		serverIp = "192.168.0.2";
	}
})
.fail(function( xhr, status, errorThrown ) {
	console.log( "Error: " + errorThrown );
	console.log( "Status: " + status );
});
*/

var url = "WSS://" + serverIp
console.log(url);
var socket = new WebSocket(url);

class room {
	constructor(name, round, maxround, players, maxplayers, roundtime, host = "") {
		this.name = name;
		this.host = host;
		this.round = round;
		this.maxround = maxround;
		this.players = 1;
		this.maxplayers = maxplayers;
		this.roundtime = roundtime;
		this.score = {};
		this.time = 0;
		this.word = [];
	}
}

var mainroom = new room(name = undefined); //Комната, в которой сейчас находится пользователь

var client = {};
client.name = "";
client.id = "";

var connections = {};
var keyword = "";
var control = true;
var roundtimer = false;

var pingtimer;
var pingtime = 0;

socket.onopen = function() {
	console.log("Соединение установлено.");

	pingtimer = setInterval(function() {
		send({
				type:"ping",
				client: client.name
			});
		pingtime = performance.now();
	}, 10000)
};
 
socket.onclose = function(event) {
	clearInterval(pingtimer)
	if (event.wasClean) {
		console.log('Соединение закрыто чисто');
	} else {
		console.log('Обрыв соединения');
		console.log('Код: ' + event.code + ' причина: ' + event.reason);
	}
};

socket.onmessage = function(message) {
	var data = message.data;
	console.log("Received message from WSS: \n" + data);
	data = JSON.parse(data);
 	switch(data.type) { 
	    case "login": 
	    	onLogin(data); 
	     	break; 
		case "offer": 
	 		onOffer(data.offer, data.client); 
	 		break; 
		case "answer": 
	 		onAnswer(data.answer, data.client); 
	 		break; 
		case "candidate": 
	 		onCandidate(data.candidate, data.client); 
	 		break;
	 	case "getrooms":
	 		onGetRooms(data);
	 		break;
	 	case "createroom":
	 		onCreateRoom(data);
	 		break;
	 	case "room":
	 		onRoom(data);
	 		break;
	 	case "roundstart":
	 		onRoundStart(data);
	 		break;
	 	case "words":
	 		onWords(data);
	 		break;
	 	case "win":
	 		onWin(data);
	 		break;
	 	case "roundend":
	 		onRoundEnd(data);
	 		break;
	 	case "players":
	 		onPlayers(data);
	 		break;
	 	case "keyword":
	 		onKeyword(data);
	 		break;
	 	case "pong":
	 		onPong(data);
	 		break;
	 	case "error":
	 		console.log(data.error);
	 		break;
		default: 
	 		break; 
	} 
};

socket.onerror = function(error) {
	socket.close();
 	console.log("Ошибка " + error.message);
}

function send(message) {
	message = JSON.stringify(message);
	socket.send(message); 
}

function onCreateRoom(data) {
	if (data.success == 1) {
		document.querySelector("#round").innerHTML = mainroom.round;
		document.querySelector("#maxround").innerHTML = mainroom.maxround;
		let mydiv = document.createElement("div");
		mydiv.className = "players_player";
		mydiv.id = client.name;
		mydiv.innerHTML = 
		`<div class="player_name"><b>${client.name}</b></div>
		<div class="player_points"><b>0</b></div>`;

		document.querySelector(".players_list_players").append(mydiv);
		document.querySelector(".toolpanel_mask").style.display = "none";

		document.querySelector("#roompage").style.display = "none";
		document.querySelector("#gamepage").style.display = "block";
		declareCanvDraw();
		allowDraw({0: connections});
	} else {
		mainroom.name = "";
		showEr(".roomtitleform", "Название комнаты занято");
	}
}

function onRoom(data) {
	if (data.success == 1) {
		document.querySelector("#round").innerHTML = mainroom.round;
		document.querySelector("#maxround").innerHTML = mainroom.maxround;
		closeCons();
		mainroom.score = data.clients;
		for (let receiver in data.clients) {
			if (receiver != client.name) {
				console.log(receiver);
				let connection = createCon(receiver);
				connection.createOffer(function(offer) {
			    	send({
						type: "offer",
						client: client.name,
						receiver: receiver,
						room: mainroom.name,
						offer: offer
					});
			    	connection.setLocalDescription(offer); 
			    	console.log("Offer to client: " + receiver + " has been sended");
				}, 
				function (error) { 
			 		alert("An error has occurred."); 
			 		return false;
				});
			}
		}
		document.querySelector(".password").style.display = "none";
		document.querySelector("#roompage").style.display = "none";
		document.querySelector("#gamepage").style.display = "block";
		declareCanvDraw();
	} else {
		if (data.error == "Invalid password") {
			document.querySelector(".password_text").style.display = "none";
			showNickEr(".password_form_input", "Неверный пароль");
		} else {
			mainroom.name = "";
		}
	}
}

function onGetRooms(data) {
	removeChildrens(".rooms");
	let rooms = data.rooms;
	console.log("Got rooms\n", rooms);
	for (let room in rooms)
	{
		let mydiv = document.createElement("div");
		mydiv.className = "room";
		mydiv.id = room;
		mydiv.setAttribute("round", rooms[room].round);
		mydiv.setAttribute("maxround", rooms[room].maxround);
		mydiv.setAttribute("players", rooms[room].players);
		mydiv.setAttribute("maxplayers", rooms[room].maxplayers);
		mydiv.setAttribute("mode", rooms[room].mode);
		mydiv.setAttribute("roundtime", rooms[room].roundtime);
		mydiv.setAttribute("password", rooms[room].password);
		mydiv.innerHTML = 
		   `<div class="roomcrutch1 roomcrutch">
				<p class="roomattr roomattr1">${room}</p>
			</div>
			<div class="roomcrutch2 roomcrutch">
				<p class="roomattr">${rooms[room].mode}</p>
			</div>
			<div class="roomcrutch3 roomcrutch">
				<p class="roomattr">${rooms[room].round} / ${rooms[room].maxround}</p>
			</div>
			<div class="roomcrutch4 roomcrutch">
				<p class="roomattr">${rooms[room].players} / ${rooms[room].maxplayers}</p>
			</div>
			<div class="roomcrutch5 roomcrutch">
				<p class="roomattr">${rooms[room].password == "" ? '<img src="img/locked.svg" alt="public">' : 
				'<img src="img/unlocked.svg" alt="private">'}</p>
			</div>`;
		
		mydiv.addEventListener("click", function() {
			mainroom.name = this.getAttribute("id");
			mainroom.maxplayers = this.getAttribute("maxplayers");
			mainroom.round = this.getAttribute("round");
			mainroom.mode = this.getAttribute("mode");
			mainroom.roundtime = this.getAttribute("roundtime");
			mainroom.players = this.getAttribute("players");
			mainroom.maxround = this.getAttribute("maxround");
			if (this.getAttribute("password") == "1") {
				document.querySelector(".password").style.display = "block";
				document.querySelector(".password_form_submit").addEventListener("click", function() {
					let password = document.querySelector(".password_form_input").value;
					send({
						type: "room",
						client: client.name,
						room: mainroom.name,
						password: password
					});
				});
			} else {
				send({
					type: "room",
					client: client.name,
					room: mainroom.name
				});
			}
		});
		document.querySelector(".rooms").append(mydiv);
	}
}

function getRooms() 
{
	send({
		type: "getrooms",
		client: client.name
	});
}



function onLogin(data) {
   	if (data.success == 0) 
   	{ 
     	console.log("Login error"); 
		showNickEr(".nickform", "Имя занято");
   	} 
   	else 
   	{ 
   		console.log("Login successful");
   		document.querySelector("#nickpage").style.display = "none";
		document.querySelector("#roompage").style.display = "block";
   		getRooms();
	} 
}

function onRoundStart(data) {
	roundtimer = false;
	document.querySelector("#filler").style.width = 0 + "px";
	document.querySelector(".winscreen").style.display = "none";
	document.querySelector(".finalscreen").style.display = "none";
	mainroom.host = data.host;
	mainroom.round = data.round;
	document.querySelector("#keyword").innerHTML = "";
	changePlayerList(mainroom.score);
	document.querySelector("#round").innerHTML = mainroom.round;
}

function onRoundEnd(data) {
	document.querySelector("#color_picker").style.display = "none";
	if (data.lastround == "true") {
		changeFinalScore(data);
		document.querySelector(".finalscreen").style.display = "flex";
	} else {
		document.querySelector(".winscreen").style.display = "block";
	}

	document.querySelector(".toolpanel_mask").style.display = "block";
	document.querySelector(".chooswidthslider").value = "4.5";
	document.querySelector("#keywordshow").innerHTML = data.keyword;
	document.querySelector("#winnerNick").innerHTML = data.winner;
	document.querySelector("#drawerNick").innerHTML = data.painter;

	roundtimer = false;
	keyword = "";
	disableDraw();
	changePlayerList(data.score);
}

function onWords(data) {
	if (mainroom.name != undefined) {
		var words = data.words;
		var elems = document.querySelector(".keywordslist").children;
		keyword = "";
		for(var i = 0; i < elems.length; i++)
		{
			elems[i].innerHTML = words[i];

			elems[i].onclick = function(event) {
				keyword = event.target.innerHTML;
				roundtimer = true;
				barAnimationStart();
				document.querySelector(".choosescreen").style.display = "none";
				send({ 
			           	type: "keyword",
			  			client: client.name,
			  			room: mainroom.name,
			    	   	keyword: keyword
		        	});
				for (let connect in connections) {
					connections[connect][1].send(JSON.stringify({
						type: "start",
					}));
				}
				setWord(keyword);
				allowDraw({0: connections});
				document.querySelector(".toolpanel_mask").style.display = "none";
				console.log("Keyword: " + keyword);
			};
		}
		document.querySelector(".choosescreen").style.display = "block";
	}
}

function onKeyword(data) {
	if (mainroom.name != undefined) {
		document.querySelector(".choosescreen").style.display = "none";
		document.querySelector(".toolpanel_mask").style.display = "none";
		keyword = data.keyword;
		setWord(keyword);
		roundtimer = true;
		barAnimationStart();
		console.log(connections);
		for (let connect in connections)
		{
			try {
				connections[connect][1].send(JSON.stringify({
					type: "start"
				}));
			} catch(err) {
				console.log("RTC connection in close state")
			}
		}
		allowDraw({0: connections});
		console.log("Keyword: " + keyword);
	}
}

function onPong(data) {
	//console.log("Ping " + (performance.now() - pingtime) + " ms");
}

function onPlayers(data) {
	changePlayerList(data.players);
}

function changePlayerList(players) {
	mainroom.players = (Object.keys(players)).length;
	mainroom.score = players;
	let playersList = document.querySelector(".players_list_players");

	let newList = document.createElement("div");
	newList.className = "players_list_players";

	for (let player in players) {
		let mydiv = document.createElement("div");
		mydiv.className = "players_player";
		mydiv.id = player;
		if ((player == mainroom.host) && (player == client.name)) {
			mydiv.innerHTML = 
		   `<img class="hostBrush" src="img/Brush.svg" alt="Художник">
			<div class="player_name"><b>${player}</b></div>
			<div class="player_points"><b>${players[player]}</b></div>`;
		} else if (player == mainroom.host) {
			mydiv.innerHTML = 
		   `<img class="hostBrush" src="img/Brush.svg" alt="Художник">
			<div class="player_name">${player}</div>
			<div class="player_points">${players[player]}</div>`;
		} else if (player == client.name) {
			mydiv.innerHTML = 
		   `<div class="player_name"><b>${player}</b></div>
			<div class="player_points"><b>${players[player]}</b></div>`;
		} else {
			mydiv.innerHTML = 
		   `<div class="player_name">${player}</div>
			<div class="player_points">${players[player]}</div>`;
		}
		newList.append(mydiv);
	}

	playersList.innerHTML = newList.innerHTML;
	document.querySelector(".messages").style.paddingTop = 46 + mainroom.players * 29 + "px";
}

function changeFinalScore(data) {
	let players = data.score;
	let playersList = document.querySelector("#final_score");
	document.querySelector("#final_keywordshow").innerHTML = data.keyword;
	document.querySelector("#final_drawerNick").innerHTML = data.painter;
	document.querySelector("#final_winnerNick").innerHTML = data.winner;

	let newList = document.createElement("div");
	newList.id = "final_score_list";
	let i = 1;

	for (let player in players) {
		let mydiv = document.createElement("div");
		mydiv.className = "players_player";
		mydiv.id = player;
		mydiv.innerHTML = 
		   `<div class="player_name">${i}. ${player}</div>
			<div class="player_points">${players[player]}</div>`;
		newList.append(mydiv);
		i++;
	}

	playersList.innerHTML = newList.innerHTML;
}

function closeCons() {
	for (let connect in connections)
	{
		connections[connect][0].close();
	}
	connections = {};
}

function removeChildrens(node) {
	var myNode = document.querySelector(node);
	var fc = myNode.firstChild;

	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
	}
}

function barAnimationStart(time = 0) {
	let flag1 = true;
	let flag2 = true;
	let bar = document.querySelector("#filler");
	let max = document.querySelector("#bar").offsetWidth;
	let roundtime = mainroom.roundtime * 1000;
	let width = time / (roundtime / max);
	let start = Date.now();

	if (client.name == mainroom.host) {
		var word = generateWord();
		mainroom.word = word;
	}

	let timer = setInterval(function() {
		let timePassed = Date.now() - start;

	  	if ((timePassed >= (roundtime - time)) || (!roundtimer)) {
			bar.style.width = max + "px";
	    	clearInterval(timer);
	    	mainroom.time = 0;
	    	return;
	  	}

	  	if (client.name == mainroom.host) {
	  		let k = timePassed / roundtime;
	  		if ((k >= 0.3) && (flag1 == true)) {
	  			flag1 = false;
				for (let connect in connections)
				{
					connections[connect][1].send(JSON.stringify({
						type: "word",
						word: word[0]
					}));
				}
	  		} else if ((k >= 0.6) && (flag2 == true)) {
	  			flag2 = false;
				for (let connect in connections)
				{
					connections[connect][1].send(JSON.stringify({
						type: "word",
						word: word[1]
					}));
				}
	  		}
	  	}

		bar.style.width = timePassed / (roundtime / max) + width + "px";
		mainroom.time = timePassed;
	}, 20);
}

function generateWord() {
	var word = [];
	var ans = [];
	for (let i = 0; i < keyword.length; i++) {
		word[i] = "&#160;";
	}

	ans[0] = Object.assign({}, word);
	
	var times = Math.ceil(Math.pow(keyword.length, 1/3));

	for (let i = 0; i < times; i++) {
		let n = getRandomInt(0, keyword.length - 1);
		if (word[n] == "&#160;") {
			word[n] = keyword[n];
		} else {
			i--;
		}
	}

	ans[1] = Object.assign({}, word);
	
	return ans;
}

function setWord(word) {
	word = Object.keys(word).map(key => word[key]);
	let html = "";
	for (let i = 0; i < word.length; i++) {
		html += `<li class="letter">${word[i]}</li>`;
	}
	document.querySelector("#keyword").innerHTML = html;
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

//Skeleton

function createCon (receiver) {
	var configuration = { 
     	"iceServers": [{ url: ["stun:stun.l.google.com:19302"] }]  
 	}; 

	connections[receiver] = [];
 	connections[receiver].push(new webkitRTCPeerConnection(configuration));
 	openDataChannel(receiver);

	console.log("RTCPeerConnection object was created: "); 
	console.log(connections[receiver][0]);

	connections[receiver][0].onicecandidate = function (event) {
		console.log("Candidate created: " + JSON.stringify(event.candidate));
    	if (event.candidate) 
    	{ 
	        send({ 
	           	type: "candidate",
	  			client: client.name,
	  			receiver: receiver,
	  			room: mainroom.name,
	    	   	candidate: event.candidate
	        });
     	}
	};

	connections[receiver][0].ondatachannel =  function(event) {
	  	event.channel.onopen = function(event) {
	  		console.log('Data channel open');
	  		if (keyword != "") {
				connections[receiver][1].send(JSON.stringify({
					type: "start",
					time: mainroom.time
				}));

				let k = mainroom.time / (mainroom.roundtime * 1000);
		  		if (k >= 0.6) {
		  			connections[receiver][1].send(JSON.stringify({
						type: "word",
						word: mainroom.word[1]
					}));
		  		} else if (k >= 0.3) {
		  			connections[receiver][1].send(JSON.stringify({
						type: "word",
						word: mainroom.word[0]
					}));
		  		}
			}
	  	};

	  	event.channel.onmessage = function (event){
			let data = JSON.parse(event.data);
			console.log(data);
			if (data.type == "msg")
			{
				let mydiv = document.createElement("div");
				mydiv.className = "message";
				mydiv.innerHTML = '<div class="msgtext"><b class="msgsender">' + data.client + ": </b>" + data.text + "</div>";
				document.querySelector(".messages").prepend(mydiv);
				
				if (client.name == mainroom.host) {
					if (data.text == keyword) {
						send({ 
				        	type: "win",
				         	client: client.name,
				  			room: mainroom.name,
				        	winner: data.client
				    	}); 
					}
				}
			}
			else if (data.type == "start")
			{
				roundtimer = true;
				if (data.time != undefined) {
					barAnimationStart(data.time);
				} else {
					barAnimationStart();
				}
			}
			else if (data.type == "word")
			{
				setWord(data.word);
			}
			else
			{
	  			replay(data);
	  		}
	  	};

	};


	connections[receiver][0].onclose = function() {
		delete connections[receiver];
		console.log("Conection closed");
	};

	/*
	connections[receiver][0].oniceconnectionstatechange = function() {
    	if(connections[receiver][0].iceConnectionState == 'disconnected') {
    		delete connections[receiver];
    		console.log('Connection closed');
    	}
	};
	*/

	return connections[receiver][0];
}

function onOffer(offer, sender) {
	console.log("Offer from " + sender + " received: " + JSON.stringify(offer));
	createCon(sender);
	connections[sender][0].setRemoteDescription(new RTCSessionDescription(offer));

	connections[sender][0].createAnswer(function (answer) { 
  		connections[sender][0].setLocalDescription(answer); 
    	send({ 
        	type: "answer",
         	client: client.name,
  			receiver: sender,
  			room: mainroom.name,
        	answer: answer 
    	}); 
	}, function (error) { 
  		alert("oops...error");
  		return true; 
	});
}

function onAnswer(answer, sender) {
	console.log("Answer from " + sender + " received: " + JSON.stringify(answer));
	connections[sender][0].setRemoteDescription(new RTCSessionDescription(answer));
}
  
function onCandidate(candidate, sender) {
	connections[sender][0].addIceCandidate(new RTCIceCandidate(candidate));
	console.log("Candidate from " + sender + " received and added: " + JSON.stringify(candidate));
}

function openDataChannel(client) { 
	connections[client][1] = connections[client][0].createDataChannel("myDataChannel");
	console.log("Data channel created");
}

document.querySelector(".exit").addEventListener("click", function(event) {
	location.reload(); //Временно
	console.log("Exit from room " + mainroom.name);
	closeCons();
	send({
	      	type: "exit",
	      	client: client.name,
	      	room: mainroom.name
	   	});
	roundtimer = false;
	mainroom.name = undefined;
	document.querySelector("#roompage").style.display = "block";
	document.querySelector("#gamepage").style.display = "none";
});

//-------------------------Nick page-------------------------//

document.querySelector(".nickbutton").addEventListener("click", function(event) {
	if (document.querySelector(".nickform").value.length >= 15)
	{
		showNickEr(".nickform", "Имя не длиннее 15 символов");
	}
	else if (document.querySelector(".nickform").value == "")
	{
		showNickEr(".nickform", "Введите имя");
	}
	else
	{
		client.name = document.querySelector(".nickform").value;
		document.querySelector(".usercontainer").innerHTML = client.name;
		send({
	      		type: "login",
	      		client: client.name
	    });
	}
});
//-------------------------Room page-------------------------//

//Buttons

document.querySelector("#quickplay").addEventListener("click", function(event) {
	location.reload();
});

document.querySelector(".refresh").addEventListener("click", function(event) {
	getRooms();
});

document.querySelector(".modwords_close").addEventListener("click", function(event) {
	document.querySelector(".modwords").style.display = "none";
	let e = new Event("click");
	document.querySelector(".classic").dispatchEvent(e);
});

document.querySelector(".modwords_background").addEventListener("click", function(event) {
	document.querySelector(".modwords").style.display = "none";
	let e = new Event("click");
	document.querySelector(".classic").dispatchEvent(e);
});

document.querySelector(".password_close").addEventListener("click", function(event) {
	document.querySelector(".password").style.display = "none";
	document.querySelector(".password_form_input").value = "";
	remEr(".password_form_input");
	document.querySelector(".password_text").style.display = "block";
});

document.querySelector(".password_background").addEventListener("click", function(event) {
	document.querySelector(".password").style.display = "none";
	document.querySelector(".password_form_input").value = "";
	remEr(".password_form_input");
	document.querySelector(".password_text").style.display = "block";
});

document.querySelector(".modwords_form_submit").addEventListener("click", function(event) {
	document.querySelector(".modwords").style.display = "none";
	console.log(document.querySelector(".modwords_form_input").value.split(/, *|\n+| +/g));
});

document.querySelector(".roomtitleform").addEventListener("blur", function(event) {
	if (document.querySelector(".roomtitleform").value.length > 17)
	{
		showEr(".roomtitleform", "Название не длиннее 17 символов");
	}
	else
	{
		remEr(".roomtitleform");
	}
});

document.querySelector("#roompassword").addEventListener("blur", function(event) {
	if (document.querySelector("#roompassword").value.length > 10)
	{
		showEr("#roompassword", "Пароль не длиннее 10 символов");
	}
	else
	{
		remEr("#roompassword");
	}
});

document.querySelector("#createroom").addEventListener("click", function(event) {
	this.style.display = "none";
	document.querySelector(".createroommenu").style.display = "block";
	document.querySelector("#accept").style.display = "block";
	document.querySelector("#refuse").style.display = "block";
});

document.querySelector("#accept").addEventListener("click", function(event) {
	if (document.querySelector(".roomtitleform").value.length == 0)
	{
		showEr(".roomtitleform", "Укажите название комнаты");
	}
	else if (document.querySelector(".roomtitleform").value.length > 15)
	{
		showEr(".roomtitleform", "Название не длиннее 15 символов");
	}
	else if (document.querySelector("#roompassword").value.length > 10)
	{
		showEr("#roompassword", "Пароль не длиннее 10 символов");
	}
	else
	{
		var mode = "";
		var words = [];
		var roomname = document.querySelector(".roomtitleform").value;
		var maxround = document.querySelector("#rounds").value;
		var roundtime = document.querySelector("#roundtime").value;
		var maxplayers = document.querySelector("#maxplayers").value;
		var password = document.querySelector("#roompassword").value;

		mainroom.name = roomname;
		mainroom.maxround = maxround;
		mainroom.roundtime = roundtime;
		mainroom.maxplayers = maxplayers;
		mainroom.score[client.name] = 0;
		mainroom.round = 0;

		if (document.querySelector("#radioclassic").checked)
		{
			mode = "classic";
		}
		else
		{
			mode = "modded";
			words = document.querySelector(".modwords_form_input").value.split(/, *|\n+| +/g);
			console.log(words);
		}

		send({
  			type: "createroom",
  			client: client.name,
  			room: roomname,
  			mode: mode,
  			roundtime: roundtime,
  			maxround: maxround,
  			maxplayers: maxplayers,
  			password: password,
  			words: words
	  	});
	}
});

document.querySelector("#refuse").addEventListener("click", function(event) {
	document.querySelector(".createroommenu").style.display = "none";
	document.querySelector("#accept").style.display = "none";
	document.querySelector("#refuse").style.display = "none";
	document.querySelector("#createroom").style.display = "block";
});

document.querySelector("#maxplayers_reduce").addEventListener("click", function(event) {
	if (document.querySelector("#maxplayers").value > 2)
	{
		document.querySelector("#maxplayers").value -= 1;
	}
});

document.querySelector("#maxplayers_increase").addEventListener("click", function(event) {
	if (document.querySelector("#maxplayers").value  < 8)
	{
		document.querySelector("#maxplayers").value ++;
	}
});

document.querySelector("#rounds_reduce").addEventListener("click", function(event) {
	if (document.querySelector("#rounds").value > 5)
	{
		document.querySelector("#rounds").value -= 1;
	}
});

document.querySelector("#rounds_increase").addEventListener("click", function(event) {
	if (document.querySelector("#rounds").value  < 50)
	{
		document.querySelector("#rounds").value ++;
	}
});

document.querySelector("#roundtime").addEventListener("blur", function(event) {
	event.target.value = event.target.value % 1000;
	if (event.target.value < 20)
	{
		event.target.value = 20;
	}
	else if (event.target.value > 720)
	{
		event.target.value = 720;
	}

});

document.querySelector("#maxplayers").addEventListener("blur", function(event) {
	event.target.value = event.target.value % 100;
	if (event.target.value < 2)
	{
		event.target.value = 2;
	}
	else if (event.target.value > 8)
	{
		event.target.value = 8;
	}
});

document.querySelector("#rounds").addEventListener("blur", function(event) {
	event.target.value = event.target.value % 100;
	if (event.target.value < 5)
	{
		event.target.value = 5;
	}
	else if (event.target.value > 50)
	{
		event.target.value = 50;
	}

});

document.querySelector(".modded").addEventListener("click", function(event) {
	document.querySelector(".toggler").style.left = 66 + "px";
	document.querySelector(".classic").style.color = "#4C4C4C";
	document.querySelector(".modded").style.color = "#fff";
	document.querySelector(".classic").style.cursor = "pointer";
	document.querySelector(".modded").style.cursor = "default";
	document.querySelector(".modwords").style.display = "block";
});

document.querySelector(".classic").addEventListener("click", function(event) {
	document.querySelector(".toggler").style.left = -2 + "px";
	document.querySelector(".classic").style.color = "#fff";
	document.querySelector(".modded").style.color = "#4C4C4C";
	document.querySelector(".classic").style.cursor = "default";
	document.querySelector(".modded").style.cursor = "pointer";
});

//-------------------------Game page-------------------------//
document.querySelector(".msgform").onsubmit = function(event) {
	var message = document.querySelector(".inputmessage").value;

	if (message == "")
	{
		console.log("Please, enter message");
		return false;
	}

	let mydiv = document.createElement("div");
	mydiv.className = "message";
	mydiv.innerHTML = '<div class="msgtext"><b class="msgsender">' + client.name + ": </b>" + message + "</div>";
	document.querySelector(".messages").prepend(mydiv);

	for (let connect in connections)
	{
		connections[connect][1].send(JSON.stringify({
			type: "msg",
			text: message,
			client: client.name
		}));
	}
  	document.querySelector(".inputmessage").value = "";
  	return false;
};

document.querySelector(".sendmsg").addEventListener("click", function(event) {
	var message = document.querySelector(".inputmessage").value;
	console.log(message);
	if (message == "")
	{
		console.log("Please, enter message");
		return false;
	}

	let mydiv = document.createElement("div");
	mydiv.className = "message";
	mydiv.innerHTML = '<div class="msgtext"><b class="msgsender">' + client.name + ": </b>" + message + "</div>";
	console.log(mydiv);
	document.querySelector(".messages").prepend(mydiv);

	for (let connect in connections)
	{
		connections[connect][1].send(JSON.stringify({
			type: "msg",
			text: message,
			client: client.name
		}));
	}
  	document.querySelector(".inputmessage").value = "";
});

//-------------------------Functions-------------------------//

function showEr(selector, error, above = true) 
{
	remEr(selector);

	var elem = document.querySelector(selector);
	elem.className += " erinput";
	var coords = getCoords(elem);

	var div = document.createElement('div');
	div.className = "error";
	div.innerHTML = error;
	div.style.textAlign = "left";
	div.style.paddingLeft = 5 + "px";
	div.style.left = coords.left + "px";

	if (above)
	{
		div.style.top = coords.top - 14 + "px";
	}
	else
	{
		div.style.top = coords.top + 4 + "px";
	}

	elem.parentNode.insertBefore(div, elem.nextElementSibling);
}

function showNickEr(selector, error, above = true)
{
	remEr(selector);

	var elem = document.querySelector(selector);
	elem.className += " erinput";
	var coords = getCoords(elem);

	var div = document.createElement('div');
	div.className = "error";
	div.innerHTML = error;
	div.style.width = 100 + "%";

	if (above)
	{
		div.style.top = coords.top - 18 + "px";
	}
	else
	{
		div.style.top = coords.top + 4 + "px";
	}

	elem.parentNode.insertBefore(div, elem.nextElementSibling);
}

function remEr(selector)
{
	let elem = document.querySelector(selector);
	if (elem.nextElementSibling !== null)
	{
		if (elem.nextElementSibling.className == "error")
		{
			elem.nextElementSibling.remove();
		}
	}
	elem.className = elem.className.replace(/ ?erinput/g, "");
}

function getCoords(elem) {
	var box = elem.getBoundingClientRect();

	var body = document.body;
	var docEl = document.documentElement;

	var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

	var clientTop = docEl.clientTop || body.clientTop || 0;
	var clientLeft = docEl.clientLeft || body.clientLeft || 0;

	var top = box.top + scrollTop - clientTop;
	var left = box.left + scrollLeft - clientLeft;

	return {
		top: top,
		left: left
	};
}

export {mainroom};