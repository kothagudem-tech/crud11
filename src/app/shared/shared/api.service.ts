import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

 	        
   
  //1.Create -- the data ==> Create--POST
  postEmployee(data:any){
    this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  //2.Read the Data ==>Read  --   GET
   getEmployee(){
    this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res
    }))
   }
   
   //3.Update the data ==>  Update -- PUT or PATCH
   updateEmployee(data:any, id:number ){
    this.http.put<any>("http://localhost:3000/posts"+id,data)
    .pipe(map((res:any)=>{
       return res
    }))
   }

   //4.Delete the data ==> delete -- DELETE
   deleteEmployee(id:number){
    this.http.delete<any>("http://localhost:3000/posts"+id)
   }


}
