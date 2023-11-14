export class ArticleData {
    constructor(title, img, imgAlt, dataTime, time) {
        this.title = title;
        this.img = img;
        this.imgAlt = imgAlt;
        this.dataTime = dataTime;
        this.time = time;
    }
}

export const article1 = new ArticleData(
    'Mi primer blog, objetivos y como empezar en el desarrollo web',
    '../pictures/images/Profile.webp',
    'Imagen de mi perfil',
    '2023-11-13T00:00:00Z',
    '13 noviembre 2023',
);


export const article2 = new ArticleData(
    'Js Vanila: ¿Qué es?. ¿Cuáles son sus beneficios? y ¿Cuándo es momento de aprender un framework?',
    '../pictures/images/JsIcon.webp',
    'Logo de JavaScript.',
    '2023-11-14T00:00:00Z',
    '14 noviembre 2023',
);


// export const article3 = new ArticleData(
//     'Js Vanila: ¿Qué es?. ¿Cuáles son sus beneficios? y ¿Cuándo es momento de aprender un framework?',
//     'Soy el contenido del titulo',
//     '../pictures/images/JsIcon.webp',
//     'Logo de JavaScript.'
// );