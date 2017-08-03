var firebaseRef = firebase.database().ref();

var meetingCodes = new Array();
var currentMeeting = "";

window.onunload = unload;

//meeting information
var currentMeetingNames = {"":""};
var currentSpeaker = "";
var askToSpeak = false;
var name = null;

var main = document.getElementById("main");

var discussionView = document.getElementById("discussionView");
var handRaiseView = document.getElementById("handRaise");
var discussionControlView = document.getElementById("discussionControlView");
var nameElement = document.getElementById("nameElement");
var keyCode = document.getElementById("keyCode");

keyCode.remove();
nameElement.remove();
discussionControlView.remove();
discussionView.remove();

var numberSpoken = 0;
var timeSpoken = 0;
var raisedHands = 0;

var userType = "";

var timingSpeech = setInterval(timer, 1000);

var wishToSpeak = {"":0.0}
wishToSpeak = null;

var currentSpeaker = null;
var button = document.getElementById("handRaise");
var methodCalled = 0;
var started = null;

firebaseRef.child('Meetings').on('value', snap => meetingCodes = snap.val());
// var dbRef = firebase.database().ref().child("admin");

document.ontouchmove = function(event){
    event.preventDefault();
}

function setValueToTeacher() {
	main.appendChild(keyCode);
	setTimeout(function() {	openElement("keyCode");}, 800);
	userType = "Teacher";
	closeElement("Select User");
	(document.getElementsByTagName("BODY")[0]).setAttribute("style", "overflow:auto;");
}

function setValueToStudent() {
	methodCalled++;
	if (methodCalled > 1) {
		return;
	}
	console.log(typeof arguments);
	console.log("HERE IS MY aRGUMENT: " +  arguments.length);
	if (arguments.length == 1) {
		handRaiseView.onclick = "";
	}
	else {
		handRaiseView.ontouchstart = '';
	}
	main.appendChild(keyCode);
	setTimeout(function() {	openElement("keyCode");}, 800);
	userType = "Student";
	closeElement("Select User");
}

function closeElement(name) {
	var element = document.getElementById(name);
	setTimeout(function() {
		setTimeout(function() {
			setTimeout(function() {
				setTimeout(function() {
					setTimeout(function() {
						setTimeout(function() {
							setTimeout(function() {
								setTimeout(function() {
									setTimeout(function() {element.style.height = '0px'; element.remove();}, 10);
									element.setAttribute("style","opacity:"+0.0+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
								}, 10);
								element.setAttribute("style","opacity:"+0.2+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
							}, 10);
							element.setAttribute("style","opacity:"+0.3+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
						}, 10);
						element.setAttribute("style","opacity:"+0.4+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
					}, 10);
					element.setAttribute("style","opacity:"+0.5+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
				}, 12);
				element.setAttribute("style","opacity:"+0.6+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
			}, 14);
			element.setAttribute("style","opacity:"+0.7+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
		}, 14);
		element.setAttribute("style","opacity:"+0.8+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
	}, 15);
	element.setAttribute("style","opacity:"+0.9+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
}


function openElement(name) {
	var element = document.getElementById(name);
	console.log(name);
	if (name == "currentSpeaker") {
		setTimeout(function() {
			setTimeout(function() {
				setTimeout(function() {
					setTimeout(function() {
						setTimeout(function() {
							setTimeout(function() {
								setTimeout(function() {
									setTimeout(function() {
										setTimeout(function() {element.setAttribute("style","opacity:"+1+"; -moz-opacity:0.5; filter:alpha(opacity=50); padding-top: 21vh"); }, 10);
										element.setAttribute("style","opacity:"+0.9+"; -moz-opacity:0.5; filter:alpha(opacity=50); padding-top: 21vh");
									}, 10);
									element.setAttribute("style","opacity:"+0.8+"; -moz-opacity:0.5; filter:alpha(opacity=50); paddint-top:21vh");
								}, 10);
								element.setAttribute("style","opacity:"+0.7+"; -moz-opacity:0.5; filter:alpha(opacity=50); padding-top: 20.7vh");
							}, 30);
							element.setAttribute("style","opacity:"+0.6+"; -moz-opacity:0.5; filter:alpha(opacity=50); padding-top: 20.3vh");
						}, 30);
						element.setAttribute("style","opacity:"+0.45+"; -moz-opacity:0.5; filter:alpha(opacity=50); padding-top: 20vh");
					}, 20);
					element.setAttribute("style","opacity:"+0.3+"; -moz-opacity:0.5; filter:alpha(opacity=50); padding-top: 19.5vh");
				}, 13);
				element.setAttribute("style","opacity:"+0.2+"; -moz-opacity:0.5; filter:alpha(opacity=50)padding-top: 19vh");
			}, 14);
			element.setAttribute("style","opacity:"+0.15+"; -moz-opacity:0.5; filter:alpha(opacity=50); padding-top: 18.5vh");
		}, 15);
		element.setAttribute("style","opacity:"+0.1+"; -moz-opacity:0.5; filter:alpha(opacity=50); padding-top: 18vh");
		return;
	}
	setTimeout(function() {
		setTimeout(function() {
			setTimeout(function() {
				setTimeout(function() {
					setTimeout(function() {
						setTimeout(function() {
							setTimeout(function() {
								setTimeout(function() {
									setTimeout(function() {	element.setAttribute("style","opacity:"+1.0+"; -moz-opacity:0.5; filter:alpha(opacity=50)");}, 10);
									element.setAttribute("style","opacity:"+0.9+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
								}, 8);
								element.setAttribute("style","opacity:"+0.8+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
							}, 10);
							element.setAttribute("style","opacity:"+0.7+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
						}, 12);
						element.setAttribute("style","opacity:"+0.6+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
					}, 14);
					element.setAttribute("style","opacity:"+0.5+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
				}, 14);
				element.setAttribute("style","opacity:"+0.4+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
			}, 14);
			element.setAttribute("style","opacity:"+0.25+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
		}, 16);
		element.setAttribute("style","opacity:"+0.1+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
	}, 18);
	element.style.height = keyCode;
	element.setAttribute("style","opacity:"+0.0+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
}

function runScript(e) {
    if (e.keyCode == 13) {
    	if (document.getElementById("code").value.length == 4) {
    		checkCode();
    	}
    	
        return false;
    }
    console.log(e.keyCode);
}

function checkCode() {
	currentMeeting = "";
	var key = document.getElementById("code").value;

   	// var meetingCodes = "";

   	// firebaseRef.child('Meetings').on('value', snap => console.log(snap.val()));
   	console.log(meetingCodes);
   	console.log(key);
   	
   	for (var i = 0; i < meetingCodes.length; i++) {
   		if (key === meetingCodes[i]) {
   			console.log("KEY " + key);
   			currentMeeting = key;
   			
   			setupMeeting();
   			// openElement("nameElement");
   			firebaseRef.child(key).child("Started").once('value', snap => {
   				started = snap.val();
   				if (userType == "Student" && (started == null || started == false)) {
   					closeElement("keyCode");
   					setCookie("code", key, 0.2);
   					main.appendChild(nameElement);
   					setTimeout(function() {openElement("nameElement")}, 800);
   				}
   				else if (userType == "Teacher"){
   					closeElement("keyCode");
	   				setCookie("code", key, 0.2);
   					firebaseRef.child(currentMeeting).child("Speakers").child("Wish To Speak").on('value', snap => {
   						wishToSpeak = snap.val();
   						checkSpeaker();
   					});
	   				discussionControlView.setAttribute("style", "opacity:" + 1.0 + ";");
   					main.appendChild(discussionControlView);

   					setTimeout(function() {openElement("currentSpeaker");}, 1000);
   					// console.log("Opacity: " + window.getComputedStyle(document.getElementById("startMeeting")).getPropertyValue("opacity"));
   					setTimeout(function() {openElement("startMeeting");}, 2000);
   					var script = document.createElement('script');
					script.src = 'teacher.js';
					(document.getElementsByTagName("BODY")[0]).appendChild(script);
   				}
	   			else if (started == true) {
   					var errorMessage = document.createElement("p");
   					var errorText = document.createTextNode("The meeting has already started – you can no longer join");
   					errorMessage.appendChild(errorText);
   					errorMessage.setAttribute('style', 'opacity: 0.0;');
	   				errorMessage.id = "ERROR";
   					main.appendChild(errorMessage);
   					openElement("ERROR");
   					setTimeout(function() {closeElement("ERROR")}, 6000);
   					document.getElementById("code").value = "";
	   			}
   			});
			console.log(started);

   		}
   		else if (key == meetingCodes[i] + "i") {

   		}
   		else {
   			var errorMessage = document.createElement("p");
   			var errorText = document.createTextNode("The meeting does not exist");
   			errorMessage.appendChild(errorText);
   			errorMessage.setAttribute('style', 'opacity: 0.0;');
   			errorMessage.id = "ERROR";
   			main.appendChild(errorMessage);
   			openElement("ERROR");
   			setTimeout(function() {closeElement("ERROR")}, 6000);
   			document.getElementById("code").value = "";
   		}
    }


}

function setupMeeting() {
	firebaseRef.child(currentMeeting).child("Speakers").on('value', snap => currentMeetingInfo= snap.val());
   	firebaseRef.child(currentMeeting).child("Speakers").child("Current Speaker").on('value', snap => {
   		currentSpeaker = snap.val();
   		console.log("This is current speaker " + currentSpeaker);
   		console.log(currentMeeting);
		if (currentSpeaker === name && userType != "Teacher") {
   			console.log("Speaking");
   			document.getElementById("currentSpeaker").innerText = "You're speaking";
   			document.getElementById("handRaise").innerText = "I'm done speaking.";
   		}
   		else if (currentSpeaker != ""){
   			document.getElementById("currentSpeaker").innerText = currentSpeaker + " is speaking";
			if (userType === "Teacher") {
				console.log("Current Speaker" + currentSpeaker);
   				setTimeout(function() {firebaseRef.child(currentMeeting).child("Speakers").child("Wish To Speak").child(currentSpeaker).set(null);}, 500);
  			}

  			if (document.getElementById("handRaise").innerHTML == "I don't want to speak.") {
  				firebaseRef.child(currentMeeting).child("Speakers").child(name).child("Number of times Raised Hand But Not Chosen").set(++raisedHands);
  			}
   		}
   		else {
  			document.getElementById("currentSpeaker").innerText = "No one is speaking";
 			// document.getElementById("handRaise").innerText = "I want to speak!";
   			console.log("I'm in checkSpeaker");
   			// button = document.getElementById("handRaise");
   			checkSpeaker();
   		}
   		// console.log(currentSpeaker);
  	});
	if (userType != "Teacher" && name !=  null) {
		firebaseRef.child(currentMeeting).child("Speakers").child(name).child("Number of times Spoken").once('value', snap => numberSpoken = Number(snap.val()));
   		firebaseRef.child(currentMeeting).child("Speakers").child(name).child("Number of times Raised Hand But Not Chosen").once('value', snap => raisedHands = Number(snap.val()));
   		firebaseRef.child(currentMeeting).child("Speakers").child(name).child("Time Spoken").once('value', snap => timeSpoken = Number(snap.val()));
   		if (timeSpoken == null) {
   			timeSpoken = 0;
   		}
   		if (raisedHands == null) {
   			raisedHands = 0;
   		}
   	}
}

function setName(e) {
	if (e.keyCode == 13) {
		setNameValue();
		return false;
	}
}

function setNameValue() {
	name = document.getElementById("inputName").value;

	console.log(name);
	if (getCookie("name") == null) {
		setCookie("name", name, 3);
		console.log(currentMeetingNames);
		main.appendChild(discussionView);
		(document.getElementById("handRaise")).remove();
		(document.getElementById('handRaiseElement')).appendChild(handRaiseView);
		setTimeout(function() {openElement("currentSpeaker");}, 1000);
		setTimeout(function() {openElement("discussionView");}, 2000);
		
		setupMeeting();
	}
	
	closeElement("nameElement");

	firebaseRef.child(currentMeeting).child("Speakers").child(name).set({"Number of times Spoken": numberSpoken, "Number of times Raised Hand But Not Chosen": raisedHands, "Time Spoken": timeSpoken});


	
}

function raisedHand() {
	if (arguments.length == 1) {
		(document.getElementById("handRaise")).onclick = '';
	}
	console.log(window.getComputedStyle(document.getElementById('handRaise')).width);
	button = document.getElementById("handRaise");
	console.log("In Hand Raise Function");
	console.log(name);
	console.log(timeSpoken);
	console.log(button.innerHTML);
	if (button.innerHTML === "I want to speak!") {
		firebaseRef.child(currentMeeting).child("Speakers").child("Wish To Speak").child(name).set(timeSpoken);
		raisedHands += 1;
		firebaseRef.child(currentMeeting).child("Speakers").child(name).child("Number of times Raised Hand But Not Chosen").set(raisedHands);
		button.innerHTML = "I don't want to speak.";
	}
	else if (button.innerHTML === "I don't want to speak.") {
		firebaseRef.child(currentMeeting).child("Speakers").child("Wish To Speak").child(name).set(null);
		button.innerHTML = "I want to speak!";
		raisedHands -= 1;
		firebaseRef.child(currentMeeting).child("Speakers").child(name).child("Number of times Raised Hand But Not Chosen").set(raisedHands);
	}
	else if (button.innerHTML === "I'm done speaking.") {
		button.innerHTML = "I want to speak!";
		firebaseRef.child(currentMeeting).child("Speakers").child("Current Speaker").set("");
		console.log(timeSpoken);
		console.log("Times spoken = " + numberSpoken);
		firebaseRef.child(currentMeeting).child("Speakers").child(name).child("Number of times Spoken").set(++numberSpoken);
		// firebaseRef.child(currentMeeting).child("Speakers").child("Wish To Speak").child(name).set(null);
		button.innerHTML = "I want to speak!";
		raisedHands -= 1;
		firebaseRef.child(currentMeeting).child("Speakers").child(name).child("Number of times Raised Hand But Not Chosen").set(raisedHands);
	}
}

function timer() {
	if (currentSpeaker === name) {
		timeSpoken += 1;
		console.log(currentSpeaker + " " + timeSpoken);
		firebaseRef.child(currentMeeting).child("Speakers").child(name).child("Time Spoken").set(timeSpoken);
	}
}

function changeSpeaker(speaker) {
	firebaseRef.child(currentMeeting).child("Speakers").child("Current Speaker").set(speaker);
	// firebaseRef.child(currentMeeting).child("Speakers").child("Wish To Speak").child(speaker).set(null);
}

function checkSpeaker() {
	if (currentSpeaker === "" && wishToSpeak != null) {
		var smallestValue = null;
		console.log(wishToSpeak);
   		var keys = Object.keys(wishToSpeak);
   		var values = Object.values(wishToSpeak);
   		if (keys.length > 1) {
   			for (var i = 0; i < values.length; i++){
   				if (smallestValue == null) {
   					smallestValue = values[0];
   				}
   				else if (smallestValue > values[i]) {
   					smallestValue = values[i];
   				}
   			}
   			for (var i = 0; i<values.length; i++) {
   				// console.log(wishToSpeak[keys[i]]);
   				if (wishToSpeak[keys[i]] == smallestValue) {
   					changeSpeaker(keys[i]);
   					console.log(values[0]);
   					console.log("Name: " + keys[i]);
   					return;
   				}
   			}
   		}
   		else {
   	   		changeSpeaker(keys[0]);
   		}
   	}
}

function unload () {
	// if (name != null && currentMeeting != "") {
	// 	firebaseRef.child(currentMeeting).child("Speakers").child("Wish To Speak").child(name).set(null);
	// 	if (timeSpoken == 0) {
	// 		firebaseRef.child(currentMeeting).child("Speakers").child(name).set(null);
	// 	}
	// }
}

function checkRefresh () {
	// if (document.location.hash === "#visited") {
	// 	console.log("Refreshed page");
	// } else {document.location.hash = 'visited'}
	console.log("In Refresh");
	console.log("THIS IS MY NaME! "+ getCookie("name"));
	if (getCookie("name") != null) {
		name = getCookie("name");
		(nameElement.innerText = name);
		if (getCookie("code") != null) {
			console.log("User found!");
			(document.getElementById("Select User")).remove();
			(nameElement.remove());
			openElement("currentSpeaker");
			main.appendChild(discussionView);
			openElement("discussionView");
			currentMeeting = getCookie("code");
			userType = "Student";
			setupMeeting();
		}
	}
}

function setCookie (name, value, exdate) {
	var date = new Date();
	date.setTime(date.getTime() + (exdate*24*60*60*1000));
	var expires = "expires=" + date.toGMTString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie (name) {
	var cookieName = name + "=";
	var decodedCookies = decodeURIComponent(document.cookie);
	var cookies = decodedCookies.split("; ");
	console.log(cookies);
	for(var i = 0; i < cookies.length; i++) {
		if ((cookies[i]).includes(name)) {
			console.log(cookies[i].substring(5, cookies.length));
			return cookies[i].substring(cookieName.length, cookies[i].length);
		}
	}
	return null
}



















































