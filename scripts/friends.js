function getResults() {
  // character arrays
  var cha = [0];
  var joe = [0];
  var mon = [0];
  var pho = [0];
  var rac = [0];
  var ros = [0];
  // defining a variable for each question
  var q1 = document.getElementsByName("q1");
  var q2 = document.getElementsByName("q2");
  var q3 = document.getElementsByName("q3");
  var q4 = document.getElementsByName("q4");
  var q5 = document.getElementsByName("q5");
  var q6 = document.getElementsByName("q6");
  var q7 = document.getElementsByName("q7");
  var q8 = document.getElementsByName("q8");
  var q9 = document.getElementsByName("q9");
  var q10 = document.getElementsByName("q10");
  var q11 = document.getElementsByName("q11");

  // question 1: obtain value from selected option, push to corresponding character array(s)
  var q1A;
  for(i = 0; i < q1.length; i++){
      if(q1[i].checked){
          q1A = q1[i].value;
          console.log("1. " + q1A)
      }

  }
  if (q1A == "sd") {
    joe.push(2);
    rac.push(2);
  } else if (q1A == "d") {
    pho.push(2);
    rac.push(1);
    joe.push(1);
  } else if (q1A == "n") {
    ros.push(1);
    mon.push(2);
    pho.push(1);
  } else if (q1A == "a") {
    cha.push(2);
    ros.push(2);
  } else if (q1A == "sa") {
    cha.push(4);
  } else {
    alert("Please submit a value for Question 1.")
    return;
  }

  // question 2: obtain value from selected option, push to corresponding character array(s)
  var q2A;
  for(i = 0; i < q2.length; i++){
      if(q2[i].checked){
          q2A = q2[i].value;
          console.log("2. " + q2A)
      }
  }
  if (q2A == "sd") {
    cha.push(3);
    rac.push(1);
  } else if (q2A == "d") {
    cha.push(1);
    rac.push(2);
    joe.push(1);
  } else if (q2A == "n") {
    pho.push(2);
    joe.push(2);
  } else if (q2A == "a") {
    mon.push(1);
    ros.push(3);
  } else if (q2A == "sa") {
    mon.push(3);
    ros.push(1);
  } else {
    alert("Please submit a value for Question 2.")
    return;
  }

  // question 3: obtain value from selected option, push to corresponding character array(s)
  var q3A;
  for(i = 0; i < q3.length; i++){
      if(q3[i].checked){
          q3A = q3[i].value;
          console.log("3. " + q3A)
      }
  }
  if (q3A == "sd") {
    joe.push(3);
    pho.push(1);
  } else if (q3A == "d") {
    pho.push(2);
    rac.push(1);
    joe.push(1);
  } else if (q3A == "n") {
    cha.push(2);
    rac.push(2);
  } else if (q3A == "a") {
    cha.push(1);
    ros.push(2);
    mon.push(1);
  } else if (q3A == "sa") {
    mon.push(3);
    ros.push(1);
  } else {
    alert("Please submit a value for Question 3.")
    return;
  }

  // question 4: obtain value from selected option, push to corresponding character array(s)
  var q4A;
  for(i = 0; i < q4.length; i++){
      if(q4[i].checked){
          q4A = q4[i].value;
          console.log("4. " + q4A)
      }
  }
  if (q4A == "sd") {
    cha.push(2);
    mon.push(2);
  } else if (q4A == "d") {
    cha.push(2);
    mon.push(1);
    joe.push(1);
  } else if (q4A == "n") {
    joe.push(2);
    ros.push(2);
  } else if (q4A == "a") {
    rac.push(3);
    ros.push(1);
  } else if (q4A == "sa") {
    pho.push(3);
    rac.push(1);
  } else {
    alert("Please submit a value for Question 4.")
    return;
  }

  // question 5: obtain value from selected option, push to corresponding character array(s)
  var q5A;
  for(i = 0; i < q5.length; i++){
      if(q5[i].checked){
          q5A = q5[i].value;
          console.log("5. " + q5A)
      }
  }
  if (q5A == "sd") {
    ros.push(1);
    rac.push(3);
  } else if (q5A == "d") {
    ros.push(2);
    mon.push(1);
    joe.push(1);
  } else if (q5A == "n") {
    joe.push(2);
    mon.push(2);
  } else if (q5A == "a") {
    cha.push(2);
    pho.push(2);
  } else if (q5A == "sa") {
    cha.push(1);
    pho.push(3);
  } else {
    alert("Please submit a value for Question 5.")
    return;
  }

  // question 6: obtain value from selected option, push to corresponding character array(s)
  var q6A;
  for(i = 0; i < q6.length; i++){
      if(q6[i].checked){
          q6A = q6[i].value;
          console.log("6. " + q6A)
      }
  }
  if (q6A == "sd") {
    joe.push(1);
    pho.push(3);
  } else if (q6A == "d") {
    rac.push(1);
    joe.push(3);
  } else if (q6A == "n") {
    rac.push(2);
    mon.push(2);
  } else if (q6A == "a") {
    cha.push(2);
    mon.push(2);
  } else if (q6A == "sa") {
    cha.push(1);
    ros.push(3);
  } else {
    alert("Please submit a value for Question 6.")
    return;
  }

  // question 7: obtain value from selected option, push to corresponding character array(s)
  var q7A;
  for(i = 0; i < q7.length; i++){
      if(q7[i].checked){
          q7A = q7[i].value;
          console.log("7. " + q7A)
      }
  }
  if (q7A == "ch") {
    cha.push(2);
  } else if (q7A == "jo") {
    joe.push(2);
  } else if (q7A == "mo") {
    mon.push(2);
  } else if (q7A == "ph") {
    pho.push(2);
  } else if (q7A == "ra") {
    rac.push(2);
  } else if (q7A == "ro") {
    ros.push(2);
  } else {
    alert("Please submit a value for Question 7.")
    return;
  }

  // question 8: obtain value from selected option, push to corresponding character array(s)
  var q8A;
  for(i = 0; i < q8.length; i++){
      if(q8[i].checked){
          q8A = q8[i].value;
          console.log("8. " + q8A)
      }
  }
  if (q8A == "ch") {
    cha.push(2);
  } else if (q8A == "jo") {
    joe.push(2);
  } else if (q8A == "mo") {
    mon.push(2);
  } else if (q8A == "ph") {
    pho.push(2);
  } else if (q8A == "ra") {
    rac.push(2);
  } else if (q8A == "ro") {
    ros.push(2);
  } else {
    alert("Please submit a value for Question 8.")
    return;
  }

  // question 9: obtain value from selected option, push to corresponding character array(s)
  var q9A;
  for(i = 0; i < q9.length; i++){
      if(q9[i].checked){
          q9A = q9[i].value;
          console.log("9. " + q9A)
      }
  }
  if (q9A == "ch") {
    cha.push(2);
  } else if (q9A == "jo") {
    joe.push(2);
  } else if (q9A == "mo") {
    mon.push(2);
  } else if (q9A == "ph") {
    pho.push(2);
  } else if (q9A == "ra") {
    rac.push(2);
  } else if (q9A == "ro") {
    ros.push(2);
  } else {
    alert("Please submit a value for Question 9.")
    return;
  }

  // question 10: obtain value from selected option, push to corresponding character array(s)
  var q10A;
  for(i = 0; i < q10.length; i++){
      if(q10[i].checked){
          q10A = q10[i].value;
          console.log("10. " + q10A)
      }
  }
  if (q10A == "ch") {
    cha.push(2);
  } else if (q10A == "jo") {
    joe.push(2);
  } else if (q10A == "mo") {
    mon.push(2);
  } else if (q10A == "ph") {
    pho.push(2);
  } else if (q10A == "ra") {
    rac.push(2);
  } else if (q10A == "ro") {
    ros.push(2);
  } else {
    alert("Please submit a value for Question 10.")
    return;
  }

  // question 11: obtain value from selected option, push to corresponding character array(s)
  var q11A;
  for(i = 0; i < q11.length; i++){
      if(q11[i].checked){
          q11A = q11[i].value;
          console.log("11. " + q11A)
      }
  }
  if (q11A == "ro") {
    cha.push(2);
  } else if (q11A == "jo") {
    joe.push(2);
  } else if (q11A == "mo") {
    mon.push(2);
  } else if (q11A == "ph") {
    pho.push(2);
  } else if (q11A == "chRa") {
    rac.push(2);
    cha.push(2);
  } else {
    alert("Please submit a value for Question 11.")
    return;
  }

// uncomment to confirm Sum of arrays defined below function properly
  // console.log(cha);
  // console.log(joe);
  // console.log(mon);
  // console.log(pho);
  // console.log(rac);
  // console.log(ros);

// define sum variable for each character array
// total Chandler points
  var chaSum = cha.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  console.log(chaSum);
// total Joey points
  var joeSum = joe.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  console.log(joeSum);
// total Monica points
  var monSum = mon.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  console.log(monSum);
// total Phoebe points
  var phoSum = pho.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  console.log(phoSum);
// total Rachel points
  var racSum = rac.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  console.log(racSum);
// total Ross points
  var rosSum = ros.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  console.log(rosSum);
// create new array using sums of character arrays, then use for loop find the biggest character sum value
  var sumArray = [chaSum, joeSum, monSum, phoSum, racSum, rosSum];
  var biggest = 0;
  for (i = 0; i < sumArray.length; i++){
    if (biggest < sumArray[i]) {
      biggest = sumArray[i];
    }
    console.log(biggest + " is the biggest value.");
  }
  // retrieve corresponding character based on biggest sum found
  if (chaSum == biggest) {
    document.getElementById("result").innerHTML = "You are Chandler!";
  } else if (joeSum == biggest) {
    document.getElementById("result").innerHTML = "You are Joey!";
  } else if (monSum == biggest) {
    document.getElementById("result").innerHTML = "You are Monica!";
  } else if (phoSum == biggest) {
    document.getElementById("result").innerHTML = "You are Phoebe!";
  } else if (racSum == biggest) {
    document.getElementById("result").innerHTML = "You are Rachel!";
  } else if (rosSum == biggest) {
    document.getElementById("result").innerHTML = "You are Ross!";
  } else {
    alert("ERROR, TRY AGAIN");
  }

// create chart
var labels = ["Chandler", "Joey", "Monica", "Phoebe", "Rachel", "Ross"]
var chart = d3.select("#chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(sumArray);
var barEnter = barUpdate.enter().append("div");
barEnter.style("width", function(d) { return d * 10 + "%"; });
barEnter.style("height", "30px");
barEnter.text(function(d, i) { return labels[i]; });

document.getElementById("chart").scrollIntoView();
}
