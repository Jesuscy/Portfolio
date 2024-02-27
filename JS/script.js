const btnSwitch = document.getElementById('switchInput');
let isOcuro = true;

function setLight() {
    isOcuro = false;

}


btnSwitch.addEventListener('click', () => {
    if (isOcuro) {
        const infoContainer = document.getElementsByClassName('infoContainer-dark')[0];
        const infoContainer2 = document.getElementsByClassName('infoContainer-dark')[1];

        infoContainer.className = 'infoContainer-light';
        infoContainer2.className = 'infoContainer-light';

        document.body.className = 'body-light'
        setLight();
    }
    else {
        const infoContainer = document.getElementsByClassName('infoContainer-light')[0];
        const infoContainer2 = document.getElementsByClassName('infoContainer-light')[1];

        console.log(infoContainer);
        infoContainer.className = 'infoContainer-dark';
        infoContainer2.className = 'infoContainer-dark';


        document.body.className = 'body-dark'
        isOcuro = true;
    }

});


const formacionOption = document.getElementById('formacion');
const proyectosOption = document.getElementById('proyectos');
const experienciaOption = document.getElementById('experiencia');

const formacionCard = document.getElementById('formacionCard');
//const poryectosCard = document.getElementById('proyectosCard');
//const experienciaCard = document.getElementById('experienciaCard');

formacionOption.addEventListener('click', () => {
    formacionCard.scrollIntoView({ behavior: 'smooth' });
});
proyectosOption.addEventListener('click', scrollToOption());
experienciaOption.addEventListener('click', scrollToOption());


