import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdatasService {

  constructor() { }

  getUserDatas(){
    return ['Fernando', 'Igor', 'Dantas','da silva','sauro'];
  }
}
