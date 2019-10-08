import { Component, OnInit } from '@angular/core';
import {Clients} from '../models/clients';
// import{Companies} from '../models/companies'
import { ClientsDataService } from '../clients-data.service';
import {RequestsService} from '../requests.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-client-form',
  templateUrl: './add-client-form.component.html',
  styleUrls: ['./add-client-form.component.css']
})
export class AddClientFormComponent implements OnInit {

  statesList = [];
  citiesList = [];
  eachStateCities =[];
  stateHasValue:boolean = false;
  stateName:string;
  selectedClient;
  newCompany;
  companyName;

  clientsList= [ 
    {
   firstName: 'Mario',
   lastName: 'Aviles',
   state: 'California',
   city: 'Sacramento',
   id: 1,
   companies:[]
 }];

 
  

  constructor( 
      private clientsData : ClientsDataService,
      private requestService: RequestsService,
      private router: Router
    ) 
    {
      this.clientsList = clientsData.getClientData();

    }

  ngOnInit() {
    this.requestService.getToken();
    this.getJson();
  }

  getJson(){
    this.requestService.getJson(this.requestService.token)
      .subscribe((data: any) => {
        console.log(data, "data fired");
        this.statesList = data.states;
        this.citiesList = data.cities;
      },
      Error => {
        console.log(Error, "this fired");
        console.log(this.requestService.token);
      });
  }


  //CRUD METHODS

  onSelect(stateid) {
    this.eachStateCities = this.citiesList.filter((item) => item.state_id == stateid);
    this.stateHasValue = true;
  }

  createNewClient(form){
    this.clientsData.selectedClient.id = this.clientsList.length + 1;
    this.clientsData.clientsList.push(this.clientsData.selectedClient);
    this.convertStateName()
    this.clientsData.selectedClient = new Clients();
    form.reset();

  }

  confirmEdit(form){
    this.clientsData.editMode=false;
    this.convertStateName()
    this.clientsData.selectedClient= new Clients();
    form.reset();
  }

  convertStateName(){
    let state = this.statesList.filter(state => state.id == this.clientsData.selectedClient.state);
    if(state.length > 0){
      this.clientsData.selectedClient.state = state[0].name;
    }
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
