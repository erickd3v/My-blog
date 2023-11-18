export class Main {
    constructor(aHref, articleData){
        this.aHref = aHref;
        this.articleData = articleData;
    }
    render() {
        const mainElement = document.querySelector('.home-feed');
        const sectionElement = document.querySelector('.section-post')

        const aElement = document.createElement('a');
        aElement.classList.add('home-article');
        aElement.href = this.aHref
        aElement.innerHTML=`
                    <picture>
                        <img src='${this.articleData.img}' alt='${this.articleData}'>
                    </picture>
                    <div>
                        <h2>${this.articleData.title}</h2>
                        <div class="meta">
                            <time datetime="${this.articleData.dataTime}">${this.articleData.time}</time>
                        </div>
                    </div>
        `;
        sectionElement.appendChild(aElement);
        mainElement.appendChild(sectionElement);
        return mainElement;
    }
}