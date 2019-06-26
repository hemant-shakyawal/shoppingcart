import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class CartserviceService {

  constructor(private http: HttpClient) { }

  public getProductlist(): Observable<any> {
    return this.http.get('./assets/mobiles.json');
}

}
