import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MatumiziService {

  constructor(
    private http:HttpClient
  ) { }

  // GET. POST. PUT. DELETE. PATCH.
  
  // POST

  // Observable: HttpRequest that can be observed

  // REQUEST AND EFFECT ON DB

  // GET -> select; POST -> Insert, PUT -> Update/Alter, DELETE -> Delete


  // add a matumizi

  // create a method is of type Observable

  // TYpescript -> Javascript with types

  // name:String;

  // to return an observable we have to use the HttpClient -> Get the data -> sends it to the server.........................

  createMatumizi(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/expenses",data);
  }
    // create a method of type observable

  getMatumizi():Observable<any>{
    return this.http.get("http://localhost:8080/api/expenses");
  }
    // The diffrence between POST and PUT is ,PUT method has id to uniquely update resource  
  
   //the same url that is used to GET matumizi is the same url thst id used to DELETE matumizi,example ://http://localhost:8080/api/expenses/{id}
   //
  
}