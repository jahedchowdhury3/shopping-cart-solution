// shortcut function
function updateCaseNumber(isIncreses) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isIncreses == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // update case total tk
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}

//  plus button event handeller
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
})
// minus button event handller
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
})
