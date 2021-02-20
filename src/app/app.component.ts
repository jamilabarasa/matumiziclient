import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatumiziService } from './matumizi.service';
import {FormGroup, FormControl} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'matumizi';

  

  
    // calling this method will reset the method 
       
    
   

  // Directives

  // <button (click)="methodName()"></button> --

  //TARGET - send data and save it

  //INPUT - data

  //PROCESS - 1. get data from the form. 2. make it json 3. Call the service and send it

  //createMatumizi(jsonData);

  //OUTPUT - data being saved
}
