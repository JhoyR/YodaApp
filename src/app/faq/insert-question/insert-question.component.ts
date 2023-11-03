import { Component, Inject } from '@angular/core';
import { FaqService } from 'src/app/shared/faq.service';
import { NgForm } from '@angular/forms';
import { FaqQuestion } from 'src/app/shared/faq.model';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insert-question',
  templateUrl: './insert-question.component.html',
  styles: [
  ]
})

export class InsertQuestionComponent {
  constructor(public service: FaqService, private toastr: ToastrService, public dialog: MatDialogRef<InsertQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    this.service.formQuestion.answerId = this.data.id;
    if (form.valid) {
      if (this.service.formQuestion.id == 0 || this.service.formQuestion.id == null)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }
  }

  insertRecord(form: NgForm) {
    this.service.postQuestion()
      .subscribe({
        next: res => {
          this.service.faqQuestions = res as FaqQuestion[]
          this.service.resetQuestion(form)
          this.toastr.success('Inserted Successfully', 'Registro de perguntas')
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.service.putQuestion()
      .subscribe({
        next: res => {
          this.service.faqQuestions = res as FaqQuestion[]
          this.service.resetQuestion(form)
          this.toastr.info('Updated Successfully', 'Registro de perguntas')
        },
        error: err => { console.log(err) }
      })
  }
}