import { Component, OnInit } from '@angular/core';
import { MatumiziService } from '../matumizi.service';

@Component({
  selector: 'app-matumizi',
  templateUrl: './matumizi.component.html',
  styleUrls: ['./matumizi.component.css']
})
export class MatumiziComponent implements OnInit {
  matumiziData:any;

  constructor(
    private matumiziService:MatumiziService,

  ) { }

  ngOnInit(): void {
    //ngOnIt is for any method that should load before the component is displayed 
    //Call service to get matumizi ,create a variable to store matumizi,loop through the variable(of type array) in html to deplay resource in table form.
    this.matumiziService.getMatumizi().subscribe(
      (res)=>{
        console.log(res);
        this.matumiziData=res;
      },
      (err)=>{
        console.log(err);
      }
      
    )

  }

}
