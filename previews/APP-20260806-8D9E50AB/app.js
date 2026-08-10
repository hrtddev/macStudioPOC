const leaveForm = document.getElementById('leaveForm');
const resultDiv = document.getElementById('result');
const availableLeaveSpan = document.getElementById('availableLeave');
const plannedLeaveResultSpan = document.getElementById('plannedLeaveResult');
const remainingBalanceSpan = document.getElementById('remainingBalance');
const warningDiv = document.getElementById('warning');

leaveForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const annualEntitlement = parseFloat(document.getElementById('annualEntitlement').value);
    const leaveTaken = parseFloat(document.getElementById('leaveTaken').value);
    const plannedLeave = parseFloat(document.getElementById('plannedLeave').value);
    
    if (isNaN(annualEntitlement) || isNaN(leaveTaken) || isNaN(plannedLeave)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    
    const availableLeave = annualEntitlement - leaveTaken;
    const remainingBalance = availableLeave - plannedLeave;
    
    availableLeaveSpan.textContent = availableLeave.toFixed(1) + ' days';
    plannedLeaveResultSpan.textContent = plannedLeave.toFixed(1) + ' days';
    remainingBalanceSpan.textContent = remainingBalance.toFixed(1) + ' days';
    
    if (plannedLeave > availableLeave) {
        warningDiv.classList.remove('hidden');
    } else {
        warningDiv.classList.add('hidden');
    }
    
    resultDiv.classList.remove('hidden');
});