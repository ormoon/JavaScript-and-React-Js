function calculateTips() {
    let amount = parseInt(document.getElementById('amount').value);
    let tip = parseInt(document.getElementById('tips').value);

    if (isNaN(amount) || isNaN(tip)) {
        document.getElementById('output').innerHTML = `<p id="error">Be sure you have entered number</p>`
    } else {
        tips = Math.ceil((tip / 100) * amount);
        document.getElementById('output').innerHTML = `<p id="success">Tips = ${tips}</p>`
    }

}