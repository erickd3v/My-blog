export default function header() {
    // Creando la etiqueta 'header'
    const headerElement = document.createElement('header');

    // Aquí pondremos los elementos previamente creados.
    // let h1Element = title()
    // let pElement = paragraph()
    let logoElement = logo();
    let navIcon = nav();
    const elements = [
        logoElement = logo(),
        navIcon = nav()
    ]

    // Incrustaremos cada elemento con la metodo '.appendChild'
    elements.forEach(element => {
        headerElement.appendChild(element);
    })

    return document.body.appendChild(headerElement)
}


// const title = () => {
//     const h1Element = document.createElement('h1');
//     h1Element.innerText = 'El Blog de un Dev';
//     return h1Element;
// }

// const paragraph = () => {
//     const pElement = document.createElement('p');

//     // Resaltando el titulo del blog.
//     const strongElement = document.createElement('strong');
//     strongElement.innerText = '"El Blog de un Dev" ';
    
//     // Incrustanto el texto en la etiqueta 'p'
//     pElement.innerHTML += 'Muy buenas gente, seais todos bienvenidos a mi primer artiulo en este blog llamado '
//     pElement.appendChild(strongElement);
//     pElement.innerHTML += 'en este primer blog les contaré como crear una lading page con Vanilla Js y Css'

//     return pElement;
// }

const logo = () => {
    // Creando la etiqueta picture donde se colocara la imagen del logo
    const logoElement = document.createElement('picture');

    // Creando eitiqueta img, su clase e incrustando en la etiqueta 'picture'
    const imageElement = document.createElement('img');
    imageElement.src = '../pictures/svg/logo.svg';
    imageElement.alt = 'logo v2.0';
    imageElement.classList.add('logo');
    
    logoElement.appendChild(imageElement);

    return logoElement;
}

const nav = () => {
    // Creando la etiqueta nav donde se colocaran los elementos relacionados al porfolio
    /**
     * Fase de desarrollo, colocar en pantalla una alerta que indique que esta en desarrollo luego de colocar la imagen.
     */
    const navIcon = document.createElement('img')
    navIcon.src = '';
    navIcon.alt = 'burgger Icon';
    navIcon.classList.add('burgerIcon');

    return navIcon;
}
