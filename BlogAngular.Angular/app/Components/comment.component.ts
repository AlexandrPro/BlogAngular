import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';

import { Global } from '../Shared/global';
import { Comment } from '../Models/comment';
import { CommentService } from '../Service/comment.service';


@Component({
    selector: 'comment-app',
    templateUrl: 'app/Components/comment.component.html'

})

export class CommentComponent implements OnInit {
    @Input() ArticleId: string;

    @ViewChild('modalComment') modalComment: ModalComponent;
    comments: Comment[];
    comment: Comment;
    msg: string;
    indLoading: boolean = false;
    commentFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _commentService: CommentService) { }

    ngOnInit(): void {

        this.commentFrm = this.fb.group({
            Id: [''],
            Text: ['', Validators.required],
        });

        this.LoadComments();
    }

    LoadComments(): void {
        this.indLoading = true;
        this._commentService.get(Global.BASE_COMMENT_ENDPOINT, this.ArticleId)
            .subscribe(comments => { this.comments = comments; this.indLoading = false; },
            error => this.msg = <any>error);
    }

    addComment() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Comment";
        this.modalBtnTitle = "Add";
        this.commentFrm.reset();
        this.modalComment.open();
    }

    editComment(id: string) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Comment";
        this.modalBtnTitle = "Update";
        this.comment = this.comments.filter(x => x.Id == id)[0];
        this.commentFrm.setValue(this.comment);
        this.modalComment.open();
    }

    deleteComment(id: string) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.comment = this.comments.filter(x => x.Id == id)[0];
        this.commentFrm.setValue(this.comment);
        this.modalComment.open();
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.commentFrm.enable() : this.commentFrm.disable();
    }

    onSubmit(formData: any) {
        this.msg = "";

        switch (this.dbops) {
            case DBOperation.create:
                this._commentService.post(Global.BASE_COMMENT_ENDPOINT, formData._value, this.ArticleId).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.LoadComments();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modalComment.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this._commentService.put(Global.BASE_COMMENT_ENDPOINT, formData._value.Id, formData._value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.LoadComments();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modalComment.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.delete:
                this._commentService.delete(Global.BASE_COMMENT_ENDPOINT, formData._value.Id).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.LoadComments();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modalComment.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
        }
    }
}