import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../requests.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string = "";


  constructor(
    private requestService: RequestsService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  login(user, password){
    

    if(user == "admin" && user == "admin"){
      this.requestService.login(user, password);
      this.router.navigate(['/clients/add/client']);
    }
    else{
      this.errorMessage = "Username or Password are Incorrect"
    }
  }

  getJson(){
    this.requestService.getJson( this.requestService.token)
      .subscribe((data: any) => {
        console.log(data, "data fired");
      },
      Error => {
        console.log(Error, "this fired");
      });
  }

  getToken(){
    this.requestService.token = localStorage.getItem('currentToken');
    console.log(this.requestService.token);
  }
}
