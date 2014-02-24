/**
 * 
 */

var name;
var res;
var firstName;
var lastName;

function parseName() {
	name = document.getElementById("enterfullname").value;

	if (name == "Enter full name here") {
		firstName = "Undefined";
		lastName = "Undefined";
	} else {

		res = name.split(" ");
		firstName = res[0];
		lastName = res[1];
	}
}

function setName() {
	document.getElementById("enterfullname").value = "Sam Walton";
}

function splitName() {
	parseName();
	document.getElementById("gname2").innerHTML = "Given name: " + firstName;
	document.getElementById("fname2").innerHTML = "Family name: " + lastName;

}

function givenName() {
	parseName();
	document.getElementById("gname").value = firstName;

}
function familyName() {
	parseName();
	document.getElementById("fname").value = lastName;
}
function doAll() {
	givenName();
	familyName();
	splitName();
}
function swapName() {
	parseName();
	document.getElementById("enterfullname").value = lastName + ", "
			+ firstName;

}
function clearSplitName() {
	parseName();
	document.getElementById("gname2").innerHTML = '';
	document.getElementById("fname2").innerHTML = '';
}
function clearGivenName() {
	parseName();
	document.getElementById("gname").value = '';

}
function clearFamilyName() {
	parseName();
	document.getElementById("fname").value = '';

}
function clearAll() {
	parseName();
	document.getElementById("gname").value = '';
	document.getElementById("fname").value = '';
	document.getElementById("enterfullname").value = "Enter full name here";
	document.getElementById("gname2").innerHTML = '';
	document.getElementById("fname2").innerHTML = '';

}
function hideInfo() {
	parseName();

	var isHide = document.getElementById("hideinfo").value;
	if (isHide == "Hide Info") {
		document.getElementById("hideinfo").value = "Show Info";
		document.getElementById("names").style.display = 'none';
		document.getElementById("names2").style.display = 'none';
	} else {
		document.getElementById("hideinfo").value = "Hide Info";
		document.getElementById("names").style.display = 'block';
		document.getElementById("names2").style.display = 'block';
	}
}