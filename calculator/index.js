window.onload = () => display();

const display = () => {
    const keys = ["C", ".", "<--", "+", "7", "8", "9", "-", "4", "5", "6", "X", "1", "2", "3", "/", "(", "0", ")", "="];
    let html = '';
    keys.forEach(key => {
        html = html + `<button onclick="buttonClicked(event)">${key}</button>`
    })
    document.getElementById('keys').innerHTML = html;
}


let html = '';
var buttonClicked = (e) => {

    let key = e.target.innerText;
    let n = parseInt(key);

    if (isNaN(n)) {
        //Not numbers
        switch (key) {
            case 'C':
                html = '';
                break;
            case '.':
                html = html + '.';
                break;

            case 'X':
                html = html + '*';
                break;

            case '/':
                html = html + '/';
                break;

            case '+':
                html = html + '+';
                break;

            case '-':
                html = html + '-';
                break;
            case '(':
                html = html + '(';
                break;
            case ')':
                html = html + ')';
                break;
            case '<--':
                html=document.getElementById('screen').value;
                let arr = html.split('');
                arr.pop();
                html = arr.join('');
                break;

            case '=':
                html = eval(html);
                break;

            default:
                console.log("Unknown Error")
        }

        document.getElementById('screen').value = html;
    }
    else {
        html = html + e.target.innerText;
        document.getElementById('screen').value = html;
    }
}