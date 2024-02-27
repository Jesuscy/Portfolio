const btnSwitch = document.getElementById('switchInput');
let isOcuro = true;

function setLight() {
    isOcuro = false;

}
btnSwitch.addEventListener('click', () => {
    if (isOcuro) {
        const infoContainer = document.getElementsByClassName('infoContainer-dark')[0];
        infoContainer.className = 'infoContainer-light';
        document.body.className = 'body-light'
        setLight();
        console.log(isOcuro);
    }
    else {
        const infoContainer = document.getElementsByClassName('infoContainer-light')[0];
        console.log(infoContainer);
        infoContainer.className = 'infoContainer-dark';
        document.body.className = 'body-dark'
        isOcuro = true;
    }

});