function getCircumference() {
    let pie = 22 / 7;
    let r = parseInt(document.getElementById('radius').value);
    isNaN(r) ? (document.getElementById('result').innerHTML = `<p id="error">Please Enter number!<\p>`) : (document.getElementById('result').innerHTML = `<p id="success">The circumference is ${2 * pie * r}</p>`);
    clearInput();
}

const clearInput = () => {
    document.getElementById('radius').value = null;
}