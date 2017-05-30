
var array = [];
// uncomment below to test functionality with numbers (i) in place of names
// for (i = 0; i < 150; i++){
//   array[i] = i;
//   array.push(array[i])
// }

// // assign student names as values for each position in array for however many raffle tickets they earned
for (i = 0; i < 150; i++) {
  // student A had 18 raffle tickets, name goes in 18 times from position i=0 to i=17
  if (i <= 17) {
    array[i] = "Student A";
    // student B had 10 tickets, name goes in 10 times from position i=18 to i=27
  } else if (i > 17 && i <= 27) {
    array[i] = "Student B";
  } else if (i > 27 && i <= 36) {
    array[i] = "Student C";
  } else if (i > 36 && i <= 46) {
    array[i] = "Student D";
  } else if (i > 46 && i <= 77) {
    array[i] = "Student E";
  } else if (i > 77 && i <= 79) {
    array[i] = "Student F";
  } else if (i > 79 && i <= 84) {
    array[i] = "Student G";
  } else if (i > 84 && i <= 86) {
    array[i] = "Student H";
  } else if (i > 86 && i <= 87) {
    array[i] = "Student I";
  } else if (i > 87 && i <= 88) {
    array[i] = "Student J";
  } else if (i > 88 && i <= 89) {
    array[i] = "Student K";
  } else if (i > 89 && i <= 90) {
    array[i] = "Student L";
  } else if (i > 90 && i <= 91) {
    array[i] = "Student M";
  } else if (i > 91 && i <= 93) {
    array[i] = "Student N";
  } else if (i > 93 && i <= 101) {
    array[i] = "Student O";
  } else if (i > 101 && i <= 119) {
    array[i] = "Student P";
  } else if (i > 119 && i <= 121) {
    array[i] = "Student Q";
  } else if (i > 121 && i <= 136) {
    array[i] = "Student R";
  } else if (i > 136 && i <= 137) {
    array[i] = "Student S";
  } else if (i > 137 && i <= 139) {
    array[i] = "Student T";
  } else if (i > 139 && i <= 142) {
    array[i] = "Student U";
  } else if (i > 142 && i <= 147) {
    array[i] = "Student V";
  } else if (i > 147 && i < 150) {
    array[i] = "Student W";
  }
  array.push(array[i])
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

array = shuffle(array);

function generateRan() {
  var ol = document.getElementById("ol");
  var li = document.createElement("li");
  var name = document.createTextNode(array[i--]);
  if (i >= 0){
    li.appendChild(name);
    ol.appendChild(li);
    li.className = "text-center";
  } else {
    alert("No more names to display!");
  }
  document.getElementById("end").scrollIntoView();
}
