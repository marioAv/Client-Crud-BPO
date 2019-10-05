import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../requests.service';
import {Clients} from '../models/clients';
import {Router} from '@angular/router'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  statesList = [];
  citiesList = [];
  eachStateCities =[];
  editMode:boolean = false;
  selectedClient:Clients = new Clients();



  constructor() { }

  ngOnInit(){
  }


}
