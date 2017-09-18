import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Article } from './Models/article';
import { ArticleService } from './Services/article.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [ArticleService]
})

export class AppComponent implements OnInit {

    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    editedArticle: Article;
    articles: Array<Article>;
    isNewRecord: boolean;
    statusMessage: string;

    constructor(private serv: ArticleService) {
        this.articles = new Array<Article>();
    }

    ngOnInit() {
        this.loadArticles();
    }


    private loadArticles = () => {
        this.serv.getArticles().subscribe((resp: Response) => {
            this.articles = resp.json();
        });
    }

    addArticle() {
        this.editedArticle = new Article("", "", "");
        this.articles.push(this.editedArticle);
        this.isNewRecord = true;
    }


    editArticle(article: Article) {
        this.editedArticle = new Article(article.Id, article.Headline, article.Text);
    }

    loadTemplate(article: Article) {
        if (this.editedArticle && this.editedArticle.Id == article.Id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    saveArticle() {
        if (this.isNewRecord) {
            this.serv.createArticle(this.editedArticle).subscribe((resp: Response) => {
                this.statusMessage = 'Data successfully added',
                    this.loadArticles();
            });
            this.isNewRecord = false;
            this.editedArticle = null;
        } else {
            this.serv.updateArticle(this.editedArticle.Id, this.editedArticle).subscribe((resp: Response) => {
                this.statusMessage = 'Data successfully updated',
                    this.loadArticles();
            });
            this.editedArticle = null;
        }
    }

    cancel() {
        if (this.isNewRecord) {
            this.articles.pop();
            this.isNewRecord = false;
        }
        this.editedArticle = null;
    }

    deleteArticle(user: Article) {
        this.serv.deleteArticle(user.Id).subscribe((resp: Response) => {
            this.statusMessage = 'Data successfully deleted',
                this.loadArticles();
        });
    }
}