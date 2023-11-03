import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FaqQuestion, FaqAnswer, ApiResponse, Question, Answer, ReturnAnswer } from './faq.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FaqService {
  url: string = environment.apiBaseUrl;
  faqQuestions: FaqQuestion[] = [];
  faqAnswers: FaqAnswer[] = [];
  formQuestion: Question = new Question()
  formAnswer: Answer = new Answer()
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) { }

 //#region QUESTION
  resetQuestion(form: NgForm) {
    form.form.reset()
    this.formQuestion = new Question()
  }

  getQuestionItems() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.get<ApiResponse>(`${this.url}/question`, { headers });
  }

  getQuestion() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    this.http.get(`${this.url}/question`, { headers })
      .subscribe({
        next: res => {
          console.log(res);
          this.faqQuestions = res as FaqQuestion[];
        },
        error: err => { console.log(err) }
      })
  }

  postQuestion() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.post(`${this.url}/question`, this.formQuestion, { headers })
  }

  //{id}
  putQuestion() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.put(`${this.url}/question/${this.formQuestion.id}`, this.formQuestion, { headers })
  }

  //{id}
  deleteQuestion(id: number) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.delete(`${this.url}/question/${id}`, { headers })
  }
//#endregion

//#region ANSWER
  resetAnswer(form: NgForm) {
    form.form.reset()
    this.formAnswer = new Answer()
  }

  getAnswerItems() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.get<ApiResponse>(`${this.url}/answer`, { headers });
  }

  getAnswer() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    this.http.get(`${this.url}/answer`, { headers })
      .subscribe({
        next: res => {
          console.log(res);
          this.faqAnswers = res as FaqAnswer[];
        },
        error: err => { console.log(err) }
      })
  }

  postAnswer(): Observable<ReturnAnswer> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.post<ReturnAnswer>(`${this.url}/answer`, this.formAnswer, { headers })
  }

  //{id}
  putAnswer() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.put(`${this.url}/answer/${this.formAnswer.id}`, this.formAnswer, { headers })
  }

  //{id}
  deleteAnswer(id: number) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.delete(`${this.url}/answer/${id}`, { headers })
  }
  //#endregion
}