import { Component } from '@angular/core';
import { FaqComponent } from '../faq.component';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styles: [
  ]
})
export class FaqViewComponent {

  constructor(public service : FaqComponent) {
    
  }
}
