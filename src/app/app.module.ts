import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { FaqViewComponent } from './faq/faq-view/faq-view.component';
import { InsertQuestionComponent } from './faq/insert-question/insert-question.component';
import { InsertAnswerComponent } from './faq/insert-answer/insert-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    FaqViewComponent,
    InsertAnswerComponent,
    InsertQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }