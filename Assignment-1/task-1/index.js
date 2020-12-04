window.onload = () => getTime();

const getTime = () => {
    setInterval(() => {
        let today = new Date();

        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();

        let am_pm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12', this is for 12 and 24

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;


        document.getElementById('hrs').innerText = hours;
        document.getElementById('min').innerText = minutes;
        document.getElementById('sec').innerText = seconds;
        document.getElementById('am-pm').innerText = am_pm;


    }, 1000)
}

