import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';

import { Global } from '../Shared/global';
import { Article } from '../Models/article';
import { ArticleService } from '../Service/article.service';



@Component({

    templateUrl: 'app/Components/article.component.html'

})

export class ArticleComponent implements OnInit {
    @ViewChild('modalArticle') modalArticle: ModalComponent;
    articles: Article[];
    article: Article;
    msg: string;
    indLoading: boolean = false;
    articleFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _articleService: ArticleService) { }

    ngOnInit(): void {

        this.articleFrm = this.fb.group({
            Id: [''],
            Headline: ['', Validators.required],
            Text: ['', Validators.required],
        });

        this.LoadArticles();
        this.addArticle();
    }

    LoadArticles(): void {
        this.indLoading = true;
        this._articleService.get(Global.BASE_ARTICLE_ENDPOINT)
            .subscribe(articles => { this.articles = articles; this.indLoading = false; },
            error => this.msg = <any>error);
    }

    addArticle() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Article";
        this.modalBtnTitle = "Add";
        this.articleFrm.reset();
        //this.modalArticle.open();
    }

    editArticle(id: string) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Article";
        this.modalBtnTitle = "Update";
        this.article = this.articles.filter(x => x.Id == id)[0];
        this.articleFrm.setValue(this.article);
        //this.modalArticle.open();
    }

    deleteArticle(id: string) {
        this._articleService.delete(Global.BASE_ARTICLE_ENDPOINT, id).subscribe(
            data => {
                if (data == 1) //Success
                {
                    this.msg = "Data successfully deleted.";
                    this.LoadArticles();
                }
                else {
                    this.msg = "There is some issue in saving records, please contact to system administrator!"
                }
            },
            error => {
                this.msg = error;
            }
        );
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.articleFrm.enable() : this.articleFrm.disable();
    }

    onSubmit(formData: any) {
        this.msg = "";

        switch (this.dbops) {
            case DBOperation.create:
                this._articleService.post(Global.BASE_ARTICLE_ENDPOINT, formData._value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.LoadArticles();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.addArticle();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this._articleService.put(Global.BASE_ARTICLE_ENDPOINT, formData._value.Id, formData._value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.LoadArticles();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.addArticle();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
        }
    }
}