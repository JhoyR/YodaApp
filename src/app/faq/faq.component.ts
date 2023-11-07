import { Component, OnInit } from '@angular/core';
import { ApiResponse, FaqQuestion, FaqAnswer, Question, Answer } from '../shared/faq.model';
import { FaqService } from '../shared/faq.service';
import { ToastrService } from 'ngx-toastr';
import { InsertAnswerComponent } from './insert-answer/insert-answer.component';
import { MatDialog } from "@angular/material/dialog";
import { InsertQuestionComponent } from './insert-question/insert-question.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: [],
})

export class FaqComponent implements OnInit {
  faqAnswers: FaqAnswer[] = [];
  faqQuestions: FaqQuestion[] = [];
  
  constructor(private service: FaqService, private toastr: ToastrService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAnswerItems()
      .subscribe(
        (response: ApiResponse) => {
          if (response.success) {
            console.log(response.data);
            this.faqAnswers = response.data;
          } else {
            console.error('Erro na resposta da API');
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  limitResponse(desc: string) {
    const limit = 100;
    if (desc.length > limit) {
      return desc.slice(0, limit) + '...';
    }
    return desc;
  }

  populateQuestion(selectedRecord: Question) {
    this.service.formQuestion = Object.assign({}, selectedRecord);
  }

  populateAnswer(selectedRecord: Answer) {
    this.service.formAnswer = Object.assign({}, selectedRecord)
  }

  onDeleteQuestion(id: number) {
    if (confirm('Tem certeza que deseja excluir esta pergunta?'))
      this.service.deleteQuestion(id)
        .subscribe({
          next: (res) => {
            this.service.faqQuestions = res as FaqQuestion[]
            this.toastr.error('Deleted Successfully', 'Registro de perguntas')
          },
          error: err => { console.log(err) }
        })
  }

  onDeleteAnswer(id: number) {
    if (confirm('Tem certeza que deseja excluir esta resposta?'))
      this.service.deleteAnswer(id)
        .subscribe({
          next: (res) => {
            this.service.faqQuestions = res as FaqQuestion[]
            this.toastr.error('Deleted Successfully', 'Registro de perguntas')
          },
          error: err => { console.log(err) }
        })
  }

  openAnswerDialog(answer?: Answer) {
    this.dialog.open(InsertAnswerComponent, {
      width: "80%",
      height: "80%",
      data: { answer } // Passa o ID da pergunta como dados para o modal
    });
    if(answer != null){
      this.populateAnswer(answer);
     }
  }

  openQuestionDialog(answer: Answer, question?: Question) {
    this.dialog.open(InsertQuestionComponent, {
      width: "80%",
      height: "80%",
      data: { answer, question }
    });
    if(question != null){
     this.populateQuestion(question);
    }
  }
}