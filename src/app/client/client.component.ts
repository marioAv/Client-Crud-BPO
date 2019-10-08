import { Component, OnInit } from '@angular/core';
import {Clients} from '../models/clients';
import { ClientsDataService } from '../clients-data.service';


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



  constructor(private clientsData : ClientsDataService) { }

  ngOnInit(){
  }


}
