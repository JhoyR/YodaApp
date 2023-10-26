import { Component } from '@angular/core';
import { FaqService } from 'src/app/shared/faq.service';
import { NgForm } from '@angular/forms';
import { FaqItem } from 'src/app/shared/faq.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insert-question',
  templateUrl: './insert-question.component.html',
  styles: [
  ]
})
export class InsertQuestionComponent {
  constructor(public service: FaqService, private toastr: ToastrService) {
  }

  onSubmit(form: NgForm) {
    this.service.postQuestion()
      .subscribe({
        next: res => {
          this.service.faqItems = res as FaqItem[]
          this.service.resetForm(form)
          this.toastr.success('Inserted Successfully', 'Registro de perguntas')
        },
        error: err => { console.log(err) }
      })
  }
}