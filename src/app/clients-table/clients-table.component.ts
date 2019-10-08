import { Component, OnInit } from '@angular/core';
import {Clients} from '../models/clients';
import { ClientsDataService } from '../clients-data.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {

  clientsList=[];
  companiesList=[];
  
  constructor(
    private clientsData : ClientsDataService
  ) 
  {
    this.clientsList = clientsData.getClientData();
   }

  ngOnInit() {

  }

  editClient(client:Clients){
      this.clientsData.editMode= true;
      this.clientsData.selectedClient= client;
  }

  
  createNewCompany(client:Clients){
      console.log(client);
  }

  

}
