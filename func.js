document.getElementById('generate').addEventListener('click', function() {
    var mi = parseInt(document.getElementById('minimum').value);
    var ma = parseInt(document.getElementById('maximum').value);
    if (isNaN(mi) || isNaN(ma)) {
        alert("Please enter valid numbers for both minimum and maximum values");
        return;
    }
    if (mi > ma) {
        alert("Minimum value should be less than or equal to the maximum value");
        return;
    }
    var rand= Math.floor(Math.random()*(ma-mi+1))+mi;
    document.getElementById('ans').textContent = "Random Integer: " + rand;
});