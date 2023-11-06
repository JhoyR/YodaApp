import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { InsertQuestionComponent } from './faq/insert-question/insert-question.component';
import { InsertAnswerComponent } from './faq/insert-answer/insert-answer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    InsertAnswerComponent,
    InsertQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }