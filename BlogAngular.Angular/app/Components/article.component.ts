import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';

import { Global } from '../Shared/global';
import { IArticle } from '../Models/article';
import { ArticleService } from '../Service/article.service';


@Component({

    templateUrl: 'app/Components/article.component.html'

})

export class ArticleComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    articles: IArticle[];
    article: IArticle;
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
            Text: [''],
        });

        this.LoadArticles();
    }

    LoadArticles(): void {
        this.indLoading = true;
        this._articleService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(articles => { this.articles = articles; this.indLoading = false; },
            error => this.msg = <any>error);
    }

    addArticle() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Article";
        this.modalBtnTitle = "Add";
        this.articleFrm.reset();
        this.modal.open();
    }

    editArticle(id: string) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Article";
        this.modalBtnTitle = "Update";
        this.article = this.articles.filter(x => x.Id == id)[0];
        this.articleFrm.setValue(this.article);
        this.modal.open();
    }

    deleteArticle(id: string) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.article = this.articles.filter(x => x.Id == id)[0];
        this.articleFrm.setValue(this.article);
        this.modal.open();
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.articleFrm.enable() : this.articleFrm.disable();
    }

    onSubmit(formData: any) {
        this.msg = "";

        switch (this.dbops) {
            case DBOperation.create:
                this._articleService.post(Global.BASE_USER_ENDPOINT, formData._value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.LoadArticles();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this._articleService.put(Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.LoadArticles();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.delete:
                this._articleService.delete(Global.BASE_USER_ENDPOINT, formData._value.Id).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.LoadArticles();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
        }
    }
}