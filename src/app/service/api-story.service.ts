import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStoryService {

  public list: any[] = [];
  private token: string = "Ri5ptCWXhQnKG8MvZmFbIdDqRwrx37o1"
  private urlTopStory: string = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${this.token}`
  private urlArchives: string = `https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=${this.token}`

  constructor(public http: HttpClient) {

  }

  private getHeaders() {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });
    return { headers };
  }

  public getTopResults() {
    return this.http.get(this.urlTopStory);
  }

  public getArchivesResults(){
    return this.http.get(this.urlArchives, this.getHeaders());
  }
}
