const initialBox = document.getElementById("initial");
const intrestBox = document.getElementById("intrest");
const compoundBox = document.getElementById("compound");
const timeBox = document.getElementById("time");
const amountSpan = document.getElementById("amount");

initialBox.addEventListener("input", computeCompound);
intrestBox.addEventListener("input", computeCompound);
compoundBox.addEventListener("input", computeCompound);
timeBox.addEventListener("input", computeCompound);

function computeCompound() {
  const initial = Number(initialBox.value);
  const intrest = Number(intrestBox.value);
  const intrestPer = intrest / 100;
  const compound = Number(compoundBox.value);
  const time = Number(timeBox.value);
  const amount = initial * (1 + intrestPer / compound) ** (compound * time);
  amountSpan.textContent = amount;
}
