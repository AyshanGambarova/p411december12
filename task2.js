let amountInput = document.querySelector("#amount");
let monthInput = document.querySelector("#month");
let percentInput = document.querySelector("#percent");
let calculateButton = document.querySelector("#calculate");
let resetButton = document.querySelector("#reset");
let finalAmount;
let perMonth;
let residue = 0;
let sumOfResidue = 0;
let card = document.querySelector("#card");

calculateButton.addEventListener("click", function () {
  let amountValue = amountInput.value;
  let monthValue = monthInput.value;
  let percentValue = percentInput.value;

  if (amountValue == "" || monthValue == "" || percentValue == "") {
    alert("You cannot add empty value");
  }
  finalAmount =
    Number(((amountValue * percentValue) / 100) * monthValue) +
    Number(amountValue);

    if (card.childElementCount > 0) {
      card.innerHTML = "";
    }

  for (let index = 1; index <= monthValue; index++) {
    // console.log(finalAmount);
    perMonth = finalAmount / Number(monthValue);
    // console.log(perMonth)
    residue += perMonth % 1;
    // console.log(residue);
    perMonth = Math.floor(perMonth);

    if (index == monthValue) {
      perMonth = perMonth + Math.floor(residue);
    }

    console.log(perMonth);

    let insideCard = document.createElement("div");
    insideCard.classList.add("col-3");
    insideCard.innerHTML = `<div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${perMonth}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        </div>
      </div>`;
    card.append(insideCard);
  }
  amountInput.value = "";
  monthInput.value = "";
  percentInput.value = "";
});

resetButton.addEventListener("click", function () {
  card.remove();
});
