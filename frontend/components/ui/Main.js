export default function main() {
    const mainElement = document.createElement('main');
}

const title = () => {
    const h1Element = document.createElement('h1');
    h1Element.innerText = 'El Blog de un Dev';
    return h1Element;
}

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
