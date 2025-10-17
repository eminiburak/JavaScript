const year = parseInt(prompt("Enter a year:"), 10);

const isLeap =
  (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

const p = document.createElement("p");
p.textContent = isLeap
  ? `The year ${year} is a leap year.`
  : `The year ${year} is not a leap year.`;
p.style.color = isLeap ? "green" : "red";

document.body.appendChild(p);
