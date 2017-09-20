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
var comment_service_1 = require("../Service/comment.service");
var CommentComponent = (function () {
    function CommentComponent(fb, _commentService) {
        this.fb = fb;
        this._commentService = _commentService;
        this.indLoading = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.commentFrm = this.fb.group({
            Id: [''],
            Text: ['', forms_1.Validators.required],
        });
        this.LoadComments();
        this.addComment();
    };
    CommentComponent.prototype.LoadComments = function () {
        var _this = this;
        this.indLoading = true;
        this._commentService.get(global_1.Global.BASE_COMMENT_ENDPOINT, this.ArticleId)
            .subscribe(function (comments) { _this.comments = comments; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    CommentComponent.prototype.addComment = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Comment";
        this.modalBtnTitle = "Add";
        this.commentFrm.reset();
        //this.modalComment.open();
    };
    CommentComponent.prototype.editComment = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Comment";
        this.modalBtnTitle = "Update";
        this.comment = this.comments.filter(function (x) { return x.Id == id; })[0];
        this.commentFrm.setValue(this.comment);
        //this.modalComment.open();
    };
    CommentComponent.prototype.deleteComment = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.comment = this.comments.filter(function (x) { return x.Id == id; })[0];
        this.commentFrm.setValue(this.comment);
        //this.modalComment.open();
    };
    CommentComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.commentFrm.enable() : this.commentFrm.disable();
    };
    CommentComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._commentService.post(global_1.Global.BASE_COMMENT_ENDPOINT, formData._value, this.ArticleId).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        _this.LoadComments();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.addComment();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this._commentService.put(global_1.Global.BASE_COMMENT_ENDPOINT, formData._value.Id, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        _this.LoadComments();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.addComment();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                this._commentService.delete(global_1.Global.BASE_COMMENT_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.LoadComments();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.addComment();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    return CommentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CommentComponent.prototype, "ArticleId", void 0);
__decorate([
    core_1.ViewChild('modalComment'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], CommentComponent.prototype, "modalComment", void 0);
CommentComponent = __decorate([
    core_1.Component({
        selector: 'comment-app',
        templateUrl: 'app/Components/comment.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, comment_service_1.CommentService])
], CommentComponent);
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map