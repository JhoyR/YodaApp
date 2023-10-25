import { Component, OnInit } from '@angular/core';
import { FaqService } from '../shared/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styles: [
  ]
})
export class FaqComponent implements OnInit {

  constructor (public service: FaqService){ }

  ngOnInit() {
     this.service.refreshList();
  }
}