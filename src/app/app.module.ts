import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { FaqViewComponent } from './faq/faq-view/faq-view.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqViewComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
