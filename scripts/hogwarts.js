// set character template to plug in user info from form with object constructor notation
function character(name, gender, house, housePath, familiar, familiarPath, wandWood, wandCore, eye, avatar, email){
  this.name = name
  this.gender = gender
  this.house = house
  this.housePath = housePath
  this.familiar = familiar
  this.familiarPath = familiarPath
  this.wandWood = wandWood
  this.wandCore = wandCore
  this.eye = eye
  this.avatar = avatar
  this.email = email
}
var firstName, lastName, gender, animal, trait, eye, house, avi, email, wandCore, wandWood, housePath, familiar, familiarPath

// create variables for each question
var q1 = document.getElementsByName("q1");
var q2 = document.getElementsByName("q2");
var q3 = document.getElementsByName("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementsByName("q6");
var q7 = document.getElementsByName("q7");
var q8 = document.getElementsByName("q8");



// create variable for submit button
var submit = document.getElementById("submit");

function submitForm(){
  // create variable for submission status
  var status = document.getElementById("status");

// Question 1 (NAME)
  var first = document.getElementById("firstName").value;
  var last = document.getElementById("lastName").value;
  // regex for both first and last name
  var nameRegex = /^[a-zA-Z-\s]{2,25}$/;
  // var test if first name matches regex
  var firstBool = nameRegex.test(first);
  // var test if last name matches regex
  var lastBool = nameRegex.test(last);
  // test in console
  console.log(firstBool + " " + lastBool);
// if value = "", alert user
// else below
  if (first == "") {
  status.className = "failure col-xs-12 text-center";
  status.innerHTML = "Please submit your character's first name.";
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
  return;
} else if (last == ""){
  status.className = "failure col-xs-12 text-center";
  status.innerHTML = "Please submit your character's last name.";
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
  return;
} else if (firstBool == false) {
  status.className = "failure col-xs-12 text-center";
  status.innerHTML = "Invalid First Name (must be 2-25 characters and can only include letters a-z, spaces, and hyphens)";
  return;
} else if (lastBool == false) {
  status.className = "failure col-xs-12 text-center";
  status.innerHTML = "Invalid Last Name (must be 2-25 characters and can only include letters a-z, spaces, and hyphens)";
  return;
} else {
    firstName = first[0].toUpperCase() + first.substring(1);
    lastName = last[0].toUpperCase() + last.substring(1);
    status.className = "";
    status.innerHTML = "";
}

// Question 2 (GENDER)
// if none selected, alert user
// else below

  for(i = 0; i < q2.length; i++){
      if(q2[i].checked){
          gender = q2[i].value;
          console.log("2. " + gender)
      }
  }
  if (gender == undefined) {
    status.className = "failure col-xs-12 text-center";
    status.innerHTML = "Please select your character's gender.";
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    return;
  } else {
    status.className = "";
    status.innerHTML = "";
  }

// Question 3 (ANIMAL)
// if none selected, alert user
// else below
  for(i = 0; i < q3.length; i++){
      if(q3[i].checked){
          animal = q3[i].value;
          console.log("3. " + animal)
      }
  }
  if (animal == undefined) {
    status.className = "failure col-xs-12 text-center";
    status.innerHTML = "Please select your character's animal familiar.";
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    return;
  } else {
    status.className = "";
    status.innerHTML = "";
  }

// Question 4 (TRAIT)
// if none selected, alert user
// else below
trait = q4.options[q4.selectedIndex].value;
  if (trait == "") {
    status.className = "failure col-xs-12 text-center";
    status.innerHTML = "Please select the trait your character is most proud of.";
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    return;
  } else {
    status.className = "";
    status.innerHTML = "";
    console.log("4. " + trait);
  }

// Question 5 (EYE COLOR)
// if none selected, alert user
// else below
eye = q5.options[q5.selectedIndex].value;
  if (eye == "") {
    status.className = "failure col-xs-12 text-center";
    status.innerHTML = "Please select your character's eye color.";
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    return;
  } else {
    status.className = "";
    status.innerHTML = "";
    console.log("5. " + eye);
  }

// Question 6 (HOUSE)
// if none selected, alert user
// else below
  for(i = 0; i < q6.length; i++){
      if(q6[i].checked){
          house = q6[i].value;
          console.log("6. " + house)
      }
  }
  if (house == undefined) {
    status.className = "failure col-xs-12 text-center";
    status.innerHTML = "Please select your character's house.";
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    return;
  } else {
    status.className = "";
    status.innerHTML = "";
  }

// Question 7 (AVATAR)
// if none selected, alert user
// else below
  for(i = 0; i < q7.length; i++){
      if(q7[i].checked){
          avi = q7[i].value;
          console.log("7. " + avi)
      }
  }
  if (avi == undefined) {
    status.className = "failure col-xs-12 text-center";
    status.innerHTML = "Please select your character's avatar.";
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    return;
  } else {
    status.className = "";
    status.innerHTML = "";
  }

// Question 8
// if value = "", alert user
// else below
// regex for first email input
// if input does not satisfy regex conditions, alert user
email = document.getElementById("email").value;
  // can use lowercase a-z, uppercase A-Z, numbers 0-9, symbols: . _ % -
  // \. check to see if . is there before .com .org .net etc
  // {2,8} checks if string after . is between 2 and 8 characters
  var emailRegex = /^[a-zA-Z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,8}$/;
  var emailBool = emailRegex.test(email);
  console.log(emailBool);
if (emailBool == false) {
  status.className = "failure col-xs-12 text-center";
  status.innerHTML = "Please input a valid email address.";
  return;
} else {
    status.className = "";
    status.innerHTML = "";
}

// check that second email input matches first (if second != first, alert user; else continue)
var confirmEmail = document.getElementById("confirmEmail").value;
if (confirmEmail != email) {
  status.className = "failure col-xs-12 text-center";
  status.innerHTML = "Your email addresses do not match.";
  return;
} else {
    status.className = "";
    status.innerHTML = "";
    email = document.getElementById("email").value;
}

// define housePath from selected house
if (house == "gry"){
  housePath = "images/hogwarts/crestG.png";
  house = "Gryffindor";
} else if (house == "huf"){
  housePath = "images/hogwarts/crestH.png";
  house = "Hufflepuff";
} else if (house == "rav"){
  housePath = "images/hogwarts/crestR.png";
  house = "Ravenclaw";
} else if (house == "sly"){
  housePath = "images/hogwarts/crestS.png";
  house = "Slytherin";
}

// find wandCore from var trait
if ( trait == "det" || trait == "res") {
  console.log("dragon");
  wandCore = "dragon";
} else if (trait == "ima" || trait == "ori") {
  console.log("phoenix");
  wandCore = "phoenix";
} else {
  console.log("unicorn");
  wandCore = "unicorn";
}

findFamiliar();
findWandWood();
genResults();

return;
}

// generate random familiar from arrays corresponding to animal selected
function findFamiliar(){
  var familiarArray = [];
  if (animal == "toad"){
    familiarArray = [
      {
        familiarName:"common toad",
        familiarImg:"images/hogwarts/comnatToad.png"
      },
      {
        familiarName:"natterjack toad",
        familiarImg:"images/hogwarts/comnatToad.png"
      },
      {
        familiarName:"dragon toad",
        familiarImg:"images/hogwarts/draToad.png"
      },
      {
        familiarName:"harlequin toad",
        familiarImg:"images/hogwarts/harToad.png"
      },
      {
        familiarName:"three toed toad",
        familiarImg:"images/hogwarts/thrToad.png"
      }
    ]
  } else if (animal == "cat"){
    familiarArray = [
      {
        familiarName:"tabby cat",
        familiarImg:"images/hogwarts/tabCat.png"
      },
      {
        familiarName:"siamese cat",
        familiarImg:"images/hogwarts/siaCat.png"
      },
      {
        familiarName:"ginger cat",
        familiarImg:"images/hogwarts/ginCat.png"
      },
      {
        familiarName:"black cat",
        familiarImg:"images/hogwarts/blaCat.png"
      },
      {
        familiarName:"white cat",
        familiarImg:"images/hogwarts/whiCat.png"
      }
    ]
  } else if (animal == "owl"){
    familiarArray = [
      {
        familiarName:"tawny owl",
        familiarImg:"images/hogwarts/tawOwl.png"
      },
      {
        familiarName:"screech owl",
        familiarImg:"images/hogwarts/scrOwl.png"
      },
      {
        familiarName:"brown owl",
        familiarImg:"images/hogwarts/broOwl.png"
      },
      {
        familiarName:"snowy owl",
        familiarImg:"images/hogwarts/snoOwl.png"
      },
      {
        familiarName:"barn owl",
        familiarImg:"images/hogwarts/barOwl.png"
      }
    ]
  }
  familiarIndex = Math.floor(Math.random()*familiarArray.length);
  familiar = familiarArray[familiarIndex].familiarName;
  familiarPath = familiarArray[familiarIndex].familiarImg;
  console.log(familiarArray);
  console.log(familiar);
}

// determine wand wood from var eye and var trait
function findWandWood(){
  var woodArray=[];
  // if selected eye color is black
  if (eye == "black") {
    // if trait is determination
    if (trait == "det") {
      woodArray.push("beech","ebony","aspen");
    }
    // if trait is imagination
    if (trait == "ima") {
      woodArray.push("sycamore","english oak","alder");
    }
    // if trait is resilience
    if (trait == "res") {
      woodArray.push("larch","apple","pine");
    }
    // if trait is intelligence
    if (trait == "int") {
      woodArray.push("ash","hazel","black walnut");
    }
    // if trait is originality
    if (trait == "ori") {
      woodArray.push("acacia","cedar","redwood");
    }
    // if trait is optimism
    if (trait == "opt") {
      woodArray.push("laurel","spruce","hornbeam");
    }
    // if trait is kindness
    if (trait == "kin") {
      woodArray.push("silver lime","rowan","vine");
    }
  }
  // if selected eye color is brown
  else if (eye == "brown") {
    // if trait is determination
    if (trait == "det") {
      woodArray.push("fir","yew","sycamore");
    }
    // if trait is imagination
    if (trait == "ima") {
      woodArray.push("cypress","cedar","spruce");
    }
    // if trait is resilience
    if (trait == "res") {
      woodArray.push("laurel","rowan","maple");
    }
    // if trait is intelligence
    if (trait == "int") {
      woodArray.push("redwood","dogwood","chestnut");
    }
    // if trait is originality
    if (trait == "ori") {
      woodArray.push("pine","hazel","beech");
    }
    // if trait is optimism
    if (trait == "opt") {
      woodArray.push("vine","apple","elm");
    }
    // if trait is kindness
    if (trait == "kin") {
      woodArray.push("acacia","pear","laurel");
    }
  }
  // if selected eye color is hazel
  else if (eye == "hazel") {
    // if trait is determination
    if (trait == "det") {
      woodArray.push("cedar","english oak","hazel");
    }
    // if trait is imagination
    if (trait == "ima") {
      woodArray.push("dogwood","yew","hawthorn");
    }
    // if trait is resilience
    if (trait == "res") {
      woodArray.push("vine","ebony","laurel");
    }
    // if trait is intelligence
    if (trait == "int") {
      woodArray.push("elm","blackthorn","fir");
    }
    // if trait is originality
    if (trait == "ori") {
      woodArray.push("chestnut","sycamore","ash");
    }
    // if trait is optimism
    if (trait == "opt") {
      woodArray.push("redwood","pear","beech");
    }
    // if trait is kindness
    if (trait == "kin") {
      woodArray.push("cherry","red oak","maple");
    }
  }
  // if selected eye color is blue
  else if (eye == "blue") {
    // if trait is determination
    if (trait == "det") {
      woodArray.push("hazel","cedar","beech");
    }
    // if trait is imagination
    if (trait == "ima") {
      woodArray.push("larch","holly","laurel");
    }
    // if trait is resilience
    if (trait == "res") {
      woodArray.push("redwood","yew","walnut");
    }
    // if trait is intelligence
    if (trait == "int") {
      woodArray.push("cypress","alder","elder");
    }
    // if trait is originality
    if (trait == "ori") {
      woodArray.push("elm","fir","sycamore");
    }
    // if trait is optimism
    if (trait == "opt") {
      woodArray.push("maple","rowan","pine");
    }
    // if trait is kindness
    if (trait == "kin") {
      woodArray.push("willow","english oak","hawthorn");
    }
  }
  // if selected eye color is green
  else if (eye == "green") {
    // if trait is determination
    if (trait == "det") {
      woodArray.push("rowan","walnut","fir");
    }
    // if trait is imagination
    if (trait == "ima") {
      woodArray.push("hornbeam","apple","maple");
    }
    // if trait is resilience
    if (trait == "res") {
      woodArray.push("dogwood","holly","black walnut");
    }
    // if trait is intelligence
    if (trait == "int") {
      woodArray.push("vine","larch","hazel");
    }
    // if trait is originality
    if (trait == "ori") {
      woodArray.push("beech","pine","spruce");
    }
    // if trait is optimism
    if (trait == "opt") {
      woodArray.push("elm","beech","cedar");
    }
    // if trait is kindness
    if (trait == "kin") {
      woodArray.push("cypress","ash","ebony");
    }
  }
  // if selected eye color is gray
  else if (eye == "gray") {
    // if trait is determination
    if (trait == "det") {
      woodArray.push("cypress","hornbeam","ash");
    }
    // if trait is imagination
    if (trait == "ima") {
      woodArray.push("silver lime","beech","cedar");
    }
    // if trait is resilience
    if (trait == "res") {
      woodArray.push("elm","fir","spruce");
    }
    // if trait is intelligence
    if (trait == "int") {
      woodArray.push("pear","chestnut","ebony");
    }
    // if trait is originality
    if (trait == "ori") {
      woodArray.push("hawthorn","larch","maple");
    }
    // if trait is optimism
    if (trait == "opt") {
      woodArray.push("pine","dogwood","black walnut");
    }
    // if trait is kindness
    if (trait == "kin") {
      woodArray.push("red oak","alder","poplar");
    }
  }
  console.log(woodArray);
  var wandWoodIndex = Math.floor(Math.random()*3)
  wandWood = woodArray[wandWoodIndex];
  console.log (wandWood);
}

// create new var using character constructor with user input
// avatar = "images/hogwarts/" + avi + ".png"
function genResults() {
  // create variable for submission status
  var status = document.getElementById("status");
  var results = document.getElementById("results");
  results.className = "results col-xs-12";
  var charInfo = new character(firstName + " " + lastName, gender, house, housePath, familiar, familiarPath, wandWood, wandCore, eye, "images/hogwarts/" + avi + ".png", email);
  console.log(charInfo);
  console.log("Your character's name is " + charInfo.name + ". " + charInfo.name + " is a " + charInfo.gender + " student in the house " + charInfo.house + " and has a " + charInfo.familiar + " as an animal familiar. " + charInfo.name + " wields a wand made of " + charInfo.wandWood + " with a " + charInfo.wandCore + " core.");
  document.getElementById("aviImg").setAttribute("src", charInfo.avatar);
  document.getElementById("familiarImg").setAttribute("src", charInfo.familiarPath);
  document.getElementById("houseImg").setAttribute("src", charInfo.housePath);
  document.getElementById("resName").innerHTML = charInfo.name;
  document.getElementById("resGender").innerHTML = charInfo.gender[0].toUpperCase() + charInfo.gender.substring(1);
  document.getElementById("resHouse").innerHTML = charInfo.house[0].toUpperCase() + charInfo.house.substring(1);
  document.getElementById("resFamiliar").innerHTML = charInfo.familiar[0].toUpperCase() + charInfo.familiar.substring(1);
  document.getElementById("resWandWood").innerHTML = charInfo.wandWood[0].toUpperCase() + charInfo.wandWood.substring(1);
  document.getElementById("resWandCore").innerHTML = charInfo.wandCore[0].toUpperCase() + charInfo.wandCore.substring(1);
  document.getElementById("resEmail").innerHTML = charInfo.email;
  var avatarBG = document.getElementById("avatarBG");
  if (charInfo.house == "Gryffindor"){
    avatarBG.className = "gryff col-xs-12";
  } else if (charInfo.house == "Hufflepuff"){
    avatarBG.className = "huffl col-xs-12";
  } else if (charInfo.house == "Ravenclaw"){
    avatarBG.className = "raven col-xs-12";
  } else {
    avatarBG.className = "slyth col-xs-12";
  }

  $('html, body').animate({scrollTop: '0px'}, "slow");
}

function hideResults(){
  var results = document.getElementById("results");
  results.className = "hidden";
}
