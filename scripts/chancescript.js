let satScore = '';
let ecCount = null;
let ecExcellence = null;

function updateSAT() {
    satScore = document.getElementById('satScore').value;
    checkEvaluation();
}

function updateECCount() {
    ecCount = parseInt(document.getElementById('ecCount').value, 10);
    checkEvaluation();
}

function updateECExcellence() {
    ecExcellence = parseInt(document.getElementById('ecExcellence').value, 10);
    checkEvaluation();
}

function checkEvaluation() {
    if (satScore === '' || isNaN(ecCount) || isNaN(ecExcellence)) {
        return;
    }

    const isSatScoreYes = satScore === 'Yes';
    const hasManyECs = ecCount > 4;
    const hasExcellence = ecExcellence > 2;
    
    let resultMessage = '';

    if (isSatScoreYes && hasManyECs && hasExcellence) {
        resultMessage = 'You stand a chance';
    } else {
        resultMessage = 'You might have to work on: ';
        if (!isSatScoreYes) resultMessage += 'SAT score range, ';
        if (!hasManyECs) resultMessage += 'Number of ECs, ';
        if (!hasExcellence) resultMessage += 'Degree of excellency in ECs';
      
        resultMessage = resultMessage.replace(/, $/, '');
    }
    
    if (hasExcellence > hasManyECs) {
        resultMessage = 'Invalid input';
    }
   
    document.getElementById('collresult').textContent = resultMessage;
    return false; // DATA PROTECTION!
}
