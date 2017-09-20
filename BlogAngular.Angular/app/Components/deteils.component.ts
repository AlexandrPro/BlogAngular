import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';

import { Global } from '../Shared/global';
import { Article } from '../Models/article';
import { ArticleService } from '../Service/article.service';

@Component({

    templateUrl: 'app/Components/deteils.component.html'

})


export class DeteilsComponent implements OnInit {
    @ViewChild('modalArticle') modalArticle: ModalComponent;

    id: string = "changemepls" //CHANGE IT 

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

        this.LoadArticle();
    }

    LoadArticle(): void {
        this.indLoading = true;
        this._articleService.getById(Global.BASE_ARTICLE_ENDPOINT, this.id)
            .subscribe(article => { this.article = article; this.indLoading = false; },
            error => this.msg = <any>error);
    }
}