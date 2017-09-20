"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
//import { routing } from './app.routing';
var article_service_1 = require("./Service/article.service");
var article_component_1 = require("./components/article.component");
var comment_service_1 = require("./Service/comment.service");
var comment_component_1 = require("./components/comment.component");
var deteils_component_1 = require("./components/deteils.component");
var not_found_component_1 = require("./components/not-found.component");
var index_component_1 = require("./components/index.component");
var appRoutes = [
    { path: '', component: index_component_1.IndexComponent },
    { path: 'article/', component: article_component_1.ArticleComponent },
    { path: 'deteils/:id', component: deteils_component_1.DeteilsComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes),
            ng2_bs3_modal_1.Ng2Bs3ModalModule
        ],
        declarations: [
            app_component_1.AppComponent,
            article_component_1.ArticleComponent,
            comment_component_1.CommentComponent,
            deteils_component_1.DeteilsComponent,
            not_found_component_1.NotFoundComponent,
            index_component_1.IndexComponent
        ],
        //providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, article_service_1.ArticleService, comment_service_1.CommentService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map