// import Blog from "./Blog";

export default class Main {
    render() {
        const mainElement = document.createElement('main');
        mainElement.classList.add('home-feed')
        let h1Element = title();
        let homeSection = section();

        const elementMain = [
            h1Element = title(),
            homeSection = section(),
        ]

        elementMain.forEach(elemet => {
            mainElement.appendChild(elemet);
        });

        return mainElement;
    }
}

const title = () => {
    const h1Element = document.createElement('h1');
    h1Element.innerText = 'Últimos artículos';
    h1Element.classList.add('section-title');
    return h1Element;
}

const section = () => {
    const homeSection = document.createElement('section');
    homeSection.classList.add('section-post');

    const articleData = [
        {
            aHref: 'http://localhost:1234/vanilla-js-beneficios-y-pasar-a-framework',
            img: '../pictures/images/JsIcon.webp',
            imgAlt: 'imagen de mi Js',
            h2: 'Js Vanilla, que es?, Cuales son sus beneficios y cuando es el momento para aprender un Famework?.',
            time: '6 noviembre 2023',
            dataTime: '2023-11-06T00:00:00Z'
        },
        {
            aHref: 'http://localhost:1234/mi-primer-blog',
            img: '../pictures/images/Profile.webp',
            imgAlt: 'imagen de mi perfil',
            h2: 'Mi primer blog, objetivos y como empezar en el desarrollo web.',
            dataTime: '2023-11-05T00:00:00Z',
            time: '5 noviembre 2023'
        }
    ];

    articleData.forEach(data => {
        const article = new Article(data.aHref, data.img, data.imgAlt, data.h2, data.time, data.dataTime);
        homeSection.appendChild(article.render());
    });

    return homeSection;
}

// añadiendo clases

class Article{
    constructor(aHref, img, imgAlt, h2, time, dataTime) {
        this.aHref = aHref;
        this.img = img;
        this.imgAlt = imgAlt;
        this.h2 = h2;
        this.dataTime = dataTime;
        this.time = time;
    }

    createElement(tag, attributes = {}, children = []) {
        const element = document.createElement(tag);
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        if(!Array.isArray(children)) {
            children = [children]
        }
        children.forEach(child => {
            if(child instanceof Element) {
                element.appendChild(child);
            } else {
                element.textContent = child;
            }
        });
        return element;
    }
    
    render() {
        const pictureElement = this.createElement('picture', {});
        const imgElement = this.createElement('img', { src: this.img, alt: this.imgAlt });

        pictureElement.appendChild(imgElement);
        
        const h2Element = this.createElement('h2', {}, this.h2);
        
        const timeElement = this.createElement('time', { dateTime: this.dataTime }, this.time);
        const divElement2 = this.createElement('div', { class: 'meta' });
        
        divElement2.appendChild(timeElement);

        const divElement = this.createElement('div', {}, [h2Element, divElement2]);

        
        const articleElement = this.createElement('a', { href: this.aHref, class: 'home-article' }, [pictureElement, divElement]);
        // articleElement.classList.add('home-article');


        return articleElement;
    }
}

// class Prueba extends Blog {
    
// }