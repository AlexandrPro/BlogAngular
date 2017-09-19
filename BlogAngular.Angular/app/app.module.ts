import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
//import { HomeComponent } from './components/home.component';
import { ArticleService } from './Service/article.service'
import { ArticleComponent } from './components/article.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent/*, HomeComponent*/, ArticleComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ArticleService],
    bootstrap: [AppComponent]
})

export class AppModule { }