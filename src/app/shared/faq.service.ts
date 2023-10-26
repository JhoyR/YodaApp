import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FaqItem, ApiResponse, Question, Answer } from './faq.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  url: string = environment.apiBaseUrl;
  faqItems: FaqItem[] = [];
  formQuestion: Question = new Question()
  constructor(private http: HttpClient) { }

  // Função para fazer a solicitação GET autenticada
  getFaqItems() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.get<ApiResponse>(`${this.url}/question`, { headers });
  }

  refreshList(){
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    this.http.get(`${this.url}/question`, { headers })
    .subscribe({
      next: res => {
        this.faqItems = res as FaqItem[]
      },
      error: err => {console.log(err)}
    })
  }

  postQuestion() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('1:1')
    });
    return this.http.post(`${this.url}/question`, this.formQuestion, { headers })
  }

  resetForm(form: NgForm){
    form.form.reset()
    this.formQuestion = new Question()
  }
}