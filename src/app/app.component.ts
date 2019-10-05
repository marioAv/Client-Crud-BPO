import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestsService } from './requests.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  genToken:string = "";

  constructor( private http: HttpClient,
               private requestService: RequestsService
  ) {}


}
