var firebaseRef = firebase.database().ref();

var discussionControlView = document.getElementById("discussionControlView");
var students;
var studentNames = [];
var studentInfo = [];
var currentMeeting;
var oldStudentInfo = null;
var started = false;

discussionControlView.style = '';

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

// currentMeeting = getCookie('code');
currentMeeting = '0001';

firebaseRef.child(currentMeeting).child("Speakers").on('value', snap => {
	students = snap.val();
	// console.log(studentInfo instanceof Array);
	var holderStudentNames = Object.keys(students);
	var holderStudentInfo = Object.values(students);
	studentInfo = new Array();
	studentNames = new Array();
	for (var i = 0; i < holderStudentNames.length; i++) {
		if (holderStudentNames[i] === "Current Speaker") {
			continue;
		}
		studentNames.push(holderStudentNames[i]);
		studentInfo.push(holderStudentInfo[i]);
	}
	if (started) {
		console.log("UPDATED");
		console.log(oldStudentInfo);
		console.log(studentInfo);
		updateInfo();
	}
	console.log("Student Information: " + studentInfo);
});

function updateInfo() {
	if (oldStudentInfo == null) {
		oldStudentInfo = studentInfo;
		console.log(oldStudentInfo);
		return;
	}
	for (var i = 0; i < oldStudentInfo.length; i++) {
		if (oldStudentInfo[i] != studentInfo[i]) {
			var table = document.getElementById("studentsTable");
			console.log("Changed:\n" + studentInfo);

			var children = document.getElementById('' + i).children;
			console.log(studentInfo[i]["Number of times Raised Hand But Not Chosen"] + "");

			children[1].innerHTML = formatTime(studentInfo[i]["Time Spoken"]);
			children[2].innerHTML = studentInfo[i]["Number of times Spoken"] + "";
			children[3].innerHTML = studentInfo[i]["Number of times Raised Hand But Not Chosen"] + "";
		}
	}
}

function tableAddRow(student) {
	var tableRow = tableCreateRow(student);
	var table = document.getElementById("studentsTable");

	tableRow.setAttribute('style', 'opacity:0');

	table.appendChild(tableRow);
	console.log(tableRow);
	openElementWithObject(tableRow);
}

function openElementWithObject(element) {
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
	element.setAttribute("style","opacity:"+0.0+"; -moz-opacity:0.5; filter:alpha(opacity=50)");
}

function startMeeting() {
	started = true;
	console.log("STARTED");
	console.log("Students:\n\n" + studentNames);
	firebaseRef.child(currentMeeting).child("Started").set(true);
	for (var i = 0; i < studentNames.length; i++) {
		console.log(studentNames[i]);
		tableAddRow(studentInfo[i]);
	}
	updateInfo();
}

function arrayIndexOf(array, element) {
	var index = 0;
	for (var i = 0; i < array.length; i++) {
		var arrayElement = array[i];
		if (arrayElement == element) {
			return index;
		}
		++index;
	}
}


function tableCreateRow(student) {
	var index = arrayIndexOf(studentInfo, student);
	var name = studentNames[index];
	console.log(index);
	var timeSpoken = student["Time Spoken"];
	var timesCalledOn = student["Number of times Spoken"];
	var raisedHands = student["Number of times Raised Hand But Not Chosen"];

	var tableRow = document.createElement("TR");
	var tableName = document.createElement("TD");
	var tableTimeSpoken = document.createElement("TD");
	var tableTimesCalledOn = document.createElement("TD");
	var tableRaisedHands = document.createElement("TD");

	tableName.id = "tableName";
	tableTimeSpoken.id = "tableData";
	tableTimesCalledOn.id = "tableData";
	tableRaisedHands.id = "tableData";

	tableName.innerHTML = name;
	tableTimeSpoken.innerHTML = formatTime(timeSpoken);
	tableTimesCalledOn.innerHTML = timesCalledOn;
	tableRaisedHands.innerHTML = raisedHands;

	tableRow.appendChild(tableName);
	tableRow.appendChild(tableTimeSpoken);
	tableRow.appendChild(tableTimesCalledOn);
	tableRow.appendChild(tableRaisedHands);

	tableRow.id = "" + index;

	return tableRow;

}

function formatTime(time) {
	if (time%60 < 10) {
		return ("" + Math.trunc(time/60))+":0"+(time%60);
	} else {
		return ("" + Math.trunc(time/60))+":"+(time%60);
	}
}



















