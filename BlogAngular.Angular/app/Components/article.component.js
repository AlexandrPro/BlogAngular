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
var enum_1 = require("../Shared/enum");
var global_1 = require("../Shared/global");
var article_service_1 = require("../Service/article.service");
var ArticleComponent = (function () {
    function ArticleComponent(fb, _articleService) {
        this.fb = fb;
        this._articleService = _articleService;
        this.indLoading = false;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        this.articleFrm = this.fb.group({
            Id: [''],
            Headline: ['', forms_1.Validators.required],
            Text: ['', forms_1.Validators.required],
        });
        this.LoadArticles();
        this.addArticle();
    };
    ArticleComponent.prototype.LoadArticles = function () {
        var _this = this;
        this.indLoading = true;
        this._articleService.get(global_1.Global.BASE_ARTICLE_ENDPOINT)
            .subscribe(function (articles) { _this.articles = articles; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    ArticleComponent.prototype.addArticle = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Article";
        this.modalBtnTitle = "Add";
        this.articleFrm.reset();
        //this.modalArticle.open();
    };
    ArticleComponent.prototype.editArticle = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Article";
        this.modalBtnTitle = "Update";
        this.article = this.articles.filter(function (x) { return x.Id == id; })[0];
        this.articleFrm.setValue(this.article);
        //this.modalArticle.open();
    };
    ArticleComponent.prototype.deleteArticle = function (id) {
        var _this = this;
        this._articleService.delete(global_1.Global.BASE_ARTICLE_ENDPOINT, id).subscribe(function (data) {
            if (data == 1) {
                _this.msg = "Data successfully deleted.";
                _this.LoadArticles();
            }
            else {
                _this.msg = "There is some issue in saving records, please contact to system administrator!";
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    ArticleComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.articleFrm.enable() : this.articleFrm.disable();
    };
    ArticleComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._articleService.post(global_1.Global.BASE_ARTICLE_ENDPOINT, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        _this.LoadArticles();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.addArticle();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this._articleService.put(global_1.Global.BASE_ARTICLE_ENDPOINT, formData._value.Id, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        _this.LoadArticles();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.addArticle();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    return ArticleComponent;
}());
__decorate([
    core_1.ViewChild('modalArticle'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], ArticleComponent.prototype, "modalArticle", void 0);
ArticleComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/article.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, article_service_1.ArticleService])
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map