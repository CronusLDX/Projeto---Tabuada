// Seleção elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");

// função para criar a tabela de multiplicação
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";
    for (let i = 1; i <= multiplicatorNumber; i++) {
        let result = number * i;
        let row = document.createElement("div");
        row.classList.add("row");
        row.innerHTML = `
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${result}</div>
        `;
        multiplicationTable.appendChild(row);
    }
}

// eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let multiplicationNumber = +numberInput.value;
    let multiplicatorNumber = +multiplicationInput.value;
    if (!multiplicationNumber || !multiplicatorNumber) return;
    createTable(multiplicationNumber, multiplicatorNumber);
});
