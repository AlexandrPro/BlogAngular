"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
require("rxjs/Rx");
var article_1 = require("./Models/article");
var article_service_1 = require("./Services/article.service");
var AppComponent = (function () {
    function AppComponent(serv) {
        this.serv = serv;
        this.articles = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadArticles();
    };
    AppComponent.prototype.loadArticles = function () {
        var _this = this;
        this.serv.getArticles().subscribe(function (resp) {
            _this.articles = resp.json();
        });
    };
    AppComponent.prototype.addArticle = function () {
        this.editedArticle = new article_1.Article("", "", "");
        this.articles.push(this.editedArticle);
        this.isNewRecord = true;
    };
    AppComponent.prototype.editArticle = function (article) {
        this.editedArticle = new article_1.Article(article.Id, article.Headline, article.Text);
    };
    AppComponent.prototype.loadTemplate = function (article) {
        if (this.editedArticle && this.editedArticle.Id == article.Id) {
            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    };
    AppComponent.prototype.saveArticle = function () {
        var _this = this;
        if (this.isNewRecord) {
            this.serv.createArticle(this.editedArticle).subscribe(function (resp) {
                _this.statusMessage = 'Data successfully added',
                    _this.loadArticles();
            });
            this.isNewRecord = false;
            this.editedArticle = null;
        }
        else {
            this.serv.updateArticle(this.editedArticle.Id, this.editedArticle).subscribe(function (resp) {
                _this.statusMessage = 'Data successfully updated',
                    _this.loadArticles();
            });
            this.editedArticle = null;
        }
    };
    AppComponent.prototype.cancel = function () {
        if (this.isNewRecord) {
            this.articles.pop();
            this.isNewRecord = false;
        }
        this.editedArticle = null;
    };
    AppComponent.prototype.deleteArticle = function (user) {
        var _this = this;
        this.serv.deleteArticle(user.Id).subscribe(function (resp) {
            _this.statusMessage = 'Data successfully deleted',
                _this.loadArticles();
        });
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('readOnlyTemplate'),
    __metadata("design:type", core_1.TemplateRef)
], AppComponent.prototype, "readOnlyTemplate", void 0);
__decorate([
    core_1.ViewChild('editTemplate'),
    __metadata("design:type", core_1.TemplateRef)
], AppComponent.prototype, "editTemplate", void 0);
AppComponent = __decorate([
    core_2.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        providers: [article_service_1.ArticleService]
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map