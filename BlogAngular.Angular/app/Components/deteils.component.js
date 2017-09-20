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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var global_1 = require("../Shared/global");
var article_service_1 = require("../Service/article.service");
var DeteilsComponent = (function () {
    function DeteilsComponent(route, fb, _articleService) {
        this.route = route;
        this.fb = fb;
        this._articleService = _articleService;
        this.indLoading = false;
    }
    DeteilsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.id = params["id"];
        });
        this.articleFrm = this.fb.group({
            Id: [''],
            Headline: ['', forms_1.Validators.required],
            Text: ['', forms_1.Validators.required],
        });
        this.LoadArticle();
    };
    DeteilsComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    DeteilsComponent.prototype.LoadArticle = function () {
        var _this = this;
        this.indLoading = true;
        this._articleService.getById(global_1.Global.BASE_ARTICLE_ENDPOINT, this.id)
            .subscribe(function (article) {
            _this.article = article;
            _this.indLoading = false;
        }, function (error) { return _this.msg = error; });
    };
    return DeteilsComponent;
}());
DeteilsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/deteils.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, forms_1.FormBuilder, article_service_1.ArticleService])
], DeteilsComponent);
exports.DeteilsComponent = DeteilsComponent;
//# sourceMappingURL=deteils.component.js.map