import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatumiziService } from '../matumizi.service';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-create-matumizi',
  templateUrl: './create-matumizi.component.html',
  styleUrls: ['./create-matumizi.component.css']
})
export class CreateMatumiziComponent implements OnInit {

  matumiziData;

  constructor(
    private matumiziService:MatumiziService,
    private formBuilder:FormBuilder
  ){
    this.matumiziData = this.formBuilder.group({
      itemName:['',[Validators.required]],
      count:['',[Validators.required]],
      unitPrice:['',[Validators.required]],
      reason:[''],
      type:['RENEWABLE',[Validators.required]],
      unit:['UNDEFINED',[Validators.required]]
    })
  }

  submitMatumizi(){
    this.matumiziService.createMatumizi(this.matumiziData.value).subscribe(
      (res)=>{
        console.log(res);
        this.matumiziData.reset(); 
      },
      (err)=>{
        console.log(err);
      }
    );
    
  }

  ngOnInit(): void {
  }

}
