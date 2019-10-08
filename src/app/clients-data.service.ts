import { Injectable } from '@angular/core';
import {Clients} from './models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsDataService {

  editMode:boolean = false;
  selectedClient:Clients = new Clients() ;
  companyName:string;
  addCompanyMode:boolean=false;


  clientsList= [ 
    {
   firstName: 'Mario',
   lastName: 'Aviles',
   state: 'California',
   city: 'Sacramento',
   id: 1,
   companies:[{
     id:1,
     name:"Mario"
   }]
 }];



  constructor() { }


  getClientData(){
    return this.clientsList;
  }

}
