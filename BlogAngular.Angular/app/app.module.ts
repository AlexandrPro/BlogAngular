import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { routing } from './app.routing';
import { ArticleService } from './Service/article.service'
import { ArticleComponent } from './components/article.component';
import { CommentService } from './Service/comment.service'
import { CommentComponent } from './components/comment.component'
import { DeteilsComponent } from './components/deteils.component';

const appRoutes: Routes = [
    { path: '', component: ArticleComponent },
    { path: 'deteils/:id', component: DeteilsComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        Ng2Bs3ModalModule
    ],
    declarations: [
        AppComponent,
        ArticleComponent,
        CommentComponent,
        DeteilsComponent
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ArticleService, CommentService],
    bootstrap: [AppComponent]
})

export class AppModule { }