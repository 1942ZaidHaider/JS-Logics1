onload=console.log("Ready to go!");
//onclick
function press() {
  data = getData();
  console.log(data);
  let output = `Hello ${data["name"]} !!! `;
  console.log(age);
  age = Number(data["age"]);
  weight = Number(data["weight"]);
  console.log(age);
  console.log(weight);
  output += operate(age, weight);
  display(output, "output");
}
//Operations.
//Calling checkWeight() to check weight
function operate(age, weight) { 
  let output = "";
  if (age >= 5 && age < 8) {
    output += checkWeight(weight, [15, 20]);
  } else if (age >= 8 && age < 11) {
    output += checkWeight(weight, [21, 25]);
  } else if (age >= 11 && age < 16) {
    output += checkWeight(weight, [26, 30]);
  } else if (age >= 16 && age < 21) {
    output += checkWeight(weight, [31, 40]);
  } else {
    return "Your age is out of range! [5 - 20]";
  }
  return output.endsWith(".") ? output : output + " at an age of " + age + ".";
}
// Checking if weight is in the given range.
//Just to avoid complex nested else if blocks
function checkWeight(weight, range) {
  if (weight < range[0]) {
    return "Your weight is less than the recommended value of " + range[0] + " KG";
  } else if (weight > range[1]) {
    return "Your weight is greater than the recommended value of " + range[1] + " KG";
  } else {
    return "Your weight is perfect.";
  }
}
// Read data from <input> and return as JSON object
function getData() {
  m_name = document.getElementById("n").value;
  age = Number(document.getElementById("age").value);
  weight = Number(document.getElementById("weight").value);
  data = { "name": m_name, "age": age, "weight": weight };
  return data;
}
//Display the string(str) in the given element[id](tag)
function display(str, tag) {
  document.getElementById(tag).innerHTML = `<p>${str}</p>`;
}