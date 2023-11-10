export class Blog {
    constructor(title, paragraph, img, imgRef) {
        this.title = title;
        this.paragraph = paragraph;
        this.img = img;
        this.imgRef = imgRef;
    }
    render() {
        const blogElement = document.createElement('main');
        blogElement.innerHTML = `
            <h2>${this.title}</h2>
            <p>${this.paragraph}</p>
            <img src="${this.img}" alt="${this.imgRef}">
        `;
        return blogElement;
    }
}

export const article1 = new Blog(
    'Mi primer blog, objetivos y como empezar en el desarrollo web',
    'Soy el contenido del titulo',
    '../pictures/images/Profile.webp',
    'Imagen de mi perfil.'
);

export const article2 = new Blog(
    'Js Vanila: ¿Qué es?. ¿Cuáles son sus beneficios? y ¿Cuándo es momento de aprender un framework?',
    'Soy el contenido del titulo',
    '../pictures/images/JsIcon.webp',
    'Logo de JavaScript.'
);