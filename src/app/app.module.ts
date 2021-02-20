import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatumiziComponent } from './matumizi/matumizi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatumizinavbarComponent } from './matumizinavbar/matumizinavbar.component';
import { CreateMatumiziComponent } from './create-matumizi/create-matumizi.component';

@NgModule({
  declarations: [
    AppComponent,
    MatumiziComponent,
    MatumizinavbarComponent,
    CreateMatumiziComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
