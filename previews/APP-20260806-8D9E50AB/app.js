const leaveForm = document.getElementById('leaveForm');
const resultDiv = document.getElementById('result');
const availableLeaveSpan = document.getElementById('availableLeave');
const totalUsedSpan = document.getElementById('totalUsed');
const remainingLeaveSpan = document.getElementById('remainingLeave');
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
    const totalUsed = leaveTaken + plannedLeave;
    const remainingLeave = availableLeave - plannedLeave;
    
    availableLeaveSpan.textContent = availableLeave.toFixed(1);
    totalUsedSpan.textContent = totalUsed.toFixed(1);
    remainingLeaveSpan.textContent = remainingLeave.toFixed(1);
    
    if (plannedLeave > availableLeave) {
        warningDiv.classList.remove('hidden');
    } else {
        warningDiv.classList.add('hidden');
    }
    
    resultDiv.classList.remove('hidden');
});