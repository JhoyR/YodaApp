import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Faq } from './faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  url: string = environment.apiBaseUrl + 'get'
  list: Faq[] = []
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list = res as Faq[]
        },
        error: err => { console.log(err) }
      })
  }
}