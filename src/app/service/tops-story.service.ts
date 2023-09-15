import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopsStoryService {

  public list: Array<String> = []
  private token: string = "Ri5ptCWXhQnKG8MvZmFbIdDqRwrx37o1"
  private url: string = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${this.token}`

  constructor (public http: HttpClient) {
    
  }

  public listAll(){
    return this.http.get(this.url).subscribe

  }
}
