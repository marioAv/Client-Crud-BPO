import { Injectable } from '@angular/core';
import {Clients} from './models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsDataService {

  editMode:boolean = false;
  selectedClient:Clients = new Clients();

  clientsList= [ 
    {
   firstName: 'Mario',
   lastName: 'Aviles',
   state: 'California',
   city: 'Sacramento',
   id: 1
 }];



  constructor() { }


  getClientData(){
    return this.clientsList;
  }

}
