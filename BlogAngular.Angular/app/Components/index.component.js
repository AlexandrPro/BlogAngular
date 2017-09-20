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
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var global_1 = require("../Shared/global");
var article_service_1 = require("../Service/article.service");
var IndexComponent = (function () {
    function IndexComponent(fb, _articleService) {
        this.fb = fb;
        this._articleService = _articleService;
        this.indLoading = false;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.articleFrm = this.fb.group({
            Id: [''],
            Headline: ['', forms_1.Validators.required],
            Text: ['', forms_1.Validators.required],
        });
        this.LoadArticles();
    };
    IndexComponent.prototype.LoadArticles = function () {
        var _this = this;
        this.indLoading = true;
        this._articleService.get(global_1.Global.BASE_ARTICLE_ENDPOINT)
            .subscribe(function (articles) { _this.articles = articles; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    return IndexComponent;
}());
__decorate([
    core_1.ViewChild('modalArticle'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], IndexComponent.prototype, "modalArticle", void 0);
IndexComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/index.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, article_service_1.ArticleService])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map