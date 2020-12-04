let arr = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu", "Pokhara", "Palpa"];
window.onload = () => {
    let html = '';
    arr.forEach(place => {
        html = html + `<th>${place}</th>`
    })
    document.getElementById('places').innerHTML = html;
}

const addPlace = () => {
    let places = document.getElementById('input').value;
    let place = places.split(",");
    if (place.length === 2) {
        if (isNaN(place[0]) && isNaN(place[1])) {
            arr.splice(3, 1, place[0], place[1]);

            let html = '';
            arr.forEach(place => {
                html = html + `<th>${place}</th>`
            })
            document.getElementById('places').innerHTML = html;
            document.getElementById('msg').innerHTML = `<p id="success">The length of new array of places after removing Kathmandu is ${arr.length}</p>`

        } else {
            document.getElementById('msg').innerHTML = `<p id="error">Be sure you are entering place name</p>`
        }
    } else {
        document.getElementById('msg').innerHTML = `<p id="error">Please Enter two places</p>`
    }

}