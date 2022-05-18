import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {

  constructor() { 
    console.log("i am in base config service");
  }
}
