import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MenuItemsService{

  constructor(private http: HttpClient) {
    var obj;
    this.getJSON().subscribe(data => obj=data);
  }

  public getJSON(): Observable<any> {
    return this.http.get("assets/data/menu-items.json")
      .map((res:any) => res.json())

  }
}
