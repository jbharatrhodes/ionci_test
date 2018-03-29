import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsCategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API:string = "http://parbatnepal.com/homenew";
@Injectable()
export class NewsCategoryProvider {

  constructor(public http: Http) {
    console.log('Hello NewsCategoryProvider Provider');
  }
  getMusic(){
   return this.http.get(API)
    .map(response => response.json());
  }
}
