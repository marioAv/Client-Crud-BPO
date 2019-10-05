import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable, of, from, throwError } from 'rxjs';
import { setCheckNoChangesMode } from '@angular/core/src/render3/state';
import { discardPeriodicTasks } from '@angular/core/testing';



@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  token:string = "";

  constructor(private http: HttpClient) { }

  setToken(token){
    localStorage.setItem('currentToken', token);
  }


  getToken(){
    this.token =localStorage.getItem('currentToken'); 
  }

  getJson(token){
    if(token == localStorage.getItem("currentToken")){
      return from(this.http.get('/assets/data.json'))
    }else{
     return throwError("Invalid Token Provided");
    }
  }

  login(user, password){
      let token = Md5.hashStr(user + password + new Date);
      this.setToken(token);
      return token
  }

}






