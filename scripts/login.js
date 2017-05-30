var objPeople = [
  {
    username: "Shay",
    password: "chari"
  },
  {
    username: "Hodor",
    password: "holdthedoor"
  },
  {
    username: "Admin",
    password: "password"
  },
]
function hideReg() {
  $('#regForm').hide()
  $('#regInputUser').hide()
  $('#regInputPw').hide()
  $("#status").hide();
}

$('#submitForm').mousedown(function() {
  var name = document.getElementById("username").value
  var username = name[0].toUpperCase() + name.substring(1)
  var password = document.getElementById("password").value

  for(i = 0; i < objPeople.length; i++) {
    if(username == objPeople[i].username && password == objPeople[i].password){
      $("#status").fadeIn();
      document.getElementById("status").innerHTML = username + " is logged in."
      document.getElementById("pwLink").innerHTML = "Update Password"
      console.log(username + " is logged in.")
      return
    }
  }
  for(i = 0; i < objPeople.length; i++) {
    if(username == objPeople[i].username && password != objPeople[i].password){
      $("#status").fadeIn();
      document.getElementById("status").innerHTML = "Incorrect password"
      document.getElementById("pwLink").innerHTML = "Lost your password?"
      console.log ("Incorrect password")
      return
    }
  }
  $("#status").fadeIn();
  document.getElementById("status").innerHTML = 'User "' + username + '"' + " does not exist."
  document.getElementById("pwLink").innerHTML = "Lost your password?"
    console.log ("User does not exist")
})
function register() {
  $("#form").hide();
  $("#username").hide();
  $("#password").hide();
  $("#regForm").show();
  $("#regInputUser").show();
  $("#regInputPw").show();
}
function toLogin() {
  $("#regForm").hide();
  $("#regInputUser").hide();
  $("#regInputPw").hide();
  $("#form").show();
  $("#username").show();
  $("#password").show();
}
function submitReg() {
  var regUser = document.getElementById("regInputUser").value;
  var regInputPw = document.getElementById("regInputPw").value;
  var regInputUser = regUser[0].toUpperCase() + regUser.substring(1)
  if (regInputUser.length < 5) {
    $("#status").fadeIn();
    document.getElementById("status").innerHTML = "Username must be at least 5 characters"
  }
  else {
    for (i = 0; i < objPeople.length; i++){
      // if username already exists, display User already exists, don't append again
      if(regInputUser == objPeople[i].username){
      $("#status").fadeIn();
      document.getElementById("status").innerHTML = 'Sorry, "' + regInputUser + '" already exists';
      console.log("User already exists");
      return
      }
    // append new username and password to array
    }
    var newUser = {
    username: regInputUser,
    password: regInputPw
  }
    $("#status").fadeIn();
    document.getElementById("status").innerHTML = "Success"
    objPeople.push(newUser);
    console.log(objPeople);
  }
}
