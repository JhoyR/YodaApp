import { FaqAnswer, FaqQuestion, ReturnAnswer } from './../../shared/faq.model';
import { Component, Inject } from '@angular/core';
import { FaqService } from 'src/app/shared/faq.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insert-answer',
  templateUrl: './insert-answer.component.html',
  styles: [
  ]
})
export class InsertAnswerComponent {
  constructor(public service: FaqService, private toastr: ToastrService) {

  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      if (this.service.formAnswer.id == 0 || this.service.formAnswer.id == null)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }
  }

  insertRecord(form: NgForm) {
    this.service.postAnswer()
      .subscribe({
        next: (res: ReturnAnswer) => {
          this.service.formAnswer = res as FaqAnswer;
          this.service.resetAnswer(form);
        },
        error: err => { console.log(err) }
      })
  }

  updateRecord(form: NgForm) {
    this.service.putAnswer()
      .subscribe({
        next: res => {
          this.service.faqAnswers = res as FaqAnswer[]
          this.service.resetAnswer(form)
          this.toastr.info('Updated Successfully', 'Registro de perguntas')
        },
        error: err => { console.log(err) }
      })
  }
}