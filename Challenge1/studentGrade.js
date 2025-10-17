const grade = parseFloat(prompt("Enter your grade (0–100):"));

const h1 = document.createElement("h1");

if (grade >= 90 && grade <= 100) {
  h1.textContent = "Your grade is A";
  h1.style.color = "green";
} else if (grade >= 80) {
  h1.textContent = "Your grade is B";
  h1.style.color = "blue";
} else if (grade >= 70) {
  h1.textContent = "Your grade is C";
  h1.style.color = "yellow";
} else if (grade >= 60) {
  h1.textContent = "Your grade is D";
  h1.style.color = "orange";
} else if (grade >= 0) {
  h1.textContent = "Your grade is F";
  h1.style.color = "red";
} else {
  h1.textContent = "Invalid grade entered!";
  h1.style.color = "black";
}

document.body.appendChild(h1);
