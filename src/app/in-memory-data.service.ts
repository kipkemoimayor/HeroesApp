import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{

  createDb(){

    const heroes=[
      {id:11,name:"Dr.Strange"},
      {id:12,name:"Mr.Nice"},
      {id:13,name:"Batman"},
      {id:14,name:"Wolverine"},
      {id:15,name:"Black Panther"},
      {id:16,name:"Thor"},
      {id:17,name:"Captain America"},
      {id:18,name:"Acqua Man"},
      {id:19,name:"Thanos"},
      {id:20,name:"Flash"},
      {id:21,name:"Spider Man"},
      {id:22,name:"Iron man"}

    ]
    return {heroes};
  }


  genId(heroes: Hero[]):number{
    return heroes.length>0 ? Math.max(...heroes.map(hero=>hero.id))+1:11;
  }


  constructor() { }
}
