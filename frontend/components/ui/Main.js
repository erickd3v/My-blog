export class Main {
    constructor(aHref, articleData){
        this.aHref = aHref;
        this.articleData = articleData;
    }
    render() {
        const sectionElement = document.createElement('section');
        sectionElement.classList.add('section-post');
        sectionElement.innerHTML=`
                <a class="home-article" href="${this.aHref}">
                    <picture>
                        <img src='${this.articleData.img}' alt='${this.articleData}'>
                    </picture>
                    <div>
                        <h2>${this.articleData.title}</h2>
                        <div class="meta">
                            <time datetime="${this.articleData.dataTime}">${this.articleData.time}</time>
                        </div>
                    </div>
                </a>
        `;

        return sectionElement;
    }
}