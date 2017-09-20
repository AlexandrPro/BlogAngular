import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';

import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

import { Global } from '../Shared/global';
import { Article } from '../Models/article';
import { ArticleService } from '../Service/article.service';


@Component({

    templateUrl: 'app/Components/deteils.component.html'

})


export class DeteilsComponent implements OnInit, OnDestroy {
    //@ViewChild('modalArticle') modalArticle: ModalComponent;

    private id: string;
    private route$: Subscription;

    article: Article;
    msg: string;
    indLoading: boolean = false;
    articleFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private route: ActivatedRoute, private fb: FormBuilder, private _articleService: ArticleService) {
    }

    ngOnInit(): void {
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.id = params["id"]; 
            }
        );

        this.articleFrm = this.fb.group({
            Id: [''],
            Headline: ['', Validators.required],
            Text: ['', Validators.required],
        });

        this.LoadArticle();
    }

    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }

    LoadArticle(): void {
        this.indLoading = true;
        this._articleService.getById(Global.BASE_ARTICLE_ENDPOINT, this.id)
            .subscribe(article => {
                this.article = article;
                this.indLoading = false;
            },
            error => this.msg = <any>error);
    }
}