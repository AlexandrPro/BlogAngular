import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { Article } from '../Models/article';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {

    private url = "http://localhost:55000/api/article";
    constructor(private http: Http) { }

    getArticles = () => {
        var res = this.http.get(this.url);
        return res;
    }

    createArticle(obj: Article) {
        const body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post(this.url, body, { headers: headers });
    }
    updateArticle(id: string, obj: Article) {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        const body = JSON.stringify(obj);
        return this.http.put(this.url + '/' + id, body, { headers: headers });
    }
    deleteArticle(id: string) {
        return this.http.delete(this.url + '/' + id);
    }
}