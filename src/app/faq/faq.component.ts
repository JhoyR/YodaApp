import { Component, OnInit } from '@angular/core';
import { FaqService } from '../shared/faq.service';
import { FaqItem, ApiResponse } from '../shared/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: [],
})
export class FaqComponent implements OnInit {
  faqItems: FaqItem[] = [];

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.faqService.getFaqItems().subscribe(
      (response: ApiResponse) => {
        if (response.success) {
          this.faqItems = response.data; // Armazena os objetos FAQ na variável do componente
        } else {
          console.error('Erro na resposta da API');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}