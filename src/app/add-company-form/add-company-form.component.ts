import { Component, OnInit } from '@angular/core';
import { ClientsDataService } from '../clients-data.service';
import {Clients} from '../models/clients';
import { TouchSequence } from 'selenium-webdriver';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

// import {Companies} from '../models/companies'

@Component({
  selector: 'app-add-company-form',
  templateUrl: './add-company-form.component.html',
  styleUrls: ['./add-company-form.component.css']
})
export class AddCompanyFormComponent implements OnInit {
  clientsList=[];
  selectedClient;
  newCompany;
  companyName:string;

  constructor( private clientsData : ClientsDataService) { 
    this.clientsList = clientsData.getClientData();
  }

  ngOnInit() {
  }

  createNewCompany(){
    this.clientsData.addCompanyMode = false;
    this.clientsData.selectedClient.companies.push({
      name:this.clientsData.companyName,
      id:this.clientsData.selectedClient.companies.length + 1
    });
    this.clientsData.companyName ='';
  }
}
