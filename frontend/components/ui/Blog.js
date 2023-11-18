import { article1, article2 } from "../user/UserArticle.js";
export class Blog {
    constructor(articleData, paragraphBlog) {
        this.articleData = articleData;
        this.paragraphBlog = paragraphBlog;
    }
    render() {
        const blogElement = document.createElement('article');
        blogElement.id = 'article'
        blogElement.innerHTML = `
        <div id="article-content-wrapper">
                <div id="article-content">
                    <header id="article-header">
                        <picture>
                            <img src='${this.articleData.img}' alt='${this.articleData.imgAlt}'>
                        </picture>
                        <div class="article-header-meta">
                            <h1>${this.articleData.title}</h1>
                            <div id="article-meta">
                                <time datetime="${this.articleData.dataTime}">${this.articleData.time}</time>
                            </div>
                        </div>
                    </header>
                    <div class="article-body">
                        <p>${this.paragraphBlog}</p>
                    </div>
                </div>
            </div>
        `;
        return blogElement;
    }
}

export const articleText1 = new Blog(article1, 'Okey empezamos la siguiente semana con el texto');
export const articleText2 = new Blog(article2, 'Este sera sobre Vanilla Js');