import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { QuotDisplayComponent } from './quot-display/quot-display.component';
import { VoteDirective } from './vote.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    QuotDisplayComponent,
    VoteDirective
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
