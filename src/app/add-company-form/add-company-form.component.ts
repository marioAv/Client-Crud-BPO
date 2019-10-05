import { Component, OnInit } from '@angular/core';
import { ClientsDataService } from '../clients-data.service';
import {Clients} from '../models/clients';

@Component({
  selector: 'app-add-company-form',
  templateUrl: './add-company-form.component.html',
  styleUrls: ['./add-company-form.component.css']
})
export class AddCompanyFormComponent implements OnInit {
  clientsList=[];
  selectedClient;

  constructor( private clientsData : ClientsDataService) { 
    this.clientsList = clientsData.getClientData();
  }

  ngOnInit() {
  }

  // createNewCompany(){
  //   this.clientsData.selectedClient.companies.push({ id:1, name:'mario'});
  //   console.log(this.clientsData.selectedClient.companies);
  // }


  confirmEdit(form){
    this.clientsData.editMode=false;
    this.clientsData.selectedClient= new Clients();
    form.reset();
  }

  deleteClient(form){
  if(confirm('Are you sure you want to do that?')){
    this.clientsData.clientsList  = this.clientsData.clientsList.filter( client => client != this.clientsData.selectedClient);
    this.clientsData.selectedClient = new Clients();
    this.clientsData.editMode = false;
    form.reset();
    }
  }
}
